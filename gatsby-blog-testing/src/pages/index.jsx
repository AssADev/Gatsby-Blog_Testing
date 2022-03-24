import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

const Home = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web developer.</p>
          <Link className={styles.btn} to="/projects">
            My Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Home
