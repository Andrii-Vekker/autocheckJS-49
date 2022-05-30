// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i+=1) {
//   //console.log(clients[i])
    
// };
// //for of

// for (const value of clients) {
//    //console.log(value)
    
// }
//  //ищем требуемое имя
// const clientNameToFind = "Poly";
// let message;
// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клиент с таким именем есть в базе данных"
//         break;
//     } else message = "Клиента с таким именем нет в базе данных"
//     }
// //console.log(message)
    
// //цикл для вывода чисел больше определенного значения

// const numbers = [1, 2, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i+=1) {
//     //console.log(numbers[i])
//     if (numbers[i] < threshold) { //если numbers[i] меньше threshold то пропусть! в остальном вывести большеd
        
//         continue;

        
//     }
//      //console.log(numbers[i])
// }

// // * Example 1 - Ввод пользователя и ветвления
// //  * Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
// //  * Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"
// //  */

// // const answer = prompt("Какое официальное название JavaScript?")
// // const rightAnswer = 'ECMAScript'

// // if (answer.toLowerCase() === rightAnswer.toLowerCase()) {
// //     alert("Верно!")
// // } else if (answer === null) {
// //     console.log('No answer')
// // } else {
// //     alert("Не знаете? ECMAScript!")
// // }


// //  * Example 13
// //  * Перевірте, чи має рядок однакову кількість символів «x» і «o».
// //  * В змінну res ви маєте записати логічне значення true або false.
// //  * Рядок може містити будь-який символ. І бути нечутливим до регістру
// //  * Протестувати на наступних рядках: xo, xxOo, xxxm, Oo, ooom
// //  * Використовувати цикл for
// //  */

// const string = 'xo';
// let res = false;
// const normalizedString = string.toLowerCase()
// let amountX
// let amountO

// for (let i = 0; i < string.length; i+=1) {
//     //console.log(string[i])
//  amountX = normalizedString.includes("x")
//     if (normalizedString.includes("x") && normalizedString.includes("o")) {
//         res = true
//     }else res
    //console.log(normalizedString[i])
    // console.log(string[i].charCodeAt())
// } //console.log(res)


// console.log(amountX)

//function


// function add(a,b,c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);







// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// // Результат работы функции можно сохранить в переменную
// let result = multiply(2, 3, 5);
// console.log(result); // 30

// result = multiply(4, 8, 12);
// console.log(result); // 384

// result = multiply(17, 6, 25);
// console.log(result); // 2550









// function add(a, b, c) {
//   // Change code below this line
// return a+b+c
//   // Change code above this line
// }
// let res = add(2, 5, 8)

// console.log(res); // 15
// res = add(15, 27, 10)
// console.log(res);
// res = add(10, 20, 30)
// console.log(res);
// res = add(5, 10, 15)
// console.log(res);



// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits` ;
//   // Change code above this line
//     console.log(message)
//   return message;
// };

// makeMessage("Radar", 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);




// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
// console.log(totalPrice)
//   // Change code above this line
//   return totalPrice;
// };


// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);



// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
// const message = `You ordered droids worth ${orderedQuantity*pricePerDroid + deliveryFee} credits. Delivery ${deliveryFee} is included in total price.`;

// console.log(message)
//   // Change code above this line
//   return message
// }

// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);





// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18 ;
// console.log(passed)
//   // Change code above this line
//   return passed;
// }

// isAdult(20)
// isAdult(14)
// isAdult(8)
// isAdult(37)








// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch =SAVED_PASSWORD === password  ;
// console.log(isMatch)
//   // Change code above this line
//   return isMatch;
// }
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");







// function checkAge(age) {
//   let message;

//   if (age >=18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
// console.log(message)
//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);





// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
// if(available < ordered) {
//   message = "Not enough goods in stock!"
//     } else { message = "Order is processed, our manager will contact you." }
//     console.log(message)
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);







// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о
// результате операции.Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids,
// you have < число > credits left".

// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
// Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
// Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
// Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
// Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     let totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = "Insufficient funds!"
//     }else{message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`}
//   // Change code below this line
// console.log(message)
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000)
// makeTransaction(1000, 3, 15000)
// makeTransaction(5000, 10, 8000)
// makeTransaction(2000, 8, 10000)
// makeTransaction(500, 10, 5000)

