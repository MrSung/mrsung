import Head from 'next/head';
import { DefaultTemplate } from '@/components/templates/default-template';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultTemplate>some contents</DefaultTemplate>
    </div>
  );
}
