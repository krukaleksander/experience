import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './App.css';
import Buttons from './Buttons';
import Job from './Job';
const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [])


  if (loading) {
    return <section className="section loading">
      <h1>loading...</h1>
    </section>
  }
  console.log(jobs);
  return <section className="section">
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <Buttons jobs={jobs} value={value} setValue={setValue} />
      <Job jobs={jobs} value={value} />
    </div>
  </section>
}

export default App;
