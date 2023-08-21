module.exports = ({ error, response }) => {
  const errorMessage = error.errorMessage || error.message || String(error);
  error.status = error.errorStatus || error.error_code || 422;

  response.status(error.status).json({ success: false, code: error.status, error_message: errorMessage });
};
