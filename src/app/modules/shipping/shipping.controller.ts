import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { ShippingService } from './shipping.service'

const createShipping = catchAsync(async (req: Request, res: Response) => {
  const result = await ShippingService.createShipping(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Shipping added successfully',
    data: result,
  })
})

export const ShippingController = {
  createShipping,
}
