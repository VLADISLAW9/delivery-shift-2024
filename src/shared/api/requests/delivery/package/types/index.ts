import type { Response } from '@appTypes/common';
import type { Package } from '@appTypes/package';

import { api } from '../../../../instance';

type GetPackagesConfig = AxiosRequestConfig;

interface GetPackagesResponse extends Response {
  packages: Package[];
}

export const getPackages = async (requestConfig?: GetPackagesConfig) =>
  api.get<GetPackagesResponse>('/delivery/package/types', requestConfig);
