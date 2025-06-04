import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import NetworkPage from './pages/dashboard/NetworkPage';
import EarningsPage from './pages/dashboard/EarningsPage';
import ProfilePage from './pages/dashboard/ProfilePage';
import ProductsPage from './pages/dashboard/ProductsPage';
import OrdersPage from './pages/dashboard/OrdersPage';
import MarketingPage from './pages/dashboard/MarketingPage';
import TrainingPage from './pages/dashboard/TrainingPage';
import AnnouncementsPage from './pages/dashboard/AnnouncementsPage';
import SupportPage from './pages/dashboard/SupportPage';
import ReferralsPage from './pages/dashboard/ReferralsPage';
import ReportsPage from './pages/dashboard/ReportsPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import WalletPage from './pages/dashboard/WalletPage';
import TeamPage from './pages/dashboard/TeamPage';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isAuthenticated ? <DashboardLayout onLogout={handleLogout} /> : <Navigate to="/login" />}>
          <Route index element={<DashboardHome />} />
          <Route path="network" element={<NetworkPage />} />
          <Route path="earnings" element={<EarningsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="marketing" element={<MarketingPage />} />
          <Route path="training" element={<TrainingPage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="referrals" element={<ReferralsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}