import { BoggleSolver } from "./boggleSolver";
import { WordMatcherUsingSets, StringStatus } from "./wordMatcher";

const emptyChecker = new WordMatcherUsingSets();
const singleTile = [["a"]]
const singleLetter = new WordMatcherUsingSets(["a"]);

const doubleTile = [["g", "o"], ["o","t"]]
const simpleChecker = new WordMatcherUsingSets(["go","got"]);

describe("Boggle solver tests", () => {
  describe("1 x 1 boggle board", () => {
    const singleSolve = new BoggleSolver(singleTile, emptyChecker);
    it("Has a valid board", () => {
      expect(singleSolve.boggleToSolve.length).toEqual(1)
      expect(singleSolve.boggleToSolve[0].length).toEqual(1)
    })
    it("Can be solved and has no words", () => {
      singleSolve.solveBoggleBoard()
      expect(singleSolve.isBoggleSolved).toBeTruthy()
      expect(singleSolve.getSolvedWords.length).toBe(0)
    })
  })

  describe("2x2 boggle board", () => {
    const doubleSolve = new BoggleSolver(doubleTile, simpleChecker);
    it("Has a valid board", () => {
      expect(doubleSolve.boggleToSolve.length).toEqual(2)
      expect(doubleSolve.boggleToSolve[0].length).toEqual(2)
    })
    // it("Can be solved and has words", () => {
    //   doubleSolve.solveBoggleBoard()
    //   expect(doubleSolve.isBoggleSolved).toBeTruthy()
    //   expect(doubleSolve.getSolvedWords.length).toBe(0)
    // })
  })

});