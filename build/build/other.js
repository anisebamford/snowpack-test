import ReactDom from "./_snowpack/pkg/react-dom.js";
import React from "./_snowpack/pkg/react.js";
import FormControl from "./_snowpack/pkg/@material-ui/core/FormControl.js";
import Input from "./_snowpack/pkg/@material-ui/core/Input.js";
import InputLabel from "./_snowpack/pkg/@material-ui/core/InputLabel.js";

ReactDom.render(
  React.createElement(FormControl, {}, [
    React.createElement(InputLabel, 
      {
        htmlFor: "foo",
      },
      "Foo"
    ),
    React.createElement(Input,
      {
        id: "foo",
      }
    )
  ]),
  document.getElementById("app"),
);
