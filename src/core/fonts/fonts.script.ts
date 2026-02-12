import { Quicksand, Just_Another_Hand } from 'next/font/google';

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-quicksand'
});

export const justAnotherHand = Just_Another_Hand({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-just-another-hand'
});