/**
 * ------ string comparison Lowercase Uppercase and Trim
 */

let school = 'Dhaka Bangla Collage';
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

let subject = "English";
let book = 'englisH';
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I am reading book')
} 
else{
    console.log('i go ran');
}

let drink = ' water';
let food = 'water ';
if(drink.trim() === food.trim()){
    console.log('panir opor nam jibon')
}
else{
    console.log('somudrer pani khayte pari na ')
}


/**
 * String slice,join,concat,includes
 */
let country = 'Bangladesh';
let des = country.slice(0,5);
console.log(des);

let sentence = 'I am a good student in the collage';
// console.log(sentence.split(' '))
console.log(sentence.split('t'));

let nam = ['Rahim', 'Fahim', 'Josim', 'Korim'];
console.log(nam.join('-'));

let firstName = 'Jubair';
let lastName = 'Hosain';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(firstName.includes('J'));


//string reverse//
let web = 'i am a wed developer';
let reverse = web.split('').reverse().join('');
console.log(reverse);











