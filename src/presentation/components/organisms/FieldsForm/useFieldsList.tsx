import { useRef } from "react";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

import { FIELDS_COMPONENTS, FieldsList } from "../Fields/FieldsData";

const useFieldsList = (availableFields: FieldsList[]) => {
  const setDefaultFields = (availableFields: FieldsList[]) => {
    let initialFields: any = {};
    const mandatoryFields = availableFields.filter(
      (field: FieldsList) => field.isDefault
    );
    mandatoryFields.forEach((i: FieldsList) => {
      const id: string = uuidv4();
      initialFields[id] = i;
    });
    return initialFields;
  };

  const acceptedFields = (object: any) => {
    const fieldsNames = Object.keys(object);
    return fieldsNames;
  };

  const zipFields = () => {
    const fieldsIds = Object.keys(fieldsList.current);
    const fieldsValues = Object.values(fieldsList.current);
    return fieldsValues.map((i: any, index: number) => [fieldsIds[index], i]);
  };

  const addField = (item: { name: string; available: boolean }) => {
    console.log(item);
    const id: string = uuidv4();
    const newField: any = { ...fieldsList.current };
    newField[id] = FIELDS_COMPONENTS[item.name as keyof Object];
    fieldsList.current = newField;
  };

  const updateField = (id: string, values: any) => {
    let copyFields: any = { ...fieldsList.current };
    copyFields[id] = { ...copyFields[id], ...values };
    fieldsList.current = copyFields;
  };

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fieldsList.current);
  };

  const fieldsList = useRef(setDefaultFields(availableFields));

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: acceptedFields(FIELDS_COMPONENTS),
      drop: (item: { name: string; available: boolean }) => addField(item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [fieldsList]
  );

  return {
    fieldsList,
    addField,
    zipFields,
    sendData,
    updateField,
    acceptedFields,
    // drop,
    // isOver,
  };
};

export default useFieldsList;
