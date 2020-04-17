import { Request, Response } from "express";
import { QuestionService } from '../services';

export const index = (request: Request, response: Response) => {
    QuestionService.getQuestions().then((questions) => {
        response.status(200).json({
            success: true,
            data: {
                questions,
            },
        });
    }).catch((error: Error) => {
        response.status(400).json({
            success: false,
            error: error.message,
        });
    });
}
