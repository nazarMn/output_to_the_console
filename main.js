let appleProducts = [
    {
        name: 'iPhone 13',
        model: 'Pro Max',
        color: 'Graphite',
        storage: 256,
        price: 1299.99
    },
    {
        name: 'MacBook Air',
        model: 'M2',
        color: 'Silver',
        storage: 512,
        price: 1499.99
    },
    {
        name: 'iPad Pro',
        model: '12.9-inch',
        color: 'Space Gray',
        storage: 1,
        price: 1099.99
    },
    {
        name: 'Apple Watch',
        model: 'Series 7',
        color: 'Midnight',
        size: '45mm',
        price: 399.99
    },
    {
        name: 'AirPods Pro',
        color: 'White',
        wirelessCharging: true,
        price: 249.99
    },
    {
        name: 'iMac',
        model: '24-inch',
        color: 'Blue',
        storage: 512,
        price: 1499.99
    }
];



// 1. Вивести к-сть товарів в магазині
// 2. Порахувати вартість всіх товарів
// 3. Вивести імена всіх товарів 
// 4. Вивести кольори всіх товарів
// 5. Вивести вартість всіх товарів в $


console.log("Кількість товарів в магазині: " + appleProducts.length);



 function Count(appleProducts) {
 let sum = 0;
     for(let el of appleProducts){
        sum += el.price
    }
return sum;
 }
console.log(Count(appleProducts));




function Names(appleProducts) {
    for (let el of appleProducts) {
        
        if (el.name !== undefined) {
            console.log("Ім'я товару: " + el.name);
        }
    }
}
Names(appleProducts);




function Color(appleProducts) {
    for (let els of appleProducts) {
        
        if (els.color !== undefined) {
            console.log("Колір товару: " + els.color);
        }
    }
}
Color(appleProducts);






function Dolar(appleProducts) {
    let Dolars = [];
    for (let ells of appleProducts){
        ells.price = Math.round(ells.price / 37) + '$';
        Dolars.push(ells);
    }
    return Dolars;
}

console.log(Dolar(appleProducts))