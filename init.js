window.onload = function() { // запуск при первом открывании в окне
    getInit();
}

let initPerson, nameConst; // обявляем глобальные переменные

function getInit() { // функция для запуска скрипта
    initPerson = personGenerator.getPerson();
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDayOutput').innerText = initPerson.day;
    document.querySelector('#birthMonthOutput').innerText = initPerson.month;
    document.querySelector('#birthYearOutput').innerText = initPerson.year;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
}

document.querySelector('#generation').addEventListener('click', function() { // вешаем обработчик на кнопку "генерация"
    getInit();
});

document.querySelector('#clear').addEventListener('click', function() { // вешаем обработчик на кнопку "очистка"
    document.querySelector('#surnameOutput').innerText = 'Пусто';
    document.querySelector('#firstNameOutput').innerText = 'Пусто';
    document.querySelector('#patronymicOutput').innerText = 'Пусто';
    document.querySelector('#genderOutput').innerText = 'Пусто ';
    document.querySelector('#birthDayOutput').innerText = 'Пусто ';
    document.querySelector('#birthMonthOutput').innerText = '';
    document.querySelector('#birthYearOutput').innerText = '';
    document.querySelector('#professionOutput').innerText = 'Пусто';
});