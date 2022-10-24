import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Card from './components/Card/Card';
import { AuthContextProvider } from './context/AuthContext';
import Signin from './pages/Signin';
// import Protected from './components/Protected';
import Navbar from './components/NavBar/Navbar';
// const theme = {};

// function ErrorFallback({ error, resetErrorBoundary }) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Card />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
