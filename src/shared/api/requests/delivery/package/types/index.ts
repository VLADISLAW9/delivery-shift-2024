import type { Package } from '@appTypes/package';

import { api } from '../../../../instance';

type GetPackagesConfig = RequestConfig;

interface GetPackagesResponse extends BaseResponse {
  packages: Package[];
}

export const getPackages = async (requestConfig?: GetPackagesConfig) =>
  api.get<GetPackagesResponse>('/delivery/package/types', requestConfig);
