(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\lukas\\OneDrive\\Desktop\\bakalarka\\my-site\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const MyApp = ({
  Component,
  pageProps
}) => {
  // Extract the data we need
  const {
    global
  } = pageProps;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, undefined);
  }

  const {
    metadata,
    favicon,
    metaTitleSuffix
  } = global.attributes;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(favicon.data.attributes.url)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_5__.DefaultSeo, {
      titleTemplate: `%s | ${metaTitleSuffix}`,
      title: "Page",
      description: metadata.metaDescription,
      openGraph: {
        images: Object.values(metadata.shareImage.data.attributes.formats).map(image => {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(image.url),
            width: image.width,
            height: image.height
          };
        })
      },
      twitter: {
        cardType: metadata.twitterCardType,
        handle: metadata.twitterUsername
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async appContext => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(appContext);
  const globalLocale = await (0,utils_api__WEBPACK_IMPORTED_MODULE_7__.getGlobalData)(appContext.router.locale);
  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global: globalLocale
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; },
/* harmony export */   "getGlobalData": function() { return /* binding */ getGlobalData; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */

async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      "Content-Type": "application/json"
    }
  }, options); // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */

async function getPageData({
  slug,
  locale,
  preview
}) {
  var _pagesData$data;

  // Find the pages that match this slug
  const gqlEndpoint = getStrapiURL("/graphql");
  const pagesRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
          data {
            id
            attributes {
              alternativeText
              width
              height
              mime
              url
              formats
            }
          }
        }
        query GetPages(
          $slug: String!
          $publicationState: PublicationState!
          $locale: I18NLocaleCode!
        ) {        
          pages(
            filters: { slug: { eq: $slug } }
            publicationState: $publicationState
            locale: $locale
          ) {
            data {
              id
              attributes {
                locale
                localizations {
                  data {
                    id
                    attributes {
                      locale
                    }
                  }
                }
                slug
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                contentSections {
                  __typename
                  ... on ComponentSectionsBottomActions {
                    id
                    title
                    buttons {
                      id
                      newTab
                      text
                      type
                      url
                    }
                  }
                  ... on ComponentSectionsHero {
                    id
                    buttons {
                      id
                      newTab
                      text
                      type
                      url
                    }
                    title
                    picture {
                      ...FileParts
                    }
                  }
                  ... on ComponentSectionsFeatureColumnsGroup {
                    id
                    features {
                      id
                      description
                      icon {
                        ...FileParts
                      }
                      title
                    }
                  }
                  ... on ComponentSectionsFeatureRowsGroup {
                    id
                    features {
                      id
                      description
                      link {
                        id
                        newTab
                        text
                        url
                      }
                      media {
                        ...FileParts
                      }
                      title
                    }
                  }
                  ... on ComponentSectionsTestimonialsGroup {
                    id
                    description
                    link {
                      id
                      newTab
                      text
                      url
                    }
                    logos {
                      id
                      title
                      logo {
                        ...FileParts
                      }
                    }
                    testimonials {
                      id
                      logo {
                        ...FileParts
                      }
                      picture {
                        ...FileParts
                      }
                      text
                      authorName
                      authorTitle
                      link
                    }
                    title
                  }
                  ... on ComponentSectionsLargeVideo {
                    id
                    description
                    title
                    poster {
                      ...FileParts
                    }
                    video {
                      ...FileParts
                    }
                  }
                  ... on ComponentSectionsRichText {
                    id
                    content
                  }
                  ... on ComponentSectionsPricing {
                    id
                    title
                    plans {
                      description
                      features {
                        id
                        name
                      }
                      id
                      isRecommended
                      name
                      price
                      pricePeriod
                    }
                  }
                  ... on ComponentSectionsLeadForm {
                    id
                    emailPlaceholder
                    location
                    submitButton {
                      id
                      text
                      type
                    }
                    title
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        slug,
        publicationState: preview ? "PREVIEW" : "LIVE",
        locale
      }
    })
  });
  const pagesData = await pagesRes.json(); // Make sure we found something, otherwise return null

  if (((_pagesData$data = pagesData.data) === null || _pagesData$data === void 0 ? void 0 : _pagesData$data.pages) == null || pagesData.data.pages.length === 0) {
    return null;
  } // Return the first item since there should only be one result per slug


  return pagesData.data.pages.data[0];
} // Get site data from Strapi (metadata, navbar, footer...)

