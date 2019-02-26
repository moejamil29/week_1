// create 3 variables with int, string and bool
let number = 29
let string = 'string'
let trueFalse = true

//create an array or list
let list = ['item1','item2','item3','item4']

//attach to items to the end of the list
list.push('item5', 'item6')

// create a for loop and iterate and print each item on the list
for (let listIndex = 0; listIndex < list.length; listIndex++) {
    console.log(list[listIndex])
}



//input
let itemPrice = 10
let payingWith = 10

//create a function that shows the final balance after a transaction
const shopTransaction = (itemPrice, payingWith) => {
    changeBack = payingWith - itemPrice
    if (itemPrice < payingWith){
        console.log("thanks for shopping with us here's your change " + changeBack)
    }else {
        console.log("thanks for shopping with us")
    }
}

console.log(shopTransaction(itemPrice, payingWith))

