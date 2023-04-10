const Review = require('../../../models').Review;

const postReviewsController = async (score, comment, CompanyId) => {
    let newReview = await Review.create({
        score,
        comment
    })

    await newReview.setCompany(CompanyId)

    return `The review has been created correctly.`;
}

module.exports = postReviewsController;