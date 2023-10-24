import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import InfinteTextScroll from './components/InfiniteTextScroll';
import About from './components/About';
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfinteTextScroll />
        <About />
      </main>
    </>
  );
}

export default App;
