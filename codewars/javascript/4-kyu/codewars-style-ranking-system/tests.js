/** 
Test cases below as none originally provided in CodeWars console during development
(Copy below into CodeWars test console) - Using Node with Babel
**/

const chai = require("chai");
const assert = chai.assert;

describe("Testing class access", () => {
  let user;
  
  before(() => {
    user = new User();
  });
  
  it("ensure objects have own values", () => {
    let userB = new User();
    userB.incProgress(-6);
    
    assert.notEqual(user, userB);
    assert.equal(user.progress, 0);
    assert.equal(userB.progress, 40);
  });
  
  it("should not be able to directly modify rank and progress", () => {
    assert.throws(() => { user.rank = 8 });
    assert.throws(() => { user._rank = 8 });
    assert.throws(() => { user.progress = 99 });
    assert.throws(() => { user._progress = 99 });
  });
  
  it("should not be able to access internal methods or properties", () => {
    assert.throws(() => { user.getNewRank(user.rank, 1); });
    assert.throws(() => { user.calculatePoints(user.rank, 8); });
    assert.throws(() => { user.updateValue({}, "_progress", () => 97); });
    assert.equal(user.RankSystem, undefined);
  });
});

describe("Rank System Test Suite", () => {
  
  describe("when creating a new user", () => {
    let user;
    
    before(() => {
      user = new User();
    });
    
    it("the default rank and progress should be correct", () => {
      assert.equal(user.rank, -8);
      assert.equal(user.progress, 0);
    });
    
    it("they are awarded the correct amount of points for completing a same rank activity", () => {
      user.incProgress(-8);
      assert.equal(user.progress, 3);
    });
    
    it("they are awarded the correct amount of points for completing an activity 1 rank higher", () => {
      user.incProgress(-7);
      assert.equal(user.progress, 10);
    });
    
    it("they are awarded the correct amount of points for completing an activity 3 ranks higher", () => {
      user.incProgress(-5);
      assert.equal(user.progress, 90);
    });
    
    it("they are correctly moved up 1 rank after exceeding progress threshold", () => {
      user.incProgress(-6);
      user.incProgress(-6);
      user.incProgress(-6);
      
      assert.equal(user.rank, -7);
      assert.notEqual(user.rank, -8);
      
      assert.equal(user.progress, 20);
      assert.notEqual(user.progress, 0);
    });
    
    it("they are correctly moved up 2 ranks after exceeding progress threshold", () => {
      user.incProgress(-3);
      
      assert.equal(user.rank, -6);
      assert.notEqual(user.rank, -8);
      
      assert.equal(user.progress, 50);
      assert.notEqual(user.progress, 0);
    });
    
    it("they are not allowed to complete an invalid ranked activity", () => {
      assert.throws(() => { user.incProgress(9); });
      assert.throws(() => { user.incProgress(0); });
      assert.throws(() => { user.incProgress(-9); });
    });
    
  });
  
  describe("when a user has reached the maximum rank", () => {
    let user;
    
    before(() => {
      user = new User();
      user.incProgress(8); // Rules of Kata allow direct levelling to 8 if new user completes a single rank 8 activity
    });
    
    it("the progress score is not updated and rank remains the same", () => {
      user.incProgress(8);
      assert.equal(user.progress, 0);
      assert.equal(user.rank, 8);
    });
  });
  
  describe("given a -1 ranked user", () => {
    let user;
    
    before(() => {
      // Rank: -1, Progress: 0
      user = new User();
      user.incProgress(1);
      user.incProgress(1);
      user.incProgress(-1);
      user.incProgress(-1);
    });
    
    it("when progressing to the next rank they go to rank 1", () => {
      user.incProgress(4);
      assert.equal(user.rank, 1);
      assert.notEqual(user.rank, -1);
    });
    
    it("when completing a same ranked activity they receive 3 progress points", () => {
      user.incProgress(-1);
      assert.equal(user.progress, 3);
    });
    
    it("when completing a -2 ranked activity they receive 1 progress points", () => {
      user.incProgress(-2);
      assert.equal(user.progress, 1);
    });
    
    it("when completing a -3 ranked activity they receive 0 progress points", () => {
      user.incProgress(-3);
      assert.equal(user.progress, 0);
    });
  });
});