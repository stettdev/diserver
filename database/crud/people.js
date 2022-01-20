const { Account: Person } = require('..');

const readPerson = async (guildId, userId) => Person.findOne({ where: { guildId, userId } });
const createPerson = async (guildId, userId) => Person.create({ guildId, userId });
const deletePerson = async (guildId, userId) => Person.destroy({ guildId, userId });
// TODO: updatePerson

module.exports = {
  createPerson,
  readPerson,
  // updatePerson,
  deletePerson,
};
