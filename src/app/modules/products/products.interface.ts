import { Model } from 'mongoose'

export type IProducts = {
  title: string
  img: string
  price: string
  quantity: string
}

export type ProductsModel = Model<IProducts, Record<string, unknown>>
