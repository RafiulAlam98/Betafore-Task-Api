import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    total: z.string({
      required_error: 'Amount is required',
    }),
  }),
})

export const PaymentValidation = {
  createZodSchema,
}
