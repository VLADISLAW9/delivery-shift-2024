import React from 'react';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';

import cls from './FormWrapper.module.scss';

type FormWrapperProps = {
  children: React.ReactNode;
  onComeback: () => void;
  onContinue: () => void;
  title: string;
};

export const FormWrapper = ({
  children,
  onComeback,
  onContinue,
  title
}: FormWrapperProps): React.ReactElement => (
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
