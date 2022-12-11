function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof$1(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof$1(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof$1(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof$1(key) === "symbol" ? key : String(key);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var regeneratorRuntimeExports = {};
var regeneratorRuntime$1 = {
  get exports(){ return regeneratorRuntimeExports; },
  set exports(v){ regeneratorRuntimeExports = v; },
};

var _typeofExports = {};
var _typeof = {
  get exports(){ return _typeofExports; },
  set exports(v){ _typeofExports = v; },
};

(function (module) {
	function _typeof(obj) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
} (_typeof));

(function (module) {
	var _typeof = _typeofExports["default"];
	function _regeneratorRuntime() {
	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return exports;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var exports = {},
	    Op = Object.prototype,
	    hasOwn = Op.hasOwnProperty,
	    defineProperty = Object.defineProperty || function (obj, key, desc) {
	      obj[key] = desc.value;
	    },
	    $Symbol = "function" == typeof Symbol ? Symbol : {},
	    iteratorSymbol = $Symbol.iterator || "@@iterator",
	    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
	    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  function define(obj, key, value) {
	    return Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), obj[key];
	  }
	  try {
	    define({}, "");
	  } catch (err) {
	    define = function define(obj, key, value) {
	      return obj[key] = value;
	    };
	  }
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
	      generator = Object.create(protoGenerator.prototype),
	      context = new Context(tryLocsList || []);
	    return defineProperty(generator, "_invoke", {
	      value: makeInvokeMethod(innerFn, self, context)
	    }), generator;
	  }
	  function tryCatch(fn, obj, arg) {
	    try {
	      return {
	        type: "normal",
	        arg: fn.call(obj, arg)
	      };
	    } catch (err) {
	      return {
	        type: "throw",
	        arg: err
	      };
	    }
	  }
	  exports.wrap = wrap;
	  var ContinueSentinel = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = Object.getPrototypeOf,
	    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      define(prototype, method, function (arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }
	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if ("throw" !== record.type) {
	        var result = record.arg,
	          value = result.value;
	        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
	          invoke("next", value, resolve, reject);
	        }, function (err) {
	          invoke("throw", err, resolve, reject);
	        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
	          result.value = unwrapped, resolve(result);
	        }, function (error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	      reject(record.arg);
	    }
	    var previousPromise;
	    defineProperty(this, "_invoke", {
	      value: function value(method, arg) {
	        function callInvokeWithMethodAndArg() {
	          return new PromiseImpl(function (resolve, reject) {
	            invoke(method, arg, resolve, reject);
	          });
	        }
	        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = "suspendedStart";
	    return function (method, arg) {
	      if ("executing" === state) throw new Error("Generator is already running");
	      if ("completed" === state) {
	        if ("throw" === method) throw arg;
	        return doneResult();
	      }
	      for (context.method = method, context.arg = arg;;) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
	          if ("suspendedStart" === state) throw state = "completed", context.arg;
	          context.dispatchException(context.arg);
	        } else "return" === context.method && context.abrupt("return", context.arg);
	        state = "executing";
	        var record = tryCatch(innerFn, self, context);
	        if ("normal" === record.type) {
	          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
	          return {
	            value: record.arg,
	            done: context.done
	          };
	        }
	        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(delegate, context) {
	    var methodName = context.method,
	      method = delegate.iterator[methodName];
	    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
	    var info = record.arg;
	    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
	  }
	  function pushTryEntry(locs) {
	    var entry = {
	      tryLoc: locs[0]
	    };
	    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
	  }
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal", delete record.arg, entry.completion = record;
	  }
	  function Context(tryLocsList) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
	  }
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) return iteratorMethod.call(iterable);
	      if ("function" == typeof iterable.next) return iterable;
	      if (!isNaN(iterable.length)) {
	        var i = -1,
	          next = function next() {
	            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
	            return next.value = undefined, next.done = !0, next;
	          };
	        return next.next = next;
	      }
	    }
	    return {
	      next: doneResult
	    };
	  }
	  function doneResult() {
	    return {
	      value: undefined,
	      done: !0
	    };
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
	    var ctor = "function" == typeof genFun && genFun.constructor;
	    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
	  }, exports.mark = function (genFun) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
	  }, exports.awrap = function (arg) {
	    return {
	      __await: arg
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    void 0 === PromiseImpl && (PromiseImpl = Promise);
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
	    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
	    return this;
	  }), define(Gp, "toString", function () {
	    return "[object Generator]";
	  }), exports.keys = function (val) {
	    var object = Object(val),
	      keys = [];
	    for (var key in object) keys.push(key);
	    return keys.reverse(), function next() {
	      for (; keys.length;) {
	        var key = keys.pop();
	        if (key in object) return next.value = key, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, exports.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(skipTempReset) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
	    },
	    stop: function stop() {
	      this.done = !0;
	      var rootRecord = this.tryEntries[0].completion;
	      if ("throw" === rootRecord.type) throw rootRecord.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(exception) {
	      if (this.done) throw exception;
	      var context = this;
	      function handle(loc, caught) {
	        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
	      }
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i],
	          record = entry.completion;
	        if ("root" === entry.tryLoc) return handle("end");
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc"),
	            hasFinally = hasOwn.call(entry, "finallyLoc");
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
	          } else {
	            if (!hasFinally) throw new Error("try statement without catch or finally");
	            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
	      var record = finallyEntry ? finallyEntry.completion : {};
	      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
	    },
	    complete: function complete(record, afterLoc) {
	      if ("throw" === record.type) throw record.arg;
	      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
	    },
	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
	      }
	    },
	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if ("throw" === record.type) {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      return this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
	    }
	  }, exports;
	}
	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
} (regeneratorRuntime$1));

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntimeExports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

