import React from 'react';
import ReactPlayer from 'react-player/lazy';

const Card = (props) => (
  <div className="flex flex-col bg-gray-200 h-64 m-3 text-gray-700
rounded-lg shadow-lg pt-1 w-2/12"
  >
    {props.sample.cover && (
    <img
      className="h-48 w-52 rounded-lg "
      src={props.sample.cover}
      
      alt=""
    />
    )}
    {props.sample.webPreviewUrl && (
    <ReactPlayer
      width="100%"
      height="100%"
      url={props.sample.webPreviewUrl}
      
      controls
    />
    )}
    <div className="ml-2 mt-1">
      <div className="mb-2">
        {props.sample.name}
      </div>
      {props.sample.link && (
      <a
        className="font-size:50px text-dark-500 hover:text-blue-800 "
        
        href={props.sample.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Show the resource
      </a>
      )}
    </div>
  </div>
);

export default Card;
