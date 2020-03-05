import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Committees" />
    <p>
      Ignite is based upon three committees that coordinate events in our
      community. These consist of
    </p>
    <ul>
      <li>
        <Link to="/careerCommittee">Career</Link>
        <p>
          Focuses on professional development and networking. Past events
          they've coordinated include speed networking, Bite with Ignite (lunch
          and presentation from leaders in the community) and an etiquette
          dinner.
        </p>
      </li>
      <li>
        <Link to="/communityCommittee">Community</Link>
        <p>
          Focuses on philanthropic efforts and volunteering. Past events they've
          coordinated include painting for Empty Bowls and highway cleanup.
        </p>
      </li>
      <li>
        <Link to="/connectCommittee">Connect</Link>
        <p>
          Focuses on social events. Past events they've coordinated includes
          Backstage Passes (an inside look at local businesses and
          organizations) and our annual holiday and anniversary parties!
        </p>
      </li>
    </ul>
    <p>It just so happens that we like the letter "C"</p>
  </Layout>
)

export default SecondPage
