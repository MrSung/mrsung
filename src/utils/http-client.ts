/* eslint-disable no-return-await */
import { QueryClient } from 'react-query';

export const queryClient = new QueryClient();

const FETCH_COUNT = 3;
// eslint-disable-next-line consistent-return
export const fetchRetry = async (url: string): Promise<any> => {
  for (let i = 0; i < FETCH_COUNT; i += 1) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Network response was not ok`);
      }

      return res.json();
    } catch (err) {
      const isLastAttempt = i + 1 === FETCH_COUNT;

      if (isLastAttempt) throw err;
    }
  }
};
