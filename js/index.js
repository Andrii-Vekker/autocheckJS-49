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

// function checkForSpam(message) {
//   let result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");
//   // Change code below this line
// console.log(result)
//   // Change code above this line
//   return result;
// }

// checkForSpam("Latest technology news")
// checkForSpam("JavaScript weekly newsletter")
// checkForSpam("Get best sale offers now!")
// checkForSpam("Amazing SalE, only tonight!")
// checkForSpam("Trust me, this is not a spam message")
// checkForSpam("Get rid of sPaM emails. Our book in on sale!")
// checkForSpam("[SPAM] How to earn fast money?")




//module-2 task1//////////////////////////////////////////////

// Функция checkPassword получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD
// и возвращает сообщение о результате сравнения.
// Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:
// удали переменную message
// удали else
// код должен работать так же, как и до оптимизации
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
 

//   if (password === ADMIN_PASSWORD) {
    
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
 
// }

//  checkPassword("mangohackzor")
//  checkPassword("polyhax")
//  checkPassword("jqueryismyjam")

////task3////////////////////////////////////////////////////////////////////////////
// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - количество единиц товара в заказе
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(70, 0) возвращает "Your order is empty!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, not enough goods in stock!"
// Вызов checkStorage(150, 0) возвращает "Your order is empty!"

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }


// checkStorage(100, 50)
// checkStorage(100, 130)
// checkStorage(70, 0)
// checkStorage(200, 20)
// checkStorage(200, 250)
// checkStorage(150, 0)



/////////////////////////////////////////////////
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex]

// console.log(lastElementIndex)
// console.log(lastElement)

////////////////////////////////////////

// Напиши функцию getExtremeElements(array) которая принимает один параметр array -
//   массив элементов произвольной длины.Функция должна возвращать массив из двух элементов -
//     первого и последнего элемента параметра array.
// Объявлена функция getExtremeElements(array)
// Вызов getExtremeElements([1, 2, 3, 4, 5]) возвращает [1, 5]
// Вызов getExtremeElements(["Earth", "Mars", "Venus"]) возвращает ["Earth", "Venus"]
// Вызов getExtremeElements(["apple", "peach", "pear", "banana"]) возвращает ["apple", "banana"]

// function getExtremeElements(array) {
//   // Change code below this line
//   const newMass = []
  
//   newMass.push(array[0], array[array.length-1])
//   console.log(newMass)

//   // Change code above this line
//   return newMass;
// }


//  getExtremeElements([1, 2, 3, 4, 5])
//  getExtremeElements(["Earth", "Mars", "Venus"])
//  getExtremeElements(["apple", "peach", "pear", "banana"])

///////////////////////////////////////////////////////////////////////////////////////

// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words
// результат разделения строки message по разделителюdelimeter - массив строк.
// Объявлена функция splitMessage(message, delimeter)
// Вызов splitMessage("Mango hurries to the train", " ") возвращает ["Mango", "hurries", "to", "the", "train"]
// Вызов splitMessage("Mango", "") возвращает ["M", "a", "n", "g", "o"]
// Вызов splitMessage("best_for_week", "_") возвращает ["best", "for", "week"]

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter)
//   console.log(words)
//   // Change code above this line
//   return words;
// }

//  splitMessage("Mango hurries to the train", " ")
//  splitMessage("Mango", "")
//  splitMessage("best_for_week", "_")

//////////////////////////////////////////////////////////////////////////////////////
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки,
// в зависимости от количества слов и цены за слово.
// Объявлена функция calculateEngravingPrice(message, pricePerWord).Эта функция принимает строку,
// состоящую из слов разделённых только пробелами(параметр message) и цену гравировки одного слова(параметр pricePerWord).
// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
// Объявлена функция calculateEngravingPrice(message, pricePerWord)
// Вызов calculateEngravingPrice("JavaScript is in my blood", 10) возвращает 50
// Вызов calculateEngravingPrice("JavaScript is in my blood", 20) возвращает 100
// Вызов calculateEngravingPrice("Web-development is creative work", 40) возвращает 160
// Вызов calculateEngravingPrice("Web-development is creative work", 20) возвращает 80

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const mass = message.split(" ")
//   let total = mass.length * pricePerWord

//   console.log(mass.length)
//   console.log(total)

//   return total;
//    // Change code above this line
// }

