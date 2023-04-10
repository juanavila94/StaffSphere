const getFileIdCleanDb = (array) => {
  const cleanDb = array.map((info) => {
    return {
      id: info.id,
      dateOfAdmission: info.dateOfAdmission,
      position: info.position,
      area: info.area,
      cuil: info.cuil,
      cbu: info.cbu,
      UserId: info.UserId,
      User: info.User,
    };
  });
  return cleanDb;
};

module.exports = getFileIdCleanDb;
