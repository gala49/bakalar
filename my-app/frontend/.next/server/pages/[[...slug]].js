"use strict";
(() => {
var exports = {};
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 1336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(8354);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(3023);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "react-markdown"
const external_react_markdown_namespaceObject = require("react-markdown");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_namespaceObject);
;// CONCATENATED MODULE: ./utils/button.js
// Decide what the button will look like based on its type (primary or secondary)
// and on its background (light or dark).
function getButtonAppearance(type, background) {
  if (type === 'primary') {
    if (background === 'light') {
      // Dark primary button on a light background
      return 'dark';
    } // Fully white primary button on a dark background


    return 'white';
  }

  if (type === 'secondary') {
    if (background === 'light') {
      // Dark outline primary button on a light background
      return 'dark-outline';
    } // White outline primary button on a dark background


    return 'white-outline';
  } // Shouldn't happen, but default to dark button just in case


  return 'dark';
}
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./utils/types.js

const linkPropTypes = external_prop_types_default().shape({
  id: external_prop_types_default().oneOfType([(external_prop_types_default()).string, (external_prop_types_default()).number]).isRequired,
  url: (external_prop_types_default()).string.isRequired,
  text: (external_prop_types_default()).string.isRequired,
  newTab: (external_prop_types_default()).bool
});
const mediaPropTypes = external_prop_types_default().shape({
  data: external_prop_types_default().shape({
    id: external_prop_types_default().oneOfType([(external_prop_types_default()).string, (external_prop_types_default()).number]).isRequired,
    attributes: external_prop_types_default().shape({
      alternativeText: (external_prop_types_default()).string,
      mime: (external_prop_types_default()).string.isRequired,
      url: (external_prop_types_default()).string.isRequired
    })
  })
});
const buttonLinkPropTypes = external_prop_types_default().shape({
  theme: (external_prop_types_default()).string,
  text: (external_prop_types_default()).string.isRequired,
  newTab: (external_prop_types_default()).bool
});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/elements/custom-link.js




const CustomLink = ({
  link,
  children
}) => {
  const isInternalLink = link.url.startsWith("/"); // For internal links, use the Next.js Link component

  if (isInternalLink) {
    return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: link.url,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: children
      })
    });
  } // Plain <a> tags for external links


  if (link.newTab) {
    return /*#__PURE__*/jsx_runtime_.jsx("a", {
      href: link.url,
      target: "_blank",
      rel: "noopener noreferrer",
      children: children
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: link.url,
    target: "_self",
    children: children
  });
};

/* harmony default export */ const custom_link = (CustomLink);
;// CONCATENATED MODULE: ./components/elements/button-link.js





const ButtonContent = ({
  button,
  appearance,
  compact
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()( // Common classes
    "block w-full lg:w-auto text-center uppercase tracking-wide text-base md:text-sm border-2 rounded-md", // Full-size button
    {
      "px-8 py-4": compact === false
    }, // Compact button
    {
      "px-6 py-2": compact === true
    }, // Specific to when the button is fully dark
    {
      "primary-button": appearance === "dark"
    }, // Specific to when the button is dark outlines
    {
      "secondary-button": appearance === "dark-outline"
    }, // Specific to when the button is fully white
    {
      "secondary-button": appearance === "white"
    }, // Specific to when the button is white outlines
    {
      "text-white border-white": appearance === "white-outline"
    }),
    children: button.text
  });
};

const ButtonLink = ({
  button,
  appearance,
  compact = false
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
    link: button,
    children: /*#__PURE__*/jsx_runtime_.jsx(ButtonContent, {
      button: button,
      appearance: appearance,
      compact: compact
    })
  });
};

/* harmony default export */ const button_link = (ButtonLink);
// EXTERNAL MODULE: ./utils/media.js
var utils_media = __webpack_require__(1151);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/elements/image.js
const _excluded = ["media"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const NextImage = _ref => {
  let {
    media
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    url,
    alternativeText,
    width,
    height
  } = media.data.attributes;

  const loader = ({
    src,
    width
  }) => {
    return (0,utils_media/* getStrapiMedia */.$)(src);
  }; // The image has a fixed width and height


  if (props.width && props.height) {
    return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread({
      loader: loader,
      src: url,
      alt: alternativeText || ""
    }, props));
  } // The image is responsive


  return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
    loader: loader,
    layout: "responsive",
    width: "0",
    height: "0",
    objectFit: "contain",
    src: url,
    alt: alternativeText || ""
  });
};

