/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    const c = ransomNote[i];
    
    // If there are no occurrences of c left in the magazine, return false.
    if (magazine.indexOf(c) === -1) {
      return false;
    }
    
    // Find the index of the first occurrence of c in the magazine.
    const location = magazine.indexOf(c);
    
    // Use string splicing to make a new string with the characters
    // before "location" (not including) and the characters after "location".
    magazine = magazine.slice(0, location) + magazine.slice(location + 1);
  }
  
  // If we got this far, we can successfully build the note.
  return true;
}