import Router from "express";

import apiHandler from "./api/apiHandler.js"
const apiRouter = new Router();


//* add newOne
apiRouter.post("/api", apiHandler.addOne)
//* getAll
apiRouter.get("/api", apiHandler.getAll)
//* getOne
apiRouter.get("/api/:id", apiHandler.addOne)
//* DELETE ONE
apiRouter.delete("/api/:id", apiHandler.delete)

export default apiRouter