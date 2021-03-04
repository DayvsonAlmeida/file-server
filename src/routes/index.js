const { Router } = require("express");

const filesRouter = require("./files");

const mainRouter = Router();

mainRouter.use("/files", filesRouter);

mainRouter.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = mainRouter;
