import Swordsman from '../Snordsman.js'

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