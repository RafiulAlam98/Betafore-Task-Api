/* eslint-disable @typescript-eslint/no-var-requires */

import { IPayment } from './payment.interface'
import config from '../../../config'

const stripe = require('stripe')(config.stripe_key)

const createPayment = async (payload: IPayment): Promise<IPayment | null> => {
  const amount = parseInt(payload.total) * 100

  const result = await stripe.paymentIntents.create({
    currency: 'usd',
    amount: amount,
    payment_method_types: ['card'],
  })
  return result.client_secret
}

export const PaymentService = {
  createPayment,
}
