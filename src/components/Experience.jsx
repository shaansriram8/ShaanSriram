import React from "react";
import "./Experience.css";
import Bubble from "./Bubble";

function Experience() {
  return (
    <div className="experience-grid">
      <div className="company">
        Quorica Capital
        <p className="dates">September 2024 – Present</p>
      </div>
      <div className="role">
        <p className="role-title">Equity Research Analyst</p>
        <p className="description">
          Conduct comprehensive financial analysis and market research to assess
          the performance and potential of companies across various industries,
          providing strategic insights to support investment decisions. I also
          prepare detailed equity research reports and present findings to
          stakeholders, highlighting key trends, risks, and opportunities to
          enable data-driven decision-making.
        </p>
        <Bubble text="Equity Research" />
        <Bubble text="Fundamental Analysis" />
        <Bubble text="Risk Modeling" />
      </div>

      <div className="company">
        REI Systems
        <p className="dates">June 2024 – August 2024</p>
      </div>
      <div className="role">
        <p className="role-title">Software Engineer Intern</p>
        <p className="description">
          Developed an AI chatbot leveraging a RAG model with LangChain and
          Pinecone, achieving 98% accuracy in enhancing conversational
          intelligence and data retrieval. I also designed and implemented a
          dynamic ReactJS frontend, creating a highly responsive and intuitive
          user experience while integrating OAuth for robust security.
          Additionally, I built custom APIs using FastAPI to seamlessly connect
          the ReactJS frontend with a Python backend, ensuring efficient data
          flow and real-time processing.
        </p>
        <Bubble text="React" />
        <Bubble text="Python" />
        <Bubble text="LangChain" />
        <Bubble text="FastAPI" />
        <Bubble text="Tailwind CSS" />
      </div>

      <div className="company">
        Scope Consulting
        <p className="dates">January 2024 – Present</p>
      </div>
      <div className="role">
        <p className="role-title">Project Manager & Lead Developer</p>
        <p className="description">
          Developed a web scraper using Python and Selenium with custom FastAPI
          endpoints to aggregate housing data from Zillow. To display the
          aggregated data, I built a dynamic React.js application integrated
          with a Python-based backend. This complete solution significantly
          improved the client’s operational performance by streamlining data
          aggregation and visualization processes.
        </p>
        <Bubble text="Flask" />
        <Bubble text="Python" />
        <Bubble text="HTML" />
        <Bubble text="CSS" />
      </div>

      <div className="company">
        Electrical & Computer Engineering Student Society
        <p className="dates">January 2023 – September 2024</p>
      </div>
      <div className="role">
        <p className="role-title">Software Developer</p>
        <p className="description">
          Built the website for the premier Electrical and Computer Engineering
          student society at Purdue using Zope and Python. In addition to my
          technical contributions, I took on various executive responsibilities,
          including delegating projects and creating educational content to
          support the club’s initiatives as the Chair of Web Development. I also
          led web development training sessions for other members, teaching key
          concepts and techniques to help them enhance their technical skills.
        </p>
        <Bubble text="Python" />
        <Bubble text="Zope" />
        <Bubble text="Git" />
      </div>

      <div className="company" style={{ marginBottom: "200px" }}>
        Howmet Aerospace
        <p className="dates">August 2022 – December 2022</p>
      </div>
      <div className="role">
        <p className="role-title">Machine Learning Engineer</p>
        <p className="description">
          Developed and optimized machine learning regression and classification
          algorithms to identify anomalies in X-Ray images, significantly
          enhancing detection accuracy. Additionally, I implemented Sobel
          Filters and calculated image cropping parameters using advanced image
          processing techniques to further optimize anomaly detection in medical
          imaging.
        </p>
        <Bubble text="Python" />
        <Bubble text="PyTorch" />
        <Bubble text="Image Processing" />
        <Bubble text="Statistics" />
      </div>
    </div>
  );
}

export default Experience;
