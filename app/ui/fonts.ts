import { Montserrat, Lusitana, Roboto, Poppins } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})