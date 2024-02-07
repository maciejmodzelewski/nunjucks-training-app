import express, {Express, Request, Response} from 'express';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
import path from 'path';

const index = require('./controllers/indexController');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.set("views", [
  path.join(__dirname, "/views")
]);

const nunjuckLoader = new nunjucks.FileSystemLoader(app.get('views'));

const nunjuckLoaderOptions = {
  watch: process.env.NUNJUCKS_LOADER_WATCH === 'true',
  noCache: process.env.NUNJUCKS_LOADER_NO_CACHE === 'true'
}

const nunjucksEnvironment = new nunjucks.Environment(nunjuckLoader, nunjuckLoaderOptions);

nunjucksEnvironment.express(app);
app.set("view engine", "njk");

app.get('/', index);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