var ResultValueStaticImpl = /*#__PURE__*/function () {
  function ResultValueStaticImpl() {
    _classCallCheck(this, ResultValueStaticImpl);
  }
  _createClass(ResultValueStaticImpl, [{
    key: "itemsOrPromisesToNextResultPromise",
    value: function () {
      var _itemsOrPromisesToNextResultPromise = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(itemsOrPromises) {
        var array, array_1;
        return regenerator.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Promise.resolve(itemsOrPromises);
            case 2:
              array = _context.sent;
              _context.next = 5;
              return Promise.all(array.map(function (item) {
                return Promise.resolve(item);
              }));
            case 5:
              array_1 = _context.sent;
              return _context.abrupt("return", resultValue.fromArray(array_1.flat()));
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function itemsOrPromisesToNextResultPromise(_x) {
        return _itemsOrPromisesToNextResultPromise.apply(this, arguments);
      }
      return itemsOrPromisesToNextResultPromise;
    }()
  }, {
    key: "values",
    value: function values(result) {
      if (result.type == 'values' && result.values.length > 0) {
        return resultValue.valueOrThrow(result.values[0]);
      } else {
        return null;
      }
    }
  }, {
    key: "fromArray",
    value: function fromArray(array) {
      return array.map(function (arr) {
        return {
          value: arr
        };
      });
    }
  }, {
    key: "fromValue",
    value: function fromValue(arr) {
      return {
        value: arr
      };
    }
  }, {
    key: "fnDoOnNext",
    value: function fnDoOnNext(fn) {
      return function (r) {
        if ('value' in r) {
          fn(r.value);
        }
      };
    }
  }, {
    key: "fnDoOnError",
    value: function fnDoOnError(fn) {
      return function (r) {
        if ('error' in r) {
          fn(r.error);
        }
      };
    }
  }, {
    key: "valueOrThrow",
    value: function valueOrThrow(r) {
      if ('error' in r) throw r.error;else return r.value;
    }
  }]);
  return ResultValueStaticImpl;
}();
var resultValue = new ResultValueStaticImpl();

var NextResultStaticImpl = /*#__PURE__*/function () {
  function NextResultStaticImpl() {
    _classCallCheck(this, NextResultStaticImpl);
  }
  _createClass(NextResultStaticImpl, [{
    key: "isDone",
    value: function isDone(nextResult) {
      return nextResult.type == 'done';
    }
  }, {
    key: "isPromise",
    value: function isPromise(nextResult) {
      return nextResult.type == 'promise';
    }
  }, {
    key: "isValues",
    value: function isValues(nextResult) {
      return nextResult.type == 'values';
    }
  }, {
    key: "done",
    value: function done() {
      return {
        type: 'done'
      };
    }
  }, {
    key: "values",
    value: function values(_values) {
      return {
        type: 'values',
        values: _values
      };
    }
  }, {
    key: "promise",
    value: function promise(_promise) {
      return {
        type: 'promise',
        promise: _promise
      };
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len = arguments.length, errors = new Array(_len), _key = 0; _key < _len; _key++) {
        errors[_key] = arguments[_key];
      }
      return this.values(errors.map(function (error) {
        return {
          error: error
        };
      }));
    }
  }, {
    key: "valuesFromArray",
    value: function valuesFromArray(values) {
      return this.values(resultValue.fromArray(values));
    }
  }, {
    key: "promiseFromPromiseArray",
    value: function promiseFromPromiseArray(promise) {
      return this.promise(promise.then(function (array) {
        return resultValue.fromArray(array);
      }));
    }
  }]);
  return NextResultStaticImpl;
}();
var nextResult = new NextResultStaticImpl();

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var isPromise = function isPromise(value) {
  return value instanceof Promise;
};
var isNotPromise = function isNotPromise(value) {
  return !isPromise(value);
};

