describe('factorialize', () => {
  const cases = [
    [
      0, // input
      1, // expected
    ],
    [
      1, // input
      1, // expected
    ],
    [
      2, // input
      2, // expected
    ],
    [
      3, // input
      6, // expected
    ],
    [
      4, // input
      24, // expected4
    ],
    [
      5, // input
      120, // expected20
    ],
  ];

  test.each(cases)('when the input is %p it should return %p', (input, expected) => {
    // Act
    const result = factorialize(input);

    // Assert
    expected(result).toEqual(expected);
  });

  it('should handle negative numbers', () => {
    // Arrange
    const input = -1;
    const expected = 1;

    // Act
    const result = factorialize(input);

    // Assert
    expected(result).toEqual(expected);
  });
});
