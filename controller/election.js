var models = require("../models");
exports.electionMgr = {
  getElection: async () => {
    try {
      return await models.Election.findAndCountAll();
    } catch (err) {
      // log.add_log(log.add_log(JSON.stringify({national_id: nid}),JSON.stringify(err)),JSON.stringify(err))
      return err;
    }
  },
  addElection: async body => {
    try {
      return await models.Election.create(body);
    } catch (err) {
      // log.add_log(log.add_log(JSON.stringify({national_id: nid}),JSON.stringify(err)),JSON.stringify(err))
      return err;
    }
  }
};
