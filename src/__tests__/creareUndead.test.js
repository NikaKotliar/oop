import  Undead  from '../Undead'

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