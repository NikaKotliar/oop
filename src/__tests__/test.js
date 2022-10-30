import { Character } from '../Character'

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