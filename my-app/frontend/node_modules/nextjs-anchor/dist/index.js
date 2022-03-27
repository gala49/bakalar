function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Link = _interopDefault(require('next/link'));
var React = _interopDefault(require('react'));

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

exports.Anchor = Anchor;
//# sourceMappingURL=index.js.map
