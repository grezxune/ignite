import React from "react"
import { Button } from "@material-ui/core"

export default () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Button href="/" color="secondary" style={{ textTransform: "none" }}>
        Home
      </Button>
      <Button
        href="/committees/"
        color="secondary"
        style={{ textTransform: "none" }}
      >
        Committees
      </Button>
      <Button
        href="/events/"
        color="secondary"
        style={{ textTransform: "none" }}
      >
        Events
      </Button>
    </div>
  )
}
