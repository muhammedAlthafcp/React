import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles.css"; // Link to the stylesheet
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";


// import { HydratedRouter, RouterProvider } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/About",
    element: <About />,
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
