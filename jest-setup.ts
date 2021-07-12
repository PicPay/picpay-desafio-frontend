import 'jest-preset-angular';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);
