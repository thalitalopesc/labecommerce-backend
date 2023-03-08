import {user, getAllPurchasesFromUserId, queryProductsByName, CATEGORY, product, purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById} from "./database"

/* console.log(user)
console.log(product)
console.log(purchase) */

console.log(createUser("3", "teste3@email.com", "senha3"))
console.table(getAllUsers())

console.log(createProduct("003", "Calça", 120, CATEGORY.ROUPAS))
console.table(getAllProducts())
console.log(getProductById("001"))

console.log(queryProductsByName("i"))
console.log(getAllPurchasesFromUserId("2"))