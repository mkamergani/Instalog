import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from './config/config';

const app: express.Application = express();

app.use(cors(config.server.corsOptions));
app.use(bodyParser.json());

app.get('/api', function (req: Request, res: Response) {
  res.send('Instalog API');
});

app.listen(config.server.PORT, function () {
  console.log(`Server is running on port: ${config.server.PORT}`);
});

export default app;
