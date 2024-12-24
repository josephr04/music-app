import { Outlet } from 'react-router-dom';
import { PlayerBar } from '../PlayerBar';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
            <Outlet />
        </div>
        <PlayerBar />
    </div>
  );
}
