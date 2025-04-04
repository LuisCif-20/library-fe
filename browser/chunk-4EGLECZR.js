import {
  DestroyRef,
  Injector,
  Subject,
  assertInInjectionContext,
  effect,
  inject,
  isObservable,
  isSignal,
  noop,
  untracked
} from "./chunk-XTEA2TIV.js";

// node_modules/@ngrx/signals/fesm2022/ngrx-signals-rxjs-interop.mjs
function rxMethod(generator, config) {
  if (!config?.injector) {
    assertInInjectionContext(rxMethod);
  }
  const sourceInjector = config?.injector ?? inject(Injector);
  const source$ = new Subject();
  const sourceSub = generator(source$).subscribe();
  sourceInjector.get(DestroyRef).onDestroy(() => sourceSub.unsubscribe());
  const rxMethodFn = (input, config2) => {
    if (isStatic(input)) {
      source$.next(input);
      return {
        destroy: noop
      };
    }
    const instanceInjector = config2?.injector ?? getCallerInjector() ?? sourceInjector;
    if (isSignal(input)) {
      const watcher = effect(() => {
        const value = input();
        untracked(() => source$.next(value));
      }, {
        injector: instanceInjector
      });
      sourceSub.add({
        unsubscribe: () => watcher.destroy()
      });
      return watcher;
    }
    const instanceSub = input.subscribe((value) => source$.next(value));
    sourceSub.add(instanceSub);
    if (instanceInjector !== sourceInjector) {
      instanceInjector.get(DestroyRef).onDestroy(() => instanceSub.unsubscribe());
    }
    return {
      destroy: () => instanceSub.unsubscribe()
    };
  };
  rxMethodFn.destroy = sourceSub.unsubscribe.bind(sourceSub);
  return rxMethodFn;
}
function isStatic(value) {
  return !isSignal(value) && !isObservable(value);
}
function getCallerInjector() {
  try {
    return inject(Injector);
  } catch {
    return null;
  }
}

export {
  rxMethod
};
//# sourceMappingURL=chunk-4EGLECZR.js.map
