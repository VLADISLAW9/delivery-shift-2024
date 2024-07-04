import AppLogoImage from '@images/logo.png';

interface AppLogoProps {
  className?: string;
}

export const AppLogo = ({ className }: AppLogoProps) => {
  return <img className={className} src={AppLogoImage} alt='logo' />;
};
