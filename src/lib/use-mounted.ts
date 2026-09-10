import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Hydration-safe "has this component mounted on the client" check. */
export function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}
