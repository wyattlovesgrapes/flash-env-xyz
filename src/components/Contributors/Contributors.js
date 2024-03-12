import React from 'react';
import { Link } from 'react-router-dom';

const Contributors = () => {
  return (
    <div>
      <h2>contributors</h2>
      <p>currently supported by <a href="https://github.com/wyattlovesgrapes" target="_blank" rel="noopener noreferrer">wyattlovesgrapes.</a></p>
      <p>you can find the <strong>flash_env</strong> module on <a href="https://github.com/wyattlovesgrapes/happy-little-helpers" target="_blank" rel="noopener noreferrer">github</a> as a part of the <strong>happy-little-helpers</strong> package.</p>
      <Link to="/">
        <button>phone home</button>
      </Link>

    </div>
  );
};

export default Contributors;
