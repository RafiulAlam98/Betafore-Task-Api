import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { AuthRoutes } from '../modules/auth/auth.routes'
import { ProductRoutes } from '../modules/products/products.routes'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/user/',
    route: UserRoutes.router,
  },
  {
    path: '/auth/',
    route: AuthRoutes.router,
  },
  {
    path: '/products/',
    route: ProductRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
