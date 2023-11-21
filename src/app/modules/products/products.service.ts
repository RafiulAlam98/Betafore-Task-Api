import httpStatus from 'http-status'
import ApiError from '../../errors/ApiError'
import { IProducts } from './products.interface'
import { Products } from './products.model'

const addProduct = async (payload: IProducts): Promise<IProducts | null> => {
  const result = await Products.create(payload)
  return result
}
const getAllProducts = async () => {
  const result = await Products.find()
  return result
}
const getSingleProduct = async (payload: string): Promise<IProducts | null> => {
  const result = await Products.findOne({ _id: payload })
  return result
}
const updateProduct = async (
  id: string,
  payload: Partial<IProducts>,
): Promise<IProducts | null> => {
  const filter = { _id: id }
  const result = await Products.findOneAndUpdate(filter, payload, {
    new: true,
  })
  return result
}

const deleteProduct = async (id: string) => {
  const isExist = await Products.findById(id)

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found !')
  }
  const task = await Products.findOneAndDelete({ _id: id })
  if (!task) {
    throw new ApiError(404, 'Failed to delete product')
  }
  return task
}

export const ProductService = {
  addProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
}