async function getGlobalData(locale) {
  const gqlEndpoint = getStrapiURL("/graphql");
  const globalRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
          data {
            id
            attributes {
              alternativeText
              width
              height
              mime
              url
              formats
            }
          }
        }
        query GetGlobal($locale: I18NLocaleCode!) {
          global(locale: $locale) {
            data {
              id
              attributes {
                favicon {
                  ...FileParts
                }
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                metaTitleSuffix
                notificationBanner {
                  type
                  text
                }
                navbar {
                  logo {
                    ...FileParts
                  }
                  links {
                    id
                    url
                    newTab
                    text
                  }
                  button {
                    id
                    url
                    newTab
                    text
                    type
                  }
                }
                footer {
                  logo {
                    ...FileParts
                  }
                  smallText
                  columns {
                    id
                    title
                    links {
                      id
                      url
                      newTab
                      text
                    }
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        locale
      }
    })
  });
  const global = await globalRes.json();
  return global.data.global;
}

/***/ }),

/***/ "./utils/media.js":
/*!************************!*\
  !*** ./utils/media.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
function getStrapiMedia(url) {
  if (url == null) {
    return null;
  } // Return the full URL if the media is hosted on an external provider


  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  } // Otherwise prepend the URL path with the Strapi URL


  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${url}`;
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function() {



/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvLi91dGlscy9tZWRpYS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL215LW5leHQtY29ycG9yYXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiZGVmYXVsdCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJNeUFwcCIsImdsb2JhbCIsIm1ldGFkYXRhIiwiZmF2aWNvbiIsIm1ldGFUaXRsZVN1ZmZpeCIsImF0dHJpYnV0ZXMiLCJnZXRTdHJhcGlNZWRpYSIsImRhdGEiLCJ1cmwiLCJtZXRhRGVzY3JpcHRpb24iLCJpbWFnZXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzaGFyZUltYWdlIiwiZm9ybWF0cyIsIm1hcCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkVHlwZSIsInR3aXR0ZXJDYXJkVHlwZSIsImhhbmRsZSIsInR3aXR0ZXJVc2VybmFtZSIsImFwcENvbnRleHQiLCJhcHBQcm9wcyIsImdsb2JhbExvY2FsZSIsImdldEdsb2JhbERhdGEiLCJyb3V0ZXIiLCJsb2NhbGUiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwiZmV0Y2hBUEkiLCJ1cmxQYXJhbXNPYmplY3QiLCJvcHRpb25zIiwibWVyZ2VkT3B0aW9ucyIsImhlYWRlcnMiLCJxdWVyeVN0cmluZyIsInFzIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJFcnJvciIsImpzb24iLCJnZXRQYWdlRGF0YSIsInNsdWciLCJwcmV2aWV3IiwiZ3FsRW5kcG9pbnQiLCJwYWdlc1JlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJwdWJsaWNhdGlvblN0YXRlIiwicGFnZXNEYXRhIiwicGFnZXMiLCJsZW5ndGgiLCJnbG9iYWxSZXMiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1R0FBNkM7Ozs7Ozs7Ozs7OztBQ0FoQzs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ0MsdUJBQUEsR0FBd0JFLE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0NILDJCQUFBLEdBQTRCRSxNQUFNLENBQUNFLG1CQUFuQztBQUF1RDtBQUN4VjtBQUNBO0FBQ0E7O0FBQUcsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQWxDLEVBQWtEO0FBQUMsUUFBTUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFTixNQUFNLENBQUNPLG1CQUFWLEVBQStCSCxTQUEvQixFQUF5Q0MsR0FBekMsQ0FBckI7QUFBbUUsU0FBTTtBQUFDQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTUUsR0FBTixTQUFrQlQsTUFBTSxDQUFDVSxPQUFQLENBQWVMLFNBQWpDLENBQTBDO0FBQUNNLFFBQU0sR0FBRTtBQUFDLFVBQUs7QUFBQ04sZUFBRDtBQUFXRTtBQUFYLFFBQXNCLEtBQUtLLEtBQWhDO0FBQXNDLFdBQU0sYUFBYVosTUFBTSxDQUFDVSxPQUFQLENBQWVHLGFBQWYsQ0FBNkJSLFNBQTdCLEVBQXVDRSxTQUF2QyxDQUFuQjtBQUFzRTs7QUFBdEg7O0FBQXVIUixlQUFBLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDSyxtQkFBSixHQUF3QlYsa0JBQXhCO0FBQTJDSyxH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QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wcztleHBvcnRzLk5leHRXZWJWaXRhbHNNZXRyaWM9X3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pe2NvbnN0IHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe2NvbnN0e0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LHBhZ2VQcm9wcyk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gXCJuZXh0L2Vycm9yXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyBEZWZhdWx0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCJcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSBcInV0aWxzL21lZGlhXCJcbmltcG9ydCB7IGdldEdsb2JhbERhdGEgfSBmcm9tIFwidXRpbHMvYXBpXCJcbmltcG9ydCBcIkAvc3R5bGVzL2luZGV4LmNzc1wiXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiXG5pbXBvcnQgXCJAL3N0eWxlcy9zdHlsZS5zY3NzXCJcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIEV4dHJhY3QgdGhlIGRhdGEgd2UgbmVlZFxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG4gIGlmIChnbG9iYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4gIGNvbnN0IHsgbWV0YWRhdGEsIGZhdmljb24sIG1ldGFUaXRsZVN1ZmZpeCB9ID0gZ2xvYmFsLmF0dHJpYnV0ZXNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogRmF2aWNvbiAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGZhdmljb24uZGF0YS5hdHRyaWJ1dGVzLnVybCl9XG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4vPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiBHbG9iYWwgc2l0ZSBtZXRhZGF0YSAqL31cbiAgICAgIDxEZWZhdWx0U2VvXG4gICAgICAgIHRpdGxlVGVtcGxhdGU9e2AlcyB8ICR7bWV0YVRpdGxlU3VmZml4fWB9XG4gICAgICAgIHRpdGxlPVwiUGFnZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPXttZXRhZGF0YS5tZXRhRGVzY3JpcHRpb259XG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIGltYWdlczogT2JqZWN0LnZhbHVlcyhcbiAgICAgICAgICAgIG1ldGFkYXRhLnNoYXJlSW1hZ2UuZGF0YS5hdHRyaWJ1dGVzLmZvcm1hdHNcbiAgICAgICAgICApLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHVybDogZ2V0U3RyYXBpTWVkaWEoaW1hZ2UudXJsKSxcbiAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGltYWdlLmhlaWdodCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgfX1cbiAgICAgICAgdHdpdHRlcj17e1xuICAgICAgICAgIGNhcmRUeXBlOiBtZXRhZGF0YS50d2l0dGVyQ2FyZFR5cGUsXG4gICAgICAgICAgaGFuZGxlOiBtZXRhZGF0YS50d2l0dGVyVXNlcm5hbWUsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgey8qIERpc3BsYXkgdGhlIGNvbnRlbnQgKi99XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XG4vLyBoYXZlIGdldFN0YXRpY1Byb3BzLiBTbyBbWy4uLnNsdWddXSBwYWdlcyBzdGlsbCBnZXQgU1NHLlxuLy8gSG9wZWZ1bGx5IHdlIGNhbiByZXBsYWNlIHRoaXMgd2l0aCBnZXRTdGF0aWNQcm9wcyBvbmNlIHRoaXMgaXNzdWUgaXMgZml4ZWQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChhcHBDb250ZXh0KSA9PiB7XG4gIC8vIENhbGxzIHBhZ2UncyBgZ2V0SW5pdGlhbFByb3BzYCBhbmQgZmlsbHMgYGFwcFByb3BzLnBhZ2VQcm9wc2BcbiAgY29uc3QgYXBwUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpXG4gIGNvbnN0IGdsb2JhbExvY2FsZSA9IGF3YWl0IGdldEdsb2JhbERhdGEoYXBwQ29udGV4dC5yb3V0ZXIubG9jYWxlKVxuXG4gIHJldHVybiB7XG4gICAgLi4uYXBwUHJvcHMsXG4gICAgcGFnZVByb3BzOiB7XG4gICAgICBnbG9iYWw6IGdsb2JhbExvY2FsZSxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoKSB7XG4gIHJldHVybiBgJHtcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiXG4gIH0ke3BhdGh9YFxufVxuXG4vKipcbiAqIEhlbHBlciB0byBtYWtlIEdFVCByZXF1ZXN0cyB0byBTdHJhcGkgQVBJIGVuZHBvaW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgQVBJIHJvdXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXJsUGFyYW1zT2JqZWN0IFVSTCBwYXJhbXMgb2JqZWN0LCB3aWxsIGJlIHN0cmluZ2lmaWVkXG4gKiBAcGFyYW0ge1JlcXVlc3RJbml0fSBvcHRpb25zIE9wdGlvbnMgcGFzc2VkIHRvIGZldGNoXG4gKiBAcmV0dXJucyBQYXJzZWQgQVBJIGNhbGwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHBhdGgsIHVybFBhcmFtc09iamVjdCA9IHt9LCBvcHRpb25zID0ge30pIHtcbiAgLy8gTWVyZ2UgZGVmYXVsdCBhbmQgdXNlciBvcHRpb25zXG4gIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICAuLi5vcHRpb25zLFxuICB9XG5cbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KVxuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7Z2V0U3RyYXBpVVJMKFxuICAgIGAvYXBpJHtwYXRofSR7cXVlcnlTdHJpbmcgPyBgPyR7cXVlcnlTdHJpbmd9YCA6IFwiXCJ9YFxuICApfWBcblxuICAvLyBUcmlnZ2VyIEFQSSBjYWxsXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgbWVyZ2VkT3B0aW9ucylcblxuICAvLyBIYW5kbGUgcmVzcG9uc2VcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIGVycm9yIG9jY3VyZWQgcGxlYXNlIHRyeSBhZ2FpbmApXG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gZGF0YVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuc2x1ZyBUaGUgcGFnZSdzIHNsdWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmxvY2FsZSBUaGUgY3VycmVudCBsb2NhbGUgc3BlY2lmaWVkIGluIHJvdXRlci5sb2NhbGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5wcmV2aWV3IHJvdXRlciBpc1ByZXZpZXcgdmFsdWVcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBhZ2VEYXRhKHsgc2x1ZywgbG9jYWxlLCBwcmV2aWV3IH0pIHtcbiAgLy8gRmluZCB0aGUgcGFnZXMgdGhhdCBtYXRjaCB0aGlzIHNsdWdcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxuICBjb25zdCBwYWdlc1JlcyA9IGF3YWl0IGZldGNoKGdxbEVuZHBvaW50LCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBgXG4gICAgICAgIGZyYWdtZW50IEZpbGVQYXJ0cyBvbiBVcGxvYWRGaWxlRW50aXR5UmVzcG9uc2Uge1xuICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcbiAgICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICAgIG1pbWVcbiAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIGZvcm1hdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnkgR2V0UGFnZXMoXG4gICAgICAgICAgJHNsdWc6IFN0cmluZyFcbiAgICAgICAgICAkcHVibGljYXRpb25TdGF0ZTogUHVibGljYXRpb25TdGF0ZSFcbiAgICAgICAgICAkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSFcbiAgICAgICAgKSB7ICAgICAgICBcbiAgICAgICAgICBwYWdlcyhcbiAgICAgICAgICAgIGZpbHRlcnM6IHsgc2x1ZzogeyBlcTogJHNsdWcgfSB9XG4gICAgICAgICAgICBwdWJsaWNhdGlvblN0YXRlOiAkcHVibGljYXRpb25TdGF0ZVxuICAgICAgICAgICAgbG9jYWxlOiAkbG9jYWxlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgbG9jYWxpemF0aW9ucyB7XG4gICAgICAgICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhIHtcbiAgICAgICAgICAgICAgICAgIG1ldGFUaXRsZVxuICAgICAgICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBzaGFyZUltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0d2l0dGVyQ2FyZFR5cGVcbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJVc2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50U2VjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zQm90dG9tQWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zSGVybyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZUNvbHVtbnNHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zRmVhdHVyZVJvd3NHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgbWVkaWEge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc1Rlc3RpbW9uaWFsc0dyb3VwIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgbGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYWJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbG9nb3Mge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZXN0aW1vbmlhbHMge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIGF1dGhvck5hbWVcbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zTGFyZ2VWaWRlbyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIHBvc3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNSaWNoVGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc1ByaWNpbmcge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBwbGFucyB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGlzUmVjb21tZW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICBwcmljZVBlcmlvZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNMZWFkRm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsUGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gICAgICBcbiAgICAgIGAsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgc2x1ZyxcbiAgICAgICAgcHVibGljYXRpb25TdGF0ZTogcHJldmlldyA/IFwiUFJFVklFV1wiIDogXCJMSVZFXCIsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pXG5cbiAgY29uc3QgcGFnZXNEYXRhID0gYXdhaXQgcGFnZXNSZXMuanNvbigpXG4gIC8vIE1ha2Ugc3VyZSB3ZSBmb3VuZCBzb21ldGhpbmcsIG90aGVyd2lzZSByZXR1cm4gbnVsbFxuICBpZiAocGFnZXNEYXRhLmRhdGE/LnBhZ2VzID09IG51bGwgfHwgcGFnZXNEYXRhLmRhdGEucGFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgaXRlbSBzaW5jZSB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgcmVzdWx0IHBlciBzbHVnXG4gIHJldHVybiBwYWdlc0RhdGEuZGF0YS5wYWdlcy5kYXRhWzBdXG59XG5cbi8vIEdldCBzaXRlIGRhdGEgZnJvbSBTdHJhcGkgKG1ldGFkYXRhLCBuYXZiYXIsIGZvb3Rlci4uLilcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHbG9iYWxEYXRhKGxvY2FsZSkge1xuICBjb25zdCBncWxFbmRwb2ludCA9IGdldFN0cmFwaVVSTChcIi9ncmFwaHFsXCIpXG4gIGNvbnN0IGdsb2JhbFJlcyA9IGF3YWl0IGZldGNoKGdxbEVuZHBvaW50LCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBgXG4gICAgICAgIGZyYWdtZW50IEZpbGVQYXJ0cyBvbiBVcGxvYWRGaWxlRW50aXR5UmVzcG9uc2Uge1xuICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICBhbHRlcm5hdGl2ZVRleHRcbiAgICAgICAgICAgICAgd2lkdGhcbiAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICAgIG1pbWVcbiAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgIGZvcm1hdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVlcnkgR2V0R2xvYmFsKCRsb2NhbGU6IEkxOE5Mb2NhbGVDb2RlISkge1xuICAgICAgICAgIGdsb2JhbChsb2NhbGU6ICRsb2NhbGUpIHtcbiAgICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgICBmYXZpY29uIHtcbiAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtZXRhZGF0YSB7XG4gICAgICAgICAgICAgICAgICBtZXRhVGl0bGVcbiAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgc2hhcmVJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckNhcmRUeXBlXG4gICAgICAgICAgICAgICAgICB0d2l0dGVyVXNlcm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWV0YVRpdGxlU3VmZml4XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQmFubmVyIHtcbiAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmF2YmFyIHtcbiAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGxpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgc21hbGxUZXh0XG4gICAgICAgICAgICAgICAgICBjb2x1bW5zIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgbGlua3Mge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGxvY2FsZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pXG5cbiAgY29uc3QgZ2xvYmFsID0gYXdhaXQgZ2xvYmFsUmVzLmpzb24oKVxuICByZXR1cm4gZ2xvYmFsLmRhdGEuZ2xvYmFsXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEodXJsKSB7XG4gIGlmICh1cmwgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGZ1bGwgVVJMIGlmIHRoZSBtZWRpYSBpcyBob3N0ZWQgb24gYW4gZXh0ZXJuYWwgcHJvdmlkZXJcbiAgaWYgKHVybC5zdGFydHNXaXRoKFwiaHR0cFwiKSB8fCB1cmwuc3RhcnRzV2l0aChcIi8vXCIpKSB7XG4gICAgcmV0dXJuIHVybFxuICB9XG5cbiAgLy8gT3RoZXJ3aXNlIHByZXBlbmQgdGhlIFVSTCBwYXRoIHdpdGggdGhlIFN0cmFwaSBVUkxcbiAgcmV0dXJuIGAke1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIHx8IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3XCJcbiAgfSR7dXJsfWBcbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZW9cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9