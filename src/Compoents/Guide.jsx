import React from 'react'
import './Guide.css'

function Guide() {
  return (
    <div className="container-fluid guide">
      <div className="row">
        <div className="col-lg-6 col-md-6  col-sm-12 col-12">
          <h1>The Nonprofit Marketing Guide</h1>
          <p>
            Learn about why marking essential for nonprofits and how buid an
            effective, scalable, nonprofit marketing strategy{' '}
          </p>
          <button className="btn btn-primary">Read Guideline</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 ">
          <img
            src="https://www.salesforce.org/wp-content/uploads/2022/05/nonprofit-marketing-guide-hero-1600x1200-1.png?w=1600&h=0&crop=1"
            alt="guide img"
            height={400}
            width={700}
          />
        </div>
      </div>
      <div className="row guide_left">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12 ">
          <img
            src="https://www.salesforce.org/wp-content/uploads/2022/05/nonprofit-marketing-guide-media-text-block-1-1200x900-1.png?w=1200&h=900&crop=1"
            alt="guideimg2"
            height={400}
            width={500}
          />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <h3>
            Marketing for nonprofits is a way for nonprofits to identify
            potential supporters, make sure they know about all the great work a
            nonprofit is doing, and give them opportunities to be involved.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Guide
