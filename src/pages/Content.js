import React,{useState} from 'react';
import data from '../static/data';

export default function Content(){
  const [search, setSearch]= useState("");
  return(
    <>
    <div className="header">
      {/* <header className="App-header"> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <h2>Course Catalog</h2>
        <ul>            </ul>
        <form class="form-inline float-right my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search"
            onChange={(e) =>{
              setSearch(e.target.value);
            }} aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
    <div className="container">
      {data.filter(val=>{
        if (search===""){
          return val
        } else if (val.productName.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      }).map(post => {
        return(
          <div className="card">
            <div className="card-img">
            <img src={post.pic} alt="image invalid"/>
            </div>
            <div className="card-body">
              <h5>{ post.Rating }</h5>
              <h5>{ post.Price }</h5>
              <h5>{ post.productName}</h5>
              <h5>{ post.Tag }</h5>
            </div>        
          </div>
        )
      })}
     
    </div>
    </>
  )
}

// class Content extends Component{
//     render(){
//         return(
    
//         )
//     }
// }

// export default Content;