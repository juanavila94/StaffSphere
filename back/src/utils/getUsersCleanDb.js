const getUserCleanDb = (array) => {
    const cleanDb = array.map((info) => {
        return {
            id: info.UserId,
            Fileid: info.id,
            name: info.User.name,
            lastName: info.User.lastName,
            email: info.User.email,
            image: info.User.image,
            role: info.User.role,
            position: info.Position.position,
            area: info.Area.area,
            CompanyId: info.User.CompanyId
        }
    });
    return cleanDb;
};

module.exports = getUserCleanDb;