//  calculateEngravingPrice("JavaScript is in my blood", 10)
//  calculateEngravingPrice("JavaScript is in my blood", 20)
//  calculateEngravingPrice("Web-development is creative work", 40)
//  calculateEngravingPrice("Web-development is creative work", 20)

/////////////////////////////////////////////////////////////////////////
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат
//  соединения элементов массива array c разделителем delimeter - строку.
// Объявлена функция makeStringFromArray(array, delimeter)
// Вызов makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") возвращает "Mango hurries to the train"
// Вызов makeStringFromArray(["M", "a", "n", "g", "o"], "")) возвращает "Mango"
// Вызов makeStringFromArray(["top", "picks", "for", "you"], "_") возвращает "top_picks_for_you"

// function makeStringFromArray(array, delimeter) {
//   let string = array.join(delimeter)
//   // Change code below this line


// console.log(string)
//   // Change code above this line
//   return string;
// }

//  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
//  makeStringFromArray(["M", "a", "n", "g", "o"], "")
//  makeStringFromArray(["top", "picks", "for", "you"], "_")

///////////////////////////////////////////////////////////////////////////////

// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title,
// и возвращает slug, созданный из этой строки.
// Значением параметра title будут строки, слова которых разделены только пробелами
// Все символы slug должны быть в нижнем регистре
// Все слова slug должна быть разделены тире
// Объявлена функция slugify(title)
// Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
// Вызов slugify("English for developer") возвращает "english-for-developer"
// Вызов slugify("Ten secrets of JavaScript") возвращает "ten-secrets-of-javascript"
// Вызов slugify("How to become a JUNIOR developer in TWO WEEKS") возвращает "how-to-become-a-junior-developer-in-two-weeks"


// function slugify(title) {
//   // Change code below this line
// const slug = title.toLowerCase().split(" ").join("-")

// console.log(slug)
//   // Change code above this line
//   return slug;
// }


//  slugify("Arrays for begginers")
//  slugify("English for developer")
//  slugify("Ten secrets of JavaScript")
//  slugify("How to become a JUNIOR developer in TWO WEEKS")

/////////////////////////////////////////////////////////////////////////////////////////////////
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов
// nonExtremeEls - массив из всех элементов кроме первого и последнего
// lastThreeEls - массив из трёх последних элементов
// Объявлена переменная fruits
// Значение переменной fruits это массив ["apple", "plum", "pear", "orange", "banana"]
// Объявлена переменная firstTwoEls
// Значение переменной firstTwoEls это массив ["apple", "plum"]
// Объявлена переменная nonExtremeEls
// Значение переменной nonExtremeEls это массив ["plum", "pear", "orange"]
// Объявлена переменная lastThreeEls
// Значение переменной lastThreeEls это массив ["pear", "orange", "banana"]
// Переменной lastThreeEls присвоена копия части массива fruits после применения метода slice с правильными
// аргументами


// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls)
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// console.log(nonExtremeEls)
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls)

//////////////////////////////////////////////////////////////////////////////////
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами
// двух исходных firstArray и secondArray.Параметр maxLength содержит максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength
// элементов.В противном случае функция должна вернуть новый массив целиком.
// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) возвращает ["Mango", "Poly", "Ajax"]
// Вызов makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)возвращает["Mango", "Poly", "Houston", "Ajax"]
// Вызов makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) возвращает ["Mango", "Ajax", "Chelsea"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) возвращает ["Earth", "Jupiter"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) возвращает ["Earth", "Jupiter", "Neptune", "Uranus"]
// Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) возвращает []
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив


// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let mass = firstArray.concat(secondArray);
//   mass = mass.length > maxLength ? mass.slice(0, maxLength) : mass
//   console.log(mass)
//   return mass
// }

//  makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
//  makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
//  makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
// // Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив


//////////////////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//   // Change code below this line
//   const numbersArr = [];
  
//   for (const number of numbers) {
//     if (number > value) {
//        numbersArr.push(number)
//       console.log(numbersArr)
//     }
//   }
//   return numbersArr;
// }
//   filterArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)

/////////////////////////////////////////////////////////////////////////
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
// Объявлена переменная start
// Значение переменной start это число 3
// Объявлена переменная end
// Значение переменной end это число 7
// Объявлена переменная i - счётчик цикла
// Начальное значение переменной i равно 3
// Условие цикла приводится к true до тех пор, пока i меньше либо равно 7
// На каждой итерации значение переменной i увеличивается на единицу
// Вывод в консоль переменной i покажет числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