next_image.default.propTypes = {
  media: mediaPropTypes,
  className: (external_prop_types_default()).string
};
/* harmony default export */ const elements_image = (NextImage);
;// CONCATENATED MODULE: ./components/sections/hero.js







const Hero = ({
  data
}) => {
  return (
    /*#__PURE__*/
    // <main className="container flex flex-col md:flex-row items-center justify-between py-12">
    //   {/* Left column for content */}
    //   <div className="flex-1 sm:pr-8">
    //     {/* Hero section label */}
    //     <p className="uppercase tracking-wide font-semibold">{data.label}</p>
    //     {/* Big title */}
    //     <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h1>
    //     {/* Description paragraph */}
    //     <p className="text-xl mb-6">{data.description}</p>
    //     {/* Buttons row */}
    //     <div className="flex flex-row flex-wrap gap-4">
    //       {data.buttons.map((button) => (
    //         <ButtonLink
    //           button={button}
    //           appearance={getButtonAppearance(button.type, "light")}
    //           key={button.id}
    //         />
    //       ))}
    //     </div>
    //     {/* Small rich text */}
    //     <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
    //       <Markdown>{data.smallTextWithLink}</Markdown>
    //     </div>
    //   </div>
    //   {/* Right column for the image */}
    //   <div className="flex-shrink-0 w-full md:w-6/12 mt-6 md:mt-0">
    //     <NextImage media={data.picture} />
    //   </div>
    // </main>
    jsx_runtime_.jsx("main", {
      className: "heroSection section-padding",
      id: data.viditelnostVMenu.idSekce,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container text-center text-white d-flex justify-content-center flex-column align-items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: data.nadpis
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "d-flex flex-row flex-wrap gap-4 justify-content-center mt-3",
          children: data.buttons.map(button => /*#__PURE__*/jsx_runtime_.jsx(button_link, {
            button: button,
            appearance: getButtonAppearance(button.type, "light")
          }, button.id))
        })]
      })
    })
  );
};

/* harmony default export */ const hero = (Hero);
;// CONCATENATED MODULE: ./components/sections/text-a-obrazek.js





const TextAObrazek = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: data.viditelnostVMenu.idSekce,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container section-padding text-image-section",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-center mb-5",
        children: data.nadpis
      }), data.boxes.map((box, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()( // Common classes
        "d-flex flex-col justify-start row px-3 px-md-5 pb-0 boxes-row", {
          "lg:flex-row": index % 2 === 0,
          "lg:flex-row-reverse": index % 2 === 1
        }),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-12 col-xl-6 box-color p-5",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: box.textovyObsah
            }
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-12 col-xl-6 max-h-full px-0",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full h-full",
            children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
              media: box.obrazek
            })
          })
        })]
      }, box.id))]
    })
  });
};

/* harmony default export */ const text_a_obrazek = (TextAObrazek);
;// CONCATENATED MODULE: ./components/elements/video.js




const Video = ({
  media,
  poster,
  className,
  controls = true,
  autoPlay = false
}) => {
  const fullVideoUrl = (0,utils_media/* getStrapiMedia */.$)(media.url);
  const fullPosterUrl = (0,utils_media/* getStrapiMedia */.$)(poster === null || poster === void 0 ? void 0 : poster.url);
  return /*#__PURE__*/jsx_runtime_.jsx("video", {
    className: className,
    poster: fullPosterUrl,
    controls: controls,
    autoPlay: autoPlay,
    children: /*#__PURE__*/jsx_runtime_.jsx("source", {
      src: fullVideoUrl,
      type: media.mime
    })
  });
};

/* harmony default export */ const video = (Video);
;// CONCATENATED MODULE: ./components/sections/darkovy-poukaz.js







const DarkovyPoukaz = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: data.viditelnostVMenu.idSekce,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container section-padding px-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-center mb-5",
        children: data.nadpis
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        dangerouslySetInnerHTML: {
          __html: data.text
        }
      })]
    })
  });
};

