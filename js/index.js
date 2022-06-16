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

// function includes(array, value) {
//   // Change code below this line
//   for (const element of array) {
//     if (element === value) {
//       return true
//     }
//   }return false
// }

// console.log(includes([1, 2, 3, 4, 5], 3) )
//  includes([1, 2, 3, 4, 5], 3) 
//  includes([1, 2, 3, 4, 5], 17) 
//  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") 
//  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") 
//  includes(["apple", "plum", "pear", "orange"], "plum") 
//  includes(["apple", "plum", "pear", "orange"], "kiwi") 




///////////////////////////////////////////////////////////////////////////////////
// module 3
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.
// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.
// Объявлена переменная apartment с помощью const
// Значение переменной apartment это объект
// Объявлена переменная ownerName с помощью const
// Значение переменной ownerName это строка "Henry"
// Объявлена переменная ownerPhone с помощью const
// Значение переменной ownerPhone это "982-126-1588"
// Объявлена переменная ownerEmail с помощью const
// Значение переменной ownerEmail это "henry.carter@aptmail.com"
// Объявлена переменная numberOfTags с помощью const
// Значение переменной numberOfTags это 3
// Объявлена переменная firstTag с помощью const
// Значение переменной firstTag это "premium"
// Объявлена переменная lastTag с помощью const
// Значение переменной lastTag это "top"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// console.log(lastTag)




// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
//  apartment.location = {country :"Jamaica"};
// apartment.location.city = "Kingston"
// // Change code below this line
// console.log(apartment)


///////////////////////////////вычисляемые свойства//////////////////////////////////////
// Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password,
//   имена которых хранятся в переменных emailInputName и passwordInputName.
// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password -
//   строка "jqueryismyjam".
// Объявлена переменная credentials
// Значение переменной credentials это объект
// В объекте credentials есть свойство email
// Значение вложенного свойства email это строка "henry.carter@aptmail.com"
// В объекте credentials есть свойство password
// Значение вложенного свойства password это строка "jqueryismyjam"

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName] : "jqueryismyjam"

//   // Change code above this line
// };
// console.log(credentials.email)

////////////////////////////for in////////////////////////////////////////
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи,
//   а в массив values все значения его свойств.
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key)
//   values.push(apartment[key])
    
// }
// console.log(values)
// for (const value in apartment) {
//   values.push(value)
// }
// console.log(values)

///////////////////////////////hasOwnProperty for in///////////////////////////
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
// Объявлена переменная advert.
// Значение переменной advert это объект.
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
// if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//   values.push(apartment[key]);
// }
// }

//////////////////////////////////////////////////////////////////////////////////////////
// ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта 
// в параметре object.Используй переменную propCount для хранения количества свойств объекта.
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   // propCount = Object.keys(object).length
//   // console.log(propCount)
//   /////////////////////////////////////
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1
//     }
    
//   }
//   console.log(propCount)
// return propCount;
// }

// countProps({})
// countProps({ name: "Mango", age: 2 }) 
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) 

/////////////////////////////////////////////////////////////////////////////////////////
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// // console.log(keys)
// for (const key of keys) {
  
//   values.push(apartment[key])
// }
// console.log(values)

////////////////////////task14////////////////////////////////
// ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно,
//   но необязательно, цикл for...of.
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   propCount = Object.keys(object).length
//   console.log(propCount)
//   return propCount
// }

// countProps({}) 
// countProps({ name: "Mango", age: 2 }) 
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) 

/////////////////////////////////task15//////////////////////////////////
// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// а в переменную values массив всех значений его свойств.Используй методы Object.keys() и Object.values().
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// Для получения массива ключей объекта apartment используется Object.keys()
// Для получения массива значений объекта apartment используется Object.values()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

/////////////////////////////////////task16///////////////////////////////////////////
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
// где имя свойства это имя сотрудника, а значение свойства это зарплата.Функция должна 
// рассчитать общую сумму зарплат сотрудников и вернуть её.Используй переменную totalSalary для 
// хранения общей суммы зарплаты.
// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const sum = Object.values(salaries)
//   for (const value of sum) {
//     totalSalary += value
//   }
//   console.log(totalSalary)
//   // Change code above this line
//   return totalSalary;
// }


//  countTotalSalary({})
//  countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) 
//  countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) 

/////////////////////////////////////task17///////////////////////////////////////
// Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb из всех объектов массива colors.
// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const hexColors = [];
// const rgbColors = [];
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors)


////////////////////////////////task18///////////////////////////////////////
// ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName -
// название продукта.Функция ищет объект продукта с таким именем(свойство name) в массиве products 
// и возвращает его цену(свойство price).Если продукт с таким названием не найден, функция должна 
// возвращать null.
// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
// for (const product of products) {
//   if (productName === product.name) {
//     return product.price
//   }
  
// }
  
// return null
// }

// console.log( getProductPrice("Radar"))
// console.log( getProductPrice("Grip"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Engine") )
//  getProductPrice("Radar")
//  getProductPrice("Grip")
//  getProductPrice("Scanner")
//  getProductPrice("Droid")
//  getProductPrice("Engine")

///////////////////////////////////////////////task19////////////////////////////////////////////
// ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName -
// имя(ключ) свойства.Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта
//  в массиве products.Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const property = []
// function getAllPropValues(propName) {
//   for (const product of products) {
//     //console.log(product.name)
//     if (product[propName]) {
//       //console.log(product[propName])
//        property.push(product[propName]);
//     }
    
//   } return property;
//   }
//   console.log(getAllPropValues("name"))
//  console.log(getAllPropValues("quantity"))
// console.log(getAllPropValues("price") )
//  console.log(getAllPropValues("category"))
// getAllPropValues("name") 
// getAllPropValues("quantity")
// getAllPropValues("price") 


/////////////////////////////////task20///////////////////////////////////
// ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName -
// название товара.Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из 
// массива products.
// Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   let total = 0
//   for (const product of products) {
//    if (productName === product.name) {
//       total = product.price * product.quantity
//    }
   
//   }
//   return total;
// }

// console.log(calculateTotalPrice("Scanner"))
//  calculateTotalPrice("Blaster")
//  calculateTotalPrice("Radar")
//  calculateTotalPrice("Droid")
//  calculateTotalPrice("Grip") 
//  calculateTotalPrice("Scanner")

