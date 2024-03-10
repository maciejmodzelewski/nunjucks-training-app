import {Request, Response} from 'express';

export const indexController = (req: Request, res: Response) => {
  const sanitizeUrl = require('@braintree/sanitize-url').sanitizeUrl;
  const weekDay = new Date().toLocaleString('en-gb', {weekday: 'long'});
  const menu: Map<string, string> = new Map();
  menu.set('Home', '/');
  menu.set('Texts', '/texts');
  menu.set('Gallery', '/gallery');
  menu.set('About', '/about');

  res.render('mainContent/home', {
    headerText: 'Hello World!',
    headerHref: '/',
    weekDay: weekDay,
    weekDayUrl: 'https://en.wikipedia.org/wiki/:weekDay',
    weekDayUrlParams: {weekDay: weekDay},
    menu: menu,
    target: '_parent',
  });
};