/* harmony default export */ const darkovy_poukaz = (DarkovyPoukaz);
;// CONCATENATED MODULE: ./components/elements/radek-tabulky.js




const RadekTabulky = ({
  sluzba,
  index
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
    className: external_classnames_default()({
      "background-almond": index % 2 === 1
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
      children: sluzba.sluzba
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: sluzba.cena
    })]
  }, sluzba.id);
};

/* harmony default export */ const radek_tabulky = (RadekTabulky);
;// CONCATENATED MODULE: ./components/elements/tabulka.js




const Tabulka = ({
  sloupec
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-12 col-lg-6 px-3",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/jsx_runtime_.jsx("tr", {
          colSpan: "2",
          children: /*#__PURE__*/jsx_runtime_.jsx("th", {
            colSpan: "2",
            children: sloupec.sloupecNadpis
          })
        }, sloupec.id)
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: sloupec.radekTabulky.map((radek, index) => /*#__PURE__*/jsx_runtime_.jsx(radek_tabulky, {
          index: index,
          sluzba: radek
        }, radek.id))
      })]
    })
  });
};

/* harmony default export */ const tabulka = (Tabulka);
;// CONCATENATED MODULE: ./components/sections/cenik.js





const Cenik = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    id: data.viditelnostVMenu.idSekce,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container section-padding px-5 section-cenik",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-center mb-5",
        children: data.nadpis
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: data.tabulka.map(dataSloupec => /*#__PURE__*/jsx_runtime_.jsx(tabulka, {
          sloupec: dataSloupec
        }, dataSloupec.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center mt-5",
        children: data.platnostOd
      })]
    })
  });
};

/* harmony default export */ const cenik = (Cenik);
;// CONCATENATED MODULE: ./components/sections/oteviraci-doba.js




const LargeVideo = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "section-doba d-flex flex-col justify-center container my-5",
    id: data.viditelnostVMenu.idSekce,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mx-md-4 section-padding",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-center mb-5",
        children: data.nadpis
      }), /*#__PURE__*/jsx_runtime_.jsx("table", {
        className: "mx-auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: data.oteviraciDobaTabulka.map(radek => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "den",
              children: radek.sluzba
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              className: "hodina",
              children: radek.cena
            })]
          }, radek.id))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center mt-5",
        children: data.upozorneni
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("mt-4 text-center", {
          "d-none": data.zobrazitDovolenou === false
        }),
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "mx-auto hr-text",
          "data-content": "Aktu\xE1ln\xED informace"
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: data.dovolenaText
        })]
      })]
    })
  });
};

/* harmony default export */ const oteviraci_doba = (LargeVideo);
;// CONCATENATED MODULE: ./components/sections/kontakt.js



const Kontakt = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "container section-padding px-5 section-kontakt",
    id: data.viditelnostVMenu.idSekce,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-center mb-5",
      children: data.nadpis
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-12 col-lg-6 text-left",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          dangerouslySetInnerHTML: {
            __html: data.kontakt
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-12 col-lg-6 mt-5 mt-lg-0 ",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mapouter",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "gmap_canvas",
            children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              width: "600",
              height: "350",
              id: "gmap_canvas",
              src: "https://maps.google.com/maps?q=Pedik%C3%BAra,%20manik%C3%BAra%20Hodon%C3%ADn&t=&z=13&ie=UTF8&iwloc=&output=embed"
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const kontakt = (Kontakt);
;// CONCATENATED MODULE: ./components/sections/large-video.js




const large_video_LargeVideo = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "container flex flex-col align-middle text-center pt-12 pb-16",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "title mb-6",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-lg mb-10",
      children: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full lg:w-9/12 mx-auto overflow-hidden shadow-2xl",
      children: /*#__PURE__*/jsx_runtime_.jsx(video, {
        media: data.video,
        poster: data.poster,
        className: "w-full max-h-full"
      })
    })]
  });
};

/* harmony default export */ const large_video = (large_video_LargeVideo);
;// CONCATENATED MODULE: ./components/sections/feature-columns-group.js




