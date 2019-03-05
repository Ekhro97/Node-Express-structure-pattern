const { clientsData } = require('../../data');

const clientExists = async (clientId) => {
  const { clients } = clientsData;

  const _client = await clients.find((client) => {
    return client.id === clientId;
  });

  console.log(_client);
  if (_client) return true;

  return false;
};

module.exports = { clientExists };
