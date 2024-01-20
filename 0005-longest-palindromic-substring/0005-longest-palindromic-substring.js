/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  const n = s.length;
  let maxLength = 1; // Initialize the maximum palindrome length
  let start = 0;    // Initialize the starting index of the longest palindrome

  // Create a 2D boolean array to store palindrome information
  const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

  // All substrings of length 1 are palindromes
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check for substrings of length 2
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      maxLength = 2;
      start = i;
    }
  }

  // Check for substrings of length 3 or more
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i < n - length + 1; i++) {
      const j = i + length - 1;

      // Check if the characters at the current positions match and if the inner substring is a palindrome
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        
        // Update maxLength and start index if a longer palindrome is found
        if (length > maxLength) {
          maxLength = length;
          start = i;
        }
      }
    }
  }

  // Extract the longest palindromic substring
  const longestPalindromicSubstring = s.substring(start, start + maxLength);

  return longestPalindromicSubstring;
}
