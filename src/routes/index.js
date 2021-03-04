const { Router } = require("express");

const filesRouter = require("./files");

const mainRouter = Router();

mainRouter.use("/files", filesRouter);

module.exports = mainRouter;
