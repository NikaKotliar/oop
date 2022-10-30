import { Character } from "./Character.js"

class Swordsman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 40
        this.defence = 10
    }
}

const swordsman = new Swordsman("Swordsman", "Swordsman");
export { swordsman , Swordsman}
