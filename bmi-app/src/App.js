import { Result } from './pages/Result';
import { Routes, Route } from "react-router-dom";
import { Bmi } from './pages/Bmi';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/what-is-bmi" element={<Bmi />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
