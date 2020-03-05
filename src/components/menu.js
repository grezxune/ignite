import React from "react"
import { Link } from "gatsby"

const IgniteLink = ({ to, title }) => (
  <Link style={{ color: "white", textDecoration: "none" }} to={to}>
    {title}
  </Link>
)

const MenuItem = ({ children }) => (
  <li style={{ margin: "0px 12px 0px 12px" }}>{children}</li>
)

export default () => {
  return (
    <div style={{ color: "white" }}>
      <ul style={{ listStyle: "none", display: "flex", margin: 0 }}>
        <MenuItem>
          <IgniteLink title="Home" to="/" />
        </MenuItem>
        <MenuItem>
          <IgniteLink title="Committees" to="/committees/" />
        </MenuItem>
        <MenuItem>
          <IgniteLink title="Events" to="/events/" />
        </MenuItem>
      </ul>
    </div>
  )
}
