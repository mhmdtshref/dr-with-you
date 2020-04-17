import { Router } from 'express';
import { QuestionController } from '../controllers';

const router = Router();

router.get('/', QuestionController.index);

export default router;