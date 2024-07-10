import React from 'react';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';

import cls from './SectionWrapper.module.scss';

type SectionWrapperProps = {
  children: React.ReactNode;
  onComeback: () => void;
  onContinue: () => void;
  title: string;
};

export const SectionWrapper = ({
  children,
  onComeback,
  onContinue,
  title
}: SectionWrapperProps): React.ReactElement => (
  <div className={cls.section_wrapper}>
    <Typography variant='typography24_bold'>{title}</Typography>
    <form className={cls.form} onSubmit={onContinue}>
      {children}
      <div>
        <div className={cls.buttons}>
          <Button variant='default_filled' className={cls.button} onClick={onComeback}>
            Назад
          </Button>
          <Button className={cls.button} type='submit'>
            Продолжить
          </Button>
        </div>
      </div>
    </form>
  </div>
);
