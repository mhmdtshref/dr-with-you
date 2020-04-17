import { Request, Response } from "express";
import { QuestionService } from '../services';
import { Question } from "../models";

export const index = (request: Request, response: Response) => {
    QuestionService.getQuestions().then((questions: Question[]) => {
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
