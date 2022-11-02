import Bowman from '../Bowman'

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