let chai = require('chai');
let should = chai.should();

const Atm = require('../models/atm');


describe("ATM", function () {

  let atm;

  before(function() {

    // Create a ATM fot all the tests
    atm = new Atm();

  });

  it("should be capable to withdraw 30 in lowest number of notes", () => {

    let myNotes = atm.withdraw(30)

    myNotes.get(100).should.be.eq(0);
    myNotes.get(50).should.be.eq(0);
    myNotes.get(20).should.be.eq(1);
    myNotes.get(10).should.be.eq(1);
    
  });

  it("should be capable to withdraw 80 in lowest number of notes", () => {

    let myNotes = atm.withdraw(80)

    myNotes.get(100).should.be.eq(0);
    myNotes.get(50).should.be.eq(1);
    myNotes.get(20).should.be.eq(1);
    myNotes.get(10).should.be.eq(1);
    
  });
  
  it("should be incapable to withdraw 125, returning NoteUnavailableException", () => {

    try {

      let myNotes = atm.withdraw(125);

    } catch (exception) {

      exception.should.be.eq("NoteUnavailableException");

    }

  });

  it("should be incapable to withdraw -130, returning InvalidArgumentException", () => {

    try {

      let myNotes = atm.withdraw(-130)

    } catch (exception) {

      exception.should.be.eq("InvalidArgumentException")

    }

  });

  it("should be capable to withdraw NULL, returning an empty set", () => {

    let myNotes = atm.withdraw(null);

    (myNotes.get(100) === undefined).should.be.true;
    (myNotes.get(50) === undefined).should.be.true;
    (myNotes.get(20) === undefined).should.be.true;
    (myNotes.get(10) === undefined).should.be.true;
    
  });

});