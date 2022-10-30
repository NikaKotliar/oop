import { Character } from "./Character.js"

class Undead extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 25
        this.defence = 25
    }
}

const undead = new Undead("Undead", "Undead");

export { undead, Undead }