/////////////////////////////////////////////////////////////////////


// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в
// переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) { // Change this line
//         message = 'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//         message = 'Welcome!';
//     } else {
//         message = 'Access denied, wrong password!';
//     }
// console.log(message)
//     return message;
// }

// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");




/////////////////////////////////////////////////////////////


// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка
// "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка
// "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

// Объявлена функция checkStorage(available, ordered)
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(150, 0) возвращает "There are no products in the order!"


// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//       message = "There are no products in the order!"
//     }else if (ordered > available) {
//         message = "Your order is too large, there are not enough items in stock!"
//     }else {message = "The order is accepted, our manager will contact you"}
//     // Change code above this line
//     console.log(message)
//     return message;
// }


// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);




//////////////////////////////////////

// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток.
//  Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end.
// То есть число должно быть больше либо равно start и меньше либо равно end.Результатом выражения проверки будет буль true или false.
// Объявлена функция isNumberInRange(start, end, number)
// В выражении проверки использован оператор &&
// Вызов isNumberInRange(10, 30, 17) возвращает true
// Вызов isNumberInRange(10, 30, 5) возвращает false
// Вызов isNumberInRange(20, 50, 24) возвращает true
// Вызов isNumberInRange(20, 50, 76) возвращает false

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
// console.log(isInRange)
//   return isInRange;
// }

// isNumberInRange(10, 30, 17)
// isNumberInRange(10, 30, 5)
// isNumberInRange(20, 50, 24)
// isNumberInRange(20, 50, 76)


///////////////////////////////////////////////////


// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту.
// Проверка происходит по типу подписки.Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки.
// Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ.
// Результатом выражения проверки будет буль true или false.
// Объявлена функция checkIfCanAccessContent(subType)
// В выражении проверки использован оператор ||
// Вызов checkIfCanAccessContent("pro") возвращает true
// Вызов checkIfCanAccessContent("starter") возвращает false
// Вызов checkIfCanAccessContent("vip") возвращает true
// Вызов checkIfCanAccessContent("free") возвращает false


// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
// console.log(canAccessContent)
//   return canAccessContent;
// }

//  checkIfCanAccessContent("pro")
//  checkIfCanAccessContent("starter")
//  checkIfCanAccessContent("vip")
//  checkIfCanAccessContent("free")





//////////////////////////////////////////////////////////////////////////////
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток.
// То есть число должно быть меньше либо равно start и больше либо равно end.Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.
// Объявлена функция isNumberNotInRange(start, end, number)
// В выражении использован оператор !
// Вызов isNumberNotInRange(10, 30, 17) возвращает false
// Вызов isNumberNotInRange(10, 30, 5) возвращает true
// Вызов isNumberNotInRange(20, 50, 24) возвращает false
// Вызов isNumberNotInRange(20, 50, 76) возвращает true



// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ; // Change this line
// console.log(isNotInRange)
//   return isNotInRange;
// }

//  isNumberNotInRange(10, 30, 17)
//  isNumberNotInRange(10, 30, 5)
//  isNumberNotInRange(20, 50, 24)
//  isNumberNotInRange(20, 50, 76)



////////////////////////////////////////////////////////

// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег(параметр totalSpent)
// в магазине за всё время(партнёрская программа).Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
// Объявлена функция getDiscount(totalSpent)
// Вызов getDiscount(137000) возвращает 0.1
// Вызов getDiscount(46900) возвращает 0.05
// Вызов getDiscount(8250) возвращает 0.02
// Вызов getDiscount(1300) возвращает 0
// Вызов getDiscount(5000) возвращает 0.02
// Вызов getDiscount(20000) возвращает 0.05
// Вызов getDiscount(50000) возвращает 0.1


// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent < 5000 ) {
//     discount = BASE_DISCOUNT
// }else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT
// }else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT
//     } else   discount = GOLD_DISCOUNT
//     console.log(discount)
//   // Change code above this line
//   return discount;
// }

// getDiscount(137000)
// getDiscount(46900)
// getDiscount(8250)
// getDiscount(1300)
// getDiscount(5000)
// getDiscount(20000)
// getDiscount(50000)






