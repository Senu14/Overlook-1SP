import Header from './Components/Partials/Header/Header';
import Footer from './Components/Partials/Footer/Footer';
import AppRouter from './App/AppRouter/AppRouter';
// import Carousel from './Pages/Forside/Carousel/Carousel';
import './App.scss';

function App() {
  return (
    <>
    <Header />
    <AppRouter />
    {/* <Carousel /> */}
    <Footer />
    </>
  );
}

export default App;
