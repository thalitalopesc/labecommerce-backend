import {TUser, TProduct, TPurchase} from "./types"

export enum CATEGORY {
    ACESSORIOS = "Acessórios",
    ROUPAS = "Roupas",
    CALCADOS = "Calçados"
}

export const user: TUser[] = [
    {
    id: "1",
    email: "thalita@email.com",
    password: "1234"

    },{
    
    id: "2",
    email: "ana@email.com",
    password: "12345"

    }
]

export const product: TProduct[] = [
    {
    id: "001",
    name: "Brinco",
    price: 49,
    category: CATEGORY.ACESSORIOS

    }, {

    id: "002",
    name: "Tênis",
    price: 250,
    category: CATEGORY.CALCADOS
    }
]

export const purchase: TPurchase[] = [

    {
    userId: "1",
    productId: "001",
    quantity: 60,
    totalPrice: 2940

    }, {

    userId: "2",
    productId: "002",
    quantity: 5,
    totalPrice: 1250
    }
];


/* const result = purchase.reduce((acc, current) => acc + (current.quantity*current.totalPrice), 0)
console.log(result) */

//FUNÇÕES

//User

export function createUser(id:string, email:string, password:string): void {
    user.push({
        id,
        email,
        password
    })
    console.log("Cadastro realizado com sucesso")
  }

export function getAllUsers() {
    return user
  }

//Product

export function createProduct(id:string, name:string, price:number, category: CATEGORY) {
    product.push({
        id,
        name,
        price,
        category
    })
    console.log("Produto criado com sucesso")
}

export function getAllProducts() {
    return product
}

export function getProductById(idToSearch: string): TProduct[] | undefined {
    return product.filter((prod) => prod.id === idToSearch)
}

export function queryProductsByName(q: string) {
    return product.filter((prodName) => prodName.name.toLowerCase().includes(q.toLowerCase()))
}

// PURCHASE

export function createPurchase(userId:string, productId:string, quantity:number, totalPrice: number) : void {
    purchase.push({
        userId,
        productId,
        quantity,
        totalPrice
    })
    console.log("Compra realizada com sucesso")
}

export function getAllPurchasesFromUserId(userIdToSearch: string): TPurchase[] {
    return purchase.filter((purchase) => purchase.userId === userIdToSearch)
}