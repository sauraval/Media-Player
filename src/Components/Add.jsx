import React,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { uploadNewVideoAPI } from '../services/allAPI';

function Add({setUploadVideoResponse}) {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);
  console.log(uploadVideo);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getYoutubeEmbedLink = (e)=>{
    const {value}= e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }

  }

  const handleUpload = async ()=>{
    const {id,caption,url,link} = uploadVideo
    if(!id || !caption || !url || !link){
      alert("Uploading form is incomplete. Please fill the form completely!!!")
    }else{
      // store uploadVideo in json server
     const result= await uploadNewVideoAPI(uploadVideo)
     console.log(result)
     if(result.status>=200 && result.status<300){
      // success
      handleClose()
      // result uploadVideo
      setUploadVideo({
        id:"",caption:"",url:"",link:""
      })
      // share result.data to view component
      setUploadVideoResponse(result.data)
     }else{
      alert(result.message)
     }
    }
  }
  return (
    <>
    <div className="d-flex align-items-center">
      <h2 style={{height:'70px'}}>Upload New Video</h2>
      <button  onClick={handleShow} className='btn fs-5'><i class="fa-solid fa-circle-plus"></i></button>
    </div>
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5>Please Fill The Details!!!</h5>
        <FloatingLabel
        controlId="floatingInput"
        label="upload video id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder=" upload video id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel className='mt-3 mb-3' controlId="floatingInputCaption" label="upload Video caption">
        <Form.Control type="text" placeholder="upload Video caption" onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel className='mt-3 mb-3' controlId="floatingInputImg" label=" upload video image url">
        <Form.Control type="text" placeholder=" upload video image url" onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel className='mt-3 mb-3' controlId="floatingInputLink" label="upload youtube link">
        <Form.Control type="text" placeholder=" upload youtube link" onChange={getYoutubeEmbedLink}  />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info' onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add