import { Router } from 'express';
import csurf from 'csurf';

import Authorize from '@/middlewares/authorize';
import authenticate from '@/middlewares/authenticate';
import { SubtodoController } from '@/controllers';

const SubtodoRouter: Router = Router();

SubtodoRouter.use(
  csurf({
    value: (req) => req.cookies['XSRF-TOKEN'],
  }),
);
SubtodoRouter.use(authenticate);
SubtodoRouter.get('/', SubtodoController.getAllSubtodos);
SubtodoRouter.post('/', SubtodoController.createSubtodo);
SubtodoRouter.put(
  '/:subtodoId',
  Authorize.authorizeSubtodo,
  SubtodoController.updateSubtodo,
);
SubtodoRouter.patch(
  '/complete/:todoId',
  Authorize.authorizeSubtodo,
  SubtodoController.completeSubtodo,
);
SubtodoRouter.patch(
  '/uncomplete/:todoId',
  Authorize.authorizeSubtodo,
  SubtodoController.uncompleteSubtodo,
);
SubtodoRouter.delete(
  '/:subtodoId',
  Authorize.authorizeSubtodo,
  SubtodoController.deleteSubtodo,
);

export default SubtodoRouter;
