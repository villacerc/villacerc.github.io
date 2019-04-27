import React from "react"
import classNames from "classnames"

import Lightbox from "../components/lightbox"

import styles from "./projects.module.scss"

class Projects extends React.Component {
  state = {
    openLb: false,
  }
  render() {
    return (
      <section className="section" id="services">
        <div className="section-heading">
          <h3 className="title is-2">PORTFOLIO</h3>
          <h4 className="subtitle is-5">See my latest works</h4>
        </div>
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {new Array(4).fill().map((e, i) => {
              return (
                <div
                  key={i}
                  onClick={() => this.setState({ openLb: true })}
                  className="column is-12-mobile is-three-quarters-mobile is-half-tablet is-one-quarter-desktop"
                >
                  <figure className={classNames(styles.photo, "image is-5by4")}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="https://placekitten.com/g/600/480"
                    />
                    <figcaption className={styles.hoverContent}>
                      <h1 className="title is-5">Roomia</h1>
                      <p>React, Ruby On Rails, AWS</p>
                    </figcaption>
                  </figure>
                </div>
              )
            })}
          </div>
        </div>
        {this.state.openLb && (
          <Lightbox close={() => this.setState({ openLb: false })} />
        )}
      </section>
    )
  }
}

export default Projects