const FeatureColumnsGroup = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12",
    children: data.features.map(feature => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1 text-lg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-10 h-10",
        children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
          media: feature.icon
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-bold mt-4 mb-4",
        children: feature.title
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: feature.description
      })]
    }, feature.id))
  });
};

/* harmony default export */ const feature_columns_group = (FeatureColumnsGroup);
;// CONCATENATED MODULE: ./components/sections/feature-rows-group.js







const FeatureRowsGroup = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container gap-12 py-12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: data.feature
    }), data.features.map((feature, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()( // Common classes
      "flex flex-col justify-start row py-12", {
        "lg:flex-row": index % 2 === 0,
        "lg:flex-row-reverse": index % 2 === 1
      }),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-12 col-lg-6 text-lg",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "title",
          children: feature.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "my-6",
          children: feature.description
        }), /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
          link: feature.link,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-blue-600 with-arrow hover:underline",
            children: feature.link.text
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "col-12 col-lg-6 max-h-full",
        children: [feature.media.data.attributes.mime.startsWith("image") && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full h-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
            media: feature.media
          })
        }), feature.media.data.attributes.mime.startsWith("video") && /*#__PURE__*/jsx_runtime_.jsx(video, {
          media: feature.media,
          className: "w-full h-auto",
          autoPlay: true,
          controls: false
        })]
      })]
    }, feature.id))]
  });
};

/* harmony default export */ const feature_rows_group = (FeatureRowsGroup);
;// CONCATENATED MODULE: ./components/sections/bottom-actions.js





const BottomActions = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "bg-primary-800 py-20 text-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "title text-white mb-10",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container flex flex-row justify-center flex-wrap gap-4",
      children: data.buttons.map(button => /*#__PURE__*/jsx_runtime_.jsx(button_link, {
        button: button,
        appearance: getButtonAppearance(button.type, "dark")
      }, button.id))
    })]
  });
};

/* harmony default export */ const bottom_actions = (BottomActions);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/sections/testimonials-group.js







const TestimonialsGroup = ({
  data
}) => {
  // Only show one testimonial at a time
  const {
    0: selectedTestimonialIndex,
    1: setSelectedTestimonialIndex
  } = (0,external_react_.useState)(0);
  const selectedTestimonial = data.testimonials[selectedTestimonialIndex];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "text-center text-lg bg-gray-200 pt-12 pb-16",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "title mb-4",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-gray-700 mb-4",
      children: data.description
    }), /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
      link: data.link,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "with-arrow text-blue-700 hover:underline",
        children: data.link.text
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-5xl w-8/12 sm:w-8/12 bg-white shadow-md sm:shadow-xl mx-auto flex flex-col sm:flex-row mt-10 text-left",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full md:w-4/12 flex-shrink-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
          media: selectedTestimonial.picture
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-4 py-4 sm:px-12 sm:pt-12 sm:pb-4 flex flex-col justify-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(elements_image, {
            width: "120",
            height: "33",
            media: selectedTestimonial.logo
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "italic mb-6",
            children: ["\"", selectedTestimonial.text, "\""]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold text-base sm:text-sm",
            children: selectedTestimonial.authorName
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-base sm:text-sm",
            children: selectedTestimonial.authorTitle
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(custom_link, {
          link: {
            url: selectedTestimonial.link,
            text: "",
            newTab: false,
            id: 0
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "uppercase tracking-wide text-blue-700 hover:underline  with-arrow sm:self-end mt-6 sm:mt-0",
            children: "Read story"
          })
        })]
      })]
    }), data.testimonials.length > 1 && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-row gap-4 mt-10 justify-center",
      children: data.testimonials.map((testimonial, index) => /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => setSelectedTestimonialIndex(index),
        className: external_classnames_default()( // Common classes
        "rounded-full h-3 w-3", {
          "bg-gray-500": index !== selectedTestimonialIndex,
          "bg-primary-600": index === selectedTestimonialIndex
        })
      }, testimonial.id))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-row flex-wrap items-center gap-6 sm:gap-20 justify-center mt-10 px-6 sm:px-0 ",
      children: data.logos.map(logo => /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
        width: "120",
        height: "33",
        media: logo.logo
      }, logo.id))
    })]
  });
};

