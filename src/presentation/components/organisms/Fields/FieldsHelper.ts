import { v4 as uuidv4 } from "uuid";

import { FieldsList } from "../../../../modules/organization/domain/Organization";

import { FIELDS_COMPONENTS } from "./FieldsData";

const getFieldsList = (fields: FieldsList) => {
  const ids = Object.keys(fields);
  const fieldsList = ids.map((id: string) => ({
    ...fields[id],
  }));
  return fieldsList;
};

const getInitialFields = (fields: FieldsList) => {
  let fieldsObject: any = {};
  const ids = Object.keys(fields);
  ids.forEach((id: string) => {
    if (fields[id].isDefault) {
      const componentID: string = uuidv4();
      fieldsObject[componentID] = {
        ...FIELDS_COMPONENTS[fields[id].name],
        ...fields[id],
      };
    }
  });
  return fieldsObject;
};

export { getFieldsList, getInitialFields };
