import { Router } from "express";
import { PostController } from "./controllers/PostController";
import { GetController } from "./controllers/GetController";
import { DeleteController } from "./controllers/DeleteController";
import { UpdateController } from "./controllers/UpdatedController";

const routes = Router()

routes.post('/user', new PostController().create)
routes.get('/user', new GetController().get)
routes.get('/user/:id', new GetController().getId)
routes.delete('/user/:id', new DeleteController().del)
routes.put('/user/:id', new UpdateController().update)

export default routes;
