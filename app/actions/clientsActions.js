const { clientsData } = require('../../data');
const { clientNotFound } = require('../utils/constants');

const getClients = async () => {
  const data = await clientsData;
  return data;
};

const getClientsById = async (id) => {
  const { clients } = clientsData;

  const _client = await clients.find((client) => {
    return client.id === id;
  });

  if (!_client) return clientNotFound;

  return _client;
};

const getClientsByUsername = async (name) => {
  const { clients } = clientsData;

  const _client = await clients.find((client) => {
    return client.name === name;
  });

  if (!_client) return clientNotFound;

  return _client;
};

module.exports = { getClients, getClientsById, getClientsByUsername };
