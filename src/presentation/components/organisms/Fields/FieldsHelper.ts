import { Fields } from "../../../../modules/organization/domain/Organization";

import { FIELDS_COMPONENTS } from "./FieldsData";

const fieldsAdapter = (fields: Fields) => {
  const ids = Object.keys(fields);
  const components = ids.map((id: string) => ({
    ...fields[id],
    ...FIELDS_COMPONENTS[id],
  }));
  console.log(components);
  return components;
};

export { fieldsAdapter };
