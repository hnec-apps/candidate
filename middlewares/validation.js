const validator = require("validator");
exports.validation = {
  electionForm: async (req, res, next) => {
    let error = [];
    console.log(req.body);
    if (!req.body.name || !validator.isAlpha(req.body.name)) {
      error.push({ name: false });
    }
    if (!req.body.startDate || !validator.toDate(req.body.startDate)) {
      error.push({ startDate: false });
    }
    if (
      !req.body.endDate ||
      !validator.toDate(req.body.endDate) ||
      validator.isBefore(req.body.endDate, req.body.startDate)
    ) {
      error.push({ endDate: false });
    }
    if (error.length == 0) {
      console.log("dadada", error, error.length);
      next();
    } else {
      return res.status(401).send({ error });
    }
  }
};
