"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/DropDownMap.tsx":
/*!****************************************!*\
  !*** ./src/components/DropDownMap.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RotatingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RotatingIcon */ \"./src/components/RotatingIcon.tsx\");\n/* harmony import */ var _dummyData_mapOverMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dummyData/mapOverMe */ \"./src/components/dummyData/mapOverMe.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst DropDownItem = (param)=>{\n    let { title , description  } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mb-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleOpen,\n                className: \"w-full py-2 px-4 border border-gray-300 rounded-md text-left flex justify-between items-center\",\n                children: [\n                    title,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RotatingIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        iconColor: \"#4b5563\",\n                        open: isOpen\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dalli\\\\OneDrive\\\\Desktop\\\\Sedaro\\\\sedaro-nano\\\\mazer-rackham\\\\src\\\\components\\\\DropDownMap.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dalli\\\\OneDrive\\\\Desktop\\\\Sedaro\\\\sedaro-nano\\\\mazer-rackham\\\\src\\\\components\\\\DropDownMap.tsx\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 px-4 text-gray-700\",\n                children: description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dalli\\\\OneDrive\\\\Desktop\\\\Sedaro\\\\sedaro-nano\\\\mazer-rackham\\\\src\\\\components\\\\DropDownMap.tsx\",\n                lineNumber: 21,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dalli\\\\OneDrive\\\\Desktop\\\\Sedaro\\\\sedaro-nano\\\\mazer-rackham\\\\src\\\\components\\\\DropDownMap.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n_s(DropDownItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = DropDownItem;\nconst DropDownMap = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: _dummyData_mapOverMe__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DropDownItem, {\n                title: item.title,\n                description: item.description\n            }, item.title, false, {\n                fileName: \"C:\\\\Users\\\\dalli\\\\OneDrive\\\\Desktop\\\\Sedaro\\\\sedaro-nano\\\\mazer-rackham\\\\src\\\\components\\\\DropDownMap.tsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dalli\\\\OneDrive\\\\Desktop\\\\Sedaro\\\\sedaro-nano\\\\mazer-rackham\\\\src\\\\components\\\\DropDownMap.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = DropDownMap;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropDownMap);\nvar _c, _c1;\n$RefreshReg$(_c, \"DropDownItem\");\n$RefreshReg$(_c1, \"DropDownMap\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93bk1hcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDSTtBQUU5QyxNQUFNSSxlQUFpRSxTQUE0QjtRQUEzQixFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRTs7SUFDN0YsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDLEtBQUs7SUFFMUMsTUFBTVEsYUFBYSxJQUFNO1FBQ3hCRCxVQUFVLENBQUNEO0lBQ1o7SUFFQSxxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUNBQyxTQUFTSjtnQkFDVEUsV0FBVTs7b0JBRVROO2tDQUNELDhEQUFDSCxxREFBWUE7d0JBQUNZLFdBQVU7d0JBQVVDLE1BQU1SOzs7Ozs7Ozs7Ozs7WUFFeENBLHdCQUFVLDhEQUFDUztnQkFBRUwsV0FBVTswQkFBMkJMOzs7Ozs7Ozs7Ozs7QUFHdEQ7R0FuQk1GO0tBQUFBO0FBcUJOLE1BQU1hLGNBQXdCLElBQU07SUFDbkMscUJBQ0MsOERBQUNQO1FBQUlDLFdBQVU7a0JBQ2JSLGdFQUFhLENBQUMsQ0FBQ2dCLHFCQUNmLDhEQUFDZjtnQkFBOEJDLE9BQU9jLEtBQUtkLEtBQUs7Z0JBQUVDLGFBQWFhLEtBQUtiLFdBQVc7ZUFBNURhLEtBQUtkLEtBQUs7Ozs7Ozs7Ozs7QUFJakM7TUFSTVk7QUFVTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ecm9wRG93bk1hcC50c3g/NjZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdGF0aW5nSWNvbiBmcm9tIFwiLi9Sb3RhdGluZ0ljb25cIjtcclxuaW1wb3J0IG1hcE92ZXJNZSBmcm9tIFwiLi9kdW1teURhdGEvbWFwT3Zlck1lXCI7XHJcblxyXG5jb25zdCBEcm9wRG93bkl0ZW06IFJlYWN0LkZDPHsgdGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZyB9PiA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcblx0Y29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+IHtcclxuXHRcdHNldElzT3BlbighaXNPcGVuKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMlwiPlxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0b25DbGljaz17dG9nZ2xlT3Blbn1cclxuXHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgcHktMiBweC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCB0ZXh0LWxlZnQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdHt0aXRsZX1cclxuXHRcdFx0XHQ8Um90YXRpbmdJY29uIGljb25Db2xvcj1cIiM0YjU1NjNcIiBvcGVuPXtpc09wZW59IC8+XHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHR7aXNPcGVuICYmIDxwIGNsYXNzTmFtZT1cIm10LTIgcHgtNCB0ZXh0LWdyYXktNzAwXCI+e2Rlc2NyaXB0aW9ufTwvcD59XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuY29uc3QgRHJvcERvd25NYXA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG5cdFx0XHR7bWFwT3Zlck1lLm1hcCgoaXRlbSkgPT4gKFxyXG5cdFx0XHRcdDxEcm9wRG93bkl0ZW0ga2V5PXtpdGVtLnRpdGxlfSB0aXRsZT17aXRlbS50aXRsZX0gZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259IC8+XHJcblx0XHRcdCkpfVxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyb3BEb3duTWFwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJvdGF0aW5nSWNvbiIsIm1hcE92ZXJNZSIsIkRyb3BEb3duSXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImljb25Db2xvciIsIm9wZW4iLCJwIiwiRHJvcERvd25NYXAiLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/DropDownMap.tsx\n"));

