import { Request, Response } from "express";

function getTasks(request: Request, response: Response) {
    response.json([]);
}

export default {
    getTasks,
}