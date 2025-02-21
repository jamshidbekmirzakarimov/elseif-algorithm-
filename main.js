//! Math 
// let a = Math.PI  // Math PIning qiymati
// console.log(a);

// let num = 10;
//console.log(Math.floor(num)); // Math floor sonni yaxlitlab beradi
//console.log(Math.ceil(num)); // Math ceil bita yuqorisini chiqaradi 
// console.log(Math.round(num));// Math round 0.5dan yuqorisini bitta katta sonni qaytaradi 0.5dan kichik bo'lsa sonni qaytaradi
// console.log(Math.floor(Math.random()*num)); // Math random fasodifiy qiymatlarni qaytaradi. 
// console.log(Math.PI.toFixed(0)); // toFixed butun qismini olib beradi


//! if else and Math
//* 1-masala
// let son = Number(prompt("Son kiriting"))
// if(son > 0){
//     console.log("Bu Musbat son");
// }else if(son < 0){
//     console.log("Bu Manfiy son");
// }else{
//     console.log("Bu Nol");
// }   

//* 2-masala
// let son = Number(prompt("Son kiriting"))
// console.log(Math.abs(son));

//* 3-masala
// let son1 = Number(prompt("1-Sonni kiriting"))
// let son2 = Number(prompt("2-Sonni kiriting"))
// console.log(Math.max(son1,son2));

//* 4-masala
// let son = Number(prompt("Son kiriting"))
// console.log(Math.ceil(son));

// * 5-masala
// let son = Number(prompt("Son kiriting"))
// console.log(Math.floor(son));

// * 6-masala
// let son = Number(prompt("Son kiriting"))
// console.log(Math.round(son));

// * 7-masala
// let son1 = Number(prompt("1-Sonni kiriting"))
// let son2 = Number(prompt("2-Sonni kiriting"))
// console.log(Math.random()*(son2-son1));

// * 8-masala
// let son1 = Number(prompt("1-Sonni kiriting"))
// let son2 = Number(prompt("2-Sonni kiriting"))
// console.log(Math.floor(Math.random()*(son2-son1)+son1));

// * 9-masala

// let login = prompt("login kiriting: ")
// let password = prompt("password kiriting: ")
// if(login == "admin" && password == "1234"){
//     console.log("Xush kelibsiz, Admin!")
// } else if(login == "admin" && password !="1234"){
//     console.log("Notogri parol!");
// }else{
//     console.log("Bunday foydalanuvchi topilmadi!")
// }
    

// //* 10-masala
// let yil = Number(prompt("Yilni kiriting: "));

// if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//     console.log("Bu kabisa yili!");
// } else {
//     console.log("Bu oddiy yil.");
// }

// * 11-masala 
// let son1 = Number(prompt("1-sonni kiriting"))
// let son2 = Number(prompt("2-sonni kiriting"))
// let son3 = Number(prompt("3-sonni kiriting"))
// if(son1 > son2 && son1 > son3){
//     console.log(son1)
// }else if(son2 > son1 && son2 > son3){
//       console.log(son2)
// }else if(son3 > son1 && son3 > son2){
//       console.log(son3)
// }

// * 12-masala
// let son1 = Number(prompt("1-sonni kiriting"))
// if(son1%3 == 0 && son1%5 == 0){
//     console.log(`Bu son 3 ga ham, 5 ga ham bo‘linadi`);
// }else if(son1%3 == 0){
//     console.log(`Bu son faqat 3 ga bo‘linadi`);
// }else if(son1%5 == 0){
//     console.log(`Bu son faqat 5 ga bo‘linadi`);
// }else if(son1%5 != 0 && son1%3 != 0){
//     console.log(`Bu son 3 ga ham, 5 ga ham bo‘linmaydi`);
// }



