import { useEffect, useState } from "react";

export function useOnMount() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return [hasMounted] as const;
}
