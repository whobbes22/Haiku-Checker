import Haiku from "../src/haiku";

describe('Haiku', () =>{

  test("should verify if there are 3 seperate strings", () => {
    const haiku = new Haiku("hi","yo","hello");

    expect(haiku.line1).toEqual("hi");
    expect(haiku.line2).toEqual("yo");
    expect(haiku.line3).toEqual("hello");
  
  });
});