const express = require("express");
const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");

const electionMgr = require("../controller/election").electionMgr;
const validation = require("../middlewares/validation").validation;
router.get("/", async (req, res) => {
  console.log(" im in election");
  const election = await electionMgr.getElection();
  res.send(election);
});

router.post("/", validation.electionForm, async (req, res) => {
  const result = await electionMgr.addElection(req.body);
  res.send(result);
});
module.exports = router;
