import { Form, Formik, FormikHelpers, FormikValues } from "formik";

import ButtonToggle from "../../atoms/ButtonToggle/ButtonToggle";
import Textarea from "../../atoms/InputFormik/Textarea";

import FieldsBase from "./FieldsBase";

interface IRequirement {}

const Requirement = ({}: IRequirement) => {
  const initialValues = {
    description: "",
    mandatory: "",
  };

  return (
    <FieldsBase>
      <Formik
        initialValues={initialValues}
        onSubmit={(i) => console.log(i)}
        // validationSchema={}
      >
        {() => (
          <Form className="requirement__form">
            <Textarea
              title={"Requisito"}
              name={"description"}
              placeholder={"Describe tu requisito"}
            />
            <ButtonToggle name={"mandatory"} label={"Requisito obligatorio"} />
          </Form>
        )}
      </Formik>
    </FieldsBase>
  );
};

export default Requirement;
