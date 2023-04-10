const getReviewsController = require('../../controllers/reviewsControllers/getControllers/getReviewsController');

const getReviewsHandler = async (req, res) => {
    try{
        const results = await getReviewsController();
        res.status(200).json(results);
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getReviewsHandler;