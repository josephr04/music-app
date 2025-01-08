import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@components/layout/MainLayout';
import { useEffect, useState } from 'react';
import { useMusic } from '@context/MusicContext';
import { Home } from '@pages/Home';
import { MixPage } from '@pages/MixPage';
import { NotFound } from '@pages/NotFound';

export const AppRoutes = () => {
  const { mixes } = useMusic();
  const [dynamicRoutes, setDynamicRoutes] = useState([]);

  useEffect(() => {
    const routes = mixes.map((mix) => ({
      path: `/playlist/${mix.id}`,
      element: <MixPage mix={mix} />
    }));
    setDynamicRoutes(routes);
  }, [mixes]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {dynamicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
