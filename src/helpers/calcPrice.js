export function calcSubPrice(item){
    return item.count * item.order.price
}

export function calcTotalPrice(orders){
    let totalPrice = 0;
    orders.forEach(item=>{
        totalPrice += item.subPrice
    })
    return totalPrice;
}