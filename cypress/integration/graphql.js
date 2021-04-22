const { gql } = require('graphql-request');

module.exports = {
  lastLaunch: gql`
    query launchesPast($limit: Int) {
      launchesPast (limit: $limit) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        rocket {
          rocket_name
          first_stage {
            cores {
              reused
            }
          }
        }
      }
    }`,
};
