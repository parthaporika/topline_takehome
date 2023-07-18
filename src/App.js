import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageLayout from './components/ImageLayout';
import useImages from './hooks/useImages';
import { createContext } from 'react';

export const ImageContext = createContext();

function App() {
  const { response, isLoading, error, fetchData } = useImages(`?key=${process.env.REACT_APP_PIXELBAY_API_KEY}`);
  
  const value = {
    response,
    isLoading,
    error,
    fetchData
  }

  return (
    <ImageContext.Provider value={value}>
      <Header></Header>
      <ImageLayout></ImageLayout>
    </ImageContext.Provider>
  );
}

export default App;
