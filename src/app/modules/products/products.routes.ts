import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'
import { ProductValidation } from './products.validation'
import { ProductController } from './products.controller'
import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER),
  RequestValidation.ValidateRequest(ProductValidation.updateZodSchema),
  ProductController.addProduct,
)
router.get(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  ProductController.getSingleProduct,
)
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  RequestValidation.ValidateRequest(ProductValidation.updateZodSchema),
  ProductController.updateProduct,
)
router.get('/', auth(ENUM_USER_ROLE.USER), ProductController.getAllProducts)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.USER),
  ProductController.deleteProduct,
)

export const ProductRoutes = {
  router,
}
