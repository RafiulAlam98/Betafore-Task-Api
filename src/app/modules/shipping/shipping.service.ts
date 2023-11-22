/* eslint-disable @typescript-eslint/no-var-requires */

import { IShipping } from './shipping.interface'
import { Shipping } from './shipping.model'

const createShipping = async (
  payload: IShipping,
): Promise<IShipping | null> => {
  const result = Shipping.create(payload)
  return result
}

export const ShippingService = {
  createShipping,
}
