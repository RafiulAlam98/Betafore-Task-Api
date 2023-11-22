import { Schema, model } from 'mongoose'
import { IShipping, ShippingModel } from './shipping.interface'

const ShippingSchema = new Schema<IShipping>(
  {
    price: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Shipping = model<IShipping, ShippingModel>(
  'shipping',
  ShippingSchema,
)
