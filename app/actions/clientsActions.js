const { clientsData } = require('../../data');
const { clientNotFound } = require('../utils/constants');

const getClients = async () => {
  const data = await clientsData;
  return data;
};

const getClientsById = async (id) => {
  const { clients } = clientsData;

  const _client = await clients.find((client) => client.id === id);

  return _client || clientNotFound;
};

const getClientsByUsername = async (name) => {
  const { clients } = clientsData;

  const _client = await clients.find((client) => client.name === name);

  return _client || clientNotFound;
};

module.exports = { getClients, getClientsById, getClientsByUsername };