/***/ }),

/***/ "./src/components/dummyData/mapOverMe.tsx":
/*!************************************************!*\
  !*** ./src/components/dummyData/mapOverMe.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst MapOverMe = [\n    {\n        \"title\": \"Rule of Thirds\",\n        \"description\": \"The rule of thirds is a fundamental composition principle in photography. It involves dividing an image into nine equal parts by two equally spaced horizontal and vertical lines. Placing points of interest along these lines or at their intersections can create more balanced and visually appealing photographs.\"\n    },\n    {\n        \"title\": \"Aperture\",\n        \"description\": \"Aperture is the size of the opening in a camera lens, which controls the amount of light that enters the camera. A larger aperture (smaller f-number) allows more light in and creates a shallow depth of field, while a smaller aperture (larger f-number) lets in less light and results in a greater depth of field.\"\n    },\n    {\n        \"title\": \"Shutter Speed\",\n        \"description\": \"Shutter speed refers to the amount of time the camera's sensor is exposed to light. Faster shutter speeds can freeze motion, while slower shutter speeds may result in motion blur, giving the impression of movement in an image. Shutter speed is typically measured in fractions of a second.\"\n    },\n    {\n        \"title\": \"ISO\",\n        \"description\": \"ISO is a measure of a camera sensor's sensitivity to light. A higher ISO value allows for better performance in low-light conditions, but may introduce more noise into the image. Lower ISO values produce cleaner images but require more light for proper exposure.\"\n    },\n    {\n        \"title\": \"White Balance\",\n        \"description\": \"White balance is a camera setting that adjusts the color temperature of an image to ensure accurate color representation. Different light sources emit different color temperatures, and adjusting the white balance helps to correct for these variations, resulting in more natural-looking photos.\"\n    },\n    {\n        \"title\": \"Depth of Field\",\n        \"description\": \"Depth of field refers to the range of distances in an image that appear sharp and in focus. A shallow depth of field creates a blurred background, isolating the subject and drawing attention to it, while a deep depth of field keeps more of the scene in focus.\"\n    },\n    {\n        \"title\": \"Focal Length\",\n        \"description\": \"Focal length is the distance between the camera's sensor and the point at which the lens converges incoming light. It is usually measured in millimeters and determines the angle of view and magnification of an image. Shorter focal lengths provide a wider field of view, while longer focal lengths produce greater magnification.\"\n    },\n    {\n        \"title\": \"Exposure Triangle\",\n        \"description\": \"The exposure triangle is a concept that helps photographers understand the relationship between aperture, shutter speed, and ISO. Balancing these three settings is crucial for achieving proper exposure, as each one affects the amount of light that reaches the camera sensor and how the image is captured.\"\n    },\n    {\n        \"title\": \"Composition\",\n        \"description\": \"Composition refers to the arrangement of elements within a photograph. Good composition can enhance the visual appeal of an image and help convey the intended message. Techniques such as the rule of thirds, leading lines, and symmetry can be used to create more effective compositions.\"\n    },\n    {\n        \"title\": \"Natural Light\",\n        \"description\": \"Natural light refers to sunlight, which can vary in quality and intensity depending on the time of day, weather, and location. Photographers often use natural light to create images with a soft, warm, and natural feel, and may use techniques such as golden hour photography or diffused lighting to achieve the desired effect.\"\n    },\n    {\n        \"title\": \"Flash Photography\",\n        \"description\": \"Flash photography\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapOverMe);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kdW1teURhdGEvbWFwT3Zlck1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsWUFDTDtJQUNDO1FBQ0MsU0FBUztRQUNULGVBQWU7SUFDaEI7SUFDQTtRQUNDLFNBQVM7UUFDVCxlQUFlO0lBQ2hCO0lBQ0E7UUFDQyxTQUFTO1FBQ1QsZUFBZTtJQUNoQjtJQUNBO1FBQ0MsU0FBUztRQUNULGVBQWU7SUFDaEI7SUFDQTtRQUNDLFNBQVM7UUFDVCxlQUFlO0lBQ2hCO0lBQ0E7UUFDQyxTQUFTO1FBQ1QsZUFBZTtJQUNoQjtJQUNBO1FBQ0MsU0FBUztRQUNULGVBQWU7SUFDaEI7SUFDQTtRQUNDLFNBQVM7UUFDVCxlQUFlO0lBQ2hCO0lBQ0E7UUFDQyxTQUFTO1FBQ1QsZUFBZTtJQUNoQjtJQUNBO1FBQ0MsU0FBUztRQUNULGVBQWU7SUFDaEI7SUFDQTtRQUNDLFNBQVM7UUFDVCxlQUFlO0lBQ2hCO0NBQ0E7QUFFRiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9kdW1teURhdGEvbWFwT3Zlck1lLnRzeD9mMzY5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE1hcE92ZXJNZSA9XHJcblx0W1xyXG5cdFx0e1xyXG5cdFx0XHRcInRpdGxlXCI6IFwiUnVsZSBvZiBUaGlyZHNcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIlRoZSBydWxlIG9mIHRoaXJkcyBpcyBhIGZ1bmRhbWVudGFsIGNvbXBvc2l0aW9uIHByaW5jaXBsZSBpbiBwaG90b2dyYXBoeS4gSXQgaW52b2x2ZXMgZGl2aWRpbmcgYW4gaW1hZ2UgaW50byBuaW5lIGVxdWFsIHBhcnRzIGJ5IHR3byBlcXVhbGx5IHNwYWNlZCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBsaW5lcy4gUGxhY2luZyBwb2ludHMgb2YgaW50ZXJlc3QgYWxvbmcgdGhlc2UgbGluZXMgb3IgYXQgdGhlaXIgaW50ZXJzZWN0aW9ucyBjYW4gY3JlYXRlIG1vcmUgYmFsYW5jZWQgYW5kIHZpc3VhbGx5IGFwcGVhbGluZyBwaG90b2dyYXBocy5cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcIkFwZXJ0dXJlXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJBcGVydHVyZSBpcyB0aGUgc2l6ZSBvZiB0aGUgb3BlbmluZyBpbiBhIGNhbWVyYSBsZW5zLCB3aGljaCBjb250cm9scyB0aGUgYW1vdW50IG9mIGxpZ2h0IHRoYXQgZW50ZXJzIHRoZSBjYW1lcmEuIEEgbGFyZ2VyIGFwZXJ0dXJlIChzbWFsbGVyIGYtbnVtYmVyKSBhbGxvd3MgbW9yZSBsaWdodCBpbiBhbmQgY3JlYXRlcyBhIHNoYWxsb3cgZGVwdGggb2YgZmllbGQsIHdoaWxlIGEgc21hbGxlciBhcGVydHVyZSAobGFyZ2VyIGYtbnVtYmVyKSBsZXRzIGluIGxlc3MgbGlnaHQgYW5kIHJlc3VsdHMgaW4gYSBncmVhdGVyIGRlcHRoIG9mIGZpZWxkLlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInRpdGxlXCI6IFwiU2h1dHRlciBTcGVlZFwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiU2h1dHRlciBzcGVlZCByZWZlcnMgdG8gdGhlIGFtb3VudCBvZiB0aW1lIHRoZSBjYW1lcmEncyBzZW5zb3IgaXMgZXhwb3NlZCB0byBsaWdodC4gRmFzdGVyIHNodXR0ZXIgc3BlZWRzIGNhbiBmcmVlemUgbW90aW9uLCB3aGlsZSBzbG93ZXIgc2h1dHRlciBzcGVlZHMgbWF5IHJlc3VsdCBpbiBtb3Rpb24gYmx1ciwgZ2l2aW5nIHRoZSBpbXByZXNzaW9uIG9mIG1vdmVtZW50IGluIGFuIGltYWdlLiBTaHV0dGVyIHNwZWVkIGlzIHR5cGljYWxseSBtZWFzdXJlZCBpbiBmcmFjdGlvbnMgb2YgYSBzZWNvbmQuXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwidGl0bGVcIjogXCJJU09cIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIklTTyBpcyBhIG1lYXN1cmUgb2YgYSBjYW1lcmEgc2Vuc29yJ3Mgc2Vuc2l0aXZpdHkgdG8gbGlnaHQuIEEgaGlnaGVyIElTTyB2YWx1ZSBhbGxvd3MgZm9yIGJldHRlciBwZXJmb3JtYW5jZSBpbiBsb3ctbGlnaHQgY29uZGl0aW9ucywgYnV0IG1heSBpbnRyb2R1Y2UgbW9yZSBub2lzZSBpbnRvIHRoZSBpbWFnZS4gTG93ZXIgSVNPIHZhbHVlcyBwcm9kdWNlIGNsZWFuZXIgaW1hZ2VzIGJ1dCByZXF1aXJlIG1vcmUgbGlnaHQgZm9yIHByb3BlciBleHBvc3VyZS5cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcIldoaXRlIEJhbGFuY2VcIixcclxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIldoaXRlIGJhbGFuY2UgaXMgYSBjYW1lcmEgc2V0dGluZyB0aGF0IGFkanVzdHMgdGhlIGNvbG9yIHRlbXBlcmF0dXJlIG9mIGFuIGltYWdlIHRvIGVuc3VyZSBhY2N1cmF0ZSBjb2xvciByZXByZXNlbnRhdGlvbi4gRGlmZmVyZW50IGxpZ2h0IHNvdXJjZXMgZW1pdCBkaWZmZXJlbnQgY29sb3IgdGVtcGVyYXR1cmVzLCBhbmQgYWRqdXN0aW5nIHRoZSB3aGl0ZSBiYWxhbmNlIGhlbHBzIHRvIGNvcnJlY3QgZm9yIHRoZXNlIHZhcmlhdGlvbnMsIHJlc3VsdGluZyBpbiBtb3JlIG5hdHVyYWwtbG9va2luZyBwaG90b3MuXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwidGl0bGVcIjogXCJEZXB0aCBvZiBGaWVsZFwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGVwdGggb2YgZmllbGQgcmVmZXJzIHRvIHRoZSByYW5nZSBvZiBkaXN0YW5jZXMgaW4gYW4gaW1hZ2UgdGhhdCBhcHBlYXIgc2hhcnAgYW5kIGluIGZvY3VzLiBBIHNoYWxsb3cgZGVwdGggb2YgZmllbGQgY3JlYXRlcyBhIGJsdXJyZWQgYmFja2dyb3VuZCwgaXNvbGF0aW5nIHRoZSBzdWJqZWN0IGFuZCBkcmF3aW5nIGF0dGVudGlvbiB0byBpdCwgd2hpbGUgYSBkZWVwIGRlcHRoIG9mIGZpZWxkIGtlZXBzIG1vcmUgb2YgdGhlIHNjZW5lIGluIGZvY3VzLlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcInRpdGxlXCI6IFwiRm9jYWwgTGVuZ3RoXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJGb2NhbCBsZW5ndGggaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGNhbWVyYSdzIHNlbnNvciBhbmQgdGhlIHBvaW50IGF0IHdoaWNoIHRoZSBsZW5zIGNvbnZlcmdlcyBpbmNvbWluZyBsaWdodC4gSXQgaXMgdXN1YWxseSBtZWFzdXJlZCBpbiBtaWxsaW1ldGVycyBhbmQgZGV0ZXJtaW5lcyB0aGUgYW5nbGUgb2YgdmlldyBhbmQgbWFnbmlmaWNhdGlvbiBvZiBhbiBpbWFnZS4gU2hvcnRlciBmb2NhbCBsZW5ndGhzIHByb3ZpZGUgYSB3aWRlciBmaWVsZCBvZiB2aWV3LCB3aGlsZSBsb25nZXIgZm9jYWwgbGVuZ3RocyBwcm9kdWNlIGdyZWF0ZXIgbWFnbmlmaWNhdGlvbi5cIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJ0aXRsZVwiOiBcIkV4cG9zdXJlIFRyaWFuZ2xlXCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJUaGUgZXhwb3N1cmUgdHJpYW5nbGUgaXMgYSBjb25jZXB0IHRoYXQgaGVscHMgcGhvdG9ncmFwaGVycyB1bmRlcnN0YW5kIHRoZSByZWxhdGlvbnNoaXAgYmV0d2VlbiBhcGVydHVyZSwgc2h1dHRlciBzcGVlZCwgYW5kIElTTy4gQmFsYW5jaW5nIHRoZXNlIHRocmVlIHNldHRpbmdzIGlzIGNydWNpYWwgZm9yIGFjaGlldmluZyBwcm9wZXIgZXhwb3N1cmUsIGFzIGVhY2ggb25lIGFmZmVjdHMgdGhlIGFtb3VudCBvZiBsaWdodCB0aGF0IHJlYWNoZXMgdGhlIGNhbWVyYSBzZW5zb3IgYW5kIGhvdyB0aGUgaW1hZ2UgaXMgY2FwdHVyZWQuXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwidGl0bGVcIjogXCJDb21wb3NpdGlvblwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiQ29tcG9zaXRpb24gcmVmZXJzIHRvIHRoZSBhcnJhbmdlbWVudCBvZiBlbGVtZW50cyB3aXRoaW4gYSBwaG90b2dyYXBoLiBHb29kIGNvbXBvc2l0aW9uIGNhbiBlbmhhbmNlIHRoZSB2aXN1YWwgYXBwZWFsIG9mIGFuIGltYWdlIGFuZCBoZWxwIGNvbnZleSB0aGUgaW50ZW5kZWQgbWVzc2FnZS4gVGVjaG5pcXVlcyBzdWNoIGFzIHRoZSBydWxlIG9mIHRoaXJkcywgbGVhZGluZyBsaW5lcywgYW5kIHN5bW1ldHJ5IGNhbiBiZSB1c2VkIHRvIGNyZWF0ZSBtb3JlIGVmZmVjdGl2ZSBjb21wb3NpdGlvbnMuXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwidGl0bGVcIjogXCJOYXR1cmFsIExpZ2h0XCIsXHJcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJOYXR1cmFsIGxpZ2h0IHJlZmVycyB0byBzdW5saWdodCwgd2hpY2ggY2FuIHZhcnkgaW4gcXVhbGl0eSBhbmQgaW50ZW5zaXR5IGRlcGVuZGluZyBvbiB0aGUgdGltZSBvZiBkYXksIHdlYXRoZXIsIGFuZCBsb2NhdGlvbi4gUGhvdG9ncmFwaGVycyBvZnRlbiB1c2UgbmF0dXJhbCBsaWdodCB0byBjcmVhdGUgaW1hZ2VzIHdpdGggYSBzb2Z0LCB3YXJtLCBhbmQgbmF0dXJhbCBmZWVsLCBhbmQgbWF5IHVzZSB0ZWNobmlxdWVzIHN1Y2ggYXMgZ29sZGVuIGhvdXIgcGhvdG9ncmFwaHkgb3IgZGlmZnVzZWQgbGlnaHRpbmcgdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBlZmZlY3QuXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwidGl0bGVcIjogXCJGbGFzaCBQaG90b2dyYXBoeVwiLFxyXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRmxhc2ggcGhvdG9ncmFwaHlcIlxyXG5cdFx0fSxcclxuXHRdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBPdmVyTWU7Il0sIm5hbWVzIjpbIk1hcE92ZXJNZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dummyData/mapOverMe.tsx\n"));

/***/ })

});