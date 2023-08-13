import { FC } from "react";

import Requirement from "./Requirement";
import Requirement2 from "./Requirement2";

export interface FieldComponent {
  id: string;
  updateField: (id: string, values: any) => void;
  deleteField?: () => void;
}

export interface FieldsObject {
  [id: string]: {
    fieldID: string;
    component: FC<FieldComponent>;
    mandatory?: string;
    options?: string[];
    mainValue?: string;
    secondaryValue?: string;
  };
}

export const FIELDS_COMPONENTS: FieldsObject = {
  requirement: {
    fieldID: "ID_1",
    component: Requirement,
    mainValue: "",
    mandatory: "",
  },
  cv: {
    fieldID: "ID_2",
    component: Requirement2,
    mainValue: "",
  },
};
