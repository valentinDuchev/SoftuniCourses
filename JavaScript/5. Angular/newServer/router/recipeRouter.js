const { getAllRecipes, createRecipe, getById, updateById, deleteById } = require('../controllers/recipeController');

const router = require('express').Router();

router.get('/recipes/', async (req, res) => {
    const result = await getAllRecipes();
    res.status(200).json(result);
});

router.post('/recipes/', async (req, res) => {
    const data = {
        name: req.body.name, 
        dishType: req.body.dishType, 
        imageUrl: req.body.imageUrl, 
        ingredients: req.body.ingredients, 
        preparation: req.body.preparation, 
        calories: req.body.calories, 
        carbs: req.body.carbs, 
        fat: req.body.fat, 
        protein: req.body.protein
    };
    const result = await createRecipe(data);
    res.status(201).json(result);

});

router.get('/recipes/:id', async (req, res) => {
    const id = req.params.id;
    const result = await getById(id);
    res.status(200).json(result);
});

router.put('/recipes/:id', async (req, res) => {

    const id = req.params.id;

    const data = {
        name: req.body.name, 
        dishType: req.body.dishType, 
        imageUrl: req.body.imageUrl, 
        ingredients: req.body.ingredients, 
        preparation: req.body.preparation, 
        calories: req.body.calories, 
        carbs: req.body.carbs, 
        fat: req.body.fat, 
        protein: req.body.protein
    };

    const result = await updateById(id, data);
    res.status(201).json(result);
});

router.delete('/recipes/:id', async (req, res) => {
    const id = req.params.id;

    await deleteById(id);
    res.status(200).json({message: "Deleted Successfully"})
})

module.exports = router;