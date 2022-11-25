const express = require("express");
const userRouter = require ("./user");
const app = express();

app.get("/", function (request, response) {
  const kelas = {
    id: 1,
    nama: "Heru",
  };
  response.json(kelas);

});
app.get("/about", function (request, response) {
  response.redirect("/users");
});

app.get("/product", function (request, response) {
  const product = {
    id: 1,
    NamaProduct: "hp",
  };
  response.json(product);

});

app.use(userRouter)

app.listen(5000, function () {
  console.log("server is okay");
});
