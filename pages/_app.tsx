import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Suspense } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <Suspense>
      <Component key={pageKey} {...pageProps} />
    </Suspense>
  );
}
