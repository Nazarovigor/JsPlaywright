/* 
Завдання 1: Робота з об'єктом
1.Створіть порожній об'єкт з ім'ям student.
2. Додайте до об'єкта student наступні властивості:
   - firstName: рядок, представляє ім'я студента.
   - lastName: рядок, представляє прізвище студента.
   - age: число, представляє вік студента.
   - courses: масив, представляє список курсів, які він вивчає (наприклад, ["Математика", "Історія", "Програмування"]).
3. Виведіть об'єкт student в консоль. 
*/

let student = {};
    student.firstName = 'Ivan';
    student.lastName = 'Ivanov';
    student.age = 23;
    student.courses = ['Math', 'History', 'Programming'];

console.log(student);


/* 
Завдання 2: Доступ до властивостей об'єкта
1. Створіть об'єкт book з такими властивостями:
    - title: рядок, представляє назву книги.
    - author: рядок, представляє автора книги.
    - year: число, представляє рік видання книги.
2. Виведіть в консоль назву та автора книги з об'єкта book. 
*/
let book = {
    title: 'Idiot',
    author: 'Dostoevskiy',
    year: 1869
};

console.log(`\n The book title is ${book.title}, \nthe author is ${book.author}`)

/* 
Завдання 3: Зміна властивостей об'єкта
1. Створіть об'єкт car з такими властивостями:
    - brand: рядок, представляє марку автомобіля.
    - model: рядок, представляє модель автомобіля.
    - year: число, представляє рік випуску автомобіля.
    - Змініть рік випуску автомобіля на новий рік.
2. Виведіть оновлений об'єкт car в консоль. 
*/
let car = {
    brand: 'Audi',
    model: 'TT',
    year: 2022,
};

car.year = 2023;
console.log(`\n`)
console.log(car);

/* 
Завдання 4: Додавання та видалення властивостей
1. Створіть об'єкт person з такими властивостями:
    - firstName: рядок, представляє ім'я особи.
    - lastName: рядок, представляє прізвище особи.
    - age: число, представляє вік особи.
2. Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
3. Видаліть властивість age з об'єкта person.
4. Виведіть оновлений об'єкт person в консоль.
*/

let person = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 23
};

person.email = 'test@test.com';
delete person.age;
console.log(`\n`)
console.log(person)

/*
Завдання 5: Перебір властивостей об'єкта
1. Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
2. Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
3. Зробіть деструктуризацію в циклі
*/

let users = [
    {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        age: 23
    },
    {
        firstName: 'Petr',
        lastName: 'Petrov',
        age: 24
    },
    {
        firstName: 'Sidor',
        lastName: 'Sidorov',
        age: 25
    },
];

console.log(`\n`)
for (let user of users) {
    let {firstName, lastName, age} = user;
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(`\n`);
};