var returnError = function returnError(errorType, fn, error, ctx) {
  if (error instanceof errorType) {
    var rr = fn(error).iterator.next()(ctx);
    if (nextResult.isValues(rr)) {
      return rr;
    }
    if (nextResult.isPromise(rr)) {
      return rr;
    }
  }
  throw error;
};
var mapFn = function mapFn(errorType, fn, ctx) {
  return function (r) {
    try {
      resultValue.valueOrThrow(r);
      return r;
    } catch (error) {
      var item = returnError(errorType, fn, error, ctx);
      if (nextResult.isPromise(item)) {
        return item.promise.then(function (values) {
          return values[0];
        });
      } else if (nextResult.isValues(item)) {
        return item.values[0];
      }
      throw error;
    }
  };
};
var onErrorResume = function onErrorResume(nextFn) {
  return function (errorType, fn) {
    return createIterator(function () {
      var next = nextFn();
      return function (ctx) {
        try {
          var item = next(ctx);
          if (nextResult.isPromise(item)) {
            var promise = item.promise.then(function (values) {
              return Promise.all(values.map(mapFn(errorType, fn, ctx)).map(function (p) {
                return Promise.resolve(p);
              }));
            });
            return nextResult.promise(promise);
          } else if (nextResult.isValues(item)) {
            var promisesOrValues = item.values.map(mapFn(errorType, fn, ctx));
            var values = promisesOrValues.filter(isNotPromise);
            if (values.length == promisesOrValues.length) {
              return nextResult.values(values);
            } else {
              var _promise = Promise.resolve(promisesOrValues).then(function (e) {
                return Promise.all(e.map(function (ee) {
                  return Promise.resolve(ee);
                }));
              });
              return nextResult.promise(_promise);
            }
          } else {
            return item;
          }
        } catch (error) {
          return returnError(errorType, fn, error, ctx);
        }
      };
    });
  };
};

var blockFirst = function blockFirst(nextFn) {
  return function (ctx) {
    var next = nextFn();
    var item = next(ctx);
    if (nextResult.isPromise(item)) {
      return item.promise.then(function (aar1) {
        return aar1[0] ? resultValue.valueOrThrow(aar1[0]) : null;
      });
    } else if (nextResult.isValues(item)) {
      return item.values[0] ? resultValue.valueOrThrow(item.values[0]) : null;
    } else {
      return null;
    }
  };
};

var results = function results(nextFn) {
  return function (ctx) {
    var valuesOrPromise = [];
    var next = nextFn();
    var item = next(ctx);
    var _loop = function _loop() {
      if (isNotPromise(valuesOrPromise)) {
        var values = valuesOrPromise;
        if (nextResult.isValues(item)) {
          valuesOrPromise = [].concat(_toConsumableArray(values), _toConsumableArray(item.values));
        } else if (nextResult.isPromise(item)) {
          valuesOrPromise = item.promise.then(function (aar) {
            return [].concat(_toConsumableArray(values), _toConsumableArray(aar));
          });
        }
      } else {
        var promise = valuesOrPromise;
        if (nextResult.isValues(item)) {
          var _values = item.values;
          valuesOrPromise = promise.then(function (array) {
            return [].concat(_toConsumableArray(array), _toConsumableArray(_values));
          });
        } else if (nextResult.isPromise(item)) {
          var promise2 = item.promise;
          valuesOrPromise = Promise.all([item.promise, promise2]).then(function (arr) {
            return arr.flat();
          });
        }
      }
      item = next(ctx);
    };
    while (!nextResult.isDone(item)) {
      _loop();
    }
    return valuesOrPromise;
  };
};

var block = function block(nextFn) {
  return function (ctx) {
    var valuesOrPromiseResults = results(nextFn)(ctx);
    if (isNotPromise(valuesOrPromiseResults)) {
      var valuesResults = valuesOrPromiseResults;
      return valuesResults.map(resultValue.valueOrThrow);
    } else {
      var promiseResults = valuesOrPromiseResults;
      return promiseResults.then(function (valuesResults) {
        return valuesResults.map(resultValue.valueOrThrow);
      });
    }
  };
};

