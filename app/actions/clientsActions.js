const { clients } = require('../../data');

const getClients = async () => {
  const data = await clients.tet();
  return data;
};

module.exports = { getClients };
