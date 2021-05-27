import { r as react } from './common/index-08d32ee4.js';
import { F as FormControl } from './common/index-705e5ab0.js';
import { I as InputLabel } from './common/index-a9945274.js';
import { I as Input } from './common/index-653c5462.js';
import './common/withStyles-f5ba1be2.js';
import './common/useFormControl-c1ebb3e8.js';
import './common/capitalize-2ab8bca2.js';

var lib = {
  Thingamajig: react.createElement(
    FormControl,
    {},
    [
      react.createElement(
        InputLabel,
        {
          htmlFor: "my-input",
        },
        "Email address"
      ),
      react.createElement(
        Input,
        {
          id: "my-input"
        }
      )
    ]
  )
};

var Thingamajig = lib.Thingamajig;
export { Thingamajig };
