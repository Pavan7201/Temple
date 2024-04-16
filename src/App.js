import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
// import LoginForm from './pages/LoginForm';
// import SignupForm from './pages/SignupForm';
// import LoginForm from './pages/login';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<SearchPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          {/* <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} /> */}
        </Routes>
        <HomePage />
      </div>
    </Router>
  );
};

export default App;
