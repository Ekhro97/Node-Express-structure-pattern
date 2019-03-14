const { clientsData } = require('../../data');

const clientExists = async (clientId) => {
  const { clients } = clientsData;

  const _client = await clients.find((client) => client.id === clientId);

  return !!_client;
};

module.exports = { clientExists };
