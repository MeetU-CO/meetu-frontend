import { Form, Formik, useFormikContext } from "formik";
import { FC, useEffect } from "react";
import * as Yup from "yup";

import ButtonToggle from "../../atoms/ButtonToggle/ButtonToggle";
import Textarea from "../../atoms/InputFormik/Textarea";

import FormObserver from "../FieldsForm/FieldsObserver";
import FieldsBase from "./FieldsBase";
import { FIELDS_COMPONENTS, FieldComponent } from "./FieldsData";

const Requirement2: FC<FieldComponent> = ({ id, updateField, deleteField }) => {
  const initialValues = FIELDS_COMPONENTS["cv"];

  const validationSchema = Yup.object({
    mainValue: Yup.string()
      .min(10, "La descripción debe tener al menos 10 caracteres")
      .required("Este campo es obligatorio"),
  });

  return (
    <FieldsBase deleteField={deleteField}>
      <Formik
        initialValues={initialValues}
        onSubmit={(i) => console.log(i)}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <Form className="requirement__form">
              <FormObserver id={id} updateField={updateField} />
              <Textarea
                name={"mainValue"}
                placeholder={"Describe tu requisito"}
              />
            </Form>
          );
        }}
      </Formik>
    </FieldsBase>
  );
};

export default Requirement2;
