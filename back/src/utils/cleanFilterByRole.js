const cleanDatabaseFilterByRole = (arr) => {
    const clean = arr.map(user => {
        return {
            id: user.UserId,
            name: user.User.name,
            lastName: user.User.lastName,
            image: user.User.image,
            role: user.User.role,
            Fileid: user.id,
            position: user.position,
            area: user.area,

        }
    })
    return clean;

};

module.exports = cleanDatabaseFilterByRole;