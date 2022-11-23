import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'gyc3gi3e40',
  apiKey: process.env.API_KEY,
});