import { c as createCommonjsModule, r as react } from './index-08d32ee4.js';
import { i as interopRequireWildcard, a as interopRequireDefault } from './withStyles-2b6a4506.js';

var FormControlContext_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFormControl = useFormControl;
exports.default = void 0;

var React = interopRequireWildcard(react);

/**
 * @ignore - internal component.
 */
var FormControlContext = React.createContext();

{
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return React.useContext(FormControlContext);
}

var _default = FormControlContext;
exports.default = _default;
});

var useFormControl_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFormControl;

var React = interopRequireWildcard(react);

var _FormControlContext = interopRequireDefault(FormControlContext_1);

function useFormControl() {
  return React.useContext(_FormControlContext.default);
}
});

export { FormControlContext_1 as F, useFormControl_1 as u };
