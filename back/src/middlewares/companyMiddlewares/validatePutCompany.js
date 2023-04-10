const validateCompanyUpdate = (req, res, next) => {
     const { name, cuit, industry, location, email,numberEmployees, tel, authorized } =req.body;
     if(!name && !cuit && !industry && !location && !email && !numberEmployees && !tel && !authorized) {
          return res.status(400).json({ message: "Please fill all fields" });
     }
      next();
};

module.exports = validateCompanyUpdate;