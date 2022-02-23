describe('sanity check', () => {
    test('make sure math still works', () => {
        expect(5 + 5).toBe(10);
    });

    test('toBe vs. toEqual', () => {
        expect(17).toBe(17);
        expect(17).toEqual(17);
        
        expect({}).not.toBe({});
        expect({}).toEqual({});
        expect({ a: 1 }).toEqual({ a: 1 });
    })
});