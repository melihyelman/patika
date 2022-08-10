import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useEffect } from 'react';
import { Profile } from './pages/Profile';
import { SingleProduct } from './pages/SingleProduct';
import { Basket } from './pages/Basket';
import { Favorites } from './pages/Favorites';

function App() {
  const [user, setUser] = useLocalStorage("user", {});
  let navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/auth/login")
    }
  }, [user])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
