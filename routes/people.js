const express = require('express');
const { Person } = require('../database');
const { verifyGuildId, verifyUserId } = require('../middleware/paramsMiddleware');

const router = express.Router();
const getPerson = async (guildId, userId) => Person.findOne({ where: { guildId, userId } });
const createPerson = async (guildId, userId) => Person.create({ guildId, userId });

router.get('/', (req, res) => {
  res.status(500);
});

router.use('/:guildId/:userId', verifyGuildId);
router.use('/:guildId/:userId', verifyUserId);
router.get('/:guildId/:userId', (req, res) => {
  const { guildId, userId } = req.params;
  const person = getPerson(guildId, userId);
  if (!person) {
    return res.status(404).send({ message: 'Person not found' });
  }

  return res.status(200).send({ person });
});

router.use('/register/:guildId/:userId', verifyGuildId);
router.use('/register/:guildId/:userId', verifyUserId);
router.post('/register/:guildId/:userId', (req, res) => {
  const { guildId, userId } = req.params;
  let person;

  try {
    person = createPerson(guildId, userId);
  } catch (error) {
    return res.status(500).send({ message: 'Couldn\'t create a Person' });
  }

  return res.status(200).send({ person });
});

module.exports = router;