/////////////////////////////////////////////////////////////////////////////////////
// Напиши функцию calculateTotal(number), которая принимает целое число(параметр number)
// и возвращает сумму всех целых чисел от единицы и до этого числа.Например, если number равно 3,
// то сумма это 1 + 2 + 3, то есть 6.
// Объявлена функция calculateTotal(number)
// Вызов функции calculateTotal(1) возвращает 1
// Вызов функции calculateTotal(3) возвращает 6
// Вызов функции calculateTotal(7) возвращает 28
// Вызов функции calculateTotal(18) возвращает 171
// Вызов функции calculateTotal(24) возвращает 300
// Вызов функции calculateTotal() со случайным числом возвращает правильное значение

// function calculateTotal(number) {
//  // Change code below this line
// const start = 0
//   let total = 0 ;
// for (let i = start; i <= number; i += 1) {
// total += i
//   //console.log(i);
//   console.log(total)
// }return total
//   // Change code above this line
// }

  //calculateTotal(1) 
  //calculateTotal(3) 
  //calculateTotal(7) 
  //calculateTotal(18) 
  //calculateTotal(24) 
  //calculateTotal() 
  
  /////////////////////////////////////////////////////////
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
// Объявлена переменная fruits
// Значение переменной fruits это массив ["apple", "plum", "pear", "orange"]
// Объявлена переменная i - счётчик цикла
// Начальное значение переменной i равно 0
// Условие цикла приводится к true до тех пор, пока i меньше 4
// На каждой итерации значение переменной i увеличивается на единицу
// В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение -
//   элемент массива
// В теле цикла for используется вывод в консоль переменной fruit

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }


////////////////////////////////////////////////////////////////////
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел,
// и рассчитывает общую сумму его элементов.Общая сумма элементов должна сохраняться в переменной total,
// которая возвращается, как результат работы функции.
// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice() со случайным массивом возвращает правильное значение
 
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i+=1) {
//  total += order[i];
 
// }
// // Change code above this line
// console.log(total)
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]) 
// calculateTotalPrice([164, 48, 291]) 
// calculateTotalPrice([412, 371, 94, 63, 176]) 
// //calculateTotalPrice() 


////////////////////////////////////////////////////////////////////////////////
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов 
// разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение

// function findLongestWord(string) {
//   // Change code below this line
//   const arr = string.split(" ")

//   let longestWord = arr[0]
  
//   for (let i = 0; i < arr.length; i += 1) {
  
//     if (longestWord.length < arr[i].length) {
//       longestWord = arr[i]
//       console.log(longestWord)
//     }
  
//   } return longestWord;
// }

//  findLongestWord("The quick brown fox jumped over the lazy dog") 
//  findLongestWord("Google do a roll") 
//  findLongestWord("May the force be with you")
//  findLongestWord("polly ajax") 

///////////////////////////////////////////////////////////////////////////////
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от 
// значения min до max.
// Объявлена функция createArrayOfNumbers(min, max)
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// В цикле for использовался метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
   
//   for (let i = min; i <= max; i+=1) {
//     numbers.push(i)
    
//   }
//   // Change code below this line
// console.log(numbers)
//   // Change code above this line
//   return numbers;
// }

//  createArrayOfNumbers(1, 3) 
//  createArrayOfNumbers(14, 17) 
//  createArrayOfNumbers(29, 34) 
//  createArrayOfNumbers() 


// function checkFruit(fruit) {
//   const fruits = "apple";
//   let hasFruit;
// fruit === fruits ? hasFruit = true :hasFruit = false
//    console.log(hasFruit)
//    return hasFruit;
// }

// checkFruit("apple")


//////////////////////////////////////////////////////////////////////////////////
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) 
// и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше 
// чем значение параметра value(число).
// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// В цикле for использовался метод push

// function filterArray(numbers, value) {
//    // Change code below this line
  
//   const newArr = []

// for (const element of numbers) {
//   if (element > value) {
//     newArr.push(element)
//   }
// }console.log(newArr)
//   return newArr;
//   // Change code above this line
// }


