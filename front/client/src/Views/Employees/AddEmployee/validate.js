const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = (value) => {
  let errors = {};

  if (!value.name) {
    errors.name = "Name is required";
  } else if (value.name.length < 3 || value.name.length > 20) {
    errors.name = "Between 3 and 20 chars";
  }

  if (!value.lastName) {
    errors.lastName = "Last Name is required";
  }

  if (!value.birthDate) {
    errors.birthDate = "Birthdate is required";
  }

  if (!value.email) {
    errors.email = "E-mail is required";
  } else if (value.email && !regexEmail.test(value.email)) {
    errors.email = "Wrong E-mail";
  }

  if (!value.dni) {
    errors.dni = "DNI is required";
  }

  if (!value.tel) {
    errors.tel = "Phone is required";
  }

  if (!value.address) {
    errors.address = "Address is required";
  }

  if (!value.role) {
    errors.role = "Role is required";
  }

  if (!value.image) {
    errors.image = "Image is required";
  }

  if (!value.position) {
    errors.position = "Position is required";
  }

  if (!value.area) {
    errors.area = "Area is required";
  }

  if (!value.cuil) {
    errors.cuil = "Cuil is required";
  }

  if (!value.cbu) {
    errors.cbu = "CBU is required";
  }

  if (!value.dateOfAdmission) {
    errors.dateOfAdmission = "CBU is required";
  }

  return errors
};

export default validate