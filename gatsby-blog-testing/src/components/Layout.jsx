import React from "react"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        <p>&copy; Copyright 2022 • AssADev</p>
      </footer>
    </div>
  )
}

export default Layout
