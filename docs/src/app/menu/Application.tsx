import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import AboutPage from '../../pages/AboutPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import ProfilePage from '../../pages/ProfilePage';
import RecoveryPage from '../../pages/RecoveryPage';
import RegisterPage from '../../pages/RegisterPage';

export default function Application(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery-page" element={<RecoveryPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
