const getCompanyCleanDb = (object) => {
    return {
            id: object.id,
            name: object.name,
            image: object.image,
            cuit: object.cuit,
            industry: object.industry,
            location: object.location,
            numberEmployees: object.numberEmployees,
            tel: object.tel,
            email: object.email,
      paymentDay: object.paymentDay,
            image: object.image
        }
    };

module.exports = getCompanyCleanDb;