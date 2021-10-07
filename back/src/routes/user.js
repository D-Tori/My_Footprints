// @ts-check
const Router = require("express-promise-router").default;

const router = Router();

const db = require("../db");

module.exports = router;

const users = [
  {
    id: 1,
    name: "박철현",
  },
];

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id.toString() === id);
  if (findUser) {
    res.status(200).send(JSON.stringify(findUser));
  } else {
    res.status(404).end();
  }

  // const { id } = req.params;
  // const { rows } = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  // res.send(rows[0]);
});
