export class LetterSelector {
  //Letter pool
  private readonly alphabetArray = [...'abcdefghijklmnopqrstuvwxyz'];
  //Add a boggle correct letter pool

  randomLetterFromAlphabet() : string  {
    return this.alphabetArray[(Math.floor(Math.random() * this.alphabetArray.length))]
  }
  //TODO: Add a letter validator
  //TODO: create an enhanced selection process that tiles sets with word friendly tile distributions
}


// import {IsString, Length} from "class-validator";

// export class BoggleLetter {
//     @Length(1,2)
//     @IsString()
//     letter: string;
//     constructor(message: string) {
//         this.letter = letter;
//     }
// }