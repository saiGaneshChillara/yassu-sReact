
import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './lib/axios';
import Layout from './components/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import Accordian from './components/Accordian';
import SignUpPage from './pages/auth/SignUpPage';
import LoginPage from './pages/auth/LoginPage';
import CustomColorDiv from './components/CustomColorDiv/CustomColorDiv';
import CustomScrollIndicator from './components/CustomScrollIndicator/CustomScrollIndicator';
import Tabset from './components/CustomTabs/Tabset';
import ModalTest from './components/ModalPopup/ModalTest';
import RandomColor from './components/RandomColor/RandomColor';
import AutoSearch from './components/SearchAutoComplete/AutoSearch';

function App() {
  console.log("app is rendered");
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/auth/me");
        return res.data;        
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
      }
    }
  });

  if (isLoading) return null;
  return (
    <Layout>
      <Routes>
        <Route path='/' element={ authUser ? <Accordian /> : <Navigate to="/login" /> } />
        <Route path='/signup' element={ !authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path='/login' element={ !authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path='/custom-color-div' element={ authUser ? <CustomColorDiv /> : <Navigate to={"/"} />} />
        <Route path='/scroll-progress-indicator' element={ authUser ? <CustomScrollIndicator /> : <Navigate to={"/"} />} />
        <Route path='/interactive-tabs' element={ authUser ? <Tabset /> : <Navigate to={"/"} />} />
        <Route path='/dynamic-modal' element={ authUser ? <ModalTest /> : <Navigate to={"/"} />} />
        <Route path='/random-color-generator' element={ authUser ? <RandomColor /> : <Navigate to={"/"} />} />
        <Route path='/search-autocomplete' element={ authUser ? <AutoSearch /> : <Navigate to={"/"} />} />
      </Routes>
    </Layout>
  );
}

export default App;
