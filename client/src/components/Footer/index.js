import React from 'react';
import './style.css';

const Footer = () => {
    return (
      <div className="footer">
      <form action="https://github.com/reneehickman/clicky-game" id="github">
        <button type="submit" value="GitHub Repo" className="btn btn-secondary btn-sm"><i className="fa fa-code" aria-hidden="true"></i> Github Repo</button>
        </form>
      </div>
    ); 
  }

export default Footer;
