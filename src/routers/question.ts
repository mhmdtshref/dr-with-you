import { Router } from 'express';
import { QuestionController } from '../controllers';

const router = Router();

router.put('/:id', QuestionController.update);
router.delete('/:id', QuestionController.del);
router.post('/', QuestionController.create); 
router.get('/', QuestionController.index);

export default router;