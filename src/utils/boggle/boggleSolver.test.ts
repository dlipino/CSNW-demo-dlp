import { BoggleSolver } from "./boggleSolver";
import { WordMatcherUsingSets, StringStatus } from "./wordMatcher";

const emptyChecker = new WordMatcherUsingSets();
const singleTile = [["a"]]
const singleChecker = new WordMatcherUsingSets(["a", "an"]);

const doubleTile = [["g", "o"], ["o","t"]]
const doubleChecker = new WordMatcherUsingSets(["go","got","to"]);
const tripleTile = [["g", "o", "z"], ["o","t", "y"], ["q","w", "y"]]

describe("Boggle solver tests", () => {
  describe("1 x 1 boggle board", () => {
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
      expect(doubleSolve.getSolvedWords().length).toBe(3)

      expect(doubleSolve.getFullSolution()["go"]).toBe(2)
      expect(doubleSolve.getFullSolution()["got"]).toBe(2)
      expect(doubleSolve.getFullSolution()["to"]).toBe(2)
    })
  })

  describe("3x3 boggle board", () => {
    const tripleSolve = new BoggleSolver(tripleTile, doubleChecker);
    it("Has a valid board", () => {
      expect(tripleSolve.boggleToSolve.length).toEqual(3)
      expect(tripleSolve.boggleToSolve[0].length).toEqual(3)
    })
    it("Can be solved and has words", () => {
      tripleSolve.solveBoggleBoard()
      expect(tripleSolve.isBoggleSolved).toBeTruthy()
      expect(tripleSolve.getSolvedWords().length).toBe(3)

      expect(tripleSolve.getFullSolution()["go"]).toBe(2)
      expect(tripleSolve.getFullSolution()["got"]).toBe(2)
      expect(tripleSolve.getFullSolution()["to"]).toBe(2)
    })
  })

});