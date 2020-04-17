import { Request, Response } from "express";
import { QuestionService } from '../services';
import { Question } from "../models";
import lodash from 'lodash';

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

export const create = (request: Request, response: Response) => {
    const questionData = lodash.pick(request.body, ['text', 'hint', 'options']);
    QuestionService.createQuestion(questionData as Question).then((question: Question) => {
        response.status(201).json({
            success: true,
            data: {
                question,
            }
        });
    }).catch((error: Error) => {
        response.status(400).json({
            success: false,
            data: {
                error: error.message,
            },
        });
    })
}
