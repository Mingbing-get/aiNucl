import Router from '@koa/router';

import { jwtVerify } from '../../middleware/jwt';
import { superAdminVerify } from '../../middleware/superAdminVerify';

const roleRouter = new Router();
roleRouter.use(jwtVerify, superAdminVerify);

export default roleRouter;
