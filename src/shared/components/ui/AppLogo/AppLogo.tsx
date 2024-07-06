import logoImage from '@images/logo.png';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = ({ className }: AppLogoProps) => (
  <img className={className} src={logoImage} alt='logo' />
);
