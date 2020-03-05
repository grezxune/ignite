import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import LogoImage from "./logoImage"
import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header
    style={{
      width: "100%",
      background: `#580D7D`,
      marginBottom: `1.45rem`,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `1.45rem 1.0875rem`,
        maxWidth: 960,
        flex: 1,
      }}
    >
      <div style={{ width: 100 }}>
        <Link to="/">
          <LogoImage />
        </Link>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