/////////////////////////////////////////task21//////////////////////////////////////
// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня
// (meanTemperature).Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации 
// свойств объекта highTemperatures.
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная meanTemperature
// Значение переменной meanTemperature это число 29
// Используется синтаксис деструктуризации объекта highTemperatures

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

////////////////////////////////////////task22///////////////////////////////////////
// В прогнозе максимальных температур также может быть необязательное свойство icon -
// иконка погоды.Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная icon с помощью деструктуризации
// Значение переменной icon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
 
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures


// const meanTemperature = (yesterday + today + tomorrow) / 3;

////////////////////////////////task23/////////////////////////////////////////
// Замени объявления переменных highYesterday, highToday, highTomorrow и 
// highIcon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по
// умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная highYesterday
// Значение переменной highYesterday это число 28
// Объявлена переменная highToday
// Значение переменной highToday это число 26
// Объявлена переменная highTomorrow
// Значение переменной highTomorrow это число 33
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this linet
// const{yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures

//////////////////////////////////////////////////
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

//////////////////////////////////////task24//////////////////////////
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..
// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебора массива используется цикл for...of
// В цикле for...of используется деструктуризация объекта

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex,rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors)
// console.log(rgbColors)

//////////////////////////////task25 глубокая деструктуризация//////////////////////////////
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными
// иконками.Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast.
// Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon -
// строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Объявлена переменная forecast
// Значение переменной forecast это объект
// Объявлена переменная highToday с помощью деструктуризации
// Значение переменной highToday это число 32
// Объявлена переменная lowToday с помощью деструктуризации
// Значение переменной lowToday это число 28
// Объявлена переменная todayIcon с помощью деструктуризации
// Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Объявлена переменная highTomorrow с помощью деструктуризации
// Значение переменной highTomorrow это число 31
// Объявлена переменная lowTomorrow с помощью деструктуризации
// Значение переменной lowTomorrow это число 27
// Объявлена переменная tomorrowIcon с помощью деструктуризации
// Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Используется синтаксис деструктуризации объекта highTemperatures

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon =
//   "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon =
//     "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast


//////////////////////////////////task 25 патерн ОБЬЕКТ НАСТРОЕК///////////////////////////////////
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast -
//   объект температур на два дня следующего формата.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией 
// деструктуризации свойств объекта forecast.
// Объявлена функция calculateMeanTemperature(forecast)
// В теле функции используется деструктуризация объекта
// В теле функции объявлена переменная todayHigh с помощью деструктуризации
// В теле функции объявлена переменная todayLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
// Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
// Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37

// const forecast = {
//    today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
//  }

//  function calculateMeanTemperature(forecast) {
//   const { today: { low: todayLow, high: todayHigh }, tomorrow: { low :tomorrowLow,
//   high: tomorrowHigh } } = forecast

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })
// calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} })

/////////////////////////////////////task 27 SPREAD//////////////////////////////////

// В переменной scores хранится массив результатов тестирования.Используя распыление и методы
// Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл,
// а в worstScore самый низкий.
// Объявлена переменная scores
// Значение переменной scores это массив [89, 64, 42, 17, 93, 51, 26]
// Объявлена переменная bestScore
// Значение переменной bestScore это число 93
// Объявлена переменная worstScore
// Значение переменной worstScore это число 17
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве scores
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве scores

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

/////////////////////////////////////////task28 ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА/////////////////
// В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования 
// отдельных групп.Используя распыление дополни код так, чтобы:
// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.
// Объявлена переменная firstGroupScores
// Значение переменной firstGroupScores это массив [64, 42, 93]
// Объявлена переменная secondGroupScores
// Значение переменной secondGroupScores это массив [89, 14, 51, 26]
// Объявлена переменная thirdGroupScores
// Значение переменной thirdGroupScores это массив [29, 47, 18, 97, 81]
// Объявлена переменная allScores.
// Значение переменной allScores это массив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Объявлена переменная bestScore
// Значение переменной bestScore это число 97
// Объявлена переменная worstScore
// Значение переменной worstScore это число 14
// При присвоении значения переменной allScores использовался синтаксис ... для заполнения массива
// Для передачи аргументов методу Math.max() используется синтаксис ... на массиве allScores
// Для передачи аргументов методу Math.min() используется синтаксис ... на массиве allScores
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores)

//////////////////////////////////task29 ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА//////////////////////
// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в 
// переменной defaultSettings.Во время создания теста, все или часть настроек можно переопределить,
//   они хранятся в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх
//  них применить переопределённые настройки.Дополни код так, чтобы в переменной finalSettings получился 
//  объект финальных настроек теста.
// Объявлена переменная defaultSettings
// Значение переменной defaultSettings это объект
// Объявлена переменная overrideSettings
// Значение переменной overrideSettings это объект
// Объявлена переменная finalSettings
// Значение переменной finalSettings это объект
// Значение свойства finalSettings.theme равно "light"
// Значение свойства finalSettings.public равно "false"
// Значение свойства finalSettings.withPassword равно "true"
// Значение свойства finalSettings.minNumberOfQuestions равно 10
// Значение свойства finalSettings.timePerQuestion равно 30
// При присваивании значения переменной finalSettings используется синтаксис ...

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

///////////////////////////////////task30 карточки задач///////////////////////////////
// Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.
// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.Функция должна составить и вернуть новый объект задачи, не изменяя напрямую 
// параметр data.В новом объекте должно быть свойство completed, значение которого хранится в одноимённой 
// локальной переменной.
// В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут
// отсутствовать.Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, 
// хранящиеся в одноимённых локальных переменных.
// Объявлена функция makeTask(data)
// Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
// Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает
// { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает
// { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает
// { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Вызов makeTask({ text: "Buy bread" }) возвращает {
//   category: "General", priority: "Normal",
//   text: "Buy bread", completed: false
// }

// function makeTask(...{category = "General", priority = "Normal", text, completed = false}) {
  
