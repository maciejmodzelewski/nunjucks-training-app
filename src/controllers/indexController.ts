import { Request, Response } from "express";

export const indexController = (req: Request, res: Response) => {
    res.render("index", {headerText: "Hello World!", titleText: "Home page"});
};
