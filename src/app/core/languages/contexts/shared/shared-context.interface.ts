import { ComponentsContext } from './components/components-context.interface';
import { SharedServicesContext } from './services/service-context.interface';

export interface SharedContext {
  'components-context': ComponentsContext;
  'services-context': SharedServicesContext;
}
