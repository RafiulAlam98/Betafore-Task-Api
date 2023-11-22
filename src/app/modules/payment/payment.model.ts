import { Schema, model } from 'mongoose'
import { IPayment, PaymentModel } from './payment.interface'

const PaymentSchema = new Schema<IPayment>(
  {
    total: {
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

export const Payments = model<IPayment, PaymentModel>('payment', PaymentSchema)
