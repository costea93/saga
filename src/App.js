import { useState } from "react";
import { useHistory } from "react-router";
import Header from "./components/header/header";

const App = ({ children }) => {
  const [signedStatus] = useState(() => {
    return JSON.parse(localStorage.getItem("isSigned"));
  });
  const history = useHistory();

  if (!signedStatus) {
    history.push("/register");
  }
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default App;
