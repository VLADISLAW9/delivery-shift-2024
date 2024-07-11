import { Controller } from 'react-hook-form';
import GeoIcon from '@icons/geo.svg';
import MessageIcon from '@icons/message.svg';
import PlaneIcon from '@icons/plane.svg';
import globeImage from '@images/globe.png';
import { Button } from '@ui/Button';
import { RadioGroup, RadioGroupItem } from '@ui/RadioGroup';
import { Select, SelectItem } from '@ui/Select';
import { Typography } from '@ui/Typography';

import { useMainPage } from './hooks/useMainPage';

import cls from './MainPage.module.scss';

const MainPage = () => {
  const { state, form, functions } = useMainPage();

  if (state.loading.getSelectItems) {
    return (
      <div className={cls.main_page_wrapper}>
        <div className={cls.image_wrapper}>
          <img className={cls.image} src={globeImage} alt='globe' />
          <Typography tag='h1' className={cls.image_subtext} variant='typography32_semibold'>
            ЦФТ доставка - быстро,
            <br /> удобно, надежно!
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={cls.main_page_wrapper}>
      <div className={cls.image_wrapper}>
        <img className={cls.image} src={globeImage} alt='globe' />
        <Typography tag='h1' className={cls.image_subtext} variant='typography32_semibold'>
          ЦФТ доставка - быстро,
          <br /> удобно, надежно!
        </Typography>
      </div>
      <form onSubmit={functions.onSubmit} className={cls.form_wrapper}>
        <Typography variant='typography24_semibold'>Рассчитать доставку</Typography>
        <Controller
          control={form.control}
          name='receiverPoint'
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={field.value}
              onValueChange={field.onChange}
              Icon={GeoIcon}
              label='Город отравки'
              {...(state.error && {
                error: { error: true }
              })}
            >
              {state.points?.map((point) => (
                <SelectItem key={point.id} value={point.id}>
                  {point.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <Controller
          name='senderPoint'
          control={form.control}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={field.value}
              onValueChange={field.onChange}
              Icon={PlaneIcon}
              label='Город назначения'
              {...(state.error && {
                error: { error: true }
              })}
            >
              {state.points?.map((point) => (
                <SelectItem key={point.id} value={point.id}>
                  {point.name}
                </SelectItem>
              ))}
            </Select>
          )}
        />
        <Controller
          name='package'
          control={form.control}
          render={({ field }) => (
            <Select
              {...field}
              defaultValue={field.value}
              onValueChange={field.onChange}
              Icon={MessageIcon}
              label='Размер посылки'
              {...(state.error && {
                error: { error: true }
              })}
            >
              {state.packages?.map((_package) => (
                <SelectItem key={_package.id} value={_package.id}>
                  {_package.name}, {_package.height}x{_package.width}x{_package.length} см
                </SelectItem>
              ))}
            </Select>
          )}
        />
        {state.error && (
          <Typography tag='p' variant='typography16_regular' className={cls.error_text}>
            {state.error}
          </Typography>
        )}
        <Button loading={state.loading.submitForm} type='submit'>
          Рассчитать
        </Button>
      </form>
    </div>
  );
};

export default MainPage;
