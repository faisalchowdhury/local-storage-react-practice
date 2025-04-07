import './App.css'
import { ErrorBoundary } from 'react-error-boundary';
function App() {
  
  const dataFetch = fetch('./bottle.json');

  console.log(dataFetch)


  return (
    <>
    <ErrorBoundary fallback={<h2>Server Error</h2>}>

    </ErrorBoundary>
    
    </>
  )
}

export default App
