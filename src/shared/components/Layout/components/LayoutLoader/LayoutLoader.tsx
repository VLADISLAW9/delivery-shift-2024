import { Loader } from '@ui/Loader';

import cls from './LayoutLoader.module.scss';

export const LayoutLoader = () => (
  <div className={cls.app_loader_layout}>
    <Loader />
  </div>
);
