export interface ISpyOptions {
  returnValue?: any;
  callFake?: (...args: Function[]) => any;
  callThrough?: boolean;
}

export type IConstructor<T> = new(...args: any[]) => T;

export type SpyObj<T> = T & {
  [P in keyof T]: jest.Mock;
};

export function createMockFor<T, K extends keyof T>(
  blueprint: IConstructor<T> | K[] | any[],
  spyOptions?: ISpyOptions,
  defaultProps?: object,
): SpyObj<T> {
  const methods: K[] = Array.isArray(blueprint) ? blueprint : getMethodNamesOf(blueprint);
  if (!methods.length && spyOptions) {
    throw new Error('Given blueprint has no methods to spyOn');
  }
  const spyObj = {} as SpyObj<T>;

  methods.forEach(m => {
    const spy = jest.fn();
    if (spyOptions) {
      setSpyOptions(spy, spyOptions);
    }
    (spyObj as any)[m] = jest.fn();
  });

  if (spyOptions) {
    methods.forEach(m => { setSpyOptions(spyObj[m] as any, spyOptions); });
  }
  if (defaultProps) {
    Object.entries(defaultProps)
      .forEach(([key, value]) => (spyObj as any)[key] = value);
  }
  return spyObj;
}

export function mockPrototypeOf(
  obj: any,
  spyOptions: ISpyOptions = {},
): void {
  getMethodNamesOf(obj)
    .forEach(m => {
      const descriptor = Object.getOwnPropertyDescriptor(obj.prototype, m);
      if (!descriptor || !descriptor.set && !descriptor.get) {
        setSpyOptions(spyOn(obj.prototype, m), spyOptions);
      }
    });
}

function getMethodNamesOf<T extends Function, K extends keyof T>(obj: T): K[] {
  return Object.getOwnPropertyNames(obj.prototype).filter(i => i !== 'constructor') as K[];
}

function setSpyOptions(spy: jest.Mock | jasmine.Spy, opts: ISpyOptions = {}) {
  if (spy.hasOwnProperty('and')) {
    if (opts.returnValue !== undefined) {
      (spy as jasmine.Spy).and.returnValue(opts.returnValue);
    }
    if (opts.callFake !== undefined) {
      (spy as jasmine.Spy).and.callFake(opts.callFake);
    }
    if (opts.callThrough !== undefined) {
      (spy as jasmine.Spy).and.callThrough();
    }
    return;
  }
  if (opts.returnValue !== undefined) {
    (spy as jest.Mock).mockReturnValue(opts.returnValue);
  }
  if (opts.callFake !== undefined) {
    (spy as jest.Mock).mockImplementation(opts.callFake);
  }
  if (opts.callThrough !== undefined) {
    (spy as jest.Mock).mockClear();
  }
}

export function deepFreeze<T>(obj: T): T {
  Object.getOwnPropertyNames(obj)
    .forEach(name => {
      const prop = (obj as any)[name];
      if (typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
  return Object.freeze(obj);
}

export function deepClone<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(deepClone) as any;
  }
  const clone: any = Object.assign({}, obj);
  Object.getOwnPropertyNames(clone)
    .forEach(name => {
      const prop = clone[name];
      if (typeof prop === 'object' && prop !== null) {
        clone[name] = deepClone(prop);
      }
    });
  return clone;
}
