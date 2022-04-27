"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(8354);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(3023);
// EXTERNAL MODULE: ./utils/media.js
var media = __webpack_require__(1151);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  }

  const {
    metadata,
    favicon
  } = global.attributes;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: (0,media/* getStrapiMedia */.$)(favicon.data.attributes.url)
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: true
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&family=Courgette&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
      title: "Page",
      description: metadata.metaDescription,
      openGraph: {
        images: Object.values(metadata.shareImage.data.attributes.formats).map(image => {
          return {
            url: (0,media/* getStrapiMedia */.$)(image.url),
            width: image.width,
            height: image.height
          };
        })
      },
      twitter: {
        cardType: metadata.twitterCardType,
        handle: metadata.twitterUsername
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async appContext => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await app.default.getInitialProps(appContext);
  const globalLocale = await (0,api/* getGlobalData */.rC)(appContext.router.locale);
  const globalRes = await (0,api/* fetchAPI */.Io)("/global", {
    attributes: {
      favicon: "*",
      metadata: "*",
      navbar: "*",
      footer: "*"
    }
  });
  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global: globalLocale
    }
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 1151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ getStrapiMedia)
/* harmony export */ });
function getStrapiMedia(url) {
  if (url == null) {
    return null;
  } // Return the full URL if the media is hosted on an external provider


  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  } // Otherwise prepend the URL path with the Strapi URL


  return `${"https://flexi-pedikura.herokuapp.com" || 0}${url}`;
}

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 8354:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6850:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [544,23], () => (__webpack_exec__(9267)));
module.exports = __webpack_exports__;

})();