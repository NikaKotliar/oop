
import Magician from '../Magician.js'

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