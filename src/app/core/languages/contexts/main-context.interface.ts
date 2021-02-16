import { AppContext } from './app/app-context.interface';
import { CoreContext } from './core/core-context.interface';
import { SharedContext } from './shared/shared-context.interface';

export interface MainContext {
  'core-context': CoreContext;
  'shared-context': SharedContext;
  'app-context': AppContext;
}
