import { FC } from "react";

import Description from "./Description";
import Requirement from "./Requirement";
import Requirement2 from "./Requirement2";
import Title from "./Title";

export interface FieldComponent {
  id: string;
  updateField: (id: string, values: any) => void;
  deleteField?: () => void;
}

export interface FieldsObject {
  [id: string]: {
    fieldID: string;
    component: FC<FieldComponent>;
    icon: string;
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
    icon: "folder",
  },
  cv: {
    fieldID: "ID_2",
    component: Requirement2,
    mainValue: "",
    icon: "folder",
  },
  title: {
    fieldID: "ID_3",
    component: Title,
    mainValue: "",
    icon: "text_fields",
  },
  description: {
    fieldID: "ID_4",
    component: Description,
    mainValue: "",
    icon: "description",
  },
};
