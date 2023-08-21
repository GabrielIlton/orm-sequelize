module.exports = ({ response, data, statusCode = 200, notReturn = false }) => {
  if (notReturn) return response.status(statusCode).json({ success: true });
  return response.status(statusCode).json({ success: true, data });
};
