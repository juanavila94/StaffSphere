const cleanReviews = (array) => {
    const cleanReview = array.map((info) => {
        return {
            id: info.id,
            score: info.score,
            comment: info.comment,
            CompanyId: info.CompanyId,
            name: info.Company.name,
            image: info.Company.image
        }
    });
    return cleanReview;
};

module.exports = cleanReviews;