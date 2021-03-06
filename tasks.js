//* 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const arr = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// const array = arr.concat(arr2);
// console.log(array);

//[...spred,...spred]

//* 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// const arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);
//* 3) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
// const arr = [1, 2, 3];
// console.log(arr.reverse());
//* 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));
//* 5)Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);
//* 1) Вибираємо випадкове число (від 0 до довжини масива);
// const arr = [1, 2, 3, 4, 5];
// let arrRandom = Math.floor(Math.random() * arr.length);
// console.log(arr[arrRandom]);

//* -) Записуємо в змінну строку з промта
//* -) Зробити строку масивом
//* -) Скопіювати масив в нову змінну
//* -) Реверсимо масив
//* -) З масивів робимо строки

// let input = prompt('Введи что-то:');
// console.log('Записуємо в змінну строку з промта', input);

// input = input.split('');
// console.log('Зробити строку масивом', input);
// let arr = input; //Скопіювати масив в нову змінну
// let newArr = [...input];

// arr = arr.reverse();
// newArr = newArr.reverse();

// console.log('Реверсимо масив', arr);

// arr = arr.join('');
// newArr = newArr.join('') + input.reverse().join('');
// console.log('З масивів робимо строку:', arr);
// console.log('З двох масивів робимо строки:', newArr);

//* Задачка на будущее!!! Игра с персонажами!
// let creaturesArr = [];
// class Creature {
//   constructor(type, planet, status, sex) {
//     this.type = type;
//     this.planet = planet;
//     this.status = status;
//     this.sex = sex;
//   }
//   get show() {
//     return `This ${this.type} is from ${this.planet} and has ${this.status} status`;
//   }
//   set changePlanet(str) {
//     this.planet = str;
//     return this.planet;
//   }
//   static intro() {
//     console.log('There is a billions types of creatures all around the world!');
//   }
//   static checkCreatures() {
//     console.log(creaturesArr);
//   }
// }
// class Human extends Creature {
//   constructor(name, type, planet, status, sex, nationality) {
//     super(type, planet, status, sex);
//     this.name = name;
//     this.nationality = nationality;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       planet: this.planet,
//       nationlity: this.nationality,
//     });
//   }
// }
// let Adam = new Human(
//   'Adam',
//   'human',
//   'Mars',
//   'three-dimensional',
//   'male',
//   'Ukrainian',
// );
// Adam.addToCreaturesList();
// let Eva = new Human(
//   'Eva',
//   'human',
//   'Venus',
//   'three-dimensional',
//   'female',
//   'Ukrainian',
// );
// Eva.addToCreaturesList();
// Creature.checkCreatures();

// class Alien extends Creature {
//   constructor(blud, teeth, name, type, planet, status, sex) {
//     super(type, planet, status, sex);
//     this.blud = blud;
//     this.teeth = teeth;
//     this.name = name;
//   }
//   addToCreaturesList() {
//     creaturesArr.push({
//       name: this.name,
//       type: this.type,
//       planet: this.planet,
//     });
//   }
// }
// let Brrargh = new Alien(
//   'Acid',
//   'retractable jaw',
//   'Brrargh',
//   'Alien',
//   'LV-223',
//   'three-dimention',
//   'hermaphrodite',
// );
// Brrargh.addToCreaturesList();
// Creature.checkCreatures();

//****
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:

// const currentYear = new Date().getFullYear();
// class User {
//   constructor(name, lastName) {
//     this._name = name;
//     this._lastName = lastName;
//   }
//   getFullName() {
//     return `${this._name} ${this._lastName}`;
//   }
// }

// class Student extends User {
//   constructor(_name, _lastName, year) {
//     super(_name, _lastName);
//     this._year = year;
//   }
//   getCourse() {
//     return currentYear - this._year;
//   }
//   get year() {
//     return this._year;
//   }
//   get name() {
//     return this._name;
//   }
//   get surname() {
//     return this._lastName;
//   }
// }

// // Вот так должен работать наш класс:
// let student = new Student('Иван', 'Иванов', 2017);
// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log('Год поступления:', student.year); //выведет 2017console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
// console.log('Курс:', student.getCourse());
// student.getCourse();

