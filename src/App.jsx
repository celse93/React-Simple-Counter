import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { ImageLink } from "./components/ImageLink";

export const App = () => {
  return (
    <>
      <div>
        <ImageLink src={viteLogo} alt={"Vite logo"} href={"https://vite.dev"} />
        <ImageLink
          src={reactLogo}
          alt={"React logo"}
          href={"https://react.dev"}
        />
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
