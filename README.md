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
- https://task-management-api-sigma.vercel.app/api/v1/user/signup [user sign up] (POST)
- https://task-management-api-sigma.vercel.app/auth/login [login user] (POST)

### Product
- https://task-management-api-sigma.vercel.app/api/v1/products (post)[add task]
- https://task-management-api-sigma.vercel.app/api/v1/products (get)[get all task]
- https://task-management-api-sigma.vercel.app/api/v1/products/:id (get)[get single task ]
- https://task-management-api-sigma.vercel.app/api/v1/products/:id [patch]
- https://task-management-api-sigma.vercel.app/api/v1/products/:id [delete]

### Sample task Data for create a task
```
{
    "title":"gjryhjerjewhhgjsd",
    "img":"guasdhuijd",
    "price":"100",
    "quantity":"100"
}
```
