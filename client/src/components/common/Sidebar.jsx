import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Sidebar = () => (
  <div className="side">
    <ul className="ml-5">
      <li className="mt-10">
        <Link className="home" to="/Dashboard">Home</Link>
      </li>
      {/* <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/frontend-resource">Frontend frameworks</Link>
      </li> */}
      <li className="mt-10" >
        <Link className="home" to="/backend-resource" >Articles</Link>
      </li>
      {/* <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/infrastructure-resource">Infrastructure</Link>
      </li>
      <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/frontend-video">Frontend frameworks (video tutorials)</Link>
      </li> */}
      <li className="mt-10">
        <Link className="home" to="/backend-video">Video Tutorials</Link>
      </li>
      {/* <li className="mt-10">
        <Link className="text-dark-500 hover:text-blue-600" to="/infrastructure-video">Infrastructure (video tutorials)</Link>
      </li> */}
    </ul>
  </div>
);

export default Sidebar;
