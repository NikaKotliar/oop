import Daemon from '../Daemon.js'

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