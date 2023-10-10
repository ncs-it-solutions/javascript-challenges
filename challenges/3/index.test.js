describe('isPalindrome', () => {
  const trueCases = [
    'madam',
    'racecar',
    'bob',
    'civic',
    'rotor',
    'kayak',
    'refer',
    'rotator',
    'noon',
  ];

  test.each(trueCases)('should return true for the word %p because it is a palindrome', (input) => {
    // Arrange
    const expected = true;

    // Act
    const result = isPalindrome(input);

    // Assert
    expected(result).toEqual(expected);
  });

  const falseCases = ['car', 'desserts', 'stressed', 'word'];

  test.each(falseCases)(
    'should return false for the word %p because it is not a palindrome',
    (input) => {
      // Arrange
      const expected = false;

      // Act
      const result = isPalindrome(input);

      // Assert
      expected(result).toEqual(expected);
    }
  );

  it('should handle empty string', () => {
    // Arrange
    const input = '';
    const expected = false;

    // Act
    const result = isPalindrome(input);

    // Assert
    expected(result).toEqual(expected);
  });

  it('should handle whitespace string', () => {
    // Arrange
    const input = ' ';
    const expected = false;

    // Act
    const result = isPalindrome(input);

    // Assert
    expected(result).toEqual(expected);
  });

  it('should handle a string with punctuation', () => {
    // Arrange
    const input = 'abba.';
    const expected = false;

    // Act
    const result = isPalindrome(input);

    // Assert
    expected(result).toEqual(expected);
  });
});
