const express = require("express");
const router = express.Router();

const productos = [
  {
    id: 1,
    id_usuario: 2,
    id_categoria: 2,
    nombre: "Remera Adidas",
    descripcion: "Remera de algodon marca adidas.",
    stock: 10,
    precio: 1800,
    oferta: 0,
    ts_create: "2020-10-21 21:09:43",
    ts_update: "2020-10-21 21:09:43",
  },
  {
    id: 2,
    id_usuario: 1,
    id_categoria: 1,
    nombre: "Pantalon NIKE",
    descripcion: "Pantalon de invierno nike",
    stock: 50,
    precio: 2500,
    oferta: 0,
    ts_create: "2020-10-21 21:09:43",
    ts_update: "2020-10-21 21:09:43",
  },
];

router.get("/", (req, res) => {
  res.render("productos",{productos});
});

module.exports = router;
