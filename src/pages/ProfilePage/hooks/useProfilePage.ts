import { useForm } from 'react-hook-form';
import { useGetProfileQuery } from '@api/hooks/useGetProfileQuery';

export const useProfilePage = () => {
  const form = useForm();

  const getProfileQuery = useGetProfileQuery();

  const onUpdateProfileData = (data) => {
    console.log(data);
  };

  return {
    state: {
      form,
      profile: getProfileQuery.data,
      loading: {
        profile: getProfileQuery.isLoading
      }
    }
  };
};
