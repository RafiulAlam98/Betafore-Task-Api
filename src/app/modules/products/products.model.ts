import { Schema, model } from 'mongoose'
import { IProducts, ProductsModel } from './products.interface'

const ProductSchema = new Schema<IProducts>(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    quantity: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Products = model<IProducts, ProductsModel>(
  'products',
  ProductSchema,
)
