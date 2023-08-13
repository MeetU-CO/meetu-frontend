import { FC, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

import TitleH3 from "../../atoms/TitleH3/TitleH3";

import FieldCard from "../../molecules/FieldCard/FieldCard";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import { SearchBarMode } from "../../molecules/SearchBar/SearchBarMode";

import {
  Field,
  FieldsList,
} from "../../../../modules/organization/domain/Organization";

import "./FieldsMenu.scss";

interface Props {
  availableFields: Field[];
}

const FieldsMenu: FC<Props> = ({ availableFields }) => {
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
          {availableFields.map(({ name }: Field) => {
            const id: string = uuidv4();

            return (
              <FieldCard
                key={id}
                type={name}
                item={{
                  name: name,
                  available: true,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FieldsMenu;
