import { Router } from "express";

const routes = Router();

const db = [];
let id = 0;

routes.post("/novo-produto", (req, resp) => {
  const prato = {
    name: req.body.name,
    tamanho: req.body.tamanho,
    valor: req.body.valor,
    descricao: req.body.descricao,
    id: id,
  };

  db.push(prato);
  id = id + 1;

  return resp.status(201).json("Dados cadastrados com sucesso");
});

routes.get("/ver-produtos/:id_produto", (req, resp) => {
  const id_produto = req.params.id_produto;
  console.log(id_produto);
  const posicao = db.findIndex((produto) => produto.id == Number(id_produto));
  if (posicao < 0) {
    return resp.status(404).json({
      error: "produto não encontrado",
    });
  }
  const produto = db[posicao];
  return resp.status(200).json(produto);
});

routes.put("/atualizar-produto/:id_produto", (req, resp) => {
  const prod_id = req.params.id_produto;
  const posicao = db.findIndex((produto) => {
    return produto.id == Number(prod_id);
  });
  console.log(posicao);
  const produto = db[posicao];

  return resp.status(200).json(produto);
});

routes.get("/ver-produtos", (req, resp) => {
  return resp.status(200).json(db);
});

const db_usuarios = [];
let id_user = 0;

routes.post("/new-user", (req, resp) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    cpf: req.body.cpf,
    id: id_user,
  };

  db_usuarios.push(user);
  id_user = id_user + 1;
  return resp.status(201).json("cadastro concluido.");
});

routes.get("/ver-users", (req, resp) => {
  return resp.status(200).json(db_usuarios);
});

const db_bebidas = [];
let id_bebidas = 0;

routes.post("/cad-bebidas", (req, resp) => {
  const bebidas = {
    name: req.body.name,
    ano: req.body.ano,
    quantidade: req.body.quantidade,
    id: id_bebidas,
  };
  db_bebidas.push(bebidas);
  id_bebidas = id_bebidas + 1;
  return resp.status(201).json("cadastro concluido.");
});

routes.get("/cad-bebidas", (req, resp) => {
  return resp.status(200).json(db_bebidas);
});

export default routes;
