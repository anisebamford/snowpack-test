import ReactDom from "react-dom";
import React from "react";
import {Thingamajig} from "snowpack-test-lib";

ReactDom.render(
  React.createElement(Thingamajig),
  document.getElementById("app"),
);
