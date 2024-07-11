import { isMobile as mobile } from 'react-device-detect';
import { LayoutLoader } from '@components/Layout/components/LayoutLoader/LayoutLoader.tsx';

import { DesktopLayout } from './components/DesktopLayout';
import { MobileLayout } from './components/MobileLayout';

interface LayoutProps {
  loading?: boolean;
}

export const Layout = ({ loading }: LayoutProps) => {
  if (loading) return <LayoutLoader />;

  if (mobile) return <MobileLayout />;

  return <DesktopLayout />;
};