var fromPromiseOrValues = function fromPromiseOrValues(promiseOrValues) {
  if (isNotPromise(promiseOrValues)) {
    return nextResult.values(resultValue.fromArray(promiseOrValues));
  } else {
    return nextResult.promise(promiseOrValues.then(function (array) {
      return resultValue.fromArray(array);
    }));
  }
};
var switchIfEmpty = function switchIfEmpty(nextFn) {
  return function (iterator) {
    return createIterator(function () {
      var finish = false;
      return function (ctx) {
        if (!finish) {
          finish = true;
          var item = block(nextFn)(ctx);
          if (isNotPromise(item)) {
            if (item.length == 0) {
              var promiseOrValues = iterator.block(ctx);
              return fromPromiseOrValues(promiseOrValues);
            } else {
              return nextResult.valuesFromArray(item);
            }
          } else {
            var promise = item.then(function (v) {
              if (v.length == 0) {
                return Promise.resolve(iterator.block(ctx));
              }
              return v;
            });
            return nextResult.promiseFromPromiseArray(promise);
          }
        }
        return nextResult.done();
      };
    });
  };
};

var doOnError = function doOnError(nextFn) {
  return function (handler) {
    return createIterator(function () {
      var next = nextFn();
      return function (ctx) {
        try {
          var item = next(ctx);
          if (nextResult.isPromise(item)) {
            item.promise.then(function (p) {
              return p.map(resultValue.fnDoOnError(handler));
            });
          }
          if (nextResult.isValues(item)) {
            item.values.forEach(resultValue.fnDoOnError(handler));
          }
          return item;
        } catch (error) {
          handler(error);
          throw error;
        }
      };
    });
  };
};

var doOnNext = function doOnNext(nextFn) {
  return function (handler) {
    return createIterator(function () {
      var next = nextFn();
      return function (ctx) {
        var item = next(ctx);
        if (nextResult.isPromise(item)) {
          item.promise.then(function (p) {
            return p.map(resultValue.fnDoOnNext(handler));
          });
        }
        if (nextResult.isValues(item)) {
          item.values.forEach(resultValue.fnDoOnNext(handler));
        }
        return item;
      };
    });
  };
};

var fnMap = function fnMap(fn) {
  return function (r) {
    try {
      if ('value' in r) {
        return {
          value: fn(r.value)
        };
      } else {
        return r;
      }
    } catch (e) {
      return {
        error: e
      };
    }
  };
};
var promiseFnMap = function promiseFnMap(item, fn) {
  return nextResult.promise(item.promise.then(function (array) {
    return array.map(fnMap(fn));
  }).then(function (array) {
    return resolveValueOrPromise(array);
  }));
};
var resolveValueOrPromise = function resolveValueOrPromise(array) {
  var array2 = array.filter(function (item) {
    if ('value' in item) {
      return isNotPromise(item.value);
    }
    return true;
  });
  if (array.length == array2.length) {
    return array.map(function (item) {
      if ('value' in item) {
        return {
          value: item.value
        };
      } else {
        return item;
      }
    });
  } else {
    return Promise.all(array.map( /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(item) {
        return regenerator.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              if (!('value' in item)) {
                _context.next = 8;
                break;
              }
              _context.next = 4;
              return item.value;
            case 4:
              _context.t0 = _context.sent;
              return _context.abrupt("return", {
                value: _context.t0
              });
            case 8:
              return _context.abrupt("return", item);
            case 9:
              _context.next = 14;
              break;
            case 11:
              _context.prev = 11;
              _context.t1 = _context["catch"](0);
              return _context.abrupt("return", {
                error: _context.t1
              });
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 11]]);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }
};
var valuesFnMap = function valuesFnMap(item, fn) {
  var promiseOrValue = resolveValueOrPromise(item.values.map(fnMap(fn)));
  if (isNotPromise(promiseOrValue)) {
    return nextResult.values(promiseOrValue);
  } else {
    return nextResult.promise(promiseOrValue);
  }
};
var pipe = function pipe(nextFn) {
  return function (fn) {
    return createIterator(function () {
      var next = nextFn();
      return function (ctx) {
        var item = next(ctx);
        if (nextResult.isDone(item)) {
          return item;
        } else if (nextResult.isPromise(item)) {
          return promiseFnMap(item, fn);
        } else {
          return valuesFnMap(item, fn);
        }
      };
    });
  };
};

