import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/Layout';
import AboutPage from '../../pages/AboutPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import AccountForm from '../../pages/Profile/AccountForm';
import PasswordForm from '../../pages/Profile/PasswordForm';
import ProfileForm from '../../pages/Profile/ProfileForm';
import ProfilePage from '../../pages/ProfilePage';
import RecoveryPage from '../../pages/RecoveryPage';
import RegisterPage from '../../pages/RegisterPage';

export default function Application(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route index path="/profile" element={<ProfileForm />} />
          <Route path="/profile/account" element={<AccountForm />} />
          <Route path="/profile/password" element={<PasswordForm />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery-page" element={<RecoveryPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
