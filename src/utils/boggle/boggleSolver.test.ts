import { BoggleSolver } from "./boggleSolver";
import { WordMatcherUsingSets, StringStatus } from "./wordMatcher";

const emptyChecker = new WordMatcherUsingSets();
const singleTile = [["a"]]
const singleChecker = new WordMatcherUsingSets(["a", "an"]);

const doubleTile = [["g", "o"], ["o","t"]]
const doubleChecker = new WordMatcherUsingSets(["go","got"]);

describe("Boggle solver tests", () => {
  describe.skip("1 x 1 boggle board", () => {
    const singleSolve = new BoggleSolver(singleTile, singleChecker);
    it("Has a valid board", () => {
      expect(singleSolve.boggleToSolve.length).toEqual(1)
      expect(singleSolve.boggleToSolve[0].length).toEqual(1)
    })
    it("Can be solved and has no words", () => {
      singleSolve.solveBoggleBoard()
      expect(singleSolve.isBoggleSolved).toBeTruthy()
      expect(singleSolve.getSolvedWords().length).toBe(1)
    })
  })

  describe("2x2 boggle board", () => {
    const doubleSolve = new BoggleSolver(doubleTile, doubleChecker);
    it("Has a valid board", () => {
      expect(doubleSolve.boggleToSolve.length).toEqual(2)
      expect(doubleSolve.boggleToSolve[0].length).toEqual(2)
    })
    it("Can be solved and has words", () => {
      doubleSolve.solveBoggleBoard()
      expect(doubleSolve.isBoggleSolved).toBeTruthy()
      expect(doubleSolve.getSolvedWords().length).toBe(2)

      expect(doubleSolve.getFullSolution()["go"]).toBe(2)
      expect(doubleSolve.getFullSolution()["got"]).toBe(2)
    })
  })

});