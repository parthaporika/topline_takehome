import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ImageLayout from './components/ImageLayout';
import useImages from './hooks/useImages';

function App() {
  const { response, isLoading, error, fetchData } = useImages(`?key=${process.env.REACT_APP_PIXELBAY_API_KEY}`);
  console.log(response);

  return (
    <>
      <Header></Header>
      <ImageLayout></ImageLayout>
    </>
  );
}

export default App;
