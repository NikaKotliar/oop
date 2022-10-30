import { Character } from "./Character.js"
class Zombie extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 40
        this.defence = 10
    }
}

const zombie = new Zombie("Zombie", "Zombie");

export {zombie, Zombie }