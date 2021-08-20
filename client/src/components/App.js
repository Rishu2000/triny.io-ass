import React, {useState} from 'react'
import "../styles/App.css"

const App = () => {

const [queryText, setQueryText] = useState(null);
const [sessionId, setSessionId] = useState(null);

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(queryText, sessionId);
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
    </div>
  )
}

export default App
