import {Request, Response} from 'express';

export const testController = (req: Request, res: Response) => {
  res.render('mainContent/test', {
    test: req.query['userName'],
    headerText: 'Hello World!',
    headerHref: '/',
  });
};
