import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setloading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value]; //value is initally zero as jobs is array it will give us 1st item
  return (
    <section className="section">
      <div className="title">
        <h2>expreince</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn-container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            //seting up value's value to change it dynamically
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
                key={item.id}
              >
                {item.company}
              </button>
            );
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
