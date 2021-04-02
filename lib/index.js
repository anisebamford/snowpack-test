const React = require("react");
const FormControl = require("@material-ui/core/FormControl");
const InputLabel = require("@material-ui/core/InputLabel");
const Input = require("@material-ui/core/Input");
module.exports = {
  Thingamajig: React.createElement(
    FormControl,
    {},
    [
      React.createElement(
        InputLabel,
        {
          htmlFor: "my-input",
        },
        "Email address"
      ),
      React.createElement(
        Input,
        {
          id: "my-input"
        }
      )
    ]
  )
};
