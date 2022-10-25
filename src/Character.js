// Свойства, которые должны быть у объектов класса Character:

// name - имя
// type - тип
// health - уровень жизни
// level - уровень персонажа
// attack - атака
// defence - защита
// Конструктор класса должен соответствовать следующим требованиям:

// name - строка, min - 2 символа, max - 10
// type - один из типов (строка): Bowman, Swordsman, Magician, Daemon, Undead, Zombie
// В случае, если передаются некорректные значения, должна выбрасываться ошибка (throw new Error(...)).

let error = new Error(" Ого, ошибка! o_O");

class Character {
    constructor(name) { // Аналог функции конструктора
        this.name = name;
    }

    set name(value) {
        if (typeof value !== 'string' || value.length < 2 || value.length > 10) {
            throw new Error(" Ого, ошибка! o_O")
        }
        this._name = value;
    }

}

const character = new Character("ner34");


export { character }

