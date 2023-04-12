import Haiku from "../src/haiku";

describe('Haiku', () =>{

  test("should verify if there are 3 seperate strings", () => {
    const haiku = new Haiku("hi","yo","hello");

    expect(haiku.line1).toEqual("hi");
    expect(haiku.line2).toEqual("yo");
    expect(haiku.line3).toEqual("hello");
  });

  test("Should split strings into an array each index containing 1 letter", () => {
    const haiku = new Haiku("hi","yo","hello");
    haiku.splitter();
    expect(haiku.line1).toEqual(["h","i"]);
    expect(haiku.line2).toEqual(["y","o"]);
    expect(haiku.line3).toEqual(["h","e","l","l","o"]);
  });

  test("should verify the number of vowels in a given string")
});