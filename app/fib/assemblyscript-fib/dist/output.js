/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const loader = __webpack_require__(/*! @assemblyscript/loader */ \"./node_modules/@assemblyscript/loader/umd/index.js\");\n\nasync function sample() {\n    const wasmModule = await loader.instantiate(fetch(\"/wasm\"), {});\n\n    return wasmModule;\n}\n\nsample().then((wasmModule) => {\n    console.log(wasmModule.exports.add(2,2));\n})\n\n//# sourceURL=webpack://assemblyscript-fib/./index.js?");

/***/ }),

/***/ "./node_modules/@assemblyscript/loader/umd/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@assemblyscript/loader/umd/index.js ***!
  \**********************************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// GENERATED FILE. DO NOT EDIT.\nvar loader = (function(exports) {\n  \"use strict\";\n  \n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  exports.instantiate = instantiate;\n  exports.instantiateSync = instantiateSync;\n  exports.instantiateStreaming = instantiateStreaming;\n  exports.demangle = demangle;\n  exports.default = void 0;\n  // Runtime header offsets\n  const ID_OFFSET = -8;\n  const SIZE_OFFSET = -4; // Runtime ids\n  \n  const ARRAYBUFFER_ID = 0;\n  const STRING_ID = 1; // const ARRAYBUFFERVIEW_ID = 2;\n  // Runtime type information\n  \n  const ARRAYBUFFERVIEW = 1 << 0;\n  const ARRAY = 1 << 1;\n  const STATICARRAY = 1 << 2; // const SET = 1 << 3;\n  // const MAP = 1 << 4;\n  \n  const VAL_ALIGN_OFFSET = 6; // const VAL_ALIGN = 1 << VAL_ALIGN_OFFSET;\n  \n  const VAL_SIGNED = 1 << 11;\n  const VAL_FLOAT = 1 << 12; // const VAL_NULLABLE = 1 << 13;\n  \n  const VAL_MANAGED = 1 << 14; // const KEY_ALIGN_OFFSET = 15;\n  // const KEY_ALIGN = 1 << KEY_ALIGN_OFFSET;\n  // const KEY_SIGNED = 1 << 20;\n  // const KEY_FLOAT = 1 << 21;\n  // const KEY_NULLABLE = 1 << 22;\n  // const KEY_MANAGED = 1 << 23;\n  // Array(BufferView) layout\n  \n  const ARRAYBUFFERVIEW_BUFFER_OFFSET = 0;\n  const ARRAYBUFFERVIEW_DATASTART_OFFSET = 4;\n  const ARRAYBUFFERVIEW_DATALENGTH_OFFSET = 8;\n  const ARRAYBUFFERVIEW_SIZE = 12;\n  const ARRAY_LENGTH_OFFSET = 12;\n  const ARRAY_SIZE = 16;\n  const BIGINT = typeof BigUint64Array !== \"undefined\";\n  const THIS = Symbol();\n  const STRING_DECODE_THRESHOLD = 32;\n  const decoder = new TextDecoder(\"utf-16le\");\n  /** Gets a string from an U32 and an U16 view on a memory. */\n  \n  function getStringImpl(buffer, ptr) {\n    const len = new Uint32Array(buffer)[ptr + SIZE_OFFSET >>> 2] >>> 1;\n    const arr = new Uint16Array(buffer, ptr, len);\n  \n    if (len <= STRING_DECODE_THRESHOLD) {\n      return String.fromCharCode.apply(String, arr);\n    }\n  \n    return decoder.decode(arr);\n  }\n  /** Prepares the base module prior to instantiation. */\n  \n  \n  function preInstantiate(imports) {\n    const extendedExports = {};\n  \n    function getString(memory, ptr) {\n      if (!memory) return \"<yet unknown>\";\n      return getStringImpl(memory.buffer, ptr);\n    } // add common imports used by stdlib for convenience\n  \n  \n    const env = imports.env = imports.env || {};\n  \n    env.abort = env.abort || function abort(msg, file, line, colm) {\n      const memory = extendedExports.memory || env.memory; // prefer exported, otherwise try imported\n  \n      throw Error(`abort: ${getString(memory, msg)} at ${getString(memory, file)}:${line}:${colm}`);\n    };\n  \n    env.trace = env.trace || function trace(msg, n, ...args) {\n      const memory = extendedExports.memory || env.memory;\n      console.log(`trace: ${getString(memory, msg)}${n ? \" \" : \"\"}${args.slice(0, n).join(\", \")}`);\n    };\n  \n    env.seed = env.seed || Date.now;\n    imports.Math = imports.Math || Math;\n    imports.Date = imports.Date || Date;\n    return extendedExports;\n  }\n  \n  const E_NOEXPORTRUNTIME = \"Operation requires compiling with --exportRuntime\";\n  \n  const F_NOEXPORTRUNTIME = function () {\n    throw Error(E_NOEXPORTRUNTIME);\n  };\n  /** Prepares the final module once instantiation is complete. */\n  \n  \n  function postInstantiate(extendedExports, instance) {\n    const exports = instance.exports;\n    const memory = exports.memory;\n    const table = exports.table;\n  \n    const __new = exports.__new || F_NOEXPORTRUNTIME;\n  \n    const __pin = exports.__pin || F_NOEXPORTRUNTIME;\n  \n    const __unpin = exports.__unpin || F_NOEXPORTRUNTIME;\n  \n    const __collect = exports.__collect || F_NOEXPORTRUNTIME;\n  \n    const __rtti_base = exports.__rtti_base;\n    const getRttiCount = __rtti_base ? function (arr) {\n      return arr[__rtti_base >>> 2];\n    } : F_NOEXPORTRUNTIME;\n    extendedExports.__new = __new;\n    extendedExports.__pin = __pin;\n    extendedExports.__unpin = __unpin;\n    extendedExports.__collect = __collect;\n    /** Gets the runtime type info for the given id. */\n  \n    function getInfo(id) {\n      const U32 = new Uint32Array(memory.buffer);\n      const count = getRttiCount(U32);\n      if ((id >>>= 0) >= count) throw Error(`invalid id: ${id}`);\n      return U32[(__rtti_base + 4 >>> 2) + id * 2];\n    }\n    /** Gets and validate runtime type info for the given id for array like objects */\n  \n  \n    function getArrayInfo(id) {\n      const info = getInfo(id);\n      if (!(info & (ARRAYBUFFERVIEW | ARRAY | STATICARRAY))) throw Error(`not an array: ${id}, flags=${info}`);\n      return info;\n    }\n    /** Gets the runtime base id for the given id. */\n  \n  \n    function getBase(id) {\n      const U32 = new Uint32Array(memory.buffer);\n      const count = getRttiCount(U32);\n      if ((id >>>= 0) >= count) throw Error(`invalid id: ${id}`);\n      return U32[(__rtti_base + 4 >>> 2) + id * 2 + 1];\n    }\n    /** Gets the runtime alignment of a collection's values. */\n  \n  \n    function getValueAlign(info) {\n      return 31 - Math.clz32(info >>> VAL_ALIGN_OFFSET & 31); // -1 if none\n    }\n    /** Gets the runtime alignment of a collection's keys. */\n    // function getKeyAlign(info) {\n    //   return 31 - Math.clz32((info >>> KEY_ALIGN_OFFSET) & 31); // -1 if none\n    // }\n  \n    /** Allocates a new string in the module's memory and returns its pointer. */\n  \n  \n    function __newString(str) {\n      if (str == null) return 0;\n      const length = str.length;\n  \n      const ptr = __new(length << 1, STRING_ID);\n  \n      const U16 = new Uint16Array(memory.buffer);\n  \n      for (var i = 0, p = ptr >>> 1; i < length; ++i) U16[p + i] = str.charCodeAt(i);\n  \n      return ptr;\n    }\n  \n    extendedExports.__newString = __newString;\n    /** Reads a string from the module's memory by its pointer. */\n  \n    function __getString(ptr) {\n      if (!ptr) return null;\n      const buffer = memory.buffer;\n      const id = new Uint32Array(buffer)[ptr + ID_OFFSET >>> 2];\n      if (id !== STRING_ID) throw Error(`not a string: ${ptr}`);\n      return getStringImpl(buffer, ptr);\n    }\n  \n    extendedExports.__getString = __getString;\n    /** Gets the view matching the specified alignment, signedness and floatness. */\n  \n    function getView(alignLog2, signed, float) {\n      const buffer = memory.buffer;\n  \n      if (float) {\n        switch (alignLog2) {\n          case 2:\n            return new Float32Array(buffer);\n  \n          case 3:\n            return new Float64Array(buffer);\n        }\n      } else {\n        switch (alignLog2) {\n          case 0:\n            return new (signed ? Int8Array : Uint8Array)(buffer);\n  \n          case 1:\n            return new (signed ? Int16Array : Uint16Array)(buffer);\n  \n          case 2:\n            return new (signed ? Int32Array : Uint32Array)(buffer);\n  \n          case 3:\n            return new (signed ? BigInt64Array : BigUint64Array)(buffer);\n        }\n      }\n  \n      throw Error(`unsupported align: ${alignLog2}`);\n    }\n    /** Allocates a new array in the module's memory and returns its pointer. */\n  \n  \n    function __newArray(id, values) {\n      const info = getArrayInfo(id);\n      const align = getValueAlign(info);\n      const length = values.length;\n  \n      const buf = __new(length << align, info & STATICARRAY ? id : ARRAYBUFFER_ID);\n  \n      let result;\n  \n      if (info & STATICARRAY) {\n        result = buf;\n      } else {\n        __pin(buf);\n  \n        const arr = __new(info & ARRAY ? ARRAY_SIZE : ARRAYBUFFERVIEW_SIZE, id);\n  \n        __unpin(buf);\n  \n        const U32 = new Uint32Array(memory.buffer);\n        U32[arr + ARRAYBUFFERVIEW_BUFFER_OFFSET >>> 2] = buf;\n        U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2] = buf;\n        U32[arr + ARRAYBUFFERVIEW_DATALENGTH_OFFSET >>> 2] = length << align;\n        if (info & ARRAY) U32[arr + ARRAY_LENGTH_OFFSET >>> 2] = length;\n        result = arr;\n      }\n  \n      const view = getView(align, info & VAL_SIGNED, info & VAL_FLOAT);\n  \n      if (info & VAL_MANAGED) {\n        for (let i = 0; i < length; ++i) {\n          const value = values[i];\n          view[(buf >>> align) + i] = value;\n        }\n      } else {\n        view.set(values, buf >>> align);\n      }\n  \n      return result;\n    }\n  \n    extendedExports.__newArray = __newArray;\n    /** Gets a live view on an array's values in the module's memory. Infers the array type from RTTI. */\n  \n    function __getArrayView(arr) {\n      const U32 = new Uint32Array(memory.buffer);\n      const id = U32[arr + ID_OFFSET >>> 2];\n      const info = getArrayInfo(id);\n      const align = getValueAlign(info);\n      let buf = info & STATICARRAY ? arr : U32[arr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];\n      const length = info & ARRAY ? U32[arr + ARRAY_LENGTH_OFFSET >>> 2] : U32[buf + SIZE_OFFSET >>> 2] >>> align;\n      return getView(align, info & VAL_SIGNED, info & VAL_FLOAT).subarray(buf >>>= align, buf + length);\n    }\n  \n    extendedExports.__getArrayView = __getArrayView;\n    /** Copies an array's values from the module's memory. Infers the array type from RTTI. */\n  \n    function __getArray(arr) {\n      const input = __getArrayView(arr);\n  \n      const len = input.length;\n      const out = new Array(len);\n  \n      for (let i = 0; i < len; i++) out[i] = input[i];\n  \n      return out;\n    }\n  \n    extendedExports.__getArray = __getArray;\n    /** Copies an ArrayBuffer's value from the module's memory. */\n  \n    function __getArrayBuffer(ptr) {\n      const buffer = memory.buffer;\n      const length = new Uint32Array(buffer)[ptr + SIZE_OFFSET >>> 2];\n      return buffer.slice(ptr, ptr + length);\n    }\n  \n    extendedExports.__getArrayBuffer = __getArrayBuffer;\n    /** Copies a typed array's values from the module's memory. */\n  \n    function getTypedArray(Type, alignLog2, ptr) {\n      return new Type(getTypedArrayView(Type, alignLog2, ptr));\n    }\n    /** Gets a live view on a typed array's values in the module's memory. */\n  \n  \n    function getTypedArrayView(Type, alignLog2, ptr) {\n      const buffer = memory.buffer;\n      const U32 = new Uint32Array(buffer);\n      const bufPtr = U32[ptr + ARRAYBUFFERVIEW_DATASTART_OFFSET >>> 2];\n      return new Type(buffer, bufPtr, U32[bufPtr + SIZE_OFFSET >>> 2] >>> alignLog2);\n    }\n    /** Attach a set of get TypedArray and View functions to the exports. */\n  \n  \n    function attachTypedArrayFunctions(ctor, name, align) {\n      extendedExports[`__get${name}`] = getTypedArray.bind(null, ctor, align);\n      extendedExports[`__get${name}View`] = getTypedArrayView.bind(null, ctor, align);\n    }\n  \n    [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array].forEach(ctor => {\n      attachTypedArrayFunctions(ctor, ctor.name, 31 - Math.clz32(ctor.BYTES_PER_ELEMENT));\n    });\n  \n    if (BIGINT) {\n      [BigUint64Array, BigInt64Array].forEach(ctor => {\n        attachTypedArrayFunctions(ctor, ctor.name.slice(3), 3);\n      });\n    }\n    /** Tests whether an object is an instance of the class represented by the specified base id. */\n  \n  \n    function __instanceof(ptr, baseId) {\n      const U32 = new Uint32Array(memory.buffer);\n      let id = U32[ptr + ID_OFFSET >>> 2];\n  \n      if (id <= getRttiCount(U32)) {\n        do {\n          if (id == baseId) return true;\n          id = getBase(id);\n        } while (id);\n      }\n  \n      return false;\n    }\n  \n    extendedExports.__instanceof = __instanceof; // Pull basic exports to extendedExports so code in preInstantiate can use them\n  \n    extendedExports.memory = extendedExports.memory || memory;\n    extendedExports.table = extendedExports.table || table; // Demangle exports and provide the usual utility on the prototype\n  \n    return demangle(exports, extendedExports);\n  }\n  \n  function isResponse(src) {\n    return typeof Response !== \"undefined\" && src instanceof Response;\n  }\n  \n  function isModule(src) {\n    return src instanceof WebAssembly.Module;\n  }\n  /** Asynchronously instantiates an AssemblyScript module from anything that can be instantiated. */\n  \n  \n  async function instantiate(source, imports = {}) {\n    if (isResponse(source = await source)) return instantiateStreaming(source, imports);\n    const module = isModule(source) ? source : await WebAssembly.compile(source);\n    const extended = preInstantiate(imports);\n    const instance = await WebAssembly.instantiate(module, imports);\n    const exports = postInstantiate(extended, instance);\n    return {\n      module,\n      instance,\n      exports\n    };\n  }\n  /** Synchronously instantiates an AssemblyScript module from a WebAssembly.Module or binary buffer. */\n  \n  \n  function instantiateSync(source, imports = {}) {\n    const module = isModule(source) ? source : new WebAssembly.Module(source);\n    const extended = preInstantiate(imports);\n    const instance = new WebAssembly.Instance(module, imports);\n    const exports = postInstantiate(extended, instance);\n    return {\n      module,\n      instance,\n      exports\n    };\n  }\n  /** Asynchronously instantiates an AssemblyScript module from a response, i.e. as obtained by `fetch`. */\n  \n  \n  async function instantiateStreaming(source, imports = {}) {\n    if (!WebAssembly.instantiateStreaming) {\n      return instantiate(isResponse(source = await source) ? source.arrayBuffer() : source, imports);\n    }\n  \n    const extended = preInstantiate(imports);\n    const result = await WebAssembly.instantiateStreaming(source, imports);\n    const exports = postInstantiate(extended, result.instance);\n    return { ...result,\n      exports\n    };\n  }\n  /** Demangles an AssemblyScript module's exports to a friendly object structure. */\n  \n  \n  function demangle(exports, extendedExports = {}) {\n    const setArgumentsLength = exports[\"__argumentsLength\"] ? length => {\n      exports[\"__argumentsLength\"].value = length;\n    } : exports[\"__setArgumentsLength\"] || exports[\"__setargc\"] || (() => {\n      /* nop */\n    });\n  \n    for (let internalName in exports) {\n      if (!Object.prototype.hasOwnProperty.call(exports, internalName)) continue;\n      const elem = exports[internalName];\n      let parts = internalName.split(\".\");\n      let curr = extendedExports;\n  \n      while (parts.length > 1) {\n        let part = parts.shift();\n        if (!Object.prototype.hasOwnProperty.call(curr, part)) curr[part] = {};\n        curr = curr[part];\n      }\n  \n      let name = parts[0];\n      let hash = name.indexOf(\"#\");\n  \n      if (hash >= 0) {\n        const className = name.substring(0, hash);\n        const classElem = curr[className];\n  \n        if (typeof classElem === \"undefined\" || !classElem.prototype) {\n          const ctor = function (...args) {\n            return ctor.wrap(ctor.prototype.constructor(0, ...args));\n          };\n  \n          ctor.prototype = {\n            valueOf() {\n              return this[THIS];\n            }\n  \n          };\n  \n          ctor.wrap = function (thisValue) {\n            return Object.create(ctor.prototype, {\n              [THIS]: {\n                value: thisValue,\n                writable: false\n              }\n            });\n          };\n  \n          if (classElem) Object.getOwnPropertyNames(classElem).forEach(name => Object.defineProperty(ctor, name, Object.getOwnPropertyDescriptor(classElem, name)));\n          curr[className] = ctor;\n        }\n  \n        name = name.substring(hash + 1);\n        curr = curr[className].prototype;\n  \n        if (/^(get|set):/.test(name)) {\n          if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {\n            let getter = exports[internalName.replace(\"set:\", \"get:\")];\n            let setter = exports[internalName.replace(\"get:\", \"set:\")];\n            Object.defineProperty(curr, name, {\n              get() {\n                return getter(this[THIS]);\n              },\n  \n              set(value) {\n                setter(this[THIS], value);\n              },\n  \n              enumerable: true\n            });\n          }\n        } else {\n          if (name === 'constructor') {\n            (curr[name] = (...args) => {\n              setArgumentsLength(args.length);\n              return elem(...args);\n            }).original = elem;\n          } else {\n            // instance method\n            (curr[name] = function (...args) {\n              // !\n              setArgumentsLength(args.length);\n              return elem(this[THIS], ...args);\n            }).original = elem;\n          }\n        }\n      } else {\n        if (/^(get|set):/.test(name)) {\n          if (!Object.prototype.hasOwnProperty.call(curr, name = name.substring(4))) {\n            Object.defineProperty(curr, name, {\n              get: exports[internalName.replace(\"set:\", \"get:\")],\n              set: exports[internalName.replace(\"get:\", \"set:\")],\n              enumerable: true\n            });\n          }\n        } else if (typeof elem === \"function\" && elem !== setArgumentsLength) {\n          (curr[name] = (...args) => {\n            setArgumentsLength(args.length);\n            return elem(...args);\n          }).original = elem;\n        } else {\n          curr[name] = elem;\n        }\n      }\n    }\n  \n    return extendedExports;\n  }\n  \n  var _default = {\n    instantiate,\n    instantiateSync,\n    instantiateStreaming,\n    demangle\n  };\n  exports.default = _default;\n  return exports;\n})({});\nif (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() { return loader; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\nelse {}\n\n\n//# sourceURL=webpack://assemblyscript-fib/./node_modules/@assemblyscript/loader/umd/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;