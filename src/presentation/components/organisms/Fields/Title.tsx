import { Form, Formik, useFormikContext } from "formik";
import { FC, FormEvent, useEffect } from "react";
import * as Yup from "yup";

import ButtonToggle from "../../atoms/ButtonToggle/ButtonToggle";
import Input from "../../atoms/InputFormik/Input";
import InputOffer from "../../atoms/InputFormik/InputOffer";
import Textarea from "../../atoms/InputFormik/Textarea";
import TitleH3 from "../../atoms/TitleH3/TitleH3";

import FormObserver from "../FieldsForm/FieldsObserver";
import FieldsBase from "./FieldsBase";
import { FIELDS_COMPONENTS, FieldComponent } from "./FieldsData";

const Title: FC<FieldComponent> = ({ id, updateField, deleteField }) => {
  const initialValues = FIELDS_COMPONENTS["title"];

  const validationSchema = Yup.object({
    mainValue: Yup.string()
      .min(10, "El título debe tener al menos 10 caracteres")
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
              <TitleH3
                title={"Título"}
                color={"var(--black-full-color)"}
                textAlign={"left"}
              />
              <InputOffer
                type={"text"}
                name={"mainValue"}
                placeholder={"Nombra tu oferta"}
              />
            </Form>
          );
        }}
      </Formik>
    </FieldsBase>
  );
};

export default Title;