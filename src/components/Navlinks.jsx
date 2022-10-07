import React from "react";
import { Link } from "react-router-dom";
import './Navlinks.css'

const Navlinks = () => {
  return (
    <div className="links mt-7">
      <ul className="flex justify-around">
        <li className="mx-auto">
          <Link to="/posts" className='link'>Home </Link>
        </li>
        <li className="mx-auto">
          <Link to="/posts/category/programming" className='link'>Programming</Link>
        </li>
        <li className="mx-auto">
          <Link to="/posts/category/random-articles" className='link'> Random Articles</Link>
        </li>
        <li className="mx-auto">
          <Link to="" className='link'> About Me</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
