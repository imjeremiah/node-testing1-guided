describe('sanity check', () => {
    describe('basic check', () => {
        test('make sure math still works', () => {
            expect(5 + 5).toBe(10);
        });
    });

   describe('a little more advanced', () => {
    test('toBe vs. toEqual', () => {
        expect(17).toBe(17);
        expect(17).toEqual(17);
        
        expect({}).not.toBe({});
        expect({}).toEqual({});
        expect({ a: 1 }).toEqual({ a: 1 });
        expect({ a: 1 }).not.toEqual({ a: 2 });

        let a = {};
        expect(a).toBe(a);
    })
   })
});

describe('more jest features', () => {
    test('object comparisons', () => {
        expect({ a: 1 }).toEqual({ a: 1 });
        expect({ a: 1, b: 2 }).not.toEqual({ a: 1 });
        expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
    });
});