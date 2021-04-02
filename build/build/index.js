import ReactDom from "./_snowpack/pkg/react-dom.js";
import React from "./_snowpack/pkg/react.js";
import {Thingamajig} from "./_snowpack/pkg/snowpack-test-lib.js";

ReactDom.render(
  React.createElement(Thingamajig),
  document.getElementById("app"),
);
