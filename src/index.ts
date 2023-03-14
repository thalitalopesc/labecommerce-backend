import {user, getAllPurchasesFromUserId, queryProductsByName, CATEGORY, product, purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById} from "./database"
import  express, { Request, Response} from "express"
import cors from 'cors';
import { TUser, TProduct, TPurchase } from "./types";


console.log(createUser("3", "teste3@email.com", "senha3"))
console.table(getAllUsers())

console.log(createProduct("003", "Calça", 120, CATEGORY.ROUPAS))
console.table(getAllProducts())
console.log(getProductById("001"))

console.log(queryProductsByName("i"))
console.log(getAllPurchasesFromUserId("2"))

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})

// EXERCÍCIO 1
app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

// EXERCÍCIO 2

// Get All Users
app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(user)
})

// Get All Products
app.get("/products", (req: Request, res: Response) => {
    res.status(200).send(product)
})

// Get All Purchases
app.get("/purchases", (req: Request, res: Response) => {
    res.status(200).send(purchase)
})

// Search Product by name
app.get("/product/search", (req: Request, res: Response) => {
    const q = req.query.q as string

    const result = product.filter((prod) => {
        return prod.name.toLowerCase().includes(q.toLowerCase())
    })

    res.status(200).send(result)

})

//EXERCÍCIO 3

//Create User

app.post("/users", (req: Request, res: Response) => {
    const {id, email, password} = req.body

    const newUser: TUser = {
        id,
        email,
        password
    }

    user.push(newUser)

    res.status(201).send("Cadastro realizado com sucesso")
})

//Create Product

app.post("/products", (req: Request, res: Response) => {
    const {id, name, price, category} = req.body

    const newProduct: TProduct = {
        id,
        name,
        price,
        category
    }

    product.push(newProduct)

    res.status(201).send("Produto cadastrado com sucesso")
})


// Create Purchase

app.post("/purchases", (req: Request, res: Response) => {
    const {userId, productId, quantity, totalPrice} = req.body

    const newPurchase: TPurchase = {
        userId,
        productId,
        quantity,
        totalPrice
    }

    purchase.push(newPurchase)

    res.status(201).send("Compra realizada com sucesso")
})


