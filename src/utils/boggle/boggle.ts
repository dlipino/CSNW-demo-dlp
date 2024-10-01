import {LetterSelector} from './letterSelector';
import {BoggleSolver} from './boggleSolver';
import { WordMatcherUsingSets } from './wordMatcher';

export class Boggle {
  private letterSelector = new LetterSelector()
  private wordMatcher = new WordMatcherUsingSets();
  private boggleSolver!: BoggleSolver;
  rows: number;
  columns: number
  //TODO Create a boggle tile type instead of string, useful for the 'Qu' 
  private boggleBoardArray: (string | null )[][];

  constructor(boardWidth: number = 4, boardHeight: number = 4) {
    this.rows = boardWidth;
    this.columns = boardHeight
    this.boggleBoardArray =Array.from({ length: this.rows }, () => Array.from({ length: this.columns }, () => null));
  }

  getFlatBoggleBoard():(string | null)[] {
    return this.boggleBoardArray.flat();
  }

  fillBoardFromSimpleSource() {
    this.boggleBoardArray = Array.from({ length: this.rows }, () => Array.from({ length: this.columns }, () => this.letterSelector.randomLetterFromAlphabet()));
    this.boggleSolver = new BoggleSolver(this.boggleBoardArray as string[][], this.wordMatcher)
  }
  
  setBoggleDictionary(validWords: string[]) {
    this.wordMatcher.loadValidWords(validWords);
  }
  /**
   * Fill boggle board tiles with now 2d array.
   * Should check for matching row/col and verify that values are valid
   * @param newTiles - new set of tiles, must match current row/column size
   */
  fillBoardWithInput(newTiles : string[][]) {
    //Error check. For now just row/col size
    if (newTiles.length !== this.rows) {
      throw new Error("New Tiles have incorrect row size");
    }
    for (let i = 0; i < newTiles.length; i++) {
      if (newTiles[i].length !== 4) {
        throw new Error(`New Tiles have incorrect column size at row ${i}`);
      }
      //TODO check for correct letter type, probably
    }

    this.boggleBoardArray = newTiles;
  }

  getBoardSolutions() : string[] {
    //This could take time, future might try something async
    this.boggleSolver.solveBoggleBoard();
    if (this.boggleSolver.isBoggleSolved()) {
      return this.boggleSolver.getSolvedWords()
    }
    throw Error("Boggle solver could not solve this boggle")
    
  }
}