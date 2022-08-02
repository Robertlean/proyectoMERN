const productServices = require('../services/products');

const getAll = async(req, res, next) => {
  try{
    const respuesta = await productServices.getAll();
    res.status(200).json(respuesta)
  } catch (error) {
    next(error)
  }
}

const getById = async (req, res, next) => {
  try{
    const {id} = req.params;
    const response = await productServices.getById(id);
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try{
    const response = await productServices.create(req.body);
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try{
    const response = await productServices.update(req.body, req.params.id);
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

const remove = async (req, res, next) => {
  try{
    const response = await productServices.remove(req.params.id);
    return res.status(200).json(response)
  } catch (error) {
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