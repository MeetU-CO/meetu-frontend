import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../../../modules/auth/infrastructure/store/store";
import NavbarOptionsContainer from "./NavbarOptionsContainer";

test("Should show login/signup buttons", () => {
  render(
    <Provider store={store}>
      <NavbarOptionsContainer auth={false} />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  const login = screen.getByText(/^Iniciar sesión$/i);
  const signup = screen.getByText(/^Registrarse$/i);
  expect(login).toBeInTheDocument;
  expect(signup).toBeInTheDocument;
});

test("Should show account buttons", () => {
  render(
    <Provider store={store}>
      <NavbarOptionsContainer auth={true} />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  const profile = screen.getByText(/^mi perfil$/i);
  expect(profile).toBeInTheDocument;
});
