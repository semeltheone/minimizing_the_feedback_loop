const numberExtractor = require('./numberExtractor');

it('should be able to get all even numbers in the array', () => {
  const testData = [1, 2, 3, 4, 5, 6];
  let result = numberExtractor(testData);

  expect(result).toEqual([2, 4, 6]);
});

it('should be able to get even numbers from nested array', () => {
  const testData = [[1, 2], [3, 4], [5, [6]]];
  let result = numberExtractor(testData);

  expect(result).toEqual([2, 4, 6]);
});
