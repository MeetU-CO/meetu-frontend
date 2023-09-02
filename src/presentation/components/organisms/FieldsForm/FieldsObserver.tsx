import { useFormikContext } from "formik";
import { FC, useEffect } from "react";

import { FieldComponent } from "../Fields/FieldsData";

const FormObserver: FC<FieldComponent> = ({ id, updateField }) => {
  const { values } = useFormikContext();
  useEffect(() => {
    updateField(id, values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  return null;
};

export default FormObserver;