//  filterArray([1, 2, 3, 4, 5], 3)
//  filterArray([1, 2, 3, 4, 5], 4) 
//  filterArray([1, 2, 3, 4, 5], 5) 
//  filterArray([12, 24, 8, 41, 76], 38) 
//  filterArray([12, 24, 8, 41, 76], 20) 
//  //filterArray() 

/////////////////////////////////////////////////////////////////////////////
// Функция checkFruit(fruit) принимает строку с названием фрукта(параметр fruit),
// и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.
// Объявлена функция checkFruit(fruit)
// Вызов checkFruit("plum") возвращает true
// Вызов checkFruit("mandarin") возвращает false
// Вызов checkFruit("pear") возвращает true
// Вызов checkFruit("Pear") возвращает false
// Вызов checkFruit("apple") возвращает true
// Вызов функции checkFruit() со случайным словом возвращает правильное значение boolean
// В функции использовался метод includes

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit) ? true : false;
// }
// console.log( checkFruit("plum")) // Change this line

//  checkFruit("plum")
//  checkFruit("mandarin") 
//  checkFruit("pear")
//  checkFruit("Pear") 
//  checkFruit("apple")


////////////////////////////////////////////////////////////////////////////////
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
//   Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют в 
// обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в 
// параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в 
// обоих исходных массивах.
// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// В цикле for использовались методы includes и push

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArr = []

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       newArr.push(element);
//     }
//     console.log(newArr)
//   } return newArr;

//  // Change code above this line
// }

//  getCommonElements([1, 2, 3], [2, 4]) 
//  getCommonElements([1, 2, 3], [2, 1, 17, 19]) 
//  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) 
//  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
//  getCommonElements([1, 2, 3], [10, 20, 30]) 


///////////////////////////////////////////////////////////////////////////////////////
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// Функция calculateTotalPrice() использует цикл for..of

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   //   if (number > value) {
//   //     filteredNumbers.push(number);
//   //   }
//   // }

//   for (const number of numbers) {
//    if (number > value) {
//       filteredNumbers.push(number);
//    }
  
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

//  filterArray([1, 2, 3, 4, 5], 3) 
//  filterArray([1, 2, 3, 4, 5], 4) 
//  filterArray([1, 2, 3, 4, 5], 5) 
//  filterArray([12, 24, 8, 41, 76], 38) 
//  filterArray([12, 24, 8, 41, 76], 20)



////////////////////////////////////////////////////////////////////////////////////////
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).
// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const newArr = []
//   for (let i = start; i <= end; i += 1) {
  
//     if (i % 2 === 0) {
//       newArr.push(i)
//     }
//   }
//   console.log(newArr)
//   return newArr;
//     // Change code above this line
// }
  
//  getEvenNumbers(2, 5) 
//  getEvenNumbers(3, 11) 
//  getEvenNumbers(6, 12) 
//  getEvenNumbers(8, 8) 
//  getEvenNumbers(7, 7)

////////////////////////////////////////////////////////////////
// Объявлена переменная start со значением 6
// Объявлена переменная end со значением 27
// Объявлена переменная number без инициализации
// Итоговое значение переменной number равно 10
// В цикле for используется break для выхода до завершения всех итераций цикла

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     console.log(number)
//     break
//   }
//   }

/////////////////////////////////////////////////////////////////////////////////
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number

// Объявлена функция findNumber(start, end, divisor)
// Вызов findNumber(2, 6, 5) возвращает 5
// Вызов findNumber(8, 17, 3) возвращает 9
// Вызов findNumber(6, 9, 4) возвращает 8
// Вызов findNumber(16, 35, 7) возвращает 21
// Вызов findNumber() со случайным набором чисел возвращает верный результат
// В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

//  findNumber(2, 6, 5)
//  findNumber(8, 17, 3)
//  findNumber(6, 9, 4)
//  findNumber(16, 35, 7) 


// /////////////////////////////////////////////////////////////////////////////////
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение)
// - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes

function includes(array, value) {
  // Change code below this line
  for (const element of array) {
    if (element === value) {
      return true
    }
  }return false
}

console.log(includes([1, 2, 3, 4, 5], 3) )
 includes([1, 2, 3, 4, 5], 3) 
 includes([1, 2, 3, 4, 5], 17) 
 includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") 
 includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") 
 includes(["apple", "plum", "pear", "orange"], "plum") 
 includes(["apple", "plum", "pear", "orange"], "kiwi") 