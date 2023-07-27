import express from "express"
const router = express.Router();

import userController from '../../controller/user.controller';
import userMiddleware from "../../middlewares/user.middleware";

router.get('/', userMiddleware.getUserValidate, userController.getUsers);
router.post('/', userController.createUser);
router.delete('/:userId', userController.deteleUserById);
router.put('/:userId', userController.updateUserById);
router.patch('/:userId', userController.updateFieldUserById);



module.exports = router