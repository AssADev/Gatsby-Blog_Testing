import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

const ProjectDetails = () => {
    return (
        <Layout>
            <div className={styles.details}>
                <h2>title</h2>
                <h3>Stack</h3>
                <div className={styles.featured}>
                    <GatsbyImage />
                </div>
                <div
                    className={styles.html}
                    dangerouslySetInnerHTML={{ __html: "description" }}
                />
            </div>
        </Layout>
    )
}

export default ProjectDetails