var toPromiseNextResultValue = function toPromiseNextResultValue(nextIterator, ctx) {
  return nextIterator.promise.then(function (array) {
    return Promise.all(array.map(function (item) {
      return Promise.resolve(toValueOrPromise(item, ctx));
    })).then(function (array) {
      return resultValue.fromArray(array.flat());
    });
  });
};
var toValueOrPromiseArray = function toValueOrPromiseArray(nextIterator, ctx) {
  return nextIterator.values.map(function (item) {
    return toValueOrPromise(item, ctx);
  });
};
var toValueOrPromise = function toValueOrPromise(item, ctx) {
  return resultValue.valueOrThrow(item).iterator.block(ctx);
};
var flatPipe = function flatPipe(nextFn) {
  return function (fn) {
    return createIterator(function () {
      var nextIteratorFn = pipe(nextFn)(fn).iterator.next();
      return function (ctx) {
        var nextIterator = nextIteratorFn(ctx);
        if (nextResult.isDone(nextIterator)) {
          return nextIterator;
        } else if (nextResult.isPromise(nextIterator)) {
          return nextResult.promise(toPromiseNextResultValue(nextIterator, ctx));
        } else {
          var itemsOrPromises = toValueOrPromiseArray(nextIterator, ctx);
          var items = itemsOrPromises.filter(isNotPromise);
          if (items.length == itemsOrPromises.length) {
            return nextResult.valuesFromArray(items.flat());
          } else {
            return nextResult.promise(resultValue.itemsOrPromisesToNextResultPromise(itemsOrPromises));
          }
        }
      };
    });
  };
};

var extractArray = function extractArray(valuesOrPromises) {
  if (isNotPromise(valuesOrPromises)) {
    return nextResult.values(resultValue.fromArray([valuesOrPromises]));
  } else {
    return nextResult.promise(valuesOrPromises.then(function (item) {
      return resultValue.fromArray([item]);
    }));
  }
};
var array = function array(nextFn) {
  return function () {
    return createIterator(function () {
      var finish = false;
      return function (ctx) {
        if (!finish) {
          finish = true;
          var valuesOrPromises = block(nextFn)(ctx);
          return extractArray(valuesOrPromises);
        } else {
          return nextResult.done();
        }
      };
    });
  };
};

var just$2 = function just() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }
  return createIterator(function () {
    var finish = false;
    return function () {
      if (!finish) {
        finish = true;
        return nextResult.valuesFromArray(values);
      }
      return nextResult.done();
    };
  });
};

var defaultIfEmpty = function defaultIfEmpty(nextFn) {
  return function (value) {
    return switchIfEmpty(nextFn)(just$2(value));
  };
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var nextResultToPromise = function nextResultToPromise(results) {
  return Promise.all(results.map(function (result) {
    if (nextResult.isValues(result)) {
      return Promise.resolve(resultValue.valueOrThrow(result.values[0]));
    } else if (nextResult.isPromise(result)) {
      return result.promise.then(function (value) {
        return resultValue.valueOrThrow(value[0]);
      });
    } else {
      return Promise.resolve(null);
    }
  }));
};
var nextResultToValues = function nextResultToValues(valueResults) {
  return valueResults.map(resultValue.values);
};
var zip$2 = function zip() {
  for (var _len = arguments.length, iterators = new Array(_len), _key = 0; _key < _len; _key++) {
    iterators[_key] = arguments[_key];
  }
  return createIterator(function () {
    var finish = false;
    var nextArray = iterators.map(function (iterator) {
      return iterator.iterator.next();
    });
    return function (ctx) {
      if (!finish) {
        finish = true;
        var results = nextArray.map(function (next) {
          return next(ctx);
        });
        var valueResults = results.filter(function (item) {
          return !nextResult.isPromise(item);
        });
        if (valueResults.length == results.length) {
          var values = nextResultToValues(valueResults);
          return nextResult.valuesFromArray([values]);
        } else {
          var promise = nextResultToPromise(results);
          return nextResult.promiseFromPromiseArray(promise.then(function (values) {
            return [values];
          }));
        }
      }
      return nextResult.done();
    };
  });
};

var zipWhen = function zipWhen(nextFn) {
  return function () {
    for (var _len = arguments.length, monoArrayFn = new Array(_len), _key = 0; _key < _len; _key++) {
      monoArrayFn[_key] = arguments[_key];
    }
    return flatPipe(nextFn)(function (v) {
      return zip$2.apply(void 0, [just$2(v)].concat(_toConsumableArray(monoArrayFn.map(function (fn) {
        return fn(v);
      }))));
    });
  };
};

var filter = function filter(nextFn) {
  return function (fn) {
    return zipWhen(nextFn)(function (value) {
      return just$2(fn(value));
    }).flatPipe(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        t = _ref2[0],
        b = _ref2[1];
      if (b) {
        return just$2(t);
      }
      return empty$1();
    });
  };
};

