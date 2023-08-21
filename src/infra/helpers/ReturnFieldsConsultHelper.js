module.exports = ({ fieldsToReturn, fieldsToNotReturn }) => {
  if (fieldsToReturn) {
    if (!fieldsToReturn[0]) return { attributes: ['id'] };
    return { attributes: fieldsToReturn };
  }

  if (fieldsToNotReturn) return { attributes: { exclude: fieldsToNotReturn } };
};
