import express from 'express'
import { RequestValidation } from '../../middlewares/validateRequest'

import auth from '../../middlewares/auth'
import { ENUM_USER_ROLE } from '../../../enums/user'

import { ShippingController } from './shipping.controller'
import { ShippingValidation } from './shipping.validation'

const router = express.Router()

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER),
  RequestValidation.ValidateRequest(ShippingValidation.createZodSchema),
  ShippingController.createShipping,
)

export const ShippingRoutes = {
  router,
}
