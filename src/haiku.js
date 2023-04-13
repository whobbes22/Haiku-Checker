
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

    for(let j = 0; j< this.vowelArray.length;j++){ 
      let numberOfVowels = 0;
      for (let i = 0; i < this.lineArray[j].length;i++){
        const threeLetters = this.lineArray[j][i] + this.lineArray[j][i+1] + this.lineArray[j][i+2];
        const twoLetters = threeLetters.slice(0,2);
        console.log(3,threeLetters);
        console.log(2,twoLetters);
        if(threeLetterSoundArray.includes(threeLetters)){
          numberOfVowels++;
          i = i+2;
        } else if (twoLetterSoundArray.includes(twoLetters)){
          numberOfVowels++;
          i= i+1;
        } else if (oneLetterSoundArray.includes(this.lineArray[j][i])){
          numberOfVowels++;
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