/* harmony default export */ const testimonials_group = (TestimonialsGroup);
;// CONCATENATED MODULE: ./components/sections/rich-text.js



const RichText = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "prose prose-lg container py-12",
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
      children: data.content
    })
  });
};

/* harmony default export */ const rich_text = (RichText);
;// CONCATENATED MODULE: external "react-icons/md"
const md_namespaceObject = require("react-icons/md");
;// CONCATENATED MODULE: ./components/sections/pricing.js





const Pricing = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container py-12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-4xl text-center",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col lg:flex-row gap-4 lg:justify-center mt-6",
      children: data.plans.map(plan => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()( // Common classes
        "rounded-md border-2 py-4 px-4 flex-1 md:w-lg", // Normal plan
        {
          "bg-gray-100 text-gray-900 border-gray-300": !plan.isRecommended
        }, // Recommended plan
        {
          "bg-primary-100 text-primary-900 border-primary-300": plan.isRecommended
        }),
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "text-2xl",
          children: plan.name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: external_classnames_default()("mt-4 text-lg", {
            "text-primary-700": plan.isRecommended,
            "text-gray-700": !plan.isRecommended
          }),
          children: plan.description
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-3xl mt-4",
          children: [plan.price === 0 ? "Free " : `$${plan.price} `, /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-base font-medium",
            children: plan.pricePeriod
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "mt-4 flex flex-col gap-3",
          children: plan.features.map(feature => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex flex-row justify-between items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: feature.name
            }), /*#__PURE__*/jsx_runtime_.jsx(md_namespaceObject.MdCheckBox, {
              className: "h-6 w-auto text-gray-900"
            })]
          }, feature.id))
        })]
      }, plan.id))
    })]
  });
};

/* harmony default export */ const pricing = (Pricing);
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
;// CONCATENATED MODULE: external "formik"
const external_formik_namespaceObject = require("formik");
;// CONCATENATED MODULE: ./components/elements/loader.js




const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    viewBox: "0 0 38 38",
    className: "animate-spin h-5 w-5 stroke-current text-black-600 mr-2",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        transform: "translate(1 1)",
        strokeWidth: "2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
          strokeOpacity: ".5",
          cx: "18",
          cy: "18",
          r: "18"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          d: "M36 18c0-9.94-8.06-18-18-18",
          children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 18 18",
            to: "360 18 18",
            dur: "1s",
            repeatCount: "indefinite"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const loader = (Loader);
;// CONCATENATED MODULE: ./components/elements/button.js






const Button = ({
  button,
  appearance,
  compact = false,
  handleClick,
  loading = false,
  type
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    link: button,
    onClick: handleClick,
    type: type,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()( // Common classes
      "flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md", // Full-size button
      {
        "px-8 py-4": compact === false
      }, // Compact button
      {
        "px-6 py-2": compact === true
      }, // Specific to when the button is fully dark
      {
        "bg-primary-600 text-white border-primary-600": appearance === "dark"
      }, // Specific to when the button is dark outlines
      {
        "text-primary-600 border-primary-600": appearance === "dark-outline"
      }, // Specific to when the button is fully white
      {
        "bg-white text-primary-600 border-white": appearance === "white"
      }, // Specific to when the button is white outlines
      {
        "text-white border-white": appearance === "white-outline"
      }),
      children: [loading && /*#__PURE__*/jsx_runtime_.jsx(loader, {}), button.text]
    })
  });
};

/* harmony default export */ const elements_button = (Button);
;// CONCATENATED MODULE: ./components/sections/lead-form.js








