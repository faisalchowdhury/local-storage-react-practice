import { Suspense } from 'react';
import './App.css'
import { ErrorBoundary } from 'react-error-boundary';
import Bottles from './bottle/bottles';
function App() {
  
  const dataFetch = fetch('./bottle.json').then(res => res.json());
  
  


  return (
    <>
   <div className="w-6xl mx-auto py-5">
   <ErrorBoundary fallback={<h2>Server Error</h2>}>
       <Suspense fallback={<h3>Loading.........</h3>}>
         <Bottles dataFetch={dataFetch}></Bottles>
       </Suspense>
    </ErrorBoundary>
    
   </div>
    </>
  )
}

export default App
