import Stack from "./Stack";

describe('stack<number> test', () => {
    const s = new Stack<number>();

    beforeAll(() => {
        s.push(10);
        s.push(20);
    });

    test('size', () => {
        expect(s.size()).toEqual(2);
    });

    test('pop first', () => {
        expect(s.pop()).toEqual(20);
    });
  
    test('pop second', () => {
         expect(s.pop()).toEqual(10);
    });

     test('pop third', () => {
         expect(s.pop()).toEqual(undefined);
    });
});


describe('stack<string> test', () => {
    const s = new Stack<string>();

    beforeAll(() => {
        s.push("hello");
        s.push("hi");
        s.push("no");
    });

    test('size', () => {
        expect(s.size()).toEqual(3);
    });

    test('pop first', () => {
        expect(s.pop()).toEqual("no");
    });
  
    test('pop second', () => {
         expect(s.pop()).toEqual("hi");
     });

    test('pop third', () => {
        expect(s.pop()).toEqual("hello");
    });
});