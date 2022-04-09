import PropTypes from "prop-types"
import { MdClose, MdChevronRight } from "react-icons/md"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import { useLockBodyScroll } from "utils/hooks"
import NextImage from "./image"

const MobileNavMenu = ({ navbar, closeSelf, sections }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <div className="w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-10 pb-6 navigation__mobile">
      <div className="container h-full flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-row justify-between py-3 items-center">
          {/* Company logo */}
          <NextImage width="112" height="30" media={navbar.logo} />
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <MdClose className="h-8 w-auto" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col justify-end w-9/12 mx-auto">
          <ul className="flex flex-col list-none gap-6 items-baseline text-xl mb-10">
            {sections.map((section, index) =>
              section.viditelnostVMenu.zobrazeni ? (
                <li key={index}>
                  <a
                    href={`#${section.viditelnostVMenu.idSekce}`}
                    rel="noopener noreferrer"
                    onClick={closeSelf}
                  >
                    {section.nadpis}
                  </a>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
  }),
  closeSelf: PropTypes.func,
}

export default MobileNavMenu