const LeadForm = ({
  data
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const LeadSchema = external_yup_namespaceObject.object().shape({
    email: external_yup_namespaceObject.string().email().required()
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-10 text-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-3xl mb-10 font-bold mb-2",
      children: data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col items-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_formik_namespaceObject.Formik, {
        initialValues: {
          email: ""
        },
        validationSchema: LeadSchema,
        onSubmit: async (values, {
          setSubmitting,
          setErrors
        }) => {
          setLoading(true);

          try {
            setErrors({
              api: null
            });
            await (0,api/* fetchAPI */.Io)("/lead-form-submissions", {}, {
              method: "POST",
              body: JSON.stringify({
                email: values.email,
                location: data.location
              })
            });
          } catch (err) {
            setErrors({
              api: err.message
            });
          }

          setLoading(false);
          setSubmitting(false);
        },
        children: ({
          errors,
          touched,
          isSubmitting
        }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_namespaceObject.Form, {
            className: "flex flex-col md:flex-row gap-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_formik_namespaceObject.Field, {
              className: "text-base focus:outline-none py-4 md:py-0 px-4 border-2 rounded-md",
              type: "email",
              name: "email",
              placeholder: data.emailPlaceholder
            }), /*#__PURE__*/jsx_runtime_.jsx(elements_button, {
              type: "submit",
              button: data.submitButton,
              disabled: isSubmitting,
              loading: loading
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-red-500 h-12 text-sm mt-1 ml-2 text-left",
            children: errors.email && touched.email && errors.email || errors.api
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const lead_form = (LeadForm);
;// CONCATENATED MODULE: ./components/sections.js














 // Map Strapi sections to section components



const sectionComponents = {
  ComponentSectionsHero: hero,
  ComponentSectionsTextAObrazek: text_a_obrazek,
  ComponentSectionsDarkovyPoukaz: darkovy_poukaz,
  ComponentSectionsCenik: cenik,
  ComponentSectionsOteviraciDoba: oteviraci_doba,
  ComponentSectionsKontakt: kontakt,
  ComponentSectionsLargeVideo: large_video,
  ComponentSectionsFeatureColumnsGroup: feature_columns_group,
  ComponentSectionsFeatureRowsGroup: feature_rows_group,
  ComponentSectionsBottomActions: bottom_actions,
  ComponentSectionsTestimonialsGroup: testimonials_group,
  ComponentSectionsRichText: rich_text,
  ComponentSectionsPricing: pricing,
  ComponentSectionsLeadForm: lead_form
}; // Display a section individually

const Section = ({
  sectionData
}) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__typename];

  if (!SectionComponent) {
    return null;
  } // Display the section


  return /*#__PURE__*/jsx_runtime_.jsx(SectionComponent, {
    data: sectionData
  });
};

const PreviewModeBanner = () => {
  const router = (0,router_.useRouter)();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(router.asPath)}`;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: ["Preview mode is on.", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "underline",
        href: `/api/exit-preview?redirect=${router.asPath}`,
        children: "Turn off"
      })]
    })
  });
}; // Display the list of sections


const Sections = ({
  sections,
  preview
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col",
    children: [preview && /*#__PURE__*/jsx_runtime_.jsx(PreviewModeBanner, {}), sections.map(section => /*#__PURE__*/jsx_runtime_.jsx(Section, {
      sectionData: section
    }, `${section.__typename}${section.id}`))]
  });
};

/* harmony default export */ const components_sections = (Sections);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
;// CONCATENATED MODULE: ./components/elements/seo.js
function seo_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function seo_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { seo_ownKeys(Object(source), true).forEach(function (key) { seo_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { seo_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function seo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  metadata
}) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.NextSeo, {
    title: metadata.metaTitle,
    description: metadata.metaDescription,
    openGraph: seo_objectSpread({
      // Title and description are mandatory
      title: metadata.metaTitle,
      description: metadata.metaDescription
    }, metadata.shareImage && {
      images: Object.values(metadata.shareImage.data.attributes.formats).map(image => {
        return {
          url: (0,utils_media/* getStrapiMedia */.$)(image.url),
          width: image.width,
          height: image.height
        };
      })
    }) // Only included Twitter data if we have it
    ,
    twitter: seo_objectSpread(seo_objectSpread({}, metadata.twitterCardType && {
      cardType: metadata.twitterCardType
    }), metadata.twitterUsername && {
      handle: metadata.twitterUsername
    })
  });
};

/* harmony default export */ const seo = (Seo);
;// CONCATENATED MODULE: ./utils/hooks.js
 // Got from https://usehooks.com/useLockBodyScroll/

function useLockBodyScroll() {
  (0,external_react_.useEffect)(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow; // Prevent scrolling on mount

    document.body.style.overflow = 'hidden'; // Re-enable scrolling when component unmounts

    return () => document.body.style.overflow = originalStyle;
  }, []); // Empty array ensures effect is only run on mount and unmount
}
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
;// CONCATENATED MODULE: ./components/elements/mobile-nav-menu.js







const MobileNavMenu = ({
  navbar,
  closeSelf,
  sections
}) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 pb-6 navigation__mobile",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container h-full flex flex-col justify-between",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row justify-between py-3 items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(elements_image, {
          width: "112",
          height: "30",
          media: navbar.logo
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: closeSelf,
          className: "py-1 px-1",
          children: /*#__PURE__*/jsx_runtime_.jsx(md_namespaceObject.MdClose, {
            className: "h-8 w-auto"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex flex-col justify-end w-9/12 mx-auto",
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "flex flex-col list-none gap-6 items-baseline text-xl mb-10",
          children: sections.map((section, index) => section.viditelnostVMenu.zobrazeni ? /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: `#${section.viditelnostVMenu.idSekce}`,
              rel: "noopener noreferrer",
              onClick: closeSelf,
              children: section.nadpis
            })
          }, index) : null)
        })
      })]
    })
  });
};

