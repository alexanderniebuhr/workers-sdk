// https://nodejs.org/api/util.html
import type nodeUtil from "node:util";

export {
  _errnoException,
  _exceptionWithHostPort,
  getSystemErrorMap,
  getSystemErrorName,
  isArray,
  isBoolean,
  isBuffer,
  isDate,
  isDeepStrictEqual,
  isError,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
  parseEnv,
  styleText,
} from "unenv/runtime/node/util/index";

import {
  _errnoException,
  _exceptionWithHostPort,
  getSystemErrorMap,
  getSystemErrorName,
  isArray,
  isBoolean,
  isBuffer,
  isDate,
  isDeepStrictEqual,
  isError,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
  parseEnv,
  styleText,
  types as unenvUtilTypes,
} from "unenv/runtime/node/util/index";

const workerdUtil = process.getBuiltinModule("node:util");

// TODO: Ideally this list is not hardcoded but instead is generated when the preset is being generated in the `env()` call
//       This generation should use information from https://github.com/cloudflare/workerd/issues/2097
export const {
  MIMEParams,
  MIMEType,
  TextDecoder,
  TextEncoder,
  // @ts-expect-error missing types?
  _extend,
  aborted,
  callbackify,
  debug,
  debuglog,
  deprecate,
  format,
  formatWithOptions,
  inherits,
  inspect,
  log,
  parseArgs,
  promisify,
  stripVTControlCharacters,
  toUSVString,
  transferableAbortController,
  transferableAbortSignal,
} = workerdUtil;

// TODO(cloudflare): we should just implement this in workerd and drop this special case.
export const types = {
  ...workerdUtil.types,
  isExternal: unenvUtilTypes.isExternal,
  isAnyArrayBuffer: workerdUtil.types.isAnyArrayBuffer,
} satisfies typeof nodeUtil.types;

export default {
  /**
   * manually unroll unenv-polyfilled-symbols to make it tree-shakeable
   */
  // @ts-expect-error undocumented public API
  _errnoException,
  _exceptionWithHostPort,
  getSystemErrorMap,
  getSystemErrorName,
  isArray,
  isBoolean,
  isBuffer,
  isDate,
  isDeepStrictEqual,
  isError,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
  parseEnv,
  styleText,

  /**
   * manually unroll workerd-polyfilled-symbols to make it tree-shakeable
   */
  MIMEParams,
  MIMEType,
  TextDecoder,
  TextEncoder,
  _extend,
  aborted,
  callbackify,
  debug,
  debuglog,
  deprecate,
  format,
  formatWithOptions,
  inherits,
  inspect,
  log,
  parseArgs,
  promisify,
  stripVTControlCharacters,
  toUSVString,
  transferableAbortController,
  transferableAbortSignal,

  // special-cased deep merged symbols
  types,
} satisfies typeof nodeUtil;
