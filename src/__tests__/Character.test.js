import Character from '../Character'

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