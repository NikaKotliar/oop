import { Character } from "./Character.js"

class Magician extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 10
        this.defence = 40
    }
}

const magician = new Magician("Magician", "Magician");
export {magician, Magician }
