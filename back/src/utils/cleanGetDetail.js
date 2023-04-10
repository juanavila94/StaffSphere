const cleanGetDetail = (user) => {
    const clean = {
      
            id: user.UserId,
            FileId: user.id,
            name: user.User.name,
            lastName: user.User.lastName,
            email: user.User.email,
            birthDate: user.User.birthDate,
            address: user.User.address,
            image: user.User.image,
            dni: user.User.dni,
            tel: user.User.tel,
            role: user.User.role,
            dateOfAdmission: user.dateOfAdmission,
            positionId: user.Position.id,
            position: user.Position.position,
            area: user.Area.area,
            areaId: user.Area.id,
            cuil: user.cuil,
            cbu: user.cbu,
            CompanyId: user.User.CompanyId
        
    }

    return clean;
}

module.exports = cleanGetDetail;