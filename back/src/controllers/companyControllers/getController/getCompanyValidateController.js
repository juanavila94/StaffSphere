const Company = require("../../../models").Company;

const getCompanyValidateController = async (name, cuit, tel, email) => {

  if (name) {
    const results = await Company.findOne({
      where: { name: name },
    });
    if (results) {
      return {
        message: "This name already exists",
      };
    } else {
      return null;
    }
  }
  if (cuit) {
    const results = await Company.findOne({
      where: { cuit: cuit },
    });
    if (results) {
      return {
        message: "This cuit already exists",
      };
    } else {
      return null;
    }
  }
  if (tel) {
    const results = await Company.findOne({
      where: { tel: tel },
    });
    if (results) {
      return {
        message: "This phone already exists",
      };
    } else {
      return null;
    }
  }
  if (email) {
    const results = await Company.findOne({
      where: { email: email },
    });
    if (results) {
      return {
        message: "This email already exists",
      };
    } else {
      return null;
    }
  }
};

module.exports = getCompanyValidateController;
