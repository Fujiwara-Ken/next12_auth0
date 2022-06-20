import { Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  //ログイン後のリダイレクト先を指定
  const redirectUri = `${process.env['NEXT_PUBLIC_BASE_URL']}/success`;
  return (
    <Auth0Provider
      domain={process.env['NEXT_APP_AUTH0_DOMAIN']}
      clientId={process.env['NEXT_APP_AUTH0_CLIENT_ID']}
      redirectUri={redirectUri}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
export default MyApp;
