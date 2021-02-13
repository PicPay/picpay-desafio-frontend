import { environment } from '@env/environment';

export class APIBaseRoutes {
  static readonly BASE_TRANSACTION_API_URL = environment.baseTransactionApiUrl;
  static readonly BASE_USERS_API_URL = environment.baseUsersApiUrl;
}