//***********
//? 1)Создать масив в котором запишется каждый элемент исходного масива *2;
//? const numbers = [1, 2, 3, 4, 5];
//? 2)Создать масив в котором поочерёдно перечисляется длина элементов исходного масиваж
//? var arr = ["Есть", "жизнь", "на", "Марсе"];
//? 3)Посчитайте все лайки пользователей
//? const tweets = [
//?        { id: "000", likes: 5, tags: ["js", "nodejs"] },
//?        { id: "001", likes: 2, tags: ["html", "css"] },
//?        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//?        { id: "003", likes: 8, tags: ["css", "react"] },
//?        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
//?      ];
//? 4)Найдите все обьекты у которых есть тег 'js'(массив tweets);
// * 1
// const numbers = [1, 2, 3, 4, 5];
// const doubleNum = numbers.map(num => num * 2);
// console.log(doubleNum);

// * 2
// const arr = ['Есть', 'жизнь', 'на', 'Марсе'];
// const lengthEachEl = arr.map(arr => arr.length);
// console.log(length);

// * 3
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];
// const countLikes = tweets =>
//   tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(countLikes(tweets));

// * 4
// const tegJs = tweets.filter(tweet => tweet.tags.includes('js'));
// console.log(tegJs);

//? 5)Создайте функцию которая будет подсчитывать сумму всех переданных ей нечётных(!) аргументов;
//? 6)Отсортируйте масив по возрасту юзеров;
//? let items = [
//?   { name: 'Миша', age: 23 },
//?   { name: 'Вася', age: 44 },
//?   { name: 'Саша', age: 2 },
//?   { name: 'Рома', age: 99 },
//?   { name: 'Ашот', age: 19 },
//? ];
//? 7) Замените каждый елемент массива на 0; (Метод fill)
//? let x = [1, 2, 3, 'a', 'b', 'c'];
//? 8) Проверьте есть ли хотя бы один элемент больше 30? Верните true/false
//? const arr = [10, 20, 30, 40];
//? 9) Найдите короля района
//? let items = [
//?   {name: "Миша", age: 23 , isTheKingOfNeighbourhood: false},
//?   {name: "Вася", age: 44 , isTheKingOfNeighbourhood: false},
//?   {name: "Саша", age: 2 , isTheKingOfNeighbourhood: false},
//?   {name: "Рома", age: 99 , isTheKingOfNeighbourhood: false},
//?   {name: "Ашот", age: 19 , isTheKingOfNeighbourhood: true}
//? ]

// * 5
// const fn = function (...arr) {
//   console.log(arr);
//   let sum = arr.reduce((acc, el) => {
//     el % 2 !== 0 ? (acc += el) : '';
//     return acc;
//   }, 0);
//   return sum;
// };
// console.log(fn(1, 2, 3, 4, 5));

// * 6
// const sortByAge = (a, b) => a.age - b.age;
// console.log(items.sort(sortByAge));

// * 7
// console.log(x.fill(0));

// * 8
// const anyAvailable = arr.some(arr => arr > 30);
// console.log(anyAvailable);

// * 9
// let items = [
//   { name: 'Миша', age: 23, isTheKingOfNeighbourhood: false },
//   { name: 'Вася', age: 44, isTheKingOfNeighbourhood: false },
//   { name: 'Саша', age: 2, isTheKingOfNeighbourhood: false },
//   { name: 'Рома', age: 99, isTheKingOfNeighbourhood: false },
//   { name: 'Ашот', age: 19, isTheKingOfNeighbourhood: true },
// ];

// const king = items.find(king => king.isTheKingOfNeighbourhood === true);
// console.log(king);

//? 10) Поменяйте статус юзера на "неактивен", если daysInactive больше 10;
// const users = [
//   { name: 'Mango', daysInactive: 10, isActive: true },
//   { name: 'Poly', daysInactive: 5, isActive: true },
//   { name: 'Ajax', daysInactive: 12, isActive: true },
// ];
// users.forEach(user => (user.daysInactive > 10 ? (user.isActive = false) : ''));
// console.log(users);

// {
//   if (user.daysInactive > 10) {
//     user.isActive = false;
//   }
// });
// console.log(users);

//? 11) Создайте ф-цию которая принимает строку и возвращает её записанную
//? "Заборчиком"(ПрИвЕт)

// const toFence = str => {
//   return str
//     .split('')
//     .map((el, ind) => (ind % 2 ? el : (el = el.toUpperCase())))
//     .join('');
// };
// console.log(toFence('привет'));

// const camelC = word => {
//   const newAr = [...word];
//   const resultC = newAr.reduce((acc, char, index) => {
//     if (index % 2 != 0) {
//       acc += char.toLowerCase();
//     } else {
//       acc += char.toUpperCase();
//     }
//     return acc;
//   }, '');
//   return resultC;
// };

// console.log(camelC('Привет'));
