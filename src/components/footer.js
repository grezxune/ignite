import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { IconButton } from "@material-ui/core"

export default () => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        background: `#580D7D`,
        color: "white",
        padding: 12,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>
        © {new Date().getFullYear()}, Stevens Point Ignite Young Professionals
      </span>
      <div>
        <IconButton
          href={"https://www.facebook.com/IgnitePortageCountyWI/"}
          color="secondary"
        >
          <FaFacebookF />
        </IconButton>
        <IconButton
          href={
            "https://www.instagram.com/explore/locations/315407191810577/ignite-young-professionals/"
          }
          color="secondary"
        >
          <FaInstagram />
        </IconButton>
      </div>
    </footer>
  )
}
