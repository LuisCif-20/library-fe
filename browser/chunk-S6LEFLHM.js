import {
  AuthStatus,
  AuthStore
} from "./chunk-2SQF422D.js";
import {
  Router
} from "./chunk-7L6NANUY.js";
import {
  inject
} from "./chunk-XTEA2TIV.js";

// src/app/auth/guards/check-auth.guard.ts
var checkAuthGuard = (childRoute, state) => {
  const authStore = inject(AuthStore);
  if (authStore.authStatus() === AuthStatus.AUTHENTICATED)
    return true;
  const router = inject(Router);
  return router.createUrlTree(["/library"]);
};

export {
  checkAuthGuard
};
//# sourceMappingURL=chunk-S6LEFLHM.js.map