//////////////////////////////////////////////////////////////////

// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.
// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"


// function checkStorage(available, ordered) {
  
//     let message;
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // Change code below this line

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
// console.log(message)
//   // Change code above this line
//   return message;
// }

//  checkStorage(100, 50)
//  checkStorage(100, 130)
//  checkStorage(200, 20)
//  checkStorage(200, 150)
//  checkStorage(150, 180)


/////////////////////////////////////////////////////////////////
// Функция checkPassword(password) сравнивает переданный ей пароль(параметр password) с сохранённым паролем администратора(константа ADMIN_PASSWORD)
// и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// В противном случае, присвой message строку "Access denied, wrong password!".
// Объявлена функция checkPassword(password)
// Использован тернарный оператор
// Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
// Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
// Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
    
//   // Change code below this line
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   // Change code above this line
//     console.log(message)
//   return message;
// }

//  checkPassword("jqueryismyjam")
//  checkPassword("angul4r1sl1f3")
//  checkPassword("r3actsux")



//////////////////////////////////////////////////////////////////////
// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя(параметр type),
//     проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.
// Если значение параметра type это строка:
// "starter" - цена подписки 0 кредитов.
// "professional" - цена подписки 20 кредитов.
// "organization" - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.
// Объявлена функция getSubscriptionPrice(type)
// Вызов getSubscriptionPrice("professional") возвращает число 20
// Вызов getSubscriptionPrice("organization") возвращает число 50
// Вызов getSubscriptionPrice("starter") возвращает число 0

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }
// console.log(price)
//   // Change code above this line
//   return price;
// }

//  getSubscriptionPrice("professional")
//  getSubscriptionPrice("organization")
//  getSubscriptionPrice("starter")



///////////////////////////////////////////////////////////
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора
// в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// Если значение параметра password:
// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword('"jqueryismyjam") возвращает "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// switch (password) {
//     case ADMIN_PASSWORD:
//         message = "Welcome!"
//         break;
//  case null:
//         message = "Canceled by user!"
//         break;
//     default : message = "Access denied, wrong password!"
//         break;
// }
// //   if (password === null) {
// //     message = "Canceled by user!";
// //   } else if (password === ADMIN_PASSWORD) {
// //     message = "Welcome!";
// //   } else {
// //     message = "Access denied, wrong password!";
// //   }
// console.log(message)
//   // Change code above this line
//   return message;
// }

//  checkPassword("mangohackzor")
//  checkPassword(null)
//  checkPassword("polyhax")
//  checkPassword("jqueryismyjam")


////////////////////////////////////////////////////////////////////////////////////////////////
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя(параметр country)
// и возвращать сообщение о результате хранящееся в переменной message.Обязательно используй инструкцию switch.
// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо < country > и < price >
// необходимо подставить соотвествующие значения.
// Список стран и стоимость доставки:
// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде.Если указанной страны нет в списке,
//     то функция должна вернуть строку "Sorry, there is no delivery to your country"
// Объявлена функция getShippingCost(country)
// В теле функции использована инструкция switch
// Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
// Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
// Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
// Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
// Вызов getShippingCost("Jamaica") возвращает "Shipping to Jamaica will cost 120 credits"
// Вызов getShippingCost("Sweden") возвращает "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//     let message;
//     let price;
//   // Change code below this line
// switch (country) {
//     case "Australia":
//         price = 170
//         message = `Shipping to ${country} will cost ${price} credits`
//         break;
//      case "China":
//         price = 100
//         message = `Shipping to ${country} will cost ${price} credits`
//         break;
//  case "Chile":
//         price = 250
//         message = `Shipping to ${country} will cost ${price} credits`
//         break;
//      case "Jamaica":
//         price = 120
//         message = `Shipping to ${country} will cost ${price} credits`
//         break;
     
//     default: message = "Sorry, there is no delivery to your country"
//         break;
// }
//   // Change code above this line
//     console.log(message)
//   return message;
// }

//  getShippingCost("Australia")
//  getShippingCost("Germany")
//  getShippingCost("China")
//  getShippingCost("Chile")
//  getShippingCost("Jamaica")
//  getShippingCost("Sweden")


