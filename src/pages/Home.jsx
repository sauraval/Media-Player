import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/view'
import Category from '../Components/Category'

function Home() {
    const [uploadVideoResponse,setUploadVideoResponse] = useState({})
    const [dropResponse,setDropResponse] = useState({})
  return (
    <>
<div className="container mt-5 mb-5 d-flex justify-content-between">
    <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
    </div>
    <Link to={'/history'} style={{textDecoration:'none',color:'white',fontSize:'20px'}} >Watchhistory <i class="fa-solid fa-clock-rotate-left"></i></Link>
</div> 
<div className="container-fluid mt-5 mb-5 row w-100">
    <div className="all-videos col-lg-9">
        <h2>All Uploaded Videos</h2>
    <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
    </div>
    <div className="category col-lg-3">
        <Category dropResponse={dropResponse}/>
    </div>
</div>
</> 
 )
}

export default Home