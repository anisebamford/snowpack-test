import ReactDom from "react-dom";
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

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
