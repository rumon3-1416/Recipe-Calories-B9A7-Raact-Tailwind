import './App.css';
import Banner from './components/Home/Banner';

import Navbar from './components/Layout/Navbar';

function App() {
  return (
    <div className="w-[95%] max-w-[1320px] mx-auto">
      <Navbar />

      <Banner />
    </div>
  );
}

export default App;
