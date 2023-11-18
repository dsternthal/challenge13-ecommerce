const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
// endpoints give the ability to do CRUD
//category is the primary model

//http://localhost:3001/api/categories/
//GET - READ
router.get('/', async(req, res) => {
  try {
    const categoryData=await Category.findAll({
      include:[{model: Product}]
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
  // find all categories
  // be sure to include its associated Products
});

//http://localhost:3001/api/categories/1
router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id=req.params.id
  try {
    const categoryData= await Category.findByPk(id ,{
      include:[{model: Product}]
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//http://localhost:3001/api/categories/
router.post('/', async(req, res) => {
  // create a new category
    try {
      const categoryData= await Category.create(req.body)
      res.status(200).json(categoryData)
    }
    catch(err){
      res.status(500).json(err)
    }
});

//http://localhost:3001/api/categories/1
router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  //PUT = update
  try {
    const categoryData= await Category.update(req.body,{
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData= await Category.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(categoryData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

module.exports = router;
