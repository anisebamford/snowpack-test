import { r as react } from './common/index-08d32ee4.js';
import { F as FormControl } from './common/index-2c45f4b6.js';
import { I as InputLabel } from './common/index-23d8d3ff.js';
import { I as Input } from './common/index-5cd79f1a.js';
import './common/withStyles-2b6a4506.js';
import './common/useFormControl-d48f0db1.js';
import './common/capitalize-86a70430.js';

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
