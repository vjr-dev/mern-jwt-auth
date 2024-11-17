import { NextFunction, Request, Response } from "express";

type AsyncController = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<any>;

const catchErrors =
  (controllers: AsyncController): AsyncController =>
  async (req, res, next) => {
    try {
      await controllers(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default catchErrors;
