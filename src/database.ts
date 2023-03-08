import {TUser, TProduct, TPurchase} from "./types"


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
    category: "acessórios"

    }, {

    id: "002",
    name: "Tênis",
    price: 250,
    category: "calçados"
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