var flatFilter = function flatFilter(nextFn) {
  return function (fn) {
    return zipWhen(nextFn)(fn).flatPipe(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        t = _ref2[0],
        b = _ref2[1];
      if (b) {
        return just$2(t);
      }
      return empty$1();
    });
  };
};

var WrappedValue_OPAQUE = Symbol();
var WrappedValue_EXEC = Symbol();
var Void = Symbol();

var then$2 = function then(nextFn) {
  return function (source) {
    if (!source) {
      return pipe(nextFn)(function () {
        return Void;
      });
    }
    return flatPipe(nextFn)(function () {
      return source;
    });
  };
};

var thenReturn = function thenReturn(nextFn) {
  return function (value) {
    return pipe(nextFn)(function () {
      return value;
    });
  };
};

var zip$1 = function zip(iterator) {
  return function () {
    for (var _len = arguments.length, monoArray = new Array(_len), _key = 0; _key < _len; _key++) {
      monoArray[_key] = arguments[_key];
    }
    return zip$2.apply(void 0, [iterator].concat(monoArray));
  };
};

var RakunIteratorImpl = /*#__PURE__*/function () {
  function RakunIteratorImpl(next) {
    _classCallCheck(this, RakunIteratorImpl);
    this.next = next;
    _defineProperty(this, "array", array(this.next));
    _defineProperty(this, "block", block(this.next));
    _defineProperty(this, "blockFirst", blockFirst(this.next));
    _defineProperty(this, "defaultIfEmpty", defaultIfEmpty(this.next));
    _defineProperty(this, "doOnError", doOnError(this.next));
    _defineProperty(this, "doOnNext", doOnNext(this.next));
    _defineProperty(this, "filter", filter(this.next));
    _defineProperty(this, "flatFilter", flatFilter(this.next));
    _defineProperty(this, "flatPipe", flatPipe(this.next));
    _defineProperty(this, "onErrorResume", onErrorResume(this.next));
    _defineProperty(this, "pipe", pipe(this.next));
    _defineProperty(this, "results", results(this.next));
    _defineProperty(this, "switchIfEmpty", switchIfEmpty(this.next));
    _defineProperty(this, "then", then$2(this.next));
    _defineProperty(this, "thenReturn", thenReturn(this.next));
    _defineProperty(this, "zip", zip$1(this));
    _defineProperty(this, "zipWhen", zipWhen(this.next));
  }
  _createClass(RakunIteratorImpl, [{
    key: "iterator",
    get: function get() {
      return this;
    }
  }]);
  return RakunIteratorImpl;
}();
var createIterator = function createIterator(next) {
  return new RakunIteratorImpl(next);
};

var empty$1 = function empty() {
  return createIterator(function () {
    return function () {
      return nextResult.done();
    };
  });
};

var error$1 = function error(_error) {
  return createIterator(function () {
    var finish = false;
    return function () {
      if (!finish) {
        finish = true;
        return nextResult.error(_error);
      }
      return nextResult.done();
    };
  });
};

var fromArray$1 = function fromArray(values) {
  return createIterator(function () {
    var finish = false;
    return function () {
      if (!finish) {
        finish = true;
        return nextResult.valuesFromArray(values);
      }
      return nextResult.done();
    };
  });
};

var fromCallback$2 = function fromCallback(callback) {
  return createIterator(function () {
    var finish = false;
    return function (ctx) {
      if (!finish) {
        finish = true;
        var promiseOrValues = callback(ctx);
        if (isNotPromise(promiseOrValues)) {
          return nextResult.valuesFromArray(promiseOrValues);
        }
        return nextResult.promise(promiseOrValues.then(function (arr) {
          return resultValue.fromArray(arr);
        }));
      }
      return nextResult.done();
    };
  });
};

var then$1 = function then() {
  return just$2(Void);
};

var iterator$1 = {
  empty: empty$1,
  error: error$1,
  fromArray: fromArray$1,
  fromCallback: fromCallback$2,
  just: just$2,
  then: then$1,
  zip: zip$2
};

var RakunContextManagerImpl = /*#__PURE__*/function () {
  function RakunContextManagerImpl() {
    _classCallCheck(this, RakunContextManagerImpl);
    _defineProperty(this, "items", []);
  }
  _createClass(RakunContextManagerImpl, [{
    key: "getValue",
    value: function getValue(context) {
      var _this$items$filter$;
      return (_this$items$filter$ = this.items.filter(function (item) {
        return item.context === context;
      })[0]) === null || _this$items$filter$ === void 0 ? void 0 : _this$items$filter$.value;
    }
  }, {
    key: "setValue",
    value: function setValue(context, value) {
      this.items = [].concat(_toConsumableArray(this.items.filter(function (item) {
        return item.context != context;
      })), [{
        context: context,
        value: value
      }]);
      return Void;
    }
  }]);
  return RakunContextManagerImpl;
}();

