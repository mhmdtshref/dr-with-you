import { Router } from 'express';
import { QuestionController } from '../controllers';

const router = Router();

router.post('/', QuestionController.create); 
router.get('/', QuestionController.index);

export default router;