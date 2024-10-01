import express from "express";
import bodyParser from "body-parser";
import { promises as fs } from 'fs';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let data = await fs.readFile("./listagem.json", 'utf8');

let produtos = JSON.parse(data)

console.log(produtos)

app.get("/", (req,res) => {
    
    res.render("cadastro.ejs",{produtos:produtos})
})


app.post("/listagem", async (req,res) =>{
    console.log(req.body)
    let novoProduto = {
        nome:req.body.nome,
        descricao: req.body.descricao,
        valor:parseFloat(req.body.valor).toFixed(2),
        disponivel:req.body.disponivel
    }

    produtos.push(novoProduto);
    produtos.sort((a, b) => parseFloat(a.valor).toFixed(2) - parseFloat(b.valor).toFixed(2))
    console.log(produtos)
    await fs.writeFile("./listagem.json",JSON.stringify(produtos))
    res.render("listagem.ejs",{produtos:produtos})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