/* harmony default export */ const mobile_nav_menu = (MobileNavMenu);
;// CONCATENATED MODULE: ./components/elements/navbar.js










const Navbar = ({
  navbar,
  sections
}) => {
  const {
    0: mobileMenuIsShown,
    1: setMobileMenuIsShown
  } = (0,external_react_.useState)(false);
  const {
    0: stickyClass,
    1: setStickyClass
  } = (0,external_react_.useState)("relative");
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass("fixed") : setStickyClass("relative");
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("nav", {
      id: "nav",
      className: `border-gray-200 border-b-2 py-3 md:py-2 navigation ${stickyClass}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container flex lg:block flex-row justify-content-between",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-row justify-content-between items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex items-center",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "h-8 w-32",
                children: /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
                  width: "112",
                  height: "30",
                  media: navbar.logo
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex items-center",
            children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
              className: "hidden list-none lg:flex flex-row gap-4 py-2 mb-0",
              children: sections.map((section, index) => section.viditelnostVMenu.zobrazeni ? /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: `#${section.viditelnostVMenu.idSekce}`,
                  rel: "noopener noreferrer",
                  children: section.nadpis
                })
              }, index) : null)
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex",
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => setMobileMenuIsShown(true),
            className: "p-1 block lg:hidden",
            children: /*#__PURE__*/jsx_runtime_.jsx(md_namespaceObject.MdMenu, {
              className: "h-8 w-auto"
            })
          })
        })]
      })
    }), mobileMenuIsShown && /*#__PURE__*/jsx_runtime_.jsx(mobile_nav_menu, {
      navbar: navbar,
      closeSelf: () => setMobileMenuIsShown(false),
      sections: sections
    })]
  });
};

/* harmony default export */ const elements_navbar = (Navbar);
;// CONCATENATED MODULE: ./components/elements/footer.js






const Footer = ({
  footer,
  sections
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container flex flex-col md:flex-row md:justify-between py-5 items-center md:items-start",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row md:text-left",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-2 py-md-0",
          children: footer.logo && /*#__PURE__*/jsx_runtime_.jsx(elements_image, {
            width: "120",
            height: "33",
            media: footer.logo
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col px-5 py-2 py-md-0",
          children: sections.map((section, index) => section.viditelnostVMenu.zobrazeni ? /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: `#${section.viditelnostVMenu.idSekce}`,
            rel: "noopener noreferrer",
            children: section.nadpis
          }, index) : null)
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: "flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end md:text-right py-3 pb-0",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          dangerouslySetInnerHTML: {
            __html: footer.patickaInformace
          }
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-sm py-6 text-center col-12 copyright",
      children: footer.copyright
    })]
  });
};

/* harmony default export */ const elements_footer = (Footer);
;// CONCATENATED MODULE: ./components/layout.js






