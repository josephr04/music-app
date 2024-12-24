import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from '@components/layout/MainLayout';
import { Home } from '@pages/Home';
import { MixPage } from '@pages/MixPage';
import { NotFound } from '@pages/NotFound';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="mix/:mixId" element={<MixPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};