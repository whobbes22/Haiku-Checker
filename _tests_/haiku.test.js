import Haiku from "../src/haiku";

describe('Haiku', () =>{


  test("should verify if there are 3 seperate strings", () => {
    const haiku = new Haiku("hi","yo","hello");
    expect(haiku.line1).toEqual("hi");
    expect(haiku.line2).toEqual("yo");
    expect(haiku.line3).toEqual("hello");
    expect(haiku.originalHaiku).toEqual(["hi","yo","hello"])
  });

  test("Should split strings into an array each index containing 1 letter", () => {
    const haiku = new Haiku("hi","yo","hello");
    haiku.splitter();
    expect(haiku.line1).toEqual(["h","i"]);
    expect(haiku.line2).toEqual(["y","o"]);
    expect(haiku.line3).toEqual(["h","e","l","l","o"]);
  });

  // test("should count all vowels in a string", () => {
  //   const haiku = new Haiku("hi","yo","hello");
  //   let vowelArray = [];
  //   haiku.splitter();
  //   haiku.vowelCounter();
  //   expect(haiku.vowelArray[0]).toEqual(1);
  //   expect(haiku.vowelArray[1]).toEqual(1);
  //   expect(haiku.vowelArray[2]).toEqual(2);
  // });

  // test("should verify the number of syllables in words that end with 'e'", () => {
  //   const haiku = new Haiku("pie","abide", "fresh");
  //   haiku.splitter();
  //   haiku.vowelCounter();
  //   expect(haiku.vowelArray[0]).toEqual(1);
  //   expect(haiku.vowelArray[1]).toEqual(2);
  //   expect(haiku.vowelArray[2]).toEqual(1);
  // }); 

  // test("should count words that contain a diphthong as one syllabe words", () => {
  //   const haiku = new Haiku("moon","coin", "bread");
  //   haiku.splitter();
  //   haiku.vowelCounter();
  //   expect(haiku.vowelArray[0]).toEqual(1);
  //   expect(haiku.vowelArray[1]).toEqual(1);
  //   expect(haiku.vowelArray[2]).toEqual(1);
  // });

  test("should add to syllable counter based on if a word has common vowel sound that includes 3 letters", () => {
    const haiku = new Haiku("beau beau","trace", "pace");
    haiku.splitter();
    haiku.vowelCounter();
    expect(haiku.vowelArray[0]).toEqual(2);
    expect(haiku.vowelArray[1]).toEqual(1);
    expect(haiku.vowelArray[2]).toEqual(1);
  });

  test("should add to syllable counter based on if a word has common vowel sound that includes 2 letters", () => {
    const haiku = new Haiku("coin","doom", "beau");
    haiku.splitter();
    haiku.vowelCounter();
    expect(haiku.vowelArray[0]).toEqual(1);
    expect(haiku.vowelArray[1]).toEqual(1);
    expect(haiku.vowelArray[2]).toEqual(1);
  });

  test("should add to syllable counter based on if a word has a vowel sound based on if sound is only 1 letter", () => {
    const haiku = new Haiku("hi","stretch", "cc");
    haiku.splitter();
    haiku.vowelCounter();
    expect(haiku.vowelArray[0]).toEqual(1);
    expect(haiku.vowelArray[1]).toEqual(1);
    expect(haiku.vowelArray[2]).toEqual(0);
  });

  test("test haiku",() => { //silence
    const haiku = new Haiku("An old silent pond","A frog jumps into the pond—","Splash! Silent again.");
    haiku.splitter();
    haiku.vowelCounter();
    expect(haiku.vowelArray[0]).toEqual(5);
    expect(haiku.vowelArray[1]).toEqual(7);
    expect(haiku.vowelArray[2]).toEqual(5);
  })

  test("should not count silent 'e' as a syllable", () => {
    const haiku = new Haiku("care","he", "silence");
    haiku.splitter();
    haiku.vowelCounter();
    expect(haiku.vowelArray[0]).toEqual(1);
    expect(haiku.vowelArray[1]).toEqual(1);
    expect(haiku.vowelArray[2]).toEqual(2);
  })
});

