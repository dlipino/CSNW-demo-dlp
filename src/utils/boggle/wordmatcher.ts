export enum StringStatus {
  //Binary mask for this would be nice
  Word = 1,
  Partial,
  WordAndPartial,
  NotWord
}

export interface WordMatcher {
  loadValidWords(validWords : string[]) : void
  getWordStatusOfString(input: string) : StringStatus
}

export class WordMatcherUsingSets implements WordMatcher {
  //Combine these into a set with full and complete but have a bool to note when word is complete
  private fullWords = new Set<string>();
  private deconstructedWords = new Set<string>();

  loadValidWords(validWords : string[]) {
    //TODO optimize storate runs
    this.fullWords = new Set(validWords)

    this.deconstructedWords.clear();
    for(const word in validWords) {
      //Store length -1 of word
      let partialWord = "";
      for (let i = 0; i < word.length -1; i++) {
        partialWord += word[i]
        this.deconstructedWords.add(partialWord)
      }
    }
  }

  getWordStatusOfString(input: string) : StringStatus {
    let stringStatus = StringStatus.NotWord;

    if (this.fullWords.has(input)) {
      stringStatus = StringStatus.Word;
    }
    if (this.deconstructedWords.has(input)) {
      if (stringStatus === StringStatus.Word) {
        stringStatus = StringStatus.WordAndPartial;
      } else {
        stringStatus = StringStatus.Partial;
      }
    }
    return stringStatus;
  }
}