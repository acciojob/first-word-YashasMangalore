function firstWord(str) {
  // Trim leading and trailing spaces from the string
  const trimmedStr = str.trim();
  
  // Check if the trimmed string is empty
  if (trimmedStr === '') {
    return '';
  }
  
  // Find the index of the first space in the trimmed string
  const spaceIndex = trimmedStr.indexOf(' ');
  
  // If there is no space, return the entire trimmed string
  if (spaceIndex === -1) {
    return trimmedStr;
  }
  
  // Extract the substring up to the first space
  return trimmedStr.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
