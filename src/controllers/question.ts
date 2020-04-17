import { Request, Response } from "express";
import { QuestionService } from '../services';
import { Question } from "../models";
import lodash from 'lodash';

export const index = (request: Request, response: Response) => {
    return QuestionService.getQuestions().then((questions: Question[]) => {
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
    return QuestionService.createQuestion(questionData as Question).then((question: Question) => {
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

export const update = (request: Request, response: Response) => {
    const questionData = lodash.pick(request.body, ['text', 'hint', 'options']);
    const questionId = Number(request.params.id);
    return QuestionService.updateQuestion(questionId, questionData as Question).then(() => {
        response.status(201).json({
            succes: true,
        });
    }).catch((error: Error) => {
        response.status(400).json({
            success: false,
            error: error.message,
        });
    });
}

export const del = (request: Request, response: Response) => {
    const questionId = Number(request.params.id);
    return QuestionService.deleteQuestion(questionId).then(() => {
        response.status(200).json({
            success: true,
        });
    }).catch((error: Error) => {
        response.status(400).json({
            success: false,
            error: error.message,
        });
    });
}