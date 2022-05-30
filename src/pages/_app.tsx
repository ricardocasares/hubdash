import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { dark } from "@/css/themes";
import { cssReset } from "@/css/reset";
import { StateProvider } from '@/hooks/useGlobalState';

function MyApp({ Component, pageProps }: AppProps) {
  cssReset();

  return <StateProvider>
    <ThemeProvider attribute="class" defaultTheme="system" value={{ light: "light", dark: dark.className }}>
      <Component {...pageProps} />
    </ThemeProvider>
  </StateProvider>;
}

export default MyApp;
