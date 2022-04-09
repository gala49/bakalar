import Navbar from "./elements/navbar"
import Footer from "./elements/footer"
import React, { useEffect, useState } from "react"

const Layout = ({ children, global, sections }) => {
  const { navbar, footer } = global.attributes

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-1">
        <Navbar navbar={navbar} sections={sections} />
        <div>{children}</div>
      </div>

      <Footer footer={footer} sections={sections} />
    </div>
  )
}

export default Layout
