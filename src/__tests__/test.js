import { Character, Bowman, Swordsman, Magician, Daemon, Zombie, Undead } from '../Character'

// test.each([
//     [{ name: 'Маг', health: 90 }, 'healthy'],
//     [{ name: 'Маг', health: 35 }, 'wounded'],
//     [{ name: 'Маг', health: 10 }, 'critical'],
// ])(
//     ('should compare health and show health level'),
//     (heroInfo, expected) => {
//         const result = getHealthIndicator(heroInfo);
//         expect(result).toBe(expected);
//     });


test('creare Character', () => {
    const expected = {
        _name: 'Daemon',
        _type: 'Daemon',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }
    const received = new Character("Daemon", "Daemon");
    expect(received).toEqual(expected);
});

test('creare Bowman', () => {
    const expected = {
        _name: 'Bowman',
        _type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    }
    const received = new Bowman("Bowman", "Bowman");
    expect(received).toEqual(expected);
});

test('creare Swordsman', () => {
    const expected = {
        _name: 'Swordsman',
        _type: 'Swordsman',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    }
    const received = new Swordsman("Swordsman", "Swordsman");
    expect(received).toEqual(expected);
});

test('creare Magician', () => {
    const expected = {
        _name: 'Magician',
        _type: 'Magician',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }
    const received = new Magician("Magician", "Magician");
    expect(received).toEqual(expected);
});

test('creare Daemon', () => {
    const expected = {
        _name: 'Daemon',
        _type: 'Daemon',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    }
    const received = new Daemon("Daemon", "Daemon");
    expect(received).toEqual(expected);
});

test('creare Zombie', () => {
    const expected = {
        _name: 'Zombie',
        _type: 'Zombie',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    }
    const received = new Zombie("Zombie", "Zombie");
    expect(received).toEqual(expected);
});

test('creare Undead', () => {
    const expected = {
        _name: 'Undead',
        _type: 'Undead',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    }
    const received = new Undead("Undead", "Undead");
    expect(received).toEqual(expected);
});

test('check Undead levelUp', () => {
    const expected = {
        _name: 'Undead',
        _type: 'Undead',
        attack: 43,
        defence: 51,
        health: 100,
        level: 4
    }
    const received = new Undead("Undead", "Undead");
    received.levelUp()
    received.levelUp()
    received.levelUp()

    expect(received).toEqual(expected);
});

test('check Undead damage', () => {
    const expected = {
        _name: 'Undead',
        _type: 'Undead',
        attack: 25,
        defence: 25,
        health: -50,
        level: 1
    }
    const received = new Undead("Undead", "Undead");
    received.damage(200)
    expect(received).toEqual(expected);
});

test('check Undead levelUp with health lower 0', () => {
    const received = new Undead("Undead", "Undead");
    received.damage(200)
    received.levelUp()

    expect(received).toThrow("нельзя повысить левел умершего");

});