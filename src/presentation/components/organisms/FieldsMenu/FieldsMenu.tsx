import { SetStateAction } from "react";

import TitleH3 from "../../atoms/TitleH3/TitleH3";

import FieldCard from "../../molecules/FieldCard/FieldCard";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import { SearchBarMode } from "../../molecules/SearchBar/SearchBarMode";

import "./FieldsMenu.scss";

interface IFieldsMenu {}

const FieldsMenu = ({}: IFieldsMenu) => {
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
          <FieldCard />
        </div>
      </div>
    </div>
  );
};

export default FieldsMenu;
