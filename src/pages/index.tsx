import Head from 'next/head';
import dynamic from "next/dynamic";
import type { NextPage } from 'next';
import { Stack } from '@/components/Stack';
import { FormAddRepository } from "@/components/FormAddRepository";
// to avoid hydration missmatch
const Repositories = dynamic(() => import('@/components/Repositories'), { ssr: false });

const Home: NextPage = () =>
  <Stack v pad gap as="main">
    <Head>
      <title>hubdash</title>
    </Head>
    <Repositories />
    <FormAddRepository />
  </Stack>;


export default Home;
