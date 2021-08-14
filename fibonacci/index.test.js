const fibonacci = require('./index');

test('fibonacci 1',()=>{
    expect(fibonacci(1)).toBe(0);
});

test('fibonacci 2',()=>{
    expect(fibonacci(2)).toBe(1);
});

test('fibonacci 3',()=>{
    expect(fibonacci(3)).toBe(1);
});

test('fibonacci 4',()=>{
    expect(fibonacci(4)).toBe(2);
});

test('fibonacci 5',()=>{
    expect(fibonacci(5)).toBe(3);
});

test('fibonacci 8',()=>{
    expect(fibonacci(8)).toBe(13);
});

test('fibonacci 10',()=>{
    expect(fibonacci(10)).toBe(34);
});

test('fibonacci string',()=>{
    expect(fibonacci("10")).toBe(0);
});

test('fibonacci null',()=>{
    expect(fibonacci(null)).toBe(0);
});

test('fibonacci undefined',()=>{
    expect(fibonacci(undefined)).toBe(0);
});

test('fibonacci float',()=>{
    expect(fibonacci(1.33)).toBe(0);
});

test('fibonacci negative',()=>{
    expect(fibonacci(-1)).toBe(0);
});