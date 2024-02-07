import { Request, Response } from "express";

module.exports = (req: Request, res: Response) => {
    res.render("index", {headerText: "This is index page."});
};