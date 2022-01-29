import React from 'react';
import Sidebar from '../common/Sidebar';
import Card from '../common/Card';
import samples from './samples'
import '../../tail.css';

const BackendResource = () => (
<div className="flex flex-grow 1">
<Sidebar/>
<div className="bg-white-400 w-4/5">
  <div className="w-full flex flex-wrap">
{samples.map((sample) => (<Card sample={sample} />))}
  </div>
</div>
</div>
);

export default BackendResource;