import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className="container-fluid home">
      <div className="row">
        <div className="col-lg-6 col-md-6  col-sm-12 col-12 leftside">
          <h1>Student Success</h1>
          <p>Build deeper connections with students </p>
          <button className="btn btn-primary">Learn More</button>
        </div>

        <div className="col-lg-6 col-md-6  col-sm-12 col-12">
          <img
            src="https://www.salesforce.org/wp-content/uploads/2023/06/EDU-Unified-Student-Record-Laptop-Hero.png?w=1600&h=0&crop=1"
            alt="studimg"
            height={600}
            width={600}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
