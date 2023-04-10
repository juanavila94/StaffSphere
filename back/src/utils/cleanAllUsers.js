const cleanAllUsers = (array) => {
    const clean = array.map((info) => {
        return {
            id: info.User.id,
            cuil: info.cuil,
            cbu: info.cbu,
            email: info.User.email,
            dni: info.User.dni,
            tel: info.User.tel,
            FileId: info.id,
            CompanyId: info.User.CompanyId
        }
    });
    return clean;
};

module.exports = cleanAllUsers;