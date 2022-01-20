const hasOnlyDigits = (input) => !input.match(/\D+/g);

const isId = (input, res, name) => {
  if (!input) {
    res.status(400).send({ message: `Incomplete request: ${name} has not been found` });
    return false;
  }

  if (!hasOnlyDigits(input)) {
    res.status(400).send({ message: `Incomplete request: found non-digit characters in ${name}` });
    return false;
  }

  return true;
};

const verifyPersonId = (req, res, next) => {
  const { personId } = req.params;

  if (isId(personId)) next();
};

const verifyGuildId = (req, res, next) => {
  const { guildId } = req.params;

  if (isId(guildId)) next();
};

const verifyUserId = (req, res, next) => {
  const { userId } = req.params;

  if (isId(userId)) next();
};

module.exports = {
  verifyPersonId,
  verifyGuildId,
  verifyUserId,
};
