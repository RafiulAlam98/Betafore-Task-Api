import { Model } from 'mongoose'

export type IShipping = {
  price: string
  transactionId: string
  email: string
}

export type ShippingModel = Model<IShipping, Record<string, unknown>>
