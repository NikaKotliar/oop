import { getHealthIndicator, getHealthSorted } from '../basic';

test.each([
    [{ name: 'Маг', health: 90 }, 'healthy'],
    [{ name: 'Маг', health: 35 }, 'wounded'],
    [{ name: 'Маг', health: 10 }, 'critical'],
])(
    ('should compare health and show health level'),
    (heroInfo, expected) => {
        const result = getHealthIndicator(heroInfo);
        expect(result).toBe(expected);
    });



test('should sort characters by health', () => {
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 }
    ];
    const received = [
        { name: 'мечник', health: 10 },
        { name: 'лучник', health: 80 },
        { name: 'маг', health: 100 }
    ]

    getHealthSorted(received)
    expect(JSON.stringify(received)).toBe(JSON.stringify(expected));
});