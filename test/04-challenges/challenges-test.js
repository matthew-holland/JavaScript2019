const { expect } = require("chai");

const {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
} = require("../../exercises/04-challenges/challenges");

<<<<<<< HEAD
describe.only("Challenges", () => {
  it("it should return length of the longest Word", () => {
    const longestWordLength = findLongestWordLength(
      "May the force be with you"
    );
    expect(longestWordLength).to.equal(5);
  });
=======
describe("Challenges", () => {
>>>>>>> 6c31d47e3b12a5bc48a6c5484679f0875310bac9
  it("it should return a boolean if the second argument given to the function is the last letter of the string", () => {
    const lastLetter = confirmEnding("Bastian", "n");
    expect(lastLetter).to.equal(true);
  });
  it("should repeat the given string for the amount of times based off of the second argument", () => {
    const string = repeatStringNumTimes("abc", 3);
    expect(string).to.equal("abcabcabc");
    const empty = repeatStringNumTimes("abc", -2);
    expect(empty).to.equal("");
  });
  it("it should return length of the longest Word", () => {
    const longestWordLength = findLongestWordLength(
      "May the force be with you"
    );
    expect(longestWordLength).to.equal(5);
  });
});