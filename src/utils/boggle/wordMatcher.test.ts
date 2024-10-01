
import { WordMatcherUsingSets, StringStatus } from "./wordMatcher";

const animalLibrary = ["aardvark", "zebra"]
describe("Word matcher with sets tests", () => {


  it("Should have no words or partials", () => {
    const wordMatcher = new WordMatcherUsingSets()
    animalLibrary.forEach(word => {
      expect(wordMatcher.getWordStatusOfString(word)).toBe(StringStatus.NotWord); 
    });
  })

  it("Should have animals", () => {
    const wordMatcher = new WordMatcherUsingSets(animalLibrary)
    // wordMatcher.loadValidWords(animalLibrary)
    animalLibrary.forEach(word => {
      expect(wordMatcher.getWordStatusOfString(word)).toBe(StringStatus.Word); 
    });
    expect(wordMatcher.getWordStatusOfString("a")).toBe(StringStatus.Partial); 

    expect(wordMatcher.getWordStatusOfString("bee")).toBe(StringStatus.NotWord); 
  })

  it("Should have words and partials and be clearable", () => {
    const wordMatcher = new WordMatcherUsingSets()

    const smallWords = ["go", "got", "gotten"]
    wordMatcher.loadValidWords(smallWords)
    expect(wordMatcher.getWordStatusOfString("a")).toBe(StringStatus.NotWord);
    expect(wordMatcher.getWordStatusOfString("g")).toBe(StringStatus.Partial); 
    expect(wordMatcher.getWordStatusOfString(smallWords[0])).toBe(StringStatus.WordAndPartial); 
    expect(wordMatcher.getWordStatusOfString(smallWords[1])).toBe(StringStatus.WordAndPartial); 
    expect(wordMatcher.getWordStatusOfString(smallWords[2])).toBe(StringStatus.Word);
    // Clear and check
    wordMatcher.loadValidWords([]);
    expect(wordMatcher.getWordStatusOfString("a")).toBe(StringStatus.NotWord);
    expect(wordMatcher.getWordStatusOfString("g")).toBe(StringStatus.NotWord); 
    expect(wordMatcher.getWordStatusOfString(smallWords[0])).toBe(StringStatus.NotWord); 
    expect(wordMatcher.getWordStatusOfString(smallWords[1])).toBe(StringStatus.NotWord); 
    expect(wordMatcher.getWordStatusOfString(smallWords[2])).toBe(StringStatus.NotWord);
  })

});