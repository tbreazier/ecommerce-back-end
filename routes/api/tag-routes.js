const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { Model } = require('sequelize/types');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
      Model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
      Model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']
      }
    ]
  })
  .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((dbProductData) => res.json(dbProductData))
  .catch((err) => {
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id
    },
  })
  .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      res.status(500).json(err);
    })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    },
  })
  .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      res.status(500).json(err);
    })
});

module.exports = router;
