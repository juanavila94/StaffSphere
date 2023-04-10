const regex = {
  date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  email: /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  image: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)\??([%&a-z0-9=_-]+)?$/i,
};

const validate = (values, getAlllEmployees) => {
  // console.log(getAlllEmployees, "alllll");
  const errors = {};

  const allEmails = getAlllEmployees.map((el) => el.email);
  const allCbus = getAlllEmployees.map((el) => el.cbu);
  const allCuils = getAlllEmployees.map((el) => el.cuil);
  const allTel = getAlllEmployees.map((el) => el.tel);
  const allDni = getAlllEmployees.map((el) => el.dni);

  if (allEmails.includes(`${values.email}`))
    errors.email = "Email already exist";
  if (allCbus.includes(`${values.cbu}`)) errors.cbu = "Cbu already exist";
  if (allCuils.includes(`${values.cuil}`)) errors.cuil = "Cuil already exist";
  if (allTel.includes(`${values.tel}`))
    errors.tel = "Phone number already exist";
  if (allDni.includes(`${values.dni}`)) errors.dni = "Dni already exist";

  if (values.role === "default") errors.role = "You must choose a role";
  if (!values.name.length) errors.name = "Name can't be empty";
  if (!values.lastName.length) errors.lastName = "Last name can't be empty";
  if (!values.cuil.length) errors.cuil = "CUIL can't be empty";
  if (!values.cbu.length) errors.cbu = "CBU can't be empty";
  if (!values.address.length) errors.address = "Address can't be empty";
  if (values.PositionId === 0) errors.PositionId = "You must choose a position";
  if (values.AreaId === 0) errors.AreaId = "You must choose an area";
  if (!values.tel.length) errors.tel = "Phone number can't be empty";
  if (!values.birthDate.length) errors.birthDate = "You must choose a date";
  if (!values.dateOfAdmission.length)
    errors.dateOfAdmission = "You must choose a date";
  if (!values.dni.length) errors.dni = "DNI can't be empty";
  if (values.dni.length > 8)
    errors.dni = "DNI can't be greater than 8 characters";
  if (values.tel.length > 13)
    errors.tel = "Phone can't be greater than 13 characters";
  if (!values.email.length) errors.email = "Email can't be empy";
  if (!regex.email.test(values.email))
    errors.email = "Email invalid, please try again";

  const currentYear = new Date().getFullYear();
  const year = values.birthDate.split("-")[0];
  const yearAdmission = values.dateOfAdmission.split("-")[0];
  const admission = currentYear - yearAdmission;
  const age = currentYear - year;
  // console.log(year);
  // console.log(age);
  // console.log(admission);

  if (age < 18) errors.birthDate = "You must be at least 18 years old";
  if (age < admission) errors.dateOfAdmission = "";
  if (admission >= age - 17)
    errors.dateOfAdmission = "You must be at least 18 years old";

  return errors;
};

export default validate;
