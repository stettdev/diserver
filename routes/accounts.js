const express = require('express');
const { createAccount, deleteAccount, readAccount } = require('../database/crud/accounts');
const { verifyPersonId } = require('../middleware/paramsMiddleware');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(500);
});

router.use('/:personId', verifyPersonId);
router.get('/:personId', async (req, res) => {
  const { personId } = req.params;
  let account;

  try {
    account = await readAccount(personId);
  } catch (error) {
    return res.status(500).send({ message: 'There was an issue while searching for an Account' });
  }

  if (!account) {
    return res.status(404).send({ message: 'Account not found' });
  }

  return res.status(200).send({ account });
});

router.use('/open/:personId', verifyPersonId);
router.post('/open/:personId', async (req, res) => {
  const { personId } = req.params;
  let account;

  try {
    account = await createAccount(personId);
  } catch (error) {
    return res.status(500).send({ message: 'There was an issue while creating an Account' });
  }

  return res.status(200).send({ account });
});

router.use('/close/:personId', verifyPersonId);
router.post('/close/:personId', async (req, res) => {
  const { personId } = req.params;
  let account;

  try {
    account = await deleteAccount(personId);
  } catch (error) {
    return res.status(500).send({ message: 'There was an issue while creating an Account' });
  }

  return res.status(200).send({ account });
});

module.exports = router;
