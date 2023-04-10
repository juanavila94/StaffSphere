const Review = require('../../../models').Review;
const Company = require('../../../models').Company;
const cleanReviews = require('../../../utils/cleanReviews');


const getReviewsController = async () => {
    
    const results = await Review.findAll({
        include: {
            model: Company,
            attributes: ["name", 'image']
        }
    });
    if (!results) throw new Error ('There are no reviews yet.')
    
    const cleanResults = cleanReviews(results)
    return cleanResults;
}


module.exports = getReviewsController;