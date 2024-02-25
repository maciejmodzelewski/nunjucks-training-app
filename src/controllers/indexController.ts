import {Request, Response} from 'express';

export const indexController = (req: Request, res: Response) => {
  const weekDay = new Date().toLocaleString('en-us', {weekday: 'long'});
  const menu: Map<string, string> = new Map();
  menu.set('Home', '/');
  menu.set('Texts', '/texts');
  menu.set('Gallery', '/gallery');
  menu.set('About', '/about');

  res.render('mainContent/home', {
    headerText: 'Hello World!',
    headerHref: '/',
    weekDay: weekDay,
    menu: menu,
  });
};
