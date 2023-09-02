import { Form, Formik, useFormikContext } from "formik";
import { FC, FormEvent, useEffect } from "react";
import * as Yup from "yup";

import ButtonToggle from "../../atoms/ButtonToggle/ButtonToggle";
import Textarea from "../../atoms/InputFormik/Textarea";

import FormObserver from "../FieldsForm/FieldsObserver";
import FieldsBase from "./FieldsBase";
import { FIELDS_COMPONENTS, FieldComponent } from "./FieldsData";

const Requirement: FC<FieldComponent> = ({ id, updateField, deleteField }) => {
  const initialValues = FIELDS_COMPONENTS["requirement"];

  const validationSchema = Yup.object({
    mainValue: Yup.string()
      .min(10, "La descripción debe tener al menos 10 caracteres")
      .required("Este campo es obligatorio"),
  });

  const handleOnChange = (event: any) => {
    // const values = event.currentTarget.map((i: any) => i.name);
    debugger;

    console.log("Form::onChange", event.target.value);
  };

  return (
    <FieldsBase deleteField={deleteField}>
      <Formik
        initialValues={initialValues}
        onSubmit={(i) => console.log(i)}
        validationSchema={validationSchema}
      >
        {(props) => {
          return (
            <Form
              className="requirement__form"
              // onChange={handleOnChange}
            >
              <FormObserver id={id} updateField={updateField} />
              <Textarea
                title={"Requisito"}
                name={"mainValue"}
                placeholder={"Describe tu requisito"}
              />
              <ButtonToggle
                name={"mandatory"}
                label={"Requisito obligatorio"}
              />
            </Form>
          );
        }}
      </Formik>
    </FieldsBase>
  );
};

export default Requirement;