/////////////////////////////////////////////////////////////////////////
// Функция getNameLength(name) принимает имя(параметр name) и возвращает строку, в которой указана его длина.
// Дополни шаблонную строку в переменной message длиной строки из параметра name.
// Объявлена функция getNameLength(name)
// Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
// Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
// Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
// Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
// console.log(message)
//   return message;
// }

//   getNameLength("Poly")
//   getNameLength("Harambe")
//   getNameLength("Billy")
//   getNameLength("Joe")

//////////////////////////////////////////////////////////////////////////////
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.
// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
// Объявлена переменная courseTopic
// Значение переменной courseTopic это строка "JavaScript essentials"
// Объявлена переменная courseTopicLength
// Значение переменной courseTopicLength это число 21
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "J"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "s"

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];
// console.log(lastElement)
// Change code above this line

///////////////////////////////////////////////////////////////
// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов.
//  Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
// Объявлена функция getSubstring(string, length)
// Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
// Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
// Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
// Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
// Вызов функции getSubstring("Hello world", 0) возвращает ""

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line
// console.log(substring)
//   return substring;
// }

//  getSubstring("Hello world", 3)
//  getSubstring("Hello world", 6)
//  getSubstring("Hello world", 8)
//  getSubstring("Hello world", 11)
//  getSubstring("Hello world", 0)

//////////////////////////////////////////////////////////////
// Функция formatMessage(message, maxLength) принимает строку(параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.
// Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...",
// после чего возвращает укороченную версию.
// Объявлена функция formatMessage(message, maxLength)
// Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
// Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"

// function formatMessage(message, maxLength) {
    
//   let result = message.length <= maxLength ? message : message.slice(0, maxLength)+"...";
//   // Change code below this line

//   /// Change code above this line
//     console.log(result)
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 16)
// formatMessage("Curabitur ligula sapien", 23)
// formatMessage("Vestibulum facilisis purus nec", 20)
// formatMessage("Vestibulum facilisis purus nec", 30)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Функция normalizeInput(input) принимает строку(параметр input) и возвращает такую же строку, но в нижнем регистре.
// Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.
// Объявлена функция normalizeInput(input)
// Вызов функции normalizeInput("Hello world") возвращает "hello world"
// Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
// Вызов функции normalizeInput("Big SALE") возвращает "big sale"

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line
// console.log(normalizedInput)
//   return normalizedInput;
// }

// normalizeInput("Hello world")
// normalizeInput("This ISN'T SpaM")
// normalizeInput("Big SALE")



/////////////////////////////////////////////////////////////////////////////////////////////////
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false -
// результат проверки вхождения подстроки name в строку fullname.
// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени(параметр name), в полное имя(параметр fullname).
//  Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.
// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
// Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
// Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false

// function checkForName(fullName, name) {
//     const result = fullName.includes(name); // Change this line
//     console.log(result)
//     console.log()
//   return result;
// }

// checkForName("Egor Kolbasov", "Egor")
// checkForName("Egor Kolbasov", "egor")
// checkForName("Egor Kolbasov", "egOr")
// checkForName("Egor Kolbasov", "Zhenya")
// checkForName("Vadim Nekrasov", "Vadim")
// checkForName("Vadim Nekrasov", "vadim")
// checkForName("Vadim Nekrasov", "Dima")

///////////////////////////////////////////////////////////////////////////////////////////////////
// Функция checkForSpam(message) принимает строку(параметр message), проверяет её на содержание запрещенных слов spam и sale,
// и возвращает результат проверки.Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam("Latest technology news") возвращает false
// Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
// Вызов функции checkForSpam("Get best sale offers now!") возвращает true
// Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
// Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
// Вызов функции checkForSpam("Get rid of sPaM emails. Our book in on sale!") возвращает true
// Вызов функции checkForSpam("[SPAM] How to earn fast money?") возвращает true

function checkForSpam(message) {
  let result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
  // Change code below this line
console.log(result)
  // Change code above this line
  return result;
}

checkForSpam("Latest technology news") 
checkForSpam("JavaScript weekly newsletter")
checkForSpam("Get best sale offers now!")
checkForSpam("Amazing SalE, only tonight!")
checkForSpam("Trust me, this is not a spam message")
checkForSpam("Get rid of sPaM emails. Our book in on sale!")
checkForSpam("[SPAM] How to earn fast money?")