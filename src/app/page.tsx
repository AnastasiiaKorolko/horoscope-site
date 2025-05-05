import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en'); // Перенаправлення на англійську версію
  return null;
}