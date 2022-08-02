const db = require('../models');

const getAll = async () => {
  const response = await db.Client.findAll();
  return response
}

const getById = async (idClient) => {
  const response = await db.Client.findOne({ where: { numberClient: idClient } })
  return response
}

const create = async (clientData) => {
  const client = await db.Client.create(clientData);
  return client
}

const update = async (data, id) => {
  const response = await db.Client.update(data, {
    where: {
      numberClient: id
    }
  });
  return response;
};

const remove = async (id) => {
  const response = await db.Client.destroy({
    where: {
      numberClient: id
    }
  })
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}