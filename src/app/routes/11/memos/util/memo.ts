export function memo(
  fnToMemoize: (...args: any) => any
): any {
  let prevArgs: unknown[] = [{}];
  let result: unknown;

  return function (...newArgs: unknown[]) {
    if (hasDifferentArgs(prevArgs, newArgs)) {
      result = fnToMemoize(...newArgs as any);
      prevArgs = newArgs;
    }

    return result;
  };
}

function hasDifferentArgs<T>(prev: T[], next: T[]) {
  if (prev.length !== next.length) return true;

  for (let i = 0; i < prev.length; i++) {
    if (!Object.is(prev[i], next[i])) return true;
  }
  return false;
}
