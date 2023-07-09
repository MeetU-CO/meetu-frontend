import { useCallback, useRef } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import ButtonPassive from "../../atoms/ButtonPassive/ButtonPassive";
import TextLight from "../../atoms/TextLight/TextLight";

import { fieldData } from "../Fields/FieldData";
import DropArea from "./DropArea";
import "./FieldsForm.scss";

interface IFieldsForm {}

const FieldsForm = ({}: IFieldsForm) => {
  const fieldsList = useRef({});

  const acceptedFields = (object: any) => {
    const fieldsNames = Object.keys(object);
    return fieldsNames;
  };

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: acceptedFields(fieldData),
      drop: (item: { name: string; available: boolean }) => {
        const id: string = uuidv4();
        const newField: any = { ...fieldsList.current };
        newField[id] = fieldData[item.name as keyof Object];
        fieldsList.current = newField;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [fieldsList]
  );

  const zipFields = useCallback(() => {
    const fieldsIds = acceptedFields(fieldsList.current);
    const fieldsValues = Object.values(fieldsList.current);
    // console.log(fieldsList.current);
    return fieldsValues.map((i: any, index: number) => [fieldsIds[index], i]);
  }, []);

  const updateField = useCallback((id: string, values: any) => {
    let copyFields: any = { ...fieldsList.current };
    copyFields[id] = { ...copyFields[id], ...values };
    // console.log(fieldsList);
    fieldsList.current = copyFields;
  }, []);

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fieldsList.current);
  };

  return (
    <div className="fieldsForm">
      <form className="fieldsForm__submitButton" onSubmit={(e) => sendData(e)}>
        <ButtonPassive type={"submit"} text={"Crear"} />
      </form>
      {zipFields().map((i: any) => {
        const Field = i[1].component;
        return (
          <div
            key={i[0]}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Field id={i[0]} updateField={updateField} />
          </div>
        );
      })}
      {/* <div
        className={
          isOver ? "fieldsForm__dropArea--isOver" : "fieldsForm__dropArea"
        }
        ref={drop}
      >
        <TextLight
          text={"Arrastra y suelta tu campo aquí"}
          textAlign={"center"}
        />
      </div> */}
      <DropArea fieldsList={fieldsList} acceptedFields={acceptedFields} />
    </div>
  );
};

export default FieldsForm;
