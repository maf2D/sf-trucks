import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '@/components';
import { GlobalStyle } from '@/global.styles';

const Navigation = lazy(() => import('@/routes/navigation/navigation.component'));
const Trucks = lazy(() => import('@/routes/trucks/trucks.component'));
const Truck = lazy(() => import('@/routes/truck/truck.component'));

export const App = () => (
  <Suspense fallback={<Loader />}>
    <GlobalStyle />

    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Trucks />} />
        <Route path='truck/:id' element={<Truck />} />
      </Route>
    </Routes>
  </Suspense>
);
