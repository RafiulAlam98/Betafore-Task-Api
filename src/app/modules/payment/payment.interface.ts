import { Model } from 'mongoose'

export type IPayment = {
  total: string
}

export type PaymentModel = Model<IPayment, Record<string, unknown>>