const Layout = ({
  children,
  global,
  sections
}) => {
  const {
    navbar,
    footer
  } = global.attributes;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col justify-between min-h-screen",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex-1",
      children: [/*#__PURE__*/jsx_runtime_.jsx(elements_navbar, {
        navbar: navbar,
        sections: sections
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: children
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(elements_footer, {
      footer: footer,
      sections: sections
    })]
  });
};

/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./utils/localize.js
function localize_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function localize_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { localize_ownKeys(Object(source), true).forEach(function (key) { localize_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { localize_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function localize_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function getLocalizedPage(targetLocale, pageContext) {
  const localization = pageContext.localizations.data.find(localization => localization.attributes.locale === targetLocale);
  const localePage = await fetchAPI(`/pages/${localization.id}`);
  return localePage;
}
function localizePath(page) {
  const {
    locale,
    defaultLocale,
    slug
  } = page;

  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `/${slug}`;
  } // The slug should have a localePrefix


  return `/${locale}/${slug}`;
}
function getLocalizedPaths(page) {
  const paths = page.locales.map(locale => {
    return {
      locale: locale,
      href: localizePath(localize_objectSpread(localize_objectSpread({}, page), {}, {
        locale
      }))
    };
  });
  return paths;
}
;// CONCATENATED MODULE: ./pages/[[...slug]].js
function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes




const DynamicPage = ({
  sections,
  preview,
  global,
  pageContext
}) => {
  var _metadata$shareImage;

  const router = (0,router_.useRouter)();
  const metadata = global.attributes.metadata; // Check if the required data was provided

  if (!router.isFallback && !(sections !== null && sections !== void 0 && sections.length)) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  } // Loading screen (only possible in preview mode)


  if (router.isFallback) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: "Loading..."
    });
  } // Merge default site SEO settings with page specific SEO settings


  if (((_metadata$shareImage = metadata.shareImage) === null || _metadata$shareImage === void 0 ? void 0 : _metadata$shareImage.data) == null) {
    delete metadata.shareImage;
  }

  const metadataWithDefaults = _slug_objectSpread({}, global.attributes.metadata);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout, {
    global: global,
    pageContext: pageContext,
    sections: sections,
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo, {
      metadata: metadataWithDefaults
    }), /*#__PURE__*/jsx_runtime_.jsx(components_sections, {
      sections: sections,
      preview: preview
    })]
  });
};

async function getStaticPaths(context) {
  // Get all pages from Strapi
  const pages = await context.locales.reduce(async (currentPagesPromise, locale) => {
    const currentPages = await currentPagesPromise;
    const localePages = await (0,api/* fetchAPI */.Io)("/pages", {
      locale,
      fields: ["slug", "locale"]
    });
    return [...currentPages, ...localePages.data];
  }, Promise.resolve([]));
  const paths = pages.map(page => {
    const {
      slug,
      locale
    } = page.attributes; // Decompose the slug that was saved in Strapi

    const slugArray = !slug ? false : slug.split("/");
    return {
      params: {
        slug: slugArray
      },
      // Specify the locale to render
      locale
    };
  });
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps(context) {
  const {
    params,
    locale,
    locales,
    defaultLocale,
    preview = null
  } = context;
  const globalLocale = await (0,api/* getGlobalData */.rC)(locale); // Fetch pages. Include drafts if preview mode is on

  const pageData = await (0,api/* getPageData */.um)({
    slug: (!params.slug ? [""] : params.slug).join("/"),
    locale,
    preview
  });

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return {
      props: {}
    };
  } // We have the required page data, pass it to the page component


  const {
    contentSections,
    localizations,
    slug
  } = pageData.attributes;
  const pageContext = {
    locale,
    locales,
    defaultLocale,
    slug,
    localizations
  };
  const localizedPaths = getLocalizedPaths(pageContext);
  return {
    props: {
      preview,
      sections: contentSections,
      global: globalLocale.data,
      pageContext: _slug_objectSpread(_slug_objectSpread({}, pageContext), {}, {
        localizedPaths
      })
    }
  };
}
/* harmony default export */ const _slug_ = (DynamicPage);

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

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 654:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [61,23], () => (__webpack_exec__(1336)));
module.exports = __webpack_exports__;

})();