//   // const completed = false;
//   // const category = "General";
//   // const priority = "Normal";
//  return {category, priority, text, completed}
// }
////////////////////////////////////////////
// function makeTask(data) {
  
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//  return {category, priority, ...data, completed}
// }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) )
//  makeTask({}) 
//  makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) 
//  makeTask({ category: "Finance", text: "Take interest" })
//  makeTask({ priority: "Low", text: "Choose shampoo" }) 
//  makeTask({ text: "Buy bread" })

//////////////////////////////////task31ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ/////////////
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов,
// считала и возвращала их сумму.
// Объявлена функция add
// Функция add использует параметр args
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
// Вызов add(15, 27) возвращает 42
// Вызов add(12, 4, 11, 48) возвращает 75
// Вызов add(32, 6, 13, 19, 8) возвращает 78
// Вызов add(74, 11, 62, 46, 12, 36) возвращает 241

// Change code below this line
// function add(...args) {
//   console.log(args)
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg
//   }
//   console.log(sum)
//   return sum
// }

//  add(15, 27)
//  add(12, 4, 11, 48)
//  add(32, 6, 13, 19, 8)
//  add(74, 11, 62, 46, 12, 36) 

////////////////////////////////////////////task32 ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ///////////
// Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так,
// чтобы она считала сумму только тех аргументов, которые больше чем заданное число.Это число должно быть 
// первым параметром функции.
// Объявлена функция addOverNum()
// Вызов addOverNum(50, 15, 27) возвращает 0
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218

// function addOverNum(...args) {
//   let total = 0;

//   for (const arg of args) {
//     //console.log(arg)
//    if (arg > args[0]) {
//      total += arg;
//     }
//     console.log(total)
//   }

//   return total;
  
// }

//  addOverNum(50, 15, 27)
//  addOverNum(10, 12, 4, 11, 48, 10, 8) 
//  addOverNum(15, 32, 6, 13, 19, 8) 
//  addOverNum(20, 74, 11, 62, 46, 12, 36) 

////////////////////////task33 ЗАДАЧА. МАССИВ СОВПАДЕНИЙ///////////////////////////////////
// Функция findMatches() принимает произвольное количество аргументов.Первым аргументом всегда будет 
// массив чисел, а остальные аргументы будут просто числами.
// Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы,
// начиная со второго, которые есть в массиве первого аргумента.
// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2],
// потому что только они есть в массиве первого аргумента.
// Объявлена функция findMatches()
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает []

// function findMatches(a, ...args) {
//   const arr = [...a, ...args]
//   // const matches = []; // Don't change this line
//   for (let i = 0; i < arr.length; i+=1) {
//     const matches = arr.filter(num => num === arr[i])
//     console.log(matches)
    
    
//   }
// for (const arg of args) {
//   if (a.includes(arg)) {
//     matches.push(arg)
//   }
  
//   //console.log(matches)
//   }
  
  //return matches
// }

 //console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7))

//findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
//  findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) 
//  findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) 
//  findMatches([63, 11, 8, 29], 4, 7, 16)

///////////////////////////////task34 МЕТОДЫ ОБЪЕКТА//////////////////////////////////////
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с
// getBooks() и addBook(bookName).
// Метод removeBook(bookName) будет удалять книгу по имени.Возвращает строку "Deleting book <имя книги>",
//   где < имя книги > это значение параметра bookName.
// Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает строку
// "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это значения параметров 
// oldName и newName соотвественно.
// Объявлена переменная bookShelf
// Значение переменной bookShelf это объект
// Значение свойства bookShelf.getBooks это метод объекта
// Вызов метода bookShelf.getBooks() возвращает строку "Returning all books"
// Значение свойства bookShelf.addBook это метод объекта
// Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"
// Значение свойства bookShelf.removeBook это метод объекта
// Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"
// Значение свойства bookShelf.updateBook это метод объекта
// Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune 
// to Dune"

// const bookShelf = {
//   // Change code below this line
  
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(deleteBook) {
    
//     return `Deleting book ${deleteBook}`
    
//   },
//   updateBook (oldName, newName) {

//     return `Updating book ${oldName} to ${newName}`
//   }

// };
// console.log(bookShelf.getBooks())
// console.log( bookShelf.addBook("Haze") )
// console.log( bookShelf.removeBook("Red sunset") )
// console.log( bookShelf.updateBook("Sands of dune", "Dune") )
//  bookShelf.getBooks() 
//  bookShelf.addBook("Haze") 
//  bookShelf.removeBook("Red sunset") 
//  bookShelf.updateBook("Sands of dune", "Dune") 

/////////////////////////////////////////task35 ДОСТУП К СВОЙСТВАМ ОБЪЕКТА В ЕГО МЕТОДАХ////////////////////
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в 
// свойстве books.Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы 
// заменить этот элемент
// Объявлена переменная bookShelf
// Значение переменной bookShelf это объект
// Значение свойства bookShelf.updateBook это метод объекта
// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), значение свойства books это массив
// ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), значение свойства books это массив
// ["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const index = this.books.indexOf(oldName);
//     this.books.splice(index, 1 , newName)


//     // Change code above this line
//     return this.books
//   }
  
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))
// console.log(bookShelf.updateBook("The last kingdom", "Dune"))
//  bookShelf.updateBook("Haze", "Dungeon chronicles")
//  bookShelf.updateBook("The last kingdom", "Dune")

//////////////////////////////////task36 ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»////////////////////////
// К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря -
// добавления, удаления, поиска и обновления зелий.Добавь объекту atTheOldToad свойство potions,
// значением которого сделай пустой массив.
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив []

// const atTheOldToad = {
//   potions: []
 

// };

