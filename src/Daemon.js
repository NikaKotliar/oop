import { Character } from "./Character.js"

class Daemon extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level)
        this.attack = 10
        this.defence = 40
    }
}

const daemon = new Daemon("Daemon", "Daemon");
export { daemon , Daemon}
