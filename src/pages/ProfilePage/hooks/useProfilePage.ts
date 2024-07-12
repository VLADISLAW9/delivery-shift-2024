import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useGetPackagesQuery } from '@api/hooks/useGetPackagesQuery.ts';
import { useGetPointsQuery } from '@api/hooks/useGetPointsQuery.ts';
import { useUpdateProfileMutation } from '@api/hooks/useUpdateProfileMutation.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ProfileSchema } from '@pages/ProfilePage/consts/profileSchema.ts';
import { profileSchema } from '@pages/ProfilePage/consts/profileSchema.ts';
import { useCitiesStore } from '@store/hooks/useCitiesStore.ts';
import { useUserStore } from '@store/hooks/useUserStore.ts';

export const useProfilePage = () => {
  const { user, setUserData } = useUserStore();

  const getPointsQuery = useGetPointsQuery();

  const { cities, setCities } = useCitiesStore();

  const updateProfileMutation = useUpdateProfileMutation();

  const form = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      middlename: user?.middlename || '',
      firstname: user?.firstname || '',
      lastname: user?.lastname || '',
      email: user?.email || '',
      phone: user?.phone || '',
      city: user?.city || ''
    }
  });

  const [updateProfileError, setUpdateProfileError] = useState('');

  const onUpdateProfileData = form.handleSubmit(async (data: ProfileSchema) => {
    setUpdateProfileError('');

    const updateProfileResponse = await updateProfileMutation.mutateAsync({
      params: {
        profile: {
          middlename: data.middlename,
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          city: data.city
        },
        phone: user?.phone
      }
    });

    if (!updateProfileResponse?.data?.success && updateProfileResponse?.data?.reason) {
      return setUpdateProfileError(updateProfileResponse?.data?.reason);
    }

    if (updateProfileResponse.data.message || updateProfileResponse.data.error) {
      return setUpdateProfileError(updateProfileResponse.data.message ?? 'Произошла ошибка');
    }

    setUserData({
      firstname: data.firstname,
      lastname: data.lastname,
      middlename: data.middlename,
      email: data.email
    });
  });

  useEffect(() => {
    if (getPointsQuery.data && !cities?.length) {
      setCities(getPointsQuery.data.data.points);
    }
  }, [getPointsQuery.data]);

  return {
    state: {
      cities,
      updateProfileError,
      form,
      isLoading: updateProfileMutation.isPending
    },
    functions: {
      onUpdateProfileData
    }
  };
};
