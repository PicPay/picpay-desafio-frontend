import { HeaderContext } from '@contexts/shared/components/header/header-context.interface';

export const HEADER_VOCABULARY: HeaderContext = {
  title: 'shared-context.components-context.header-context.title',
  themeSwitcher:
    'shared-context.components-context.header-context.themeSwitcher',
  changeTheme: 'shared-context.components-context.header-context.changeTheme',
  ['userFilter-context']: {
    label:
      'shared-context.components-context.header-context.userFilter-context.label',
    all:
      'shared-context.components-context.header-context.userFilter-context.all',
    paid:
      'shared-context.components-context.header-context.userFilter-context.paid',
    pending:
      'shared-context.components-context.header-context.userFilter-context.pending',
  },
};
