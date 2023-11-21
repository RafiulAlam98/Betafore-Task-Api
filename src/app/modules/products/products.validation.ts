import { z } from 'zod'

const createZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    img: z.string({
      required_error: 'Image is required',
    }),
    price: z.string({
      required_error: 'Price is required',
    }),
    quantity: z.string({
      required_error: 'Quantity is required',
    }),
  }),
})
const updateZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    img: z.string({
      required_error: 'Image is required',
    }),
    price: z.string({
      required_error: 'Price is required',
    }),
    quantity: z.string({
      required_error: 'Quantity is required',
    }),
  }),
})
export const ProductValidation = {
  createZodSchema,
  updateZodSchema,
}
