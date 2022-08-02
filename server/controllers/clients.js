const clientsServices = require('../services/clients');

const getAll = async (req, res, next) => {
  try {
    const response = await clientsServices.getAll();
    res.status(200).json(response)
  } catch (error) {
    next(error);
  }
  
};

const getById = async (req, res, next) => {
  try {
    const {id} = req.params;
    const response = await clientsServices.getById(id);
    res.status(200).json(response)
  } catch (error){
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const response = await clientsServices.create(req.body);
    res.status(200).json(response);
    console.log(response)
  } catch (error){
    next(error)
  }  
}

const update = async (req, res, next) => {
  try {
    const response = await clientsServices.update(req.body, req.params.id);
    res.status(200).json(response)
  } catch (error){
    next(error)
  }
}

const remove = async (req, res, next) => {
  try {
    const response = await clientsServices.remove(req.params.id);
    return res.status(200).json(response)
  } catch (error){
    next(error)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}