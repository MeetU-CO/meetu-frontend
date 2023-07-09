import { Form, Formik, useFormikContext } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

import ButtonToggle from "../../atoms/ButtonToggle/ButtonToggle";
import Textarea from "../../atoms/InputFormik/Textarea";

import FieldsBase from "./FieldsBase";

interface IRequirement {
  id: string;
  updateField: (id: string, values: any) => void;
}

const Requirement2 = ({ id, updateField }: IRequirement) => {
  const initialValues = {
    description: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string()
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
                name={"description"}
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
