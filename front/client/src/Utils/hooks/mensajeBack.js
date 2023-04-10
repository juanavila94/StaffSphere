import { useState } from "react";

export const useBack = () => {
  const [back, setBack] = useState({
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

  const setAllBack = (user) =>setBack(user)

  return {
    back,
    setAllBack,
  };
};
// email: "",
// dni: "",
// tel: "",
// cuil: "",
// cbu: "",