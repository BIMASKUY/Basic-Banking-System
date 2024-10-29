test('using toBe with objects', () => {
  const obj1 = { name: "Alice" };
  const obj2 = { name: "Alice" };

  expect(obj1).toEqual(obj2); // Fails, because they are different instances
  expect(obj1).toBe(obj1); // Passes, because it’s the same reference
})