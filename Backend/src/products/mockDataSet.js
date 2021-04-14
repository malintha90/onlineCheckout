const data = {
    products:[
        {
            _id:'1',
            name:'Kone',
            image:'/images/p1.jpg',
            price:3488.99,
            brand: 'Nike',
            rating:4.6,
            review:15,
            description: 'Good quality product',
            stock:10,
            offerPrice: 2588.99,
            offerType: 'discountPrice'
        },
        {
            _id:'2',
            name:'Adidas T shirt',
            image:'/images/p1.jpg',
            price:529.99,
            brand: 'Adidas',
            rating:4.5,
            review:10,
            description: 'Good quality product',
            stock:12,
            offerPrice:0,
            offerType: 'buyTwoGetOne'
        }
    ]
}

module.exports = {data}