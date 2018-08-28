'use strict';

const testString = "abc123xyz";
const testSentence = "Lorem ipsum dolor sit amet";

const returnLastWord = (a) => {
  let wordFound = false;
  for (let i = 1; i < a.length; i++) {
    let charToInspect = a[a.length - i];
    if (charToInspect === " ") {
      return a.slice(a.length - i + 1, a.length);
    }
  }
}

const returnLastWordSplit = (a) => {
  let arrOfWords = a.split(" ");
  return arrOfWords[arrOfWords.length - 1];
}

const findCommonPairs = (cipher) => {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const doublePairs = alphabetArray.map( (elem) => (`${elem}${elem}`));
  const doubleRegex = new RegExp(doublePairs.join('|'), "gi");
  const commonPairs = /th|er|on|an|et|in|sh|rd|lu/gi;
  let cipherUseable = cipher.toLowerCase();

  cipherUseable = cipherUseable.replace(commonPairs, '\/$&\/');
  cipherUseable = cipherUseable.replace(doubleRegex, '\/$&\/');

  return cipherUseable;
}

const encryptCaesar = (plain, shift) => {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let plaintext = plain.toLowerCase();
  let cipherNumArr = [];
  let cipherTextArr = [];
  plaintext = plaintext.replace(/[^a-zA-Z]/g, '')
  let plaintextArr = plaintext.split('');
  plaintextArr.forEach( (letter) => {
    let plainNum = alphabetArray.indexOf(letter);
    let cipherNum = plainNum + shift;
    if (cipherNum >= 25) {
      cipherNum -= 25;
    }
    cipherNumArr.push(cipherNum);
  });
  cipherNumArr.forEach( (num) => {
    cipherTextArr.push(alphabetArray[num]);
  });
  return cipherTextArr.join();
}

const decryptCaesar = (cipher, shift) => {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let plaintextArr = [];
  let plainNumArr = [];
  let ciphertext = cipher.replace(/[^a-zA-Z]/g, '');
  let cipherTextArr = ciphertext.split('');
  let cipherNumArr = [];
  cipherTextArr.forEach( (letter) => {
    cipherNumArr.push(alphabetArray.indexOf(letter));
  });
  cipherTextArr.forEach( (letter) => {
    let cipherNum = alphabetArray.indexOf(letter);
    let plainNum = cipherNum - shift;
    if (plainNum < 0) {
      plainNum += 25;
    }
    plainNumArr.push(plainNum);
  });
  plainNumArr.forEach( (num) => {
    plaintextArr.push(alphabetArray[num]);
  })
  return plaintextArr.join();
}

const attemptDecryptCaesar = (str) => {
  let newStr = "aaaaaaaaaaaaaaaa"
  if (str.length <= 20) {
    newStr = str.slice(0, 20);
  } else {
    newStr = str;
  }
  for (let i=0; i<=25; i++) {
    console.log((decryptCaesar(newStr, i)).toUpperCase());
    console.log("================")
  }
}

const freqAnalysis = (text) => {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let freqArr = []
  let str = text.replace(/\s/g, "");
  alphabetArray.forEach( (letter) => {
      const re = new RegExp(`${letter}`, "g");
      freqArr.push(((str || '').match(re) || []).length);
  });
  return freqArr;
}

const substitution = (str, letterToReplace, replacement) => {
  let regex = new RegExp(`${letterToReplace}`, "gi")
  return str.replace(regex, replacement);
}

// console.log(findCommonPairs("Extended kindness trifling remember he confined outlived if. Assistance sentiments yet unpleasing say. Open they an busy they my such high. An active dinner wishes at unable hardly no talked on. Immediate him her resolving his favourite. Wished denote abroad at branch at. Two before narrow not relied how except moment myself. Dejection assurance mrs led certainly. So gate at no only none open. Betrayed at properly it of graceful on. Dinner abroad am depart ye turned hearts as me wished. Therefore allowance too perfectly gentleman supposing man his now. Families goodness all eat out bed steepest servants. Explained the incommode sir improving northward immediate eat. Man denoting received you sex possible you. Shew park own loud son door less yet."));
// console.log(encryptCaesar('hello world', 12));
// console.log(decryptCaesar('tqxxbjbexp', 12));
// console.log(freqAnalysis("Extended kindness trifling remember he confined outlived if. Assistance sentiments yet unpleasing say. Open they an busy they my such high. An active dinner wishes at unable hardly no talked on. Immediate him her resolving his favourite. Wished denote abroad at branch at. Two before narrow not relied how except moment myself. Dejection assurance mrs led certainly. So gate at no only none open. Betrayed at properly it of graceful on. Dinner abroad am depart ye turned hearts as me wished. Therefore allowance too perfectly gentleman supposing man his now. Families goodness all eat out bed steepest servants. Explained the incommode sir improving northward immediate eat. Man denoting received you sex possible you. Shew park own loud son door less yet."));
// console.log(substitution('tqxxbjbexp', "t", "a"));
attemptDecryptCaesar("tqxxbjbexp");