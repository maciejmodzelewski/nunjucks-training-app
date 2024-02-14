import {Request, Response} from 'express';

export const indexController = (req: Request, res: Response) => {
  res.render('mainContent/home', {
    headerText: 'Hello World!',
    titleText: 'Home page',
  });
};
