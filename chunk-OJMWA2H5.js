import {
  DestroyRef,
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  isSignal,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-XTEA2TIV.js";

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
function toDeepSignal(signal2) {
  const value = untracked(() => signal2());
  if (!isRecord(value)) {
    return signal2;
  }
  return new Proxy(signal2, {
    get(target, prop) {
      if (!(prop in value)) {
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
      }
      return toDeepSignal(target[prop]);
    }
  });
}
var nonRecords = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function isRecord(value) {
  if (value === null || typeof value !== "object" || isIterable(value)) {
    return false;
  }
  let proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype) {
    return true;
  }
  while (proto && proto !== Object.prototype) {
    if (nonRecords.includes(proto.constructor)) {
      return false;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.prototype;
}
function isIterable(value) {
  return typeof value?.[Symbol.iterator] === "function";
}
var STATE_WATCHERS = /* @__PURE__ */ new WeakMap();
var STATE_SOURCE = Symbol("STATE_SOURCE");
function patchState(stateSource, ...updaters) {
  stateSource[STATE_SOURCE].update((currentState) => updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState));
  notifyWatchers(stateSource);
}
function getState(stateSource) {
  return stateSource[STATE_SOURCE]();
}
function getWatchers(stateSource) {
  return STATE_WATCHERS.get(stateSource[STATE_SOURCE]) || [];
}
function notifyWatchers(stateSource) {
  const watchers = getWatchers(stateSource);
  for (const watcher of watchers) {
    const state = untracked(() => getState(stateSource));
    watcher(state);
  }
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = typeof signalStoreArgs[0] === "function" ? {} : signalStoreArgs.shift();
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        stateSignals,
        props,
        methods,
        hooks
      } = innerStore;
      const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, stateSignals), props), methods);
      this[STATE_SOURCE] = innerStore[STATE_SOURCE];
      for (const key of Reflect.ownKeys(storeMembers)) {
        this[key] = storeMembers[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static \u0275fac = function SignalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SignalStore)();
    };
    /** @nocollapse */
    static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: SignalStore,
      factory: SignalStore.\u0275fac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SOURCE]: signal({}),
    stateSignals: {},
    props: {},
    methods: {},
    hooks: {}
  };
}
function assertUniqueStoreMembers(store, newMemberKeys) {
  if (!ngDevMode) {
    return;
  }
  const storeMembers = __spreadValues(__spreadValues(__spreadValues({}, store.stateSignals), store.props), store.methods);
  const overriddenKeys = Reflect.ownKeys(storeMembers).filter((memberKey) => newMemberKeys.includes(memberKey));
  if (overriddenKeys.length > 0) {
    console.warn("@ngrx/signals: SignalStore members cannot be overridden.", "Trying to override:", overriddenKeys.map((key) => String(key)).join(", "));
  }
}
function withProps(propsFactory) {
  return (store) => {
    const props = propsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    assertUniqueStoreMembers(store, Reflect.ownKeys(props));
    return __spreadProps(__spreadValues({}, store), {
      props: __spreadValues(__spreadValues({}, store.props), props)
    });
  };
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SOURCE]: store[STATE_SOURCE]
    }, store.stateSignals), store.props), store.methods));
    assertUniqueStoreMembers(store, Reflect.ownKeys(methods));
    return __spreadProps(__spreadValues({}, store), {
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Reflect.ownKeys(state);
    assertUniqueStoreMembers(store, stateKeys);
    store[STATE_SOURCE].update((currentState) => __spreadValues(__spreadValues({}, currentState), state));
    const stateSignals = stateKeys.reduce((acc, key) => {
      const sliceSignal = computed(() => store[STATE_SOURCE]()[key]);
      return __spreadProps(__spreadValues({}, acc), {
        [key]: toDeepSignal(sliceSignal)
      });
    }, {});
    return __spreadProps(__spreadValues({}, store), {
      stateSignals: __spreadValues(__spreadValues({}, store.stateSignals), stateSignals)
    });
  };
}

export {
  patchState,
  signalStore,
  withProps,
  withMethods,
  withState
};
//# sourceMappingURL=chunk-OJMWA2H5.js.map
