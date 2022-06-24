import './App.css';
import Content from './components/Content/Content';
import ContentFeatures from './components/ContentFeatures/ContentFeatures';
import Header from './components/Header/Header';
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
    </>
  );
}

export default App;
