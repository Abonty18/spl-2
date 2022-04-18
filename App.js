import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <React.Fragment>
      <div className='body'>
      <h1 className='text-center text-danger text-capitalize my-5'>Hobbyists</h1>
      <div className="container">
  <div className="row">
    <div className="col-sm"><div class="card">
  <img src="https://image.shutterstock.com/image-illustration/articles-complex-like-puzzle-pictured-260nw-1666818295.jpg" class="card-img-top" alt="..." height="250px"/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Articles</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPx9lnPkuIF5UiXTEDFTAiPWVDxgeTOXrLS5w_THHswFZf5SG7RST5_oalMQwTsvsXzg&usqp=CAU" class="card-img-top" alt="..." height="250px"/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Resources</a>
  </div>
</div></div>
    <div className="col-sm"> <div class="card">
  <img src="https://media.istockphoto.com/photos/blog-and-information-website-concept-workplace-background-with-text-picture-id1130150680?k=20&m=1130150680&s=612x612&w=0&h=xS0ephM0yuIC3ploNT4CbbOoZmZ8fxQNJlrB4yPJC9k=" class="card-img-top" alt="..." height="250px"/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Quiz</a>
  </div>
</div></div>
    <div className="col-sm"> <div class="card">
  <img src="https://blog.hubspot.com/hubfs/google-quiz.jpg" class="card-img-top" alt="..." height="250px"/>
  <div class="card-body">
    <a href="#" class="btn btn-primary">Blog</a>
  </div>
</div></div>
  </div>
</div>
</div>
    </React.Fragment>
  );
}

export default App;
