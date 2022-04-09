import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Link from "next/link"

import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import { MdMenu } from "react-icons/md"
import MobileNavMenu from "./mobile-nav-menu"
import NextImage from "./image"

const Navbar = ({ navbar, sections }) => {
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)
  const [stickyClass, setStickyClass] = useState("relative")

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar)

    return () => {
      window.removeEventListener("scroll", stickNavbar)
    }
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 100 ? setStickyClass("fixed") : setStickyClass("relative")
    }
  }

  return (
    <>
      {/* The actual navbar */}
      <nav
        id="nav"
        className={`border-gray-200 border-b-2 py-3 md:py-2 navigation ${stickyClass}`}
      >
        <div className="container flex lg:block flex-row justify-content-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row justify-content-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <a className="h-8 w-32">
                  <NextImage width="112" height="30" media={navbar.logo} />
                </a>
              </Link>
            </div>
            {/* List of links on desktop */}
            <div className="flex items-center">
              <ul className="hidden list-none lg:flex flex-row gap-4 py-2 mb-0">
                {sections.map((section, index) =>
                  section.viditelnostVMenu.zobrazeni ? (
                    <li key={index}>
                      <a
                        href={`#${section.viditelnostVMenu.idSekce}`}
                        rel="noopener noreferrer"
                      >
                        {section.nadpis}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
          <div className="flex">
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="p-1 block lg:hidden"
            >
              <MdMenu className="h-8 w-auto" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
          sections={sections}
        />
      )}
    </>
  )
}

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
}

export default Navbar
