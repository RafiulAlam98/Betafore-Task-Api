### GitHub link: https://github.com/RafiulAlam98/Betafore-Task-Api

### All Routes

### Live Link: https://betafore-task-api.vercel.app

# Application Routes:

### Sample User Sign Up and login json type
```
{
    "name":"abc",
    "email":"abc@def.com",
    "password":"hello1234",
    "phoneNo":"0171045693",
    "photo":"photo"
}
```
```
{
    "email":"abc@def.com",
    "password":"hello1234",
}
```

### User
- https://betafore-task-api.vercel.app/api/v1/user/signup [user sign up] (POST)
- https://betafore-task-api.vercel.app/auth/login [login user] (POST)

### Product
- https://betafore-task-api.vercel.app/api/v1/products (post)[add task]
- https://betafore-task-api.vercel.app/api/v1/products (get)[get all task]
- https://betafore-task-api.vercel.app/api/v1/products/:id (get)[get single task ]
- https://betafore-task-api.vercel.app/api/v1/products/:id [patch]
- https://betafore-task-api.vercel.app/api/v1/products/:id [delete]

### Sample product Data
```
{
    "title":"gjryhjerjewhhgjsd",
    "img":"guasdhuijd",
    "price":"100",
    "quantity":"100"
}
```
