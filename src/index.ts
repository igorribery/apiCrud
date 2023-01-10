import 'express-async-errors';
import { errorMiddleware } from './middlewares/error';
import { AppDataSource } from './data-source';
import routes from './routes';
import cors from 'cors'
import express from 'express';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());
    app.use(cors())
    app.use(routes);

    app.use(errorMiddleware)
    return app.listen(process.env.PORT);
})