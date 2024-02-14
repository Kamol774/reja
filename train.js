// D-TASK
/* Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); 
shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
shop.sotish('non', 3) & 
shop.qabul('cola', 4) & 
shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/
const moment = require('moment');

const time = moment().format("HH:mm"); 

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  sotish(items, amount) {
    if (items === "non") {
      if (this.non >= amount) {
        this.non -= amount;
      }
    }

    if (items === "lagmon") {
      if (this.lagmon >= amount) {
        this.lagmon -= amount;
      }
    }

    if (items === "cola") {
      if (this.cola >= amount) {
        this.cola -= amount;
      }
    }

    return (`hozir ${time} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola bor`);
  }

  qabul(items, amount) {
    
    if (items === "non") {
      this.non += amount;
    }

    if (items === "lagmon") {
      this.lagmon += amount;
    }

    if (items === "cola") {
      this.cola += amount;
    }
    return (`hozir ${time} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola bor`);
  }

  qoldiq() {
    return (`hozir ${time} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola qolgan!`);
  }
}

const shop = new Shop(6, 2, 4);

shop.qabul("non", 3)
shop.sotish("cola", 2);
shop.qoldiq()

console.log(shop.qoldiq());







// B-TASK

// function countDigit(count) {
//   m = (count.match(/\d/g) || []).length
//   console.log(`Berilgan jumlada ${m}ta raqam qatnashgan`)
// }
// countDigit('1das2c78dsd6vds5fd5s')

// console.log("=========================================================================================================================")




// A-TASK


// function countletter(a, b) {
//   list = b.split('').filter((ele, index) => {
//     return ele === a;  
//   });
//   total = list.length;
//   console.log(`Berilgan "${b}" so'zida ${total}ta "${a}" harfi mavjud`);
// }

// countletter('a', 'assalomalekum');

//=========================================================================================================================


// Callback va Asynchronous functionlarni qo'llash:

// console.log("Jack Ma maslahatlalri");
// console.log("*********************");

// const list = [
//   "yaxshi talaba bo'ling",    // 0-20 yoshlar oralig'i
//   "to'g'ri boshliq tanlang va ko'proq xato qiling",    // 20-30 yoshlar oralig'i
//   "o'zingizga ishlashni boshlang",     // 30-40 yoshlar oralig'i  
//   "siz kuchli bo'lgan narsalarni qiling",     // 40-50 yoshlar oralig'i
//   "yoshlarga investitsiya qiling",    // 50-60 yoshlar oralig'i
//   "endi dam oling, foydasi yo'q"      // 60 yoshdan yuqori
// ];

//=========================================================================================================================

// birinchi usul:

//    // CALLBACK function
// function maslahatBering(a, callback) {
//   if(typeof a !== 'number') callback("Please, insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function() {
//       callback(null, list[5]);
//     }, 3000);
//   }
// }

// console.log('passed here: 0');
// maslahatBering(65, (err, data) => {
//   if (err) console.log('ERRoR:', err);
//   else console.log('javob:', data);
// });
// console.log('passed here: 1');



//=========================================================================================================================

      
// ikkinchi usul:


//   async function maslahatBering(a) {
//   if(typeof a !== 'number') throw new Error("Please, insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5]; 

//   //   setTimeout(function() {
//   //     return list[5]; 
//   //   }, 2000);
//   }
// }

//       // call via -> async & await
// async function run() {
//   console.log('passed here: 0');
//   javob = await maslahatBering(30);
//   console.log(javob)
//   console.log('passed here: 1');
//   }
//   run()

//       // call via -> then & catch
// maslahatBering(65)
// .then((data) => {
//   console.log('javob:', data)
// })
// .catch((err) => {
//   console.log('ERoR',err)
// });

//=========================================================================================================================

// // PROMISE 

//   function maslahatBering(a) {
//     return new Promise((resolve, reject) => {

//       if(typeof a !== 'number') reject("Please, insert a number");
//       else if (a <= 20) return list[0];
//       else if (a > 20 && a <= 30) resolve(list[1]);
//       else if (a > 30 && a <= 40) resolve(list[2]);
//       else if (a > 40 && a <= 50) resolve(list[3]);
//       else if (a > 50 && a <= 60) resolve(list[4]);
//       else {        
//         setTimeout(function() {
//           resolve(list[5]); 
//         }, 2000);
//       }
//     })
// }


//   maslahatBering(65)
// .then((data) => {
//   console.log('javob:', data)
// })
// .catch((err) => {
//   console.log('ERoR',err)
// });