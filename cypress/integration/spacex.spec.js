const { lastLaunch } = require('./graphql');
const { get } = Cypress._;


 describe('SpaceX.land test', function describe() {

  it('GraphQL - the last rocket launched reused its first stage', () => {
    cy.graphQL(lastLaunch, {limit: 1}).then(resp => {
      expect(resp.data).to.be.an('object');
      expect(get(resp.data.launchesPast[0], 'rocket.first_stage.cores[0].reused')).to.equal(true);
    });
  });

  it('REST -  the last rocket launched reused its first stage', () => {
    cy.rest('GET', '/rest/launches-past?mission_name=string&rocket_name=string&core_reuse=string&site_name_long=string&limit=1', ).then(resp => {
      
      expect(resp.body[0]).to.be.an('object');
      expect(get(resp.body[0], 'rocket.first_stage.cores[0].reused')).to.equal(true);
    });
  });

});
