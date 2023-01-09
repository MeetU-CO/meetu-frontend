import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import { SetStateAction } from "react";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  let component: any;

  beforeEach(() => {
    component = render(
      <SearchBar
        focus={false}
        setFocus={function (value: SetStateAction<boolean>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });

  test("renders component", () => {
    expect(component.getByText("search"));
  });

  // test("renders full normal width when non on focus", () => {
  //   // const el = component.getByText("search").parentNode.parentNode.parentNode;
  //   const el = screen.getByTestId("searchBar");
  //   // const style = window.getComputedStyle(el);
  //   // console.log(prettyDOM(el));
  //   // console.log(style);
  //   // const el = component.getByText("search");
  //   // expect(el).toHaveStyle("width: 33%");
  //   expect(el).toHaveCompiledCss("width", "33%");
  // });
});
