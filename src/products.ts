interface Products {
    name: string;
    price: number;
}
    const products:Products[] = [{
        name: 'Soda',
        price: 2,
    }, {
        name: 'Chips',
        price: 1,
    }, {
        name: 'Ice Cream',
        price: 3,
    }] 

    function calcAverageProductPrice(products:Products[]): number {
        let averagePrice:Products = products[0]
        products.forEach((product) => {
        if (product.price > averagePrice.price){
            averagePrice= product 
        }
    })
    return averagePrice.price
}

console.log(calcAverageProductPrice(products));

