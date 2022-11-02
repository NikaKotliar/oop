
import Zombie from '../Zombie.js'

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
