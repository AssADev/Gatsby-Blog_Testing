import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Home = ({ data }) => {
    const image = getImage(data.file)

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
                <GatsbyImage image={image} alt="Home Bird" />
            </section>
        </Layout>
    )
}

export default Home

// Query :
export const data = graphql`
    query HomeBird {
        file(relativePath: { eq: "home-bird.png" }) {
            id
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
        }
    }
`
