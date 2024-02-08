// A-TASK

function countletter(a, b) {
  list = b.split('').filter((ele, index) => {
    return ele === a;  
  });
  total = list.length;
  console.log(`Berilgan "${b}" so'zida ${total}ta "${a}" harfi mavjud`);
}

countletter('a', 'assalomalekum');

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



      



//       // call via -> async & await
// async function run() {
//   console.log('passed here: 0');
//   javob = await maslahatBering(70);
//   console.log(javob)
//   console.log('passed here: 1');
//   }
//   run()

//       // call via -> then & catch
// maslahatBering(65)
// .then(data => {
//   console.log('javob:', data);
// })
// .catch(err => {
//   console.log('ERoR',err)
// });

