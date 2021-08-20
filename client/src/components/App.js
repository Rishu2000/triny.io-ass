import React, {useState} from 'react'
import "../styles/App.css"
import axios from 'axios'

const App = () => {

const [queryText, setQueryText] = useState(null);
const [sessionId, setSessionId] = useState(null);
const [dialogRes, setDialogRes] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:4002/dialogflow',{queryText,sessionId})
  .then((res) => {
    setDialogRes(res.data);
  })
}

  return (
    <div style={{textAlign: 'center', paddingTop:80}}>
      Please enter <strong style={{fontSize:25}}>Start</strong> as queryText
      <form onSubmit={handleSubmit} style={{paddingTop:20}}>
        <div>
          <input type="text" style={{margin:"0 10px", padding:"0 10px"}} 
            placeholder="queryText" onChange={(e) => setQueryText(e.target.value)}/>
          <input type="text" style={{margin:"0 10px", padding:"0 10px"}} 
            placeholder="sessionId" onChange={(e) => setSessionId(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop:20}}>Submit</button>
      </form>
      {dialogRes && (
        <div style={{display: 'flex', justifyContent: 'center', marginTop:30}}>
          <div className="alert alert-info" style={{width:"50%"}}>
            {dialogRes}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
