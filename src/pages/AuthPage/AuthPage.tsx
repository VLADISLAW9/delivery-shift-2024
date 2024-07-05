import { AuthForm } from '@components/AuthForm';
import { useAuthForm } from '@pages/AuthPage/hooks/useAuthForm.ts';
import { Flex } from '@ui/Flex';
import { Typography } from '@ui/Typography';

const AuthPage = () => {
  const { stage, isSubmiting, form, onSubmit, handleCreateOtp, currentPhone, submittedPhones } =
    useAuthForm();

  return (
    <Flex direction='column' align='start' gap='24'>
      <Typography variant='typography24_semibold'>Вход</Typography>
      <Typography tag='p' variant='typography16_regular'>
        Введите номер телефона для входа <br /> в личный кабинет
      </Typography>
      <AuthForm
        currentPhone={currentPhone}
        submittedPhones={submittedPhones}
        handleCreateOtp={handleCreateOtp}
        stage={stage}
        isSubmiting={isSubmiting}
        form={form}
        onSubmit={onSubmit}
      />
    </Flex>
  );
};

export default AuthPage;
