import Hero from "@/components/sections/hero"
import TextAObrazek from "@/components/sections/text-a-obrazek"
import DarkovyPoukaz from "@/components/sections/darkovy-poukaz"
import Cenik from "@/components/sections/cenik"
import OteviraciDoba from "@/components/sections/oteviraci-doba"
import Kontakt from "@/components/sections/kontakt"
import LargeVideo from "@/components/sections/large-video"
import FeatureColumnsGroup from "@/components/sections/feature-columns-group"
import FeatureRowsGroup from "@/components/sections/feature-rows-group"
import BottomActions from "@/components/sections/bottom-actions"
import TestimonialsGroup from "@/components/sections/testimonials-group"
import RichText from "./sections/rich-text"
import Pricing from "./sections/pricing"
import LeadForm from "./sections/lead-form"

// Map Strapi sections to section components
const sectionComponents = {
  ComponentSectionsHero: Hero,
  ComponentSectionsTextAObrazek: TextAObrazek,
  ComponentSectionsDarkovyPoukaz: DarkovyPoukaz,
  ComponentSectionsCenik: Cenik,
  ComponentSectionsOteviraciDoba: OteviraciDoba,
  ComponentSectionsKontakt: Kontakt,
  ComponentSectionsLargeVideo: LargeVideo,
  ComponentSectionsFeatureColumnsGroup: FeatureColumnsGroup,
  ComponentSectionsFeatureRowsGroup: FeatureRowsGroup,
  ComponentSectionsBottomActions: BottomActions,
  ComponentSectionsTestimonialsGroup: TestimonialsGroup,
  ComponentSectionsRichText: RichText,
  ComponentSectionsPricing: Pricing,
  ComponentSectionsLeadForm: LeadForm,
}

// Display a section individually
const Section = ({ sectionData }) => {
  // Prepare the component
  const SectionComponent = sectionComponents[sectionData.__typename]

  if (!SectionComponent) {
    return null
  }

  // Display the section
  return <SectionComponent data={sectionData} />
}

// Display the list of sections
const Sections = ({ sections }) => {
  return (
    <div className="flex flex-col">
      {/* Show the actual sections */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          key={`${section.__typename}${section.id}`}
        />
      ))}
    </div>
  )
}

export default Sections
