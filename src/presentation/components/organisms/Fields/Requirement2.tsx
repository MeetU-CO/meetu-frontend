import { Form, Formik, useFormikContext } from "formik";
import { FC, useEffect } from "react";
import * as Yup from "yup";

import ButtonToggle from "../../atoms/ButtonToggle/ButtonToggle";
import Textarea from "../../atoms/InputFormik/Textarea";

import FieldsBase from "./FieldsBase";
import { FIELDS_COMPONENTS, FieldComponent } from "./FieldsData";

const Requirement2: FC<FieldComponent> = ({ id, updateField }) => {
  const initialValues = FIELDS_COMPONENTS["cv"];

  const validationSchema = Yup.object({
    mainValue: Yup.string()
      .min(10, "La descripción debe tener al menos 10 caracteres")
      .required("Este campo es obligatorio"),
  });

  return (
    <FieldsBase>
      <Formik
        initialValues={initialValues}
        onSubmit={(i) => console.log(i)}
        validationSchema={validationSchema}
      >
        {(props) => {
          updateField(id, props.values);
          return (
            <Form className="requirement__form">
              <Textarea
                title={"Requisito 2"}
                name={"mainValue"}
                placeholder={"Describe tu requisito"}
              />
              {/* <ButtonToggle
                name={"mandatory"}
                label={"Requisito obligatorio"}
              /> */}
            </Form>
          );
        }}
      </Formik>
    </FieldsBase>
  );
};

export default Requirement2;
