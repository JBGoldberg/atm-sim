let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../../server');

chai.use(chaiHttp);


describe("ATM", function () {

  // Clean enviroment before finish the test batch
  after(function (done) {
    server.close();
    done();
  });

  it("should be reachable", (done) => {
    chai.request(server)
      .get('/api/atm')
      .end((err, res) => {
        if (err) console.log(err);

        console.log("Res:", res.body);
        

        res.should.have.status(201);
        res.body.status.should.be.eq("waiting-for-requests");
        done();
      });

  });

});