import { useState } from "react";

export const useErrors = () => {
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    email: "",
    dni: "",
    tel: "",
    address: "",
    role: "",
    image: "",
    position: "",
    area: "",
    cuil: "",
    cbu: "",
    dateOfAdmission: "",
  });

  const setAllErrors = (user) =>setErrors(user)

  return {
    errors,
    setAllErrors,
  };
};
