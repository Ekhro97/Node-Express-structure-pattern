const { policiesData } = require('../../data');
const { clientNotExist, noAssignedPolicies } = require('../utils/constants');
const {
  clientsHelper: { clientExists },
} = require('../helpers/index');

const getPolicies = async () => {
  const data = await policiesData;
  return data;
};

const getUserPolicies = async (userId) => {
  const { policies } = policiesData;
  const user = await clientExists(userId);

  if (!user) return clientNotExist;

  const _userPolicies = policies.filter((policy) => policy.clientId === userId);

  if (_userPolicies < 1) return noAssignedPolicies;

  return _userPolicies;
};

module.exports = { getPolicies, getUserPolicies };