//////////////////////////////////task37 ЗАДАЧА. ПОЛУЧАЕМ ВСЕ ЗЕЛЬЯ///////////////////////////////////
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() возвращает ["Speed potion", "Dragon breath", "Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
//   getPotions() {
//     return this.potions
//   }
// };

// atTheOldToad.getPotions()

///////////////////////////task38 ЗАДАЧА: ДОБАВЛЯЕМ НОВОЕ ЗЕЛЬЕ/////////////////////////////////////
// Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий 
// в свойстве potions.
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.addPotion это метод объекта
// После первого вызова метода atTheOldToad.addPotion("Invisibility"), в свойстве potions будет массив
// ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// После второго вызова метода atTheOldToad.addPotion("Power potion"), в свойстве potions будет массив
// ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//  this.potions.push(potionName)

//     return this.potions
//   },


// };

// console.log(atTheOldToad.addPotion("Invisibility"))
// console.log(atTheOldToad.addPotion("Power potion"))
// atTheOldToad.addPotion("Invisibility")
// atTheOldToad.addPotion("Power potion")

////////////////////////////////////task 39 ЗАДАЧА. УДАЛЯЕМ ЗЕЛЬЕ////////////////////////////
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.removePotion это метод объекта
// После первого вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив
// ["Speed potion", Stone skin"]
// После второго вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив
// ["Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//   const index = this.potions.indexOf(potionName)
//     this.potions.splice(index, 1);

//     return this.potions
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"))
// console.log(atTheOldToad.removePotion("Speed potion"))
// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")

//////////////////////////////////////////task 40 ЗАДАЧА: ОБНОВЛЯЕМ ЗЕЛЬЕ////////////////////////////////
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName,
// в массиве зелий в свойстве potions.
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// в свойстве potions будет массив["Speed potion", "Polymorth", "Stone skin"]
// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
// в свойстве potions будет массив["Speed potion", "Polymorth", "Invisibility"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     const index = this.potions.indexOf(oldName)
//     this.potions.splice(index, 1, newName)
// return this.potions
//   },
// };


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"))
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invisibility")

////////////////////////////////////////task41 ЗАДАЧА: РАСШИРЯЕМ ИНВЕНТАРЬ//////////////////////////
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и 
// другими характеристиками.Поэтому теперь в свойстве potions будет храниться массив объектов со следующими
// свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом
// объектов.
// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion(уже объект) в массив в свойстве potions, но только если 
// такого зелья еще нет в инвентаре.В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта - зелья с названием oldName на newName
// в массиве potions.Объявлена переменная atTheOldToadЗначение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает[{ name: "Speed potion", price: 460 }
// , { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
// в массиве potions последним элементом будет этот объект
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
// в массиве potions последним элементом будет этот объект
// Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного
// кода
// Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект

//////////////////////////////////////////////////////////////////////////////////////////////////

// Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), массив 
// potions не изменяется
// Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions
//  не изменяется
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), возвращает строку
// "Error! Potion Dragon breath is already in your inventory!"
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), возвращает строку
// "Error! Potion Stone skin is already in your inventory!"
// Значение свойства atTheOldToad.removePotion это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет
// массив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет
// массив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 },
// { name: "Stone skin", price: 520 }]
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"),
//   в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
// { name: "Invulnerability potion", price: 520 }]

// const atTheOldToad = {
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }
//     // this.potions.push(newPotion);
//     for (const potion of this.potions) {
      
//       if (potion.name === newPotion.name) {
        
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
// } return this.potions.push(newPotion)
// },
// removePotion(potionName) {
//   //const potionIndex = this.potions.indexOf(potionName);
//   //   if (potionIndex === -1) {
//   //     return `Potion ${potionName} is not in inventory!`;
//   //   }
//   // this.potions.splice(potionIndex, 1);
//   for (const potion of this.potions) {
//     console.log(potion)
//     const potionIndex = this.potions.indexOf(potion)
//       console.log(potionIndex)
//     if (potion.name === potionName) {
//       //console.log(this.potions.splice(potionIndex, 1))
//       this.potions.splice(potionIndex, 1)
      
//     }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//   //const index = this.potions.indexOf(oldName)
//     for (const potion of this.potions) {
//       //console,log(potion.name)
//       if (potion.name === oldName) {
//         potion.name = newName
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//     // const potionIndex = this.potions.indexOf(oldName);
//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }
//     //  return this.potions.splice(potionIndex, 1, newName);
     

//     // const index = this.potions.indexOf(oldName)
//     // this.potions.splice(index, 1, newName)
//     // console.log(this.potions)

    
//   },
//   // Change code above this line
// };
//console.log(atTheOldToad.potions)
// console.log(atTheOldToad.removePotion("Dragon breath"))
//console.log(atTheOldToad.removePotion("Speed potion") )
// console.log(atTheOldToad.potions)

//atTheOldToad.getPotions()
//atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), //массив potions не изменяется
//atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), //массив potions не изменяется
//atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), //возвращает строку
// "Error! Potion Dragon breath is already in your inventory!"
//atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), //возвращает строку
// "Error! Potion Stone skin is already in your inventory!"
// atTheOldToad.removePotion("Dragon breath") //в свойстве potions будет
// массив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
//atTheOldToad.removePotion("Speed potion") //в свойстве potions будет
// массив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
//atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 },
// { name: "Stone skin", price: 520 }]
//atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// в свойстве potions будет массив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
// { name: "Invulnerability potion", price: 520 }]

////////////////////////callback function///////////////////////

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);

//////////////////////////////////////////////module 4//////////////////////////////////////
//////////////////////////////////////task1///////////////////////////////////////

// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza,
// а в переменной pointer была ссылка на функцию makePizza.
// Объявлена функция makePizza
// Объявлена переменная result
// Значение переменной result это строка "Your pizza is being prepared, please wait."
// Значение переменной result получено с помощью вызова функции
// Объявлена переменная pointer
// Значение переменной pointer это ссылка на функцию makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(result)

/////////////////////////////////////////////////task2///////////////////////////////////
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback) колбэк - функцию 
// и возвращала ее вызов.Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать
// аргументом имя готовой доставляемой пиццы.
// Объявлена функция deliverPizza
// Объявлена функция makePizza
// Объявлена функция makeMessage
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback
// Вызов makeMessage("Royal Grand", makePizza) возвращает строку "Pizza Royal Grand is being prepared, please 
// wait..."
// Вызов makeMessage("Ultracheese", deliverPizza) возвращает строку "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
// return callback(pizzaName)
// }


// console.log(makeMessage("Royal Grand", makePizza))
//  makeMessage("Royal Grand", makePizza)  
// console.log(makeMessage("Ultracheese", deliverPizza) )
//  makeMessage("Ultracheese", deliverPizza) 

///////////////////////////////////////////task3 inline callback/////////////////////////////////////////
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк - функцию
// eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".
// Объявлена функция makePizza
// Функция makePizza принимает два параметра
// Вторым аргументом при вызове makePizza("Ultracheese") передана функция eatPizza с единственным параметром
// pizzaName



// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });

///////////////////////////////task4 НЕСКОЛЬКО КОЛБЭКОВ//////////////////////////////
// Необходимо написать логику обработки заказа пиццы.Выполни рефакторинг метода order так, чтобы он принимал 
// вторым и третим параметрами 
// два колбэка onSuccess и onError.
// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат 
// вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the 
// assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат 
// вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
// Метод order объявляет три параметра
// Вызов pizzaPalace.order("Smoked", makePizza, onOrderError) возвращает "Your order is accepted. Cooking pizza 
// Smoked."
// Вызов pizzaPalace.order("Four meats", makePizza, onOrderError) возвращает "Your order is accepted. Cooking 
// pizza Four meats."
// Вызов pizzaPalace.order("Big Mike", makePizza, onOrderError) возвращает "Error! There is no pizza with a 
// name Big Mike in the assortment."
// Вызов pizzaPalace.order("Vienna", makePizza, onOrderError) возвращает "Error! There is no pizza with a 
// name Vienna in the assortment."


// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
   
//     // if (this.pizzas.includes(pizzaName)) {
      
//     //   return onSuccess(pizzaName)  
//     // } else {
//     //   return onError(pizzaName)
//     // }
//     ////second solution////
//     return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName) : onError(pizzaName)
  
//   },

// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! There is no pizza with a name
// ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError))
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError))

// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);



//////////////////////////////exaple/////////////////////////
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

////////////////////////////////////////task5 МЕТОД FOREACH(CALLBACK)//////////////////////////
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов,
// которая сохраняется в переменной totalPrice и возвращается как результат работы функции.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// Объявлена функция calculateTotalPrice(orderedItems)
// Для перебора массива orderedItems использован метод forEach
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   orderedItems.forEach(number =>  {
  
//   return totalPrice += number
// });
//   // Change code above this line
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))
//  calculateTotalPrice([12, 85, 37, 4])
//  calculateTotalPrice([164, 48, 291])
//  calculateTotalPrice([412, 371, 94, 63, 176]) 

///////////////////////////////////task6 ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ////////////////////////////
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы
// оригинального массива, которые больше чем значение параметра value.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// Объявлена функция filterArray(numbers, value)
// Для перебора массива numbers использован метод forEach
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }
//   numbers.forEach(function(number) {
//     if (number > value) {
//       filteredNumbers.push(number)
//     } 
//   });
  
//   // Change code above this line
//   console.log(filteredNumbers)
//   return filteredNumbers;
// }

//  filterArray([1, 2, 3, 4, 5], 3) 
//  filterArray([1, 2, 3, 4, 5], 4) 
//  filterArray([1, 2, 3, 4, 5], 5) 
//  filterArray([12, 24, 8, 41, 76], 38) 
//  filterArray([12, 24, 8, 41, 76], 20) 

/////////////////////////////////////task7 ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ///////////////////////////////////////////
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray,
// и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// Объявлена функция getCommonElements(firstArray, secondArray)
// Для перебора параметра (массива) использован метод forEach
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции со случайн

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   firstArray.forEach(function (number, index) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number)
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

//  getCommonElements([1, 2, 3], [2, 4])
//  getCommonElements([1, 2, 3], [2, 1, 17, 19]) 
//  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) 
//  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) 
//  getCommonElements([1, 2, 3], [10, 20, 30]) 

///////////////////////////////////////////task 8 СТРЕЛОЧНЫЕ ФУНКЦИИ.///////////////////////////////////////////////
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem
// }

//  calculateTotalPrice(5, 100)
//  calculateTotalPrice(8, 60)
//  calculateTotalPrice(3, 400) 

///////////////////////////////////////////task9 НЕЯВНЫЙ ВОЗВРАТ////////////////////////////////////////////
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметрами (quantity, pricePerItem)
// В функции использован неявный возврат
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice(3, 400) возвращает 1200
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) =>
//     quantity * pricePerItem;

// // Change code above this line

//  calculateTotalPrice(5, 100)
//  calculateTotalPrice(8, 60)
//  calculateTotalPrice(3, 400) 

///////////////////////////////////////task10 СТРЕЛОЧНЫЕ ФУНКЦИИ КАК КОЛЛБЕКИ////////////////////////////////////////
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. 
// Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.
// Объявлена переменная calculateTotalPrice
// Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
// Для перебора массива orderedItems использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// Change code below this line
//   const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach( item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

  
  
  
  
// console.log(calculateTotalPrice([12, 85, 37, 4]))
//  calculateTotalPrice([12, 85, 37, 4])
//  calculateTotalPrice([164, 48, 291])
//  calculateTotalPrice([412, 371, 94, 63, 176]) 

////////////////////////////////////////////////////////////////
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   // Change code below this line
// const array = [];
//   for (const product of products) {
//     //console.log(product)
//     const keys = Object.keys(product);
//     const values = Object.values(product);
//     keys.forEach(function (key, index) {
//       //console.log(key, index)
//      console.log("price")
//     });
//     // if (keys.includes(propName)) {
//       //   array.push(keys)
//       // }
//     }
    
// return array;
//   // Change code above this line
// }
// getAllPropValues("price")
///////////////////////////////////////////////////////////task11 ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0/////////////////////
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// Объявлена переменная filterArray
// Переменной filterArray присвоена стрелочная функция с параметрами (numbers, value)
// Для перебора массива numbers использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach( (number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

//  filterArray([1, 2, 3, 4, 5], 3) 
//  filterArray([1, 2, 3, 4, 5], 4) 
//  filterArray([1, 2, 3, 4, 5], 5) 
//  filterArray([12, 24, 8, 41, 76], 38) 
//  filterArray([12, 24, 8, 41, 76], 20) 

///////////////////////////////////////////////////////////////////task12 ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ 2.0///////////////////////////////
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Объявлена переменная getCommonElements.
// Переменной getCommonElements присвоена стрелочная функция с параметрами (firstArray, secondArray)
// Для перебора массива firstArray использован метод forEach
// Коллбек для метода forEach это стрелочная функция
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

//  getCommonElements([1, 2, 3], [2, 4])
//  getCommonElements([1, 2, 3], [2, 1, 17, 19]) 
//  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) 
//  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) 
//  getCommonElements([1, 2, 3], [10, 20, 30]) 

