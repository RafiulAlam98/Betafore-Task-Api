import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'

import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'
import { PaymentValidation } from './payment.validation'
import { PaymentController } from './payment.controller'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER),
  RequestValidation.ValidateRequest(PaymentValidation.createZodSchema),
  PaymentController.createPayment,
)

export const PaymentRoutes = {
  router,
}
