const removeDuplicates = require('./index');

describe('removeDuplicates', () => {
  const cases = [
    [
      [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5], // input
      [1, 2, 3, 4, 5], // expected
    ],
    [
      [0, 1, 0, 1, 0, 0, 1, 0, 1], // input
      [0, 1], // expected
    ],
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1], // input
      [1], // expected
    ],
    [
      [-2, -2, -4, 5], // input
      [-2, -4, 5], // expected
    ],
  ];

  test.each(cases)(
    'should return the numbers array without any duplicates when the input is %p',
    (input, expected) => {
      // Act
      const result = removeDuplicates(input);

      // Assert
      expect(result).toEqual(expected);
    }
  );

  it('should handle empty array', () => {
    // Arrange
    const input = [];
    const expected = [];

    // Act
    const result = removeDuplicates(input);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should handle an array with only one item', () => {
    // Arrange
    const input = [1];
    const expected = [1];

    // Act
    const result = removeDuplicates(input);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should handle an array without duplicates', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];

    // Act
    const result = removeDuplicates(input);

    // Assert
    expect(result).toEqual(expected);
  });
});
