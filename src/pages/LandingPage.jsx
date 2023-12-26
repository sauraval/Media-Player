import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="container">
      <div className="row align-item-center m-5">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App. will allow you to add and remove their uploaded videos, also helps to arrange them in defferent categories by providing drag and drop functionalities</p>
                <Link to={'/home'} className='btn btn-info mt-5 fw-bolber'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid' src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </div>
      </div>
      <div className="features">
        <h3 className='text-center'>Features</h3> 
        <div className="cards mt-5 d-flex justify-content-between">
         {/* card 1 */}
         <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant='top' src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Manage Videos</Card.Title>
        <Card.Text>
          User can upload, view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
     {/* card 2 */}
     <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant='top' src="https://media1.tenor.com/m/1I_jiI9wXHUAAAAC/music-visualizer.gif" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          User can categorize the videos accoring to their preference using drag and drop features.
        </Card.Text>
      </Card.Body>
    </Card>
     {/* card 3 */}
     <Card style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant='top' src="https://media1.tenor.com/images/952a531e7265d50e5017248fe08dd6f1/tenor.gif?itemid=8183673" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          User are able to see the history of watched videos.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="row mt-5 border rounded align-items-center p-5">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat unde dignissimos nostrum ! anima delenti maxime</p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat unde dignissimos nostrum ! anima delenti maxime</p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Watch History</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat unde dignissimos nostrum ! anima delenti maxime</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
          <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage