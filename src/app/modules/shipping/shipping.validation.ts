import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    price: z.string({
      required_error: 'Price is required',
    }),
    transactionId: z.string({
      required_error: 'Transaction Id is required',
    }),
    email: z.string({
      required_error: 'Email is required',
    }),
  }),
})

export const ShippingValidation = {
  createZodSchema,
}
