import React from 'react'

const Home = () => {
  return (
    <div style={{background:'black'}}>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div className="text-center">
          <h1
            className=" text-white display-3 fw-bold mb-4" 
          >
            Welcome to{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(45deg, #ffd700, #ff8c00)",
                   textShadow: "0 0 8px rgba(231, 168, 33, 0.8)",
                color: "transparent",
                WebkitBackgroundClip: "text",
                
              }}
            >
              HCL Food Court
            </span>
          </h1>
          <h4
            className="lead mb-3"  
            style={{ fontWeight: "400",color:"#eaeded " }}
          >
            "Explore the most tasty food for u "
          </h4>
          
         
          
        </div>
      </div>
    </div>
  )
}

export default Home
