export const fetchCount = (amount: number = 1): Promise<{ data: number }> =>
  new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500));
