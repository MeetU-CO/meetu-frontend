import { FC, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

import TitleH3 from "../../atoms/TitleH3/TitleH3";

import FieldCard from "../../molecules/FieldCard/FieldCard";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import { SearchBarMode } from "../../molecules/SearchBar/SearchBarMode";

import { Field } from "../../../../modules/organization/domain/Organization";

import "./FieldsMenu.scss";

interface Props {
  availableFields: Field[];
}

const FieldsMenu: FC<Props> = ({ availableFields }) => {
  const mandatoryFields = availableFields.filter((i) => i.isDefault);
  const optionalFields = availableFields.filter((i) => !i.isDefault);

  return (
    <div className="fieldsMenu">
      <div className="fieldsMenu__searchBar">
        <SearchBar
          focus={false}
          setFocus={function (value: SetStateAction<boolean>): void {
            throw new Error("Function not implemented.");
          }}
          mode={SearchBarMode.second}
        />
      </div>
      <div className="fieldsMenu__fields">
        <TitleH3
          title={"Campos obligatorios"}
          color={"var(--black-full-color)"}
          textAlign={"left"}
        />
        <div className="fieldsMenu__divisorLine"></div>
        <div className="fieldsMenu__fieldsContainer">
          {mandatoryFields.map((field: Field) => {
            const id: string = uuidv4();
            return (
              <FieldCard
                key={id}
                field={field}
                isDefault={false}
                isDraggable={false}
              />
            );
          })}
        </div>
      </div>
      <div className="fieldsMenu__fields">
        <TitleH3
          title={"Campos opcionales"}
          color={"var(--black-full-color)"}
          textAlign={"left"}
        />
        <div className="fieldsMenu__divisorLine"></div>
        <div className="fieldsMenu__fieldsContainer">
          {optionalFields.map((field: Field) => {
            const id: string = uuidv4();
            return (
              <FieldCard
                key={id}
                field={field}
                isDefault={true}
                isDraggable={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FieldsMenu;
