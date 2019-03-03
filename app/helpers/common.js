const customErrorShape = (error = {}) => {
  return Promise.reject(error);
};

module.exports = { customErrorShape };
