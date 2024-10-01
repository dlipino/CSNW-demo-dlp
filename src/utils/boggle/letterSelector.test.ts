import { LetterSelector } from "./letterSelector";

describe("Letter Selector tests", () => {
  const selector = new LetterSelector()
  it("Should be a lower case letter", () => {
    const expectedSet = new Set([...'abcdefghijklmnopqrstuvwxyz']);
    const notExpected = new Set([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
    //TODO maybe get a distribution test going?
    for(let i = 0; i<100; i++) {
      const letter = selector.randomLetterFromAlphabet()
      expect(expectedSet.has(letter)).toBe(true);

      expect(notExpected.has(letter)).toBe(false); 
    }
  })
 
});