////////////////////////////task 13 ЧИСТЫЕ ФУНКЦИИ/////////////////////////////////////
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число,
// добавляя к нему значение параметра value.
// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала 
// новый массив с обновлёнными значениями.
// Объявлена функция changeEven(numbers, value)
// Функция changeEven не изменяет значение параметра numbers
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5]
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16]
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142]
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение


// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArr = []
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   numbers.forEach(number => {
//     // if (number % 2 === 0) {
//     //  newArr.push(number + value)
//     // } else {
//     //   newArr.push(number)
//     // }
//     //console.log(newArr)
//     ///////declarated/////////////////
//     //number % 2 === 0 ? newArr.push(number + value) : newArr.push(number)
//     /////////////////////////////////////
//   });
//   console.log(newArr)
//   //return newArr
//   // Change code above this line
// }

//  changeEven([1, 2, 3, 4, 5], 10) 
//  changeEven([2, 8, 3, 7, 4, 6], 10) 
//  changeEven([17, 24, 68, 31, 42], 100) 
// changeEven([44, 13, 81, 92, 36, 54], 100) 
 
//////////////////////////////////task 14 МЕТОД MAP()///////////////////////////////////

// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
// Объявлена переменная planets
// Значение переменной planets это массив ["Earth", "Mars", "Venus", "Jupiter"]
// Объявлена переменная planetsLengths
// Значение переменной planetsLengths это массив [5, 4, 5, 7]
// Для перебора массива планет использован метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths)

///////////////////////////////////////////////task15 МЕТОД MAP() И МАССИВ ОБЪЕКТОВ/////////////////////////
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.
// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная titles
// Значение переменной titles это массив["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood",
//   "Enemy of God"]
// Для перебора массива books используется метод map() как чистая функция

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)

///////////////////////////////////////////////////////task16 МЕТОД FLATMAP()/////////////////////
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная genres
// Значение переменной genres это массив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебора массива books используется метод flatMap()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres)

///////////////////////////////////////////////////////task17 ЗАДАЧА. ИМЕНА ПОЛЬЗОВАТЕЛЕЙ//////////////////////////////
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// Объявлена переменная getUserNames
// Переменной getUserNames присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод map()
// Вызов функции с указанным массивом пользователей возвращает массив["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head",
//   "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// const getUserNames = users => {
    
// return users.map (user => user.name)
//   };

//////////////////////////////////task18 массив обьектов пользователей//////////////////////////
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей(свойство email)
// из массива объектов в параметре users.
// Объявлена переменная getUserNames
// Переменной getUserNames присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод map()
// Вызов функции с указанным массивом пользователей возвращает массив["moorehensley@indexia.com", "sharlenebush@tubesys.com",
// "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// const getUserEmails = users => {
    
// return users.map(user => user.email)
// };
//   console.log(users.map(user => user.email))

////////////////////////////////////////////task19 МЕТОДЫ FILTER И FIND/////////////////////////////////////////////////
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных.
// Обязательно используй метод filter().
// Объявлена переменная numbers
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Объявлена переменная evenNumbers
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52]
// Объявлена переменная oddNumbers
// Значение переменной oddNumbers это массив [17, 61, 47, 73]
// Для перебора массива numbers использован метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => {
//   return number % 2 === 0
// });
// const oddNumbers = numbers.filter(number => {
//   return number % 2 !== 0
// });
// console.log(evenNumbers)

////////////////////////////////////////////////////////////task20 ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ///////////////////////////
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из массива books, а в переменной uniqueGenres
// массив уникальных жанров - без повторений.
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная allGenres
// Значение переменной allGenres это массив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Объявлена переменная uniqueGenres
// Значение переменной uniqueGenres это массив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для вычисления значения переменной allGenders использован метод flatMap()
// Для вычисления значения переменной uniqueGenres использован метод filter()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((unique, i, arr) => arr.indexOf(unique) === i);
// console.log(uniqueGenres)

////////////////////////////////////task21 МЕТОД FILTER() И МАССИВ ОБЪЕКТОВ//////////////////////////
// Используя метод filter() дополни код так, чтобы:
// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author) которое совпадает со значением в
// переменнойAUTHOR.
// Объявлена переменная books
// Значение переменной books это массив объектов
// Объявлена переменная MIN_RATING
// Значение переменной MIN_RATING это число 8
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Bernard Cornwell"
// Объявлена переменная topRatedBooks
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8
// Объявлена переменная booksByAuthor
// Значение переменной booksByAuthor это массив книг автор которых "Bernard Cornwell"
// Для перебора массива books использован метод filter()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor)

/////////////////////////////////////////////task22 ЗАДАЧА. ПОЛЬЗОВАТЕЛИ С ЦВЕТОМ ГЛАЗ//////////////////////////////////////
// Объявлена переменная getUsersWithEyeColor
// Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color)
// Для перебора параметра users используется метод filter()
// Если значение параметра color это "blue", функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr
// Если значение параметра color это "green", функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head
// Если значение параметра color это "brown", функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony
// Если значение параметра color это любая другая строка, функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color)
  
// };

// console.log(getUsersWithEyeColor(users, "brown"))

/////////////////////////////////////////////////task23 ЗАДАЧА. ПОЛЬЗОВАТЕЛИ В ВОЗРАСТНОЙ КАТЕГОРИИ/////////////////////////
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых(свойство age) 
// попадает в промежуток от minAge до maxAge.
// Объявлена переменная getUsersWithAge
// Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge)
// Для перебора параметра users используется метод filter()
// Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив объектов пользователей 
// с именами Ross Vazquez, Elma Head и Carey Barr
// Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив объектов пользователей 
// с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user => user.age >= minAge && user.age <= maxAge)
  
  
// };

