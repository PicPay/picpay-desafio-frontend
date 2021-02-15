import { User } from '@core/domains/user/user.domain';

export type PaidUser = User & { isPaid: boolean };
