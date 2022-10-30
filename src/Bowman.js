import { Character } from "./Character.js"

class Bowman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 25
        this.defence = 25
    }
}

const bowman = new Bowman("Bowman", "Bowman");
export { bowman, Bowman }