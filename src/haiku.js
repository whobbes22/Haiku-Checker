
export default class Haiku{
  constructor(line1,line2,line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.originalHaiku = [this.line1,this.line2,this.line3];
    // this.vowelArray = [0,0,0];
  }

  splitter()  {
    this.line1 = this.line1.toLowerCase().split("");
    this.line2 = this.line2.toLowerCase().split("");
    this.line3 = this.line3.toLowerCase().split("");
    this.lineArray = [this.line1,this.line2,this.line3];
    // this.lineArray[0].length = ???
  }
   
  // lineArray = [["h","e"],["h","i"],["y","o"]]
  vowelCounter() {
    this.line1.push(" ");
    this.line2.push(" ");
    this.line3.push(" ");

    this.vowelArray = [0,0,0];

    // sheep
    // beau

    const threeLetterSoundArray = ["eau","ice","ace","uce","ece","oce","ire","ure"];
    const twoLetterSoundArray = ["ai","ay","ee","ea","ie","oa","ew","ue","oo","oi","oy","ou"];
    const oneLetterSoundArray = ["a","e","i","o","u"];

    // const exception =[silent E];
    // care
    // create

    // loop 1 == c
    // loop 2 == e
    // loop 3 == r
    // loop 4 == e
    // if (lineArray.includes("e"))
    //     numberOfVowels--;
    //     i = i-1;
  
    //     if last e is silent then do not add e to vowel counter
 
//          the lazy brown fox quickly jumped over the river
// let a = " ";
// let b = a+a; // b = "  "
// logic for silent e: loop over the char, 

// step 1: how to find last letter of a word is e
// step 2: preceeding syllable has 1 vowel


    for(let j = 0; j< this.vowelArray.length;j++){
      let numberOfVowels = 0;
      let isPrecedingVowelSingular = false;
      let wordHasZeroSyllables = true;
      for (let i = 0; i < this.lineArray[j].length;i++){
        const threeLetters = this.lineArray[j][i] + this.lineArray[j][i+1] + this.lineArray[j][i+2];
        const twoLetters = threeLetters.slice(0,2);

        if("e ".includes(twoLetters) && isPrecedingVowelSingular){
          isPrecedingVowelSingular = false;
          if(wordHasZeroSyllables){
            numberOfVowels++;
          }
        } else if(threeLetterSoundArray.includes(threeLetters)){
          numberOfVowels++;
          isPrecedingVowelSingular = false;
          wordHasZeroSyllables = false;
          i = i+2;
        } else if (twoLetterSoundArray.includes(twoLetters)){
          numberOfVowels++;
          isPrecedingVowelSingular = false;
          wordHasZeroSyllables = false;
          i = i+1;
        } else if (oneLetterSoundArray.includes(this.lineArray[j][i])){
          numberOfVowels++;
          isPrecedingVowelSingular = true;
          wordHasZeroSyllables = false;
        } else if(" ".includes(this.lineArray[j][i])){
          wordHasZeroSyllables = true;
        }

      }
        this.vowelArray[j] = numberOfVowels;
    }
  }
}


// switch (this.lineArray[j][i]) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     vowelsInARow++;
//     numberOfVowels++;
//     break;
//   case " ":
//     if(this.lineArray[j][i-1] === "e"){
//       numberOfVowels--;
//     }
//     break;
//   default:
//     vowelsInARow = 0; 
//     break;