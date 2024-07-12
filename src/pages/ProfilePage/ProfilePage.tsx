import { Controller } from 'react-hook-form';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { Typography } from '@ui/Typography';

import { useProfilePage } from './hooks/useProfilePage.ts';

import cls from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { state, functions } = useProfilePage();

  return (
    <div className={cls.profile_page}>
      <Typography variant='typography24_semibold'>Профиль </Typography>
      <form className={cls.update_profile_form} onSubmit={functions.onUpdateProfileData}>
        <Controller
          control={state.form.control}
          name='firstname'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Имя'
              placeholder='Имя'
              required
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        <Controller
          control={state.form.control}
          name='lastname'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Фамилия'
              placeholder='Фамилия'
              required
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        <Controller
          control={state.form.control}
          name='middlename'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Отчество'
              placeholder='Отчество'
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        <Controller
          control={state.form.control}
          name='phone'
          disabled
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Номер'
              placeholder='Номер'
              disabled
              {...(fieldState.error && {
                error: { error: true, message: fieldState.error.message }
              })}
            />
          )}
        />
        <Controller
          control={state.form.control}
          name='email'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Email'
              placeholder='Email'
              {...(fieldState.error && { error: fieldState.error.message })}
            />
          )}
        />
        <Controller
          control={state.form.control}
          name='city'
          render={({ field, fieldState }) => (
            <Input
              {...field}
              label='Город'
              placeholder='Город'
              {...(fieldState.error && { error: fieldState.error.message })}
            />
          )}
        />
        <Button loading={state.isLoading} type='submit' className={cls.update_button}>
          Обновить данные
        </Button>
      </form>
      {state.updateProfileError && (
        <Typography className={cls.error_message} variant='typography16_regular'>
          {state.updateProfileError}
        </Typography>
      )}
    </div>
  );
};

export default ProfilePage;
