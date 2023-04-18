import {user, getAllPurchasesFromUserId, queryProductsByName, CATEGORY, product, purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById} from "./database"
import  express, { Request, Response} from "express"
import cors from 'cors';
import { TUser, TProduct, TPurchase } from "./types";
import { db } from './database/knex'


/* console.log(createUser("3", "teste3@email.com", "senha3"))
console.table(getAllUsers())

console.log(createProduct("003", "Calça", 120, CATEGORY.ROUPAS))
console.table(getAllProducts())
console.log(getProductById("001"))

console.log(queryProductsByName("i"))
console.log(getAllPurchasesFromUserId("2")) */

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
})

// EXERCÍCIO 1
/* app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

// EXERCÍCIO 2

// Get All Users
app.get("/users", (req: Request, res: Response) => {
    try {
        res.status(200).send(user)
    } catch (error: any) {
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
    }
}
})

// Get All Products
app.get("/products", (req: Request, res: Response) => {
    try {
        res.status(200).send(product)
    } catch (error: any) {
        console.log(error)
        if(res.statusCode === 200){
            res.status(500)
    }
}
})

// Get All Purchases
app.get("/purchases", (req: Request, res: Response) => {
    try {
        res.status(200).send(purchase)
    } catch (error: any) {
        console.log(error)
        if(res.statusCode === 200){
        res.status(500)
    }
}
})

// Search Product by name
app.get("/product/search", (req: Request, res: Response) => {
   try {
        const q = req.query.q as string

        const result = product.filter((prod) => {
            return prod.name.toLowerCase().includes(q.toLowerCase())
        })

        res.status(200).send(result)

        if (!q) {
            res.status(400)
            throw new Error("O name precisa de pelo menos 1 caractere");
            
        }

   } catch (error) {
    console.log(error)
    if(res.statusCode === 200)
    res.status(500)
   }
   

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

app.get("/products/:id", (req: Request, res: Response) => {
    const {id} = req.params
    const result = product.filter((prod) => {
        return prod.id === id
    })

    res.status(200).send(result)
})
 

//APROFUNDAMENTO EXPRESS

// Get Products by id

app.get("/products/:id", (req: Request, res: Response) => {
    // const id = req.params.id 
    const {id} = req.params

    const result = product.filter((account) => {
        return account.id === id
    })
    // res.status(200).send({resultadoFiltro: result}) - Aqui cria um array com esse resultado, fica mais difícil para o front acessar
    res.status(200).send(result)
})

// Get User Purchases by User id

app.get("/users/:id/purchases", (req: Request, res: Response) => { 
    const {id} = req.params

    const result = purchase.filter((pur) => {
        return pur.userId === id
    })
    res.status(200).send(result)
})

// Delete User by id

app.delete("/users/:id", (req: Request, res: Response) => {
    const {id} = req.params
    const usersResult = user.findIndex((users) => {
        return users.id === id
    })

    usersResult < 0 ? res.status(404).send("O id não foi encontrado") :  (user.splice(usersResult, 1), 
    res.status(200).send("User apagado com sucesso"))
})

app.delete("/products/:id", (req: Request, res: Response) => {
    const {id} = req.params
    const productResult = product.findIndex((prod) => {
        return prod.id === id
    })

    productResult < 0 ? res.status(404).send("O id não foi encontrado") :  (product.splice(productResult, 1), 
    res.status(200).send("User apagado com sucesso"))
})

// Edit User by id

app.put("/users/:id", (req: Request, res: Response) => {
    const {id} = req.params // qual id vai alterar

    const {newEmail} = req.body
    const {newPassword} = req.body // tudo o que vai ser recebido por body para alterar

    const userToEdit = user.find((users) => {
        return users.id === id
    })

    if(userToEdit) {

        userToEdit.email = newEmail || userToEdit.email
        userToEdit.password = newPassword || userToEdit.password

    } 
    res.status(200).send("Cadastro atualizado com sucesso")
})

// Edit Product by id

app.put("/products/:id", (req: Request, res: Response) => {
    const {id} = req.params // qual id vai alterar

    const {newName} = req.body
    const {newPrice} = req.body
    const {newCategory} = req.body  // tudo o que vai ser recebido por body para alterar

    const productToEdit = product.find((prod) => {
        return prod.id === id
    })

    if(productToEdit) {

        productToEdit.name = newName || productToEdit.name
        productToEdit.price = newPrice || productToEdit.price
        productToEdit.category = newCategory || productToEdit.category

    } 
    res.status(200).send("Produto atualizado com sucesso")
}) */

//INTRODUÇÃO AO KNEX

app.get("/users", async (req: Request, res: Response) => {
    try {

        const result = await db.raw(`
        SELECT * FROM users;
      `)

      if(result.length<1){
          res.status(400)
          throw new Error("Não existem usuários cadastrados.");
      }

      res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/products", async (req: Request, res: Response) => {
    try {

        const result = await db.raw(`
        SELECT * FROM products;
      `)

      if(result.length<1){
          res.status(400)
          throw new Error("Não existem produtos cadastrados.");
      }

      res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/product/search/:q", async (req: Request, res: Response) => {
    try {

        const q = req.params.q

        const result = await db.raw(`
        SELECT * FROM products
        WHERE name LIKE "%${q}%";
      `)

      if(result.length<1){
          res.status(400)
          throw new Error("O produto não foi encontrado.");
      }

      res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.post("/users", async (req: Request, res: Response)=>{
    try {

        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const password = req.body.password

        if(!name){
            res.status(400)
            throw new Error("Por favor, insira as informações para cadastro do usuário.");
        }

        await db.raw(`
        INSERT INTO users (id, name, email, password)
        VALUES( "${id}", "${name}", "${email}", "${password}");
        `)
        res.status(201).send("Cadastro realizado com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
        
    }
})

app.post("/products", async (req: Request, res: Response)=>{
    try {

        const id = req.body.id
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const imageUrl = req.body.imageUrl

        if(!name){
            res.status(400)
            throw new Error("Por favor, insira as informações para cadastro do produto.");
        }

        await db.raw(`
        INSERT INTO products (id, name, price, description, image_url)
        VALUES( "${id}", "${name}", "${price}", "${description}", "${imageUrl}");
        `)

        res.status(201).send("Produto cadastrado com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
        
    }
})

app.post("/purchases", async (req: Request, res: Response)=>{
    try {

        const id = req.body.id
        const buyer = req.body.buyer
        const totalPrice = req.body.totalPrice
        const paid = req.body.paid

        if(!id){
            res.status(400)
            throw new Error("Por favor, insira as informações para cadastro da compra.");
        }

        await db.raw(`
        INSERT INTO purchases (id, total_price, paid, buyer_id)
        VALUES ("${id}", ${totalPrice}, ${paid}, "${buyer}");
        `)

        res.status(201).send("Compra cadastrada com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
        
    }
}) // CORRIGIR

app.get("/products/:id", async (req: Request, res: Response)=>{
    try {

        const id = req.params.id

        if(!id){
            res.status(400)
            throw new Error("Por favor, insira o id para buscar o produto.");
        }

        const result = await db.raw(`
        SELECT * FROM products
        WHERE products.id = "${id}";
        `)

        res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
        
    }
}) 

app.get("/users/:id/purchases", async (req: Request, res: Response)=>{
    try {

        const id = req.params.id

        if(!id){
            res.status(400)
            throw new Error("Por favor, insira o id do usuário para encontrar seu histórico de compras.");
        }

        const result = await db.raw(`
        SELECT * FROM purchases
        WHERE purchases.buyer_id = "${id}";
        `)

        res.status(200).send(result)
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
        
    }
}) 
