import Link from 'next/link';
import React from 'react';

var Anchor = function Anchor(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      href = _ref.href,
      as = _ref.as,
      locale = _ref.locale,
      passHref = _ref.passHref,
      prefetch = _ref.prefetch,
      replace = _ref.replace,
      scroll = _ref.scroll,
      shallow = _ref.shallow;
  return React.createElement(Link, {
    href: href,
    as: as,
    locale: locale,
    passHref: passHref,
    prefetch: prefetch,
    replace: replace,
    scroll: scroll,
    shallow: shallow
  }, React.createElement("a", {
    className: className,
    style: style
  }, children));
};

export { Anchor };
//# sourceMappingURL=index.modern.js.map
