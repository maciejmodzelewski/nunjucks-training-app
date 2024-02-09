import { Request, Response } from "express";

export const indexController = (req: Request, res: Response) => {
    res.render("main_content/home", { headerText: "Hello World!", titleText: "Home page" });
};
