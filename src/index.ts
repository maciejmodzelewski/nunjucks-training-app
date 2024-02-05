import express, {Express, Request, Response} from 'express';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("views", [
  path.join(__dirname, "/views")
]);

const nunjuckLoader = new nunjucks.FileSystemLoader('views');

const nunjuckLoaderOptions = {
  watch: process.env.NUNJUCKS_LOADER_WATCH === 'true',
  noCache: process.env.NUNJUCKS_LOADER_NO_CACHE === 'true',
  express: app
}

const nunjucksEnvironment = new nunjucks.Environment(nunjuckLoader, nunjuckLoaderOptions);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
