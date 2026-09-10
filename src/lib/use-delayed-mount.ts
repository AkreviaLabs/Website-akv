import { useEffect, useState } from "react";

/**
 * Delays rendering until `ms` after mount. Used to gate rough-notation
 * (Highlighter) so it measures text position after transform-based
 * entrance animations (Reveal/motion stagger) have settled, instead of
 * drawing against a mid-animation position.
 */
export function useDelayedMount(ms: number) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), ms);
    return () => clearTimeout(id);
  }, [ms]);

  return ready;
}
