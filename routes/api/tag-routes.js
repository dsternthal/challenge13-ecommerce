const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//http://localhost:3001/api/tags/
router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagData=await Tag.findAll({
      include:[{model: Product,ProductTag}]
    })
    res.status(200).json(tagData)
  }
  catch(err){
    res.status(500).json(err)
  }
});
//http://localhost:3001/api/tags/1
router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData=await Tag.findByPk(id,{
      include:[{model: Product,ProductTag}]
    })
    res.status(200).json(tagData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

//http://localhost:3001/api/tags/
router.post('/', async(req, res) => {
  // create a new tag
  try{
    const tagData=await Tag.create(req.body)
    res.status(200).json(tagData)
  }
  catch(err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
