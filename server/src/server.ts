import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from './config/config';
import routes from './routes';
const app: express.Application = express();

app.use(cors(config.server.corsOptions));
app.use(express.json());
app.use(bodyParser.json());
routes.get('/', (req: Request, res: Response): void => {
  res.json('Instalog API');
});
app.use('/api', routes);

app.listen(config.server.PORT, function () {
  console.log(`Server is running on port: ${config.server.PORT}`);
});

export default app;
