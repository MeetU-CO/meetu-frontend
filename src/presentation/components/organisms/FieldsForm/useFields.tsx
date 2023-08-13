import { ReactElement, useRef } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import TextLight from "../../atoms/TextLight/TextLight";

import {
  Field,
  FieldsList,
} from "../../../../modules/organization/domain/Organization";

import { FIELDS_COMPONENTS } from "../Fields/FieldsData";

const useFields = (fields: Field[], organizationFields: FieldsList) => {
  const fieldsList: any = useRef(fields);

  const getAcceptedFields = () => {
    const acceptedFields = Object.values(organizationFields).map(
      (i: Field) => i.name
    );
    return acceptedFields;
  };

  const zipFields = () => {
    const fieldsIds = Object.keys(fieldsList.current);
    const fieldsValues = Object.values(fieldsList.current);
    return fieldsValues.map((i: any, index: number) => [fieldsIds[index], i]);
  };

  const getDefaultFields = () => {
    const defaultFields = zipFields();
    return defaultFields.filter((i: any) => i[1].isDefault);
  };

  const getOptionalFields = () => {
    const optionalFields = zipFields();
    return optionalFields.filter((i: any) => !i[1].isDefault);
  };

  const addField = (item: { name: string; available: boolean }) => {
    const id: string = uuidv4();
    const newField: any = { ...fieldsList.current };
    const fieldData = FIELDS_COMPONENTS[item.name as keyof Object];
    newField[id] = {
      ...fieldData,
      ...organizationFields[fieldData.fieldID],
      isDefault: false,
    };
    fieldsList.current = newField;
  };

  const deleteField = (id: string) => {
    // const newFieldsList = { ...fieldsList.current };
    // delete newFieldsList[id as keyof object];
    // fieldsList.current = newFieldsList;
    // fieldsList.current = fieldsList.current;
    // console.log(newFieldsList);
  };

  const updateField = (id: string, values: any) => {
    let fieldsCopy: any = { ...fieldsList.current };
    fieldsCopy[id] = { ...fieldsCopy[id], ...values };
    fieldsList.current = fieldsCopy;
  };

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fieldsList.current);
  };

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: getAcceptedFields(),
      drop: (item: { name: string; available: boolean }) => addField(item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [fieldsList]
  );

  const DropArea = () => {
    return (
      <div
        className={
          isOver ? "fieldsForm__dropArea--isOver" : "fieldsForm__dropArea"
        }
        ref={drop}
      >
        <TextLight
          text={"Arrastra y suelta tu campo aquí"}
          textAlign={"center"}
        />
      </div>
    );
  };

  return {
    sendData,
    updateField,
    deleteField,
    DropArea,
    getAcceptedFields,
    getDefaultFields,
    getOptionalFields,
  };
};

export default useFields;
