let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let server = require('../../server');

xdescribe("API", function () {

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

});