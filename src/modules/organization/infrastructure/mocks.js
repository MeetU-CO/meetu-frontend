const fieldsDB = {
  ID_1: {
    description: "",
    type: "requirement",
    isDefault: false,
  },
  ID_2: {
    description: "",
    type: "cv",
    isDefault: true,
  },
};

//Opcion 1
const fieldFront_1 = {
  ID_1: {
    component: "RequirementComponent",
    mandatory: false,
  },
  ID_2: {
    component: "CVComponent",
  },
};

//Opcion 2
const fieldFront_2 = {
  ID_1: "RequirementComponent",
  ID_2: "CVComponent",
};
