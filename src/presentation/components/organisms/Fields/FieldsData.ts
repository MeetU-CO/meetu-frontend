import Requirement from "./Requirement";
import Requirement2 from "./Requirement2";

export const fieldsData = {
  requirement: {
    type: "requirement",
    component: Requirement,
    description: "",
    mandatory: "",
  },
  cv: {
    type: "cv",
    component: Requirement2,
    description: "",
  },
};

export const FIELDS_COMPONENTS: any = {
  requirement: {
    type: "requirement",
    component: Requirement,
  },
  cv: {
    type: "cv",
    component: Requirement2,
  },
};

export interface FieldsList {
  type: string;
  component: JSX.Element;
  description: string;
  isDefault: boolean;
}
