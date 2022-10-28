let error = new Error(" Возникла ошибка");
const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"]

// Реализуйте в классе Character метод levelUp, который работает следующим образом:

// На 1 повышает поле level;
// На 20% повышает показатели attack и defence;
// Приводит показатель health к значению 100.
// Метод должен работать только если показатель жизни не равен 0. В противном случае генерируется ошибка (нельзя повысить левел умершего).

class Character {
    constructor(name, type) { // Аналог функции конструктора
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
    }
    set name(value) {
        if (typeof value !== 'string' || value.length < 2 || value.length > 10) {
            throw new Error("Неверное имя")
        }
        this._name = value;
    }
    set type(value) {
        if (types.includes(value) == false) {
            throw new Error("тип не тот")
        }
        this._type = value;
        if (value == "Bowman") {
            this.attack = 253;
            this.defence = 235;
        }
        if (value == "Swordsman") {
            this.attack = 40;
            this.defence = 10;
        }
        if (value == "Magician") {
            this.attack = 10;
            this.defence = 40;
        }
        if (value == "Daemon") {
            this.attack = 10;
            this.defence = 40;
        }
        if (value == "Undead") {
            this.attack = 25;
            this.defence = 25;
        }
        if (value == "Zombie") {
            this.attack = 40;
            this.defence = 10;
        }
    }
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack = Math.trunc((this.attack / 10) * 12);
            this.defence = Math.trunc((this.attack / 10) * 12);
            this.health = 100;
        } else {
            throw new Error("нельзя повысить левел умершего")
        }
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        }else {
            throw new Error("нельзя добить умершего")
        }
    }
}

class Bowman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 25
        this.defence = 25
    }
}
class Swordsman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 40
        this.defence = 10
    }
}
class Magician extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 10
        this.defence = 40
    }
}
class Daemon extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 10
        this.defence = 40
    }
}
class Undead extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 25
        this.defence = 25
    }
}
class Zombie extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 40
        this.defence = 10
    }
}
const character = new Character("Daemon", "Daemon");

const bowman = new Bowman("Bowman", "Bowman");
const swordsman = new Swordsman("Swordsman", "Swordsman");
const magician = new Magician("Magician", "Magician");
const daemon = new Daemon("Daemon", "Daemon");
const zombie = new Zombie("Zombie", "Zombie");
const undead = new Undead("Undead", "Undead");

export { character, bowman, swordsman, magician, daemon, zombie, undead }

export { Character, Bowman, Swordsman, Magician, Daemon, Zombie, Undead }

