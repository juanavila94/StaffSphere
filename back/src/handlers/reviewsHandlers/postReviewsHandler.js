const postReviewsController = require('../../controllers/reviewsControllers/postControllers/postReviewsController');


const postReviewsHandler = async (req, res) => {

    const { score, comment, CompanyId } = req.body;

    try {
        const newReview = await postReviewsController(score, comment, CompanyId)
        res.status(200).json(newReview);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = postReviewsHandler;