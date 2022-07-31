
const cart = [
    {
        title:"Samsung Galaxy S7",
        price:499.97,
        amount:1,
    },
    {
        title:"google pixel",
        price:399.97,
        amount:2,
    },
    {
        title:"Xiaom Redmi 2",
        price:599.97,
        amount:4,
    },
    {
        title:"Xiaom Redmi 5",
        price:699.97,
        amount:3,
    },
]

const total = cart.reduce((total, cartItem) => {
    
    const{amount, price} = cartItem;
    //count amount 
    total.totalItems += amount
    //count sum
    total.cartTotal += amount*price

    return total

},{
    totalItems: 0,
    cartTotal: 0,
});

console.log(total)












