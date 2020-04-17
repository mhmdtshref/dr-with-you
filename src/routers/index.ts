import router, { Request, Response } from 'express';

import QuestionRouter from './question';

const apiRouter = router();

apiRouter.use('/questions', QuestionRouter);

apiRouter.all('*', (request: Request, response: Response) => {
    return response.status(404).json({
        success: false,
        error: 'Page Not Found',
    });
});

export default apiRouter;