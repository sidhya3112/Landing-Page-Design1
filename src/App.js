import './App.css';
import Content from './components/Content/Content';
import ContentFeatures from './components/ContentFeatures/ContentFeatures';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Pricing from './components/Pricing/Pricing';
import Reviews from './components/Reviews/Reviews';
import Showcase from './components/Showcase/Showcase';

function App() {
  return (
    <>
    <Header/>
    <Showcase/>
    <Content/>
    <ContentFeatures/>
    <Pricing/>
    <Reviews/>
    <News/>
    <Footer/>
    </>
  );
}

export default App;
