import { Request, Response } from 'express'
import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { ProductService } from './products.service'
import { IProducts } from './products.interface'

const addProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.addProduct(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'product added successfully',
    data: result,
  })
})
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Products retrieved successfully',
    data: result,
  })
})
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProductService.getSingleProduct(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Product retrieved successfully',
    data: result,
  })
})
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params

  const result = await ProductService.updateProduct(id, req.body)
  sendResponse<IProducts>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  })
})

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ProductService.deleteProduct(id)
  sendResponse<IProducts>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  })
})

export const ProductController = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