// console.log(getUsersWithAge (users, 20, 30))
///////////////////////////////////////////task 24  пользователи с другом//////////////////////////////////
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре
// friendName.Массив друзей пользователя хранится в свойстве friends.
// Объявлена переменная getUsersWithFriend
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName)
// Для перебора параметра users используется метод filter()
// Если значение параметра friendName это строка "Briana Decker", функция возвращает массив объектов пользователей с именами Sharlene Bush и
// Sheree Anthony
// Если значение параметра friendName это строка "Goldie Gentry", функция возвращает массив объектов пользователей с именами Elma Head и Sheree
// Anthony
// Если значение параметра friendName это строка "Adrian Cross", функция возвращает пустой массив
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const getUsersWithFriend = (users, friendName) => {
//  return users.filter(user => user.friends.includes(friendName))
  
// };
// console.log(getUsersWithFriend (users, "Briana Decker"))

//////////////////////////////////task25 ЗАДАЧА. СПИСОК ДРУЗЕЙ//////////////////////////////////////////
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).
// У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// Объявлена переменная getFriends
// Переменной getFriends присвоена стрелочная функция с параметром (users)
// Вызов функции с указанным массивом пользователей возвращает массив["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison",
// "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const getFriends = (users) => {
//   // const allFriends = users.flatMap(user => user.friends);
//   // return allFriends.filter((unique, i, arr) => arr.indexOf(unique) === i)
//   ///////////////////////declarate////////////////////

//   return  users.flatMap(user => user.friends).filter((unique, i, arr) => arr.indexOf(unique) === i)
//   };
// console.log(getFriends(users))
 
///////////////////////////////////////////task 26 ЗАДАЧА. АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ///////////////////////////////////
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// Объявлена переменная getActiveUsers Переменной getActiveUsers присвоена стрелочная функция с параметром users
// Для перебора параметра users используется метод filter()
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и
// Sheree Anthony
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive === true)
// };

////////////////////////////////////////////////////task 27 ЗАДАЧА. НЕАКТИВНЫЕ ПОЛЬЗОВАТЕЛИ//////////////////////////
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// -Объявлена переменная getInactiveUsers.
// Переменной getInactiveUsers присвоена стрелочная функция с параметром users
// Для перебора параметра users используется метод filter()
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Moore Hensley,
// Ross Vazquez и Blackburn Dotson
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const getInactiveUsers = (users) => {
//    return users.filter(user => user.isActive === false)
// };

/////////////////////////////////////////task 28 МЕТОД FIND()//////////////////////////////////
// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
// Объявлена переменная books
// Значение переменной books это массив
// Объявлена переменная BOOK_TITLE
// Значение переменной BOOK_TITLE это строка "The Dream of a Ridiculous Man"
// Объявлена переменная AUTHOR
// Значение переменной AUTHOR это строка "Robert Sheckley"
// Объявлена переменная bookWithTitle
// Значение переменной bookWithTitle это объект книги с названием выше "The Dream of a Ridiculous Man"
// Объявлена переменная bookByAuthor
// Значение переменной bookByAuthor это объект книги автора "Robert Sheckley"
// Для перебора массива books использован метод find()
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);

// const bookByAuthor = books.find(book => book.author === AUTHOR);

///////////////////////////////////////////task29 ЗАДАЧА. ПОЛЬЗОВАТЕЛЬ С ПОЧТОЙ/////////////////////////
// Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого(свойство email) совпадает
// со значением параметра email.
// Объявлена функция getUserWithEmail(users, email)
// Для перебора параметра users используется метод find()
// Если значение параметра email это "shereeanthony@kog.com", функция возвращает объект пользователя с именем Sheree Anthony
// Если значение параметра email это "elmahead@omatom.com", функция возвращает объект пользователя с именем Elma Head
// Если значение параметра email это "blackburndotson@furnigeer.com", функция возвращает объект пользователя с именем Blackburn Dotson
// Если в массиве users нет пользователя с почтой из параметра email, функция возвращает undefined
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email)
// };

//////////////////////////////task 30 method EVERY///////////////////////
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);

// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);;

// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

///////////////////////////////////////////////task31 ЗАДАЧА. ВСЕ ЛИ ПОЛЬЗОВАТЕЛИ АКТИВНЫ/////////////////////////////////
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны(свойство isActive) и возвращала true
// или false.
// Объявлена переменная isEveryUserActive
// Переменной isEveryUserActive присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод every()
// Вызов функции с указанным массивом пользователей возвращает false
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const isEveryUserActive = (users) => {
//  return users.every(user => user.isActive === true);
// };

//////////////////////////////////////////////task32 МЕТОД SOME()/////////////////////////////////
// Используя метод some() дополни код так, чтобы:
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);


/////////////////////////////////////////task33 ЗАДАЧА. ЕСТЬ ЛИ АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ///////////////////
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// Объявлена функция isAnyUserActive(users)
// Для перебора параметра users используется метод some()
// Вызов функции с указанным массивом пользователей возвращает true
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const isAnyUserActive = users => {
//   users.some(user => user.isActive === true)
// };
// console.log(users.some(user => user.isActive === true))

/////////////////////////////////////////////task 34 МЕТОД REDUCE()//////////////////////////////////
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх.Дополни код так,
// чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
// Объявлена переменная players
// Значение переменной players это объект игроков с игровым временем каждого
// Объявлена переменная playtimes
// Значение переменной playtimes это массив [1270, 468, 710, 244]
// Объявлена переменная totalPlayTime
// Значение переменной totalPlayTime это число 2692
// Для перебора массива playtimes используется метод reduce()
// Объявлена переменная averagePlayTime
// Значение переменной averagePlayTime это число 673
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previusValue, number) => previusValue + number);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

////////////////////////////task35 МЕТОД REDUCE() И МАССИВ ОБЪЕКТОВ/////////////////////////////
// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока,
// и получить общую сумму этих времён.Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime)
// на количество игр(свойство gamesPlayed).
// Объявлена переменная players
// Значение переменной players это массив объектов игроков
// Объявлена переменная totalAveragePlaytimePerGame
// Значение переменной totalAveragePlaytimePerGame это число 1023
// Для перебора массива players используется метод reduce()
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((totalPlaytime, player) => totalPlaytime + player.playtime / player.gamesPlayed, 0);

// console.log(totalAveragePlaytimePerGame)

///////////////////////task36 ЗАДАЧА. ОБЩИЙ БАЛАНС ПОЛЬЗОВАТЕЛЕЙ///////////////////////////////////
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств(свойство balance) которые
// хранят пользователи из массива users.
// Объявлена переменная calculateTotalBalance
// Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод reduce()
// Вызов функции с указанным массивом пользователей возвращает число 20916
// const calculateTotalBalance = users => {
//   return users.reduce((total, user, ) => total + user.balance, 0);
// };

