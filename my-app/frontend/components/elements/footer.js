import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"

const Footer = ({ footer, sections }) => {
  return (
    <footer>
      <div className="container flex flex-col md:flex-row md:justify-between py-5 items-center md:items-start">
        <div className="flex flex-col md:flex-row md:text-left">
          <div className="py-2 py-md-0">
            {footer.logo && (
              <NextImage width="120" height="33" media={footer.logo} />
            )}
          </div>
          <div className="flex flex-col px-5 py-2 py-md-0">
            {
              sections.map((section, index) => (        
                section.viditelnostVMenu.zobrazeni ? (         
                    <a key={index} href={`#${section.viditelnostVMenu.idSekce}`} rel="noopener noreferrer">
                      {section.nadpis}
                    </a>
                ) : null
              ))  
            }
          </div>
        </div>
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end md:text-right py-3 pb-0">
          <div dangerouslySetInnerHTML={{ __html: footer.patickaInformace }}></div>
        </nav>
      </div>
      <div className="text-sm py-6 text-center col-12 copyright">
        {footer.copyright}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    patickaInformace: PropTypes.string,
    copyright: PropTypes.string,
  }),
}

export default Footer
