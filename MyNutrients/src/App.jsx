
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';

import SignUp from './Routes/Signup/Signup';
import SignIn from './Routes/Signin/Signin';
import Footer from './component/Footer/Footer';
import Navbar from '../src/component/Navbar/Navbar';
import Land from './Routes/land/Land';
import DietPlan from './Routes/Diet/DietPlan';
import { UserInfo } from './Routes/UserInfo/UserInfo';
import { Preferences } from './Routes/UserInfo/Preferences';
import NutritionCard from './Routes/Nutrition/Nutrition';
import MyNutrients from './Routes/landingpage/MyNutrients';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/Home" element={<MyNutrients />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/homee" element={<Land />} />
          <Route path="/DietPlan" element={<DietPlan />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/Preferences" element={<Preferences />} />
          <Route path="/Nutrition" element={<NutritionCard />} />

          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
