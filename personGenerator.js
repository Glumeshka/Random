const personGenerator = { // при count = 17 при методе Math.floor id_17 не достижим...
    surnameJson: `{  
        "count": 18, 
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Федулов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцев",
            "id_10": "Симонов",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов",
            "id_17": "Сидоров"
        }
    }`,
    firstNameMaleJson: `{
        "count": 18,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей",
            "id_11": "Антон",
            "id_12": "Чеслав",
            "id_13": "Вадим",
            "id_14": "Алексей",
            "id_15": "Денис",
            "id_16": "Владимир",
            "id_17": "Сергей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 18,
        "list": {     
            "id_1": "Мария",
            "id_2": "Анна",
            "id_3": "Ирина",
            "id_4": "Елена",
            "id_5": "Наталья",
            "id_6": "Ольга",
            "id_7": "Светлана",
            "id_8": "Галина",
            "id_9": "Людмила",
            "id_10": "Татьяна",
            "id_11": "Юлия",
            "id_12": "Берта",
            "id_13": "Беатриса",
            "id_14": "Вера",
            "id_15": "Вероника",
            "id_16": "Василиса",
            "id_17": "Глафира"
        }
    }`,    
    professionMaleJson: `{
        "count": 18,
        "list": {
            "id_1": "Сварщик",
            "id_2": "Тракторист",
            "id_3": "Пианист",
            "id_4": "Флейтист",
            "id_5": "Кузнец",
            "id_6": "Слесарь",
            "id_7": "Адвокат",
            "id_8": "Таксист",
            "id_9": "Строитель",
            "id_10": "Дворецкий",
            "id_11": "Телохранитель",
            "id_12": "Поп",
            "id_13": "Лесник",
            "id_14": "Актер",
            "id_15": "Стример",
            "id_16": "Пожарный",
            "id_17": "Реставратор"
        }
    }`,
    professionFemaleJson: `{
        "count": 18,
        "list": {
            "id_1": "Воспитатель",
            "id_2": "Мастер маникюра",
            "id_3": "Посудомойка",
            "id_4": "Проводница",            
            "id_5": "Парикмахер",
            "id_6": "Горничная",
            "id_7": "Связистка",
            "id_8": "Актриса",
            "id_9": "Секретарь",
            "id_10": "Консультант",
            "id_11": "Библиотекарь",
            "id_12": "Йога-инструктор",
            "id_13": "Уборщица",
            "id_14": "Стюардесса",
            "id_15": "Крановщица",
            "id_16": "Танцовщица",
            "id_17": "Директриса"
        }
    }`,

    GENDER_MALE: 'Мужской, ', // переписано для наглядности в форме
    GENDER_FEMALE: 'Женский, ',

    randomGender: function() { // метод для генерации М/Ж
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min), // исходный метод

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function() { // метод генерации Имени
        if (this.person.gender == 'Мужской, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() { // метод генерации отчества
        let firstName = this.randomValue(this.firstNameMaleJson); // ловим Имя для генерации Отчества
        let lengthFirstName = (firstName.length); // ловим длинну слова
        let endLetter = firstName[lengthFirstName - 1]; // ловим последнюю букву в имени
        switch (endLetter) { // делаем условия для отлова имен с окончанием на "й" и "а"
            case 'й':
            case 'а':
                nameConst = firstName.substring(0, lengthFirstName - 1); // отнимаем окончание для составления отчества
                break;
            default:
                nameConst = firstName; // оставляем без изменений для простых Имен
        }
        if (this.person.gender == 'Мужской, ' && endLetter == 'й') { // пишем условия для получения нужного отчества
            return nameConst + 'евич';
        } else if (this.person.gender == 'Мужской, ' && endLetter == 'а') {
            return nameConst + "ич";
        } else if (endLetter == 'й') {
            return nameConst + "евна";
        } else if (endLetter == 'а') {
            return nameConst + "ична";
        } else if (this.person.gender == 'Мужской, ') {
            return nameConst + "ович";
        } else {
            return nameConst + "овна";
        }
    },

    randomSurname: function() { // метод генерации Фамилии
        if (this.person.gender == 'Мужской, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomРrofession: function() { // метод генерации Проффесии
        if (this.person.gender == 'Мужской, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomMonth31: function randomMonth() { // методика для генерации месяцев и сдней
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() {
		let month = `февраля`
		return month;
	},
    
    rendomYear: function() { // метод генерации года рождения
        return this.randomIntNumber(1960, 2000) + " г.";
    },
    
    getPerson: function() { // метод получения данных от генерации для передачи их в функцию
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        let mon = Math.floor(Math.random() * 3);
        if (mon === 0) { // переменная в файле init.js
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28);
        }
        this.person.year = this.rendomYear();
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};
