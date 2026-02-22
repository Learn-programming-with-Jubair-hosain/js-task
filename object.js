// const phone = {
//     brand: 'apple',
//     price: 5000,
//     color: 'black',
//     'condition': 'haybrid',
// }


//DOT NOTATION//

// console.log(phone);
// console.log(phone.brand);
// const price = phone.price;
// console.log(price);

//BRACKET NOTATION//
 
// const company = phone['brand']
// console.log(company);
// console.log(phone['brand']);
// console.log(phone['condition']);

//Change value//
// phone.price = 6000;
// phone['brand'] = 'samsung';
// console.log(phone);


// KEY //
// let computer = {
//     brand: 'hp',
//     price: 4000,
//     memory: '16gb',
//     hdd: '555gb',
// }
// let keys = Object.keys(computer);
// console.log(keys);

// VALUES //
let laptop = {
    brand: 'hp',
    price: 4000,
    memory: '16gb',
    hdd: '555gb',
}
let values = Object.values(laptop);
console.log(values);

// nested and delete //
let school = {
    name: 'Dhaka school',
    age: 50,
    position: 2,
    unique: {
        color: 'green',
        result: {
            gpa: 5,
            merit: 'top',
        }
    }
}
delete school.unique.result.merit;
console.log(school);
// console.log(school.unique.result.gpa);


