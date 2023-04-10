const cleanAreas = (array) => {
    const clean = array.map((info) => {
        return {
            id: info.id,
            area: info.area,
            CompanyId: info.CompanyId
        }
    });
    return clean;
};

module.exports = cleanAreas;