
export interface HeaderContext {
  title: string;
  themeSwitcher: string;
  changeTheme: string;
  ['userFilter-context']: {
    label: string,
    all: string,
    paid: string,
    pending: string,
  };
}