// console.log(calculateTotalBalance(users))

////////////////////////task 37 ЗАДАЧА. ОБЩЕЕ КОЛИЧЕСТВО ДРУЗЕЙ////////////////////////////////
// Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей(свойство friends)
// всех пользователей из массива users.
// Объявлена переменная getTotalFriendCount
// Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users)
// Для перебора параметра users используется метод reduce()
// Вызов функции с указанным массивом пользователей возвращает число 14
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const getTotalFriendCount = users => {
  
//   return users.reduce((total, user,) => total + user.friends.length, 0);
// };
// console.log(getTotalFriendCount(users))

/////////////////////////////////////task38 МЕТОД SORT()///////////////////////////
// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates,
// а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная alphabeticalAuthors
// Значение переменной alphabeticalAuthors это массив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Использован метод sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

///////////////////////////////////////task39 СВОЙ ПОРЯДОК СОРТИРОВКИ ЧИСЕЛ////////////////////////////////////////
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию.Дополни код так,
// чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной
// descendingReleaseDates копия отсортированная по убыванию.
// Объявлена переменная releaseDates
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Объявлена переменная ascendingReleaseDates
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Объявлена переменная descendingReleaseDates
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Использован метод sort()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

//   const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b );

//   const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a );

/////////////////////////////task40 СВОЙ ПОРЯДОК СОРТИРОВКИ СТРОК///////////////////////////
// Объявлена переменная authors
// Значение переменной authors это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Объявлена переменная authorsInAlphabetOrder
// Значение переменной authorsInAlphabetOrder это массив["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley",
//   "Tanith Lee"]
// Объявлена переменная authorsInReversedOrder
// Значение переменной authorsInReversedOrder это массив["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky",
//   "Bernard Cornwell"]
// Использован метод sort()
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

/////////////////////////////////////task41 СОРТИРОВКА ОБЪЕКТОВ///////////////////////////
// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// Объявлена переменная books
// Значение переменной books это исходный массив объектов книг
// Объявлена переменная sortedByAuthorName
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке
// Объявлена переменная sortedByReversedAuthorName
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке
// Объявлена переменная sortedByAscendingRating
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга
// Объявлена переменная sortedByDescentingRating
// Значение переменной sortedByDescentingRating это массив книг отсортированный по убыванию рейтинга
// Для перебора массива books используется метод sort()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);

// const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);
// console.log(sortedByDescentingRating)

////////////////////////////////////task42 ЗАДАЧА. СОРТИРОВКА ПО БАЛАНСУ////////////////////////////
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];
// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их
// баланса(свойство balance).
// Объявлена переменная sortByAscendingBalance
// Переменной sortByAscendingBalance присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по возрастанию их баланса
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// Для перебора параметра users использован метод sort()
// const sortByAscendingBalance = users => {
//    return [...users].sort((firstBalance, secondBalance) => firstBalance.balance - secondBalance.balance)
// };

//////////////////////////////////////task 43 ЗАДАЧА. СОРТИРОВКА ПО КОЛИЧЕСТВУ ДРУЗЕЙ///////////////////////////////
// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества
// их друзей(свойство friends).
// Объявлена переменная sortByDescendingFriendCount
// Переменной sortByDescendingFriendCount присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по убыванию количества их друзей
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((length1, length2) => length2.friends.length - length1.friends.length)
// };
// console.log(sortByDescendingFriendCount(users))

/////////////////////////////////////task 44 ЗАДАЧА. СОРТИРОВКА ПО ИМЕНИ/////////////////////////
// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени(свойство name)
// в алфавитном порядке.
// Объявлена переменная sortByName
// Переменной sortByName присвоена стрелочная функция с параметром (users)
// Значение параметра users не изменяется
// Для перебора параметра users использован метод sort()
// Вызов функции с указанным массивом пользователей возвращает новый массив пользователей отсортированный по имени в алфавитном порядке
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
// const sortByName = users => {
//    return [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name))
// };
// console.log(sortByName(users))

////////////////////////////////////task45 chaining///////////////////////////////
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения
// переменной MIN_BOOK_RATING.
// Объявлена переменная books
// Значение переменной books это исходный массив объектов
// Объявлена переменная MIN_BOOK_RATING
// Значение переменной MIN_BOOK_RATING это число 8
// Объявлена переменная names
// Значение переменной names это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Нет объявленых переменных кроме books, MIN_BOOK_RATING и names
// Используется цепочка методов filter, map, sort
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((firstName, secondName) => firstName.author.localeCompare(secondName.author)).
//   filter(nameRating => nameRating.rating > MIN_BOOK_RATING).map(nameSort => nameSort.author);

// console.log(names)

///////////////////////////////////////////////////task 46 ЗАДАЧА. ПОЛЬЗОВАТЕЛИ И ДРУЗЬЯ/////////////////////////////
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по
// возрастанию количества их друзей(свойство friends).
// Объявлена переменная getNamesSortedByFriendCount
// Переменной getNamesSortedByFriendCount присвоена стрелочная функция с параметром (users)
// В теле функции используется цепочка методов
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает массив["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony",
//   "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// const getNamesSortedByFriendCount = users => {

//   return [...users].sort((length1, length2) => length1.friends.length - length2.friends.length).map(mapName => mapName.name)
    
// };
// console.log(getNamesSortedByFriendCount(users))
// allFriends.filter((unique, i, arr) => arr.indexOf(unique) === i)
// ['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']

//////////////////////////////////task 47 ЗАДАЧА. ИМЕНА ДРУЗЕЙ////////////////////////////////////////////
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей(свойство friends) отсортированный по
// алфавиту.
// Объявлена переменная getSortedFriends
// Переменной getSortedFriends присвоена стрелочная функция с параметром (users)
// В теле функции используется цепочка методов в правильном порядке
// Значение параметра users не изменяется
// Вызов функции с указанным массивом пользователей возвращает массив["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong",
// "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison",
// "Sharron Pace", "Solomon Fokes"]
const getSortedFriends = users => {
   return [...users].sort()
};