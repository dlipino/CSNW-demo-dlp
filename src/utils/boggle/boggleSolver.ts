import {WordMatcher, StringStatus} from "./wordmatcher"

class SolvableBoggleTile {
  value: string;
  row: number;
  column: number;

  constructor(value: string, row: number, column: number) {
    this.value = value;
    this.row = row;
    this.column = column;
  }
}

export class BoggleSolver {

  private boggleToSolve : SolvableBoggleTile[][];
  private rowCount: number;
  private colCount: number;
  //TODO add coords for solution. Currently just keep count
  private boggleSolutions: { [key: string]: number } = {};
  private solutionAttempted = false;
  private wordMatcher : WordMatcher;

  isBoggleSolved() {
    return this.solutionAttempted;
  }

  getSolvedWords(): string[] {
    return Object.keys(this.boggleSolutions)
  }

  constructor (boggleBoard : string[][], wordChecker: WordMatcher) {
    let tiles : SolvableBoggleTile[][] = [];
    this.rowCount = boggleBoard.length;
    this.colCount = -1
    for (let i = 0; i < boggleBoard.length; i++) {
      tiles[i] = []
      //Just for fun, doesn't have to be square, but should at least be a rectangle
      if (this.colCount < 0) {
        this.colCount = boggleBoard[i].length
      } else {
        if (this.colCount !== boggleBoard[i].length) {
          throw Error("The boggle board needs to be rectangluar")
        }
      }
      for(let j = 0; j < boggleBoard[i].length; j++) {
        tiles[i][j] = new SolvableBoggleTile(boggleBoard[i][j], i, j)
      }
    }
    this.boggleToSolve = tiles;
    this.wordMatcher = wordChecker;
  }
  
  private addWordToSolution(wordToAdd: string) {
    if (wordToAdd in this.boggleSolutions){
      this.boggleSolutions[wordToAdd]+=1
    } else {
      this.boggleSolutions[wordToAdd] == 1
    }
  }
/**
 * Update the word validator, remove all solutions, and reset the solution attempted state
 * @param wordChecker 
 */
  updateValidWordLibrary(wordChecker: WordMatcher) {
    this.wordMatcher = wordChecker;
    this.boggleSolutions = {}
    this.solutionAttempted = false
  }

  findWordForTile(row: number, column: number, previousStrings: string, visitedTiles: boolean[][]) {
    const currentTile = this.boggleToSolve[row][column]
    // Tile has been visited, so it is illegal to check for a word
    if (visitedTiles[row][column]) return;

    visitedTiles[row][column] = true;
    const word = previousStrings + currentTile.value;
    const wordStatus = this.wordMatcher.getWordStatusOfString(word)
    switch(wordStatus) {
      case StringStatus.NotWord: {
        return;
      }
      case StringStatus.Word: {
        this.addWordToSolution(word)
        return;
      }
      case StringStatus.WordAndPartial: {
        this.addWordToSolution(word)
        //keep going
        break;
      }
      case StringStatus.Partial: {
        // Keep going
        break;
      }
    }
    // Find adjacent tiles, do some bounds checking to avoid resource wasting
    for(let i = row - 1; i <= row + 1 && i < this.rowCount; row++){
      if( i >= 0) {
        for(let j = column - 1; j <= column + 1 && j <this.colCount; column++){
          if(j >= 0 ) {
            this.findWordForTile(i,j,word, visitedTiles)
          }          
        }
      }
    }
  }

  /**
   * Runs the boggle solver if a solution has not been attempted
   * @returns true if a boggle solver was run false if it was not
   */
  solveBoggleBoard():boolean{
    if(this.solutionAttempted) {
      //Leave some sort of message
      return false;
    }
    for(let i = 0; i < this.rowCount; i++) {
      for(let j = 0; j < this.colCount; j++) {
        const visited = Array.from(Array(this.rowCount), () => new Array(this.colCount).fill(false));
        this.findWordForTile(i,j,"", visited)
      }
    }
    this.solutionAttempted = true;
    return true
  }
}