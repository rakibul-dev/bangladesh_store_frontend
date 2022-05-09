import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" row footer-container my-auto  ">

      <div style={{ marginTop: 100 }} className="col-md-4 marginTop ">
        <h1>Bangladesh Store</h1>
        <div className="  w-75 mx-auto  text-start">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            laboriosam nobis facilis id placeat, voluptas dicta aperiam
            accusamus veniam quod, labore, nisi illum doloribus dolor atque
            incidunt reiciendis quam fugiat.
          </p>
        </div>
      </div>
      <div style={{ marginTop: 100 }} className="col-md-4  marginTop ">
        <h5>Our Service</h5>
        <div className="text-start mx-auto  w-25 ">
          <h6>Tons</h6>
          <h6>Hallmarks</h6>
          <h6>Gold Check</h6>
          <h6>Iteam Exchange</h6>
        </div>
      </div>
      <div style={{ marginTop: 100 }} className="col-md-4   marginTop">
        <h5>Contact Us</h5>

        <div className="text-start mx-auto  w-25 ">
          <h6>
            {" "}
            <svg
              style={{ width: 15, height: 15 }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>{" "}
            &nbsp; Narshindi
          </h6>
          <h6>
            <svg
              style={{ width: 15, height: 15 }}
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            &nbsp;01715872015
          </h6>
          <h6>
            <svg
              style={{ width: 15, height: 15 }}
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            &nbsp; www.bangladeshstorensd.com
          </h6>
          <a href="https://web.facebook.com/msbangladeshstore/" target="blank">
            {" "}
            <i
              style={{ color: " black" }}
              className="fa-brands fa-facebook"
            ></i>
          </a>
          &nbsp;
          <a href="https://web.facebook.com/msbangladeshstore/" target="blank">
            {" "}
            <i
              style={{ color: " black" }}
              className="fab fa-twitter-square"
            ></i>
          </a>
          &nbsp;&nbsp;
          <a href="https://web.facebook.com/msbangladeshstore/" target="blank">
            {" "}
            <i style={{ color: " black" }} className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
