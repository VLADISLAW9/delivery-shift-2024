import { isMobile as mobile } from 'react-device-detect';

import { DesktopLayout } from './components/DesktopLayout';
import { LayoutLoader } from './components/LayoutLoader';
import { MobileLayout } from './components/MobileLayout';

interface LayoutProps {
  loading?: boolean;
}

export const Layout = ({ loading }: LayoutProps) => {
  if (loading) return <LayoutLoader />;

  if (mobile) return <MobileLayout />;

  return <DesktopLayout />;
};
