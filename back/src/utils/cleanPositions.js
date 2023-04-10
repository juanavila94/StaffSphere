const cleanPositions = (array) => {
    const clean = array.map((info) => {
        return {
            id: info.id,
            position: info.position,
            CompanyId: info.CompanyId
        }
    });
    return clean;
};

module.exports = cleanPositions;