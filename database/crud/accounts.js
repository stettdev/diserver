const { Account } = require('..');

const readAccount = async (ownerId) => Account.findOne({ where: { ownerId } });
const createAccount = async (ownerId) => Account.create({ ownerId });
const deleteAccount = async (ownerId) => Account.destroy({ ownerId });
// TODO: updateAccount

module.exports = {
  createAccount,
  readAccount,
  // updateAccount,
  deleteAccount,
};
