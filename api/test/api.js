let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let server = require('../../server');

describe("API", function () {

  it("should be reachable", (done) => {
    chai.request(server)
      .get('/api/atm')
      .end((err, res) => {
        if (err) console.log(err);
        
        res.should.have.status(201);
        res.body.status.should.be.eq("waiting-for-requests");
        done();
      });

  });

  it("should access the ATM and withdraw 30 from it", (done) => {
    chai.request(server)
      .get('/api/atm/withdraw?amount=30')
      .end((err, res) => {
        if (err) console.log(err);
        
        res.should.have.status(201);
        res.body.should.have.property('money');
        res.body.money["notes-10"].should.be.eq(1);
        res.body.money["notes-20"].should.be.eq(1);
        res.body.money["notes-50"].should.be.eq(0);
        res.body.money["notes-100"].should.be.eq(0);
        done();
      });
  });

  it("should access the ATM and withdraw 80 from it", (done) => {
    chai.request(server)
      .get('/api/atm/withdraw?amount=80')
      .end((err, res) => {
        if (err) console.log(err);
        
        res.should.have.status(201);
        res.body.should.have.property('money');
        res.body.money["notes-10"].should.be.eq(1);
        res.body.money["notes-20"].should.be.eq(1);
        res.body.money["notes-50"].should.be.eq(1);
        res.body.money["notes-100"].should.be.eq(0);
        done();
      });
  });

  it("should access the ATM but withdraw 125 is not possible", (done) => {
    chai.request(server)
      .get('/api/atm/withdraw?amount=125')
      .end((err, res) => {
        if (err) console.log(err);
        
        res.should.have.status(406); // Not Acceptable
        res.body.should.have.property('exception');
        res.body.exception.should.be.eq('NoteUnavailableException');

        done();
      });
  });

  it("should access the ATM but withdraw -130 doesn't make sense", (done) => {
    chai.request(server)
      .get('/api/atm/withdraw?amount=-130')
      .end((err, res) => {
        if (err) console.log(err);
        
        res.should.have.status(400); // Bad Request
        res.body.should.have.property('exception');
        res.body.exception.should.be.eq('InvalidArgumentException');

        done();
      });
  });
  

  it("should access the ATM but withdraw without defined amount is ignored", (done) => {
    chai.request(server)
      .get('/api/atm/withdraw')
      .end((err, res) => {
        if (err) console.log(err);
        
        res.should.have.status(201);
        res.body.should.have.property('money');
        (res.body.money["100"] === undefined).should.be.true;
        (res.body.money["50"] === undefined).should.be.true;
        (res.body.money["20"] === undefined).should.be.true;
        (res.body.money["10"] === undefined).should.be.true;

        done();
      });
  });


});