var RakunMonoImpl = /*#__PURE__*/function () {
  function RakunMonoImpl(iterator) {
    _classCallCheck(this, RakunMonoImpl);
    this.iterator = iterator;
    _defineProperty(this, WrappedValue_OPAQUE, "mono");
  }
  _createClass(RakunMonoImpl, [{
    key: "flatPipeMany",
    value: function flatPipeMany(fn) {
      return createFlux(this.iterator.flatPipe(fn));
    }
  }, {
    key: "then",
    value: function then(source) {
      if (source) {
        if (source[WrappedValue_OPAQUE] == 'flux') {
          return createFlux(this.iterator.then(source));
        } else {
          return createMono(this.iterator.then(source));
        }
      } else return createMono(this.iterator.then());
    }
  }, {
    key: "onErrorResume",
    value: function onErrorResume(errorType, fn) {
      return createMono(this.iterator.onErrorResume(errorType, fn));
    }
  }, {
    key: "doOnNext",
    value: function doOnNext(handler) {
      return createMono(this.iterator.doOnNext(handler));
    }
  }, {
    key: "doOnError",
    value: function doOnError(handler) {
      return createMono(this.iterator.doOnError(handler));
    }
  }, {
    key: "switchIfEmpty",
    value: function switchIfEmpty(source) {
      return createMono(this.iterator.switchIfEmpty(source));
    }
  }, {
    key: "defaultIfEmpty",
    value: function defaultIfEmpty(value) {
      return createMono(this.iterator.defaultIfEmpty(value));
    }
  }, {
    key: "zipWhen",
    value: function zipWhen() {
      var _this$iterator;
      return createMono((_this$iterator = this.iterator).zipWhen.apply(_this$iterator, arguments));
    }
  }, {
    key: "zip",
    value: function zip() {
      var _this$iterator2;
      return createMono((_this$iterator2 = this.iterator).zip.apply(_this$iterator2, arguments));
    }
  }, {
    key: "pipe",
    value: function pipe(fn) {
      return createMono(this.iterator.pipe(fn));
    }
  }, {
    key: "flatPipe",
    value: function flatPipe(fn) {
      return createMono(this.iterator.flatPipe(fn));
    }
  }, {
    key: "thenReturn",
    value: function thenReturn(value) {
      return createMono(this.iterator.thenReturn(value));
    }
  }, {
    key: "filter",
    value: function filter(fn) {
      return createMono(this.iterator.filter(fn));
    }
  }, {
    key: "flatFilter",
    value: function flatFilter(fn) {
      return createMono(this.iterator.flatFilter(fn));
    }
  }, {
    key: "blockFirst",
    value: function blockFirst(contextManager) {
      return this.iterator.blockFirst(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
    }
  }, {
    key: "block",
    value: function block(contextManager) {
      return this.iterator.block(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
    }
  }]);
  return RakunMonoImpl;
}();
var createMono = function createMono(iterator) {
  return new RakunMonoImpl(iterator);
};

var RakunFluxImpl = /*#__PURE__*/function () {
  function RakunFluxImpl(iterator) {
    _classCallCheck(this, RakunFluxImpl);
    this.iterator = iterator;
    _defineProperty(this, WrappedValue_OPAQUE, 'flux');
  }
  _createClass(RakunFluxImpl, [{
    key: "then",
    value: function then(source) {
      if (source) {
        if (source[WrappedValue_OPAQUE] == 'mono') {
          return createMono(this.iterator.then(source));
        } else {
          return createFlux(this.iterator.then(source));
        }
      } else return createMono(this.iterator.then());
    }
  }, {
    key: "array",
    value: function array() {
      return createMono(this.iterator.array());
    }
  }, {
    key: "switchIfEmpty",
    value: function switchIfEmpty(source) {
      return createFlux(this.iterator.switchIfEmpty(source));
    }
  }, {
    key: "defaultIfEmpty",
    value: function defaultIfEmpty(value) {
      return createFlux(this.iterator.defaultIfEmpty(value));
    }
  }, {
    key: "onErrorResume",
    value: function onErrorResume(errorType, fn) {
      return createFlux(this.iterator.onErrorResume(errorType, fn));
    }
  }, {
    key: "doOnNext",
    value: function doOnNext(handler) {
      return createFlux(this.iterator.doOnNext(handler));
    }
  }, {
    key: "doOnError",
    value: function doOnError(handler) {
      return createFlux(this.iterator.doOnError(handler));
    }
  }, {
    key: "zipWhen",
    value: function zipWhen() {
      var _this$iterator;
      return createFlux((_this$iterator = this.iterator).zipWhen.apply(_this$iterator, arguments));
    }
  }, {
    key: "zip",
    value: function zip() {
      var _this$iterator2;
      return createFlux((_this$iterator2 = this.iterator).zip.apply(_this$iterator2, arguments));
    }
  }, {
    key: "pipe",
    value: function pipe(fn) {
      return createFlux(this.iterator.pipe(fn));
    }
  }, {
    key: "flatPipe",
    value: function flatPipe(fn) {
      return createFlux(this.iterator.flatPipe(fn));
    }
  }, {
    key: "filter",
    value: function filter(fn) {
      return createFlux(this.iterator.filter(fn));
    }
  }, {
    key: "flatFilter",
    value: function flatFilter(fn) {
      return createFlux(this.iterator.flatFilter(fn));
    }
  }, {
    key: "thenReturn",
    value: function thenReturn(value) {
      return createFlux(this.iterator.thenReturn(value));
    }
  }, {
    key: "blockFirst",
    value: function blockFirst(contextManager) {
      return this.iterator.blockFirst(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
    }
  }, {
    key: "block",
    value: function block(contextManager) {
      return this.iterator.block(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
    }
  }]);
  return RakunFluxImpl;
}();
var createFlux = function createFlux(iterator) {
  return new RakunFluxImpl(iterator);
};

var just$1 = function just() {
  return createFlux(iterator$1.just.apply(iterator$1, arguments));
};

var fromArray = function fromArray(value) {
  return just$1.apply(void 0, _toConsumableArray(value));
};

var fromCallback$1 = function fromCallback(callback) {
  return createFlux(iterator$1.fromCallback(function (c) {
    var promiseOrValue = callback(c);
    if (isPromise(promiseOrValue)) {
      return promiseOrValue;
    } else {
      return promiseOrValue;
    }
  }));
};

var flux$1 = {
  just: just$1,
  fromArray: fromArray,
  fromCallback: fromCallback$1
};

var empty = function empty() {
  return createMono(iterator.empty());
};

var error = function error(_error) {
  return createMono(iterator.error(_error));
};

var fromCallback = function fromCallback(callback) {
  return createMono(iterator$1.fromCallback(function (c) {
    var promiseOrValue = callback(c);
    if (isPromise(promiseOrValue)) {
      return promiseOrValue.then(function (p) {
        return [p];
      });
    } else {
      return [promiseOrValue];
    }
  }));
};

var just = function just(value) {
  return createMono(iterator$1.just(value));
};

var then = function then() {
  return createMono(iterator$1.then());
};

var zip = function zip() {
  return createMono(iterator.zip.apply(iterator, arguments));
};

var mono$1 = {
  fromCallback: fromCallback,
  zip: zip,
  just: just,
  then: then,
  empty: empty,
  error: error
};

var RakunContextImpl = /*#__PURE__*/function () {
  function RakunContextImpl(defualtValue) {
    _classCallCheck(this, RakunContextImpl);
    this.defualtValue = defualtValue;
  }
  _createClass(RakunContextImpl, [{
    key: "get",
    value: function get() {
      var _this = this;
      return mono$1.fromCallback(function (ctx) {
        return ctx.getValue(_this);
      });
    }
  }, {
    key: "define",
    value: function define(value) {
      var _this2 = this;
      return mono$1.fromCallback(function (ctx) {
        return ctx.setValue(_this2, value);
      });
    }
  }]);
  return RakunContextImpl;
}();

var RakunStaticContextImpl = /*#__PURE__*/function () {
  function RakunStaticContextImpl() {
    _classCallCheck(this, RakunStaticContextImpl);
  }
  _createClass(RakunStaticContextImpl, [{
    key: "create",
    value: function create(value) {
      return new RakunContextImpl(value);
    }
  }]);
  return RakunStaticContextImpl;
}();
var context$1 = new RakunStaticContextImpl();

var index = {
  flux: flux$1,
  mono: mono$1,
  context: context$1,
  iterator: iterator$1
};
var flux = flux$1;
var mono = mono$1;
var context = context$1;
var iterator = iterator$1;

export { RakunContextImpl, Void, WrappedValue_EXEC, WrappedValue_OPAQUE, context, index as default, flux, isNotPromise, isPromise, iterator, mono };
