import Layout from '@/components/layout';
import './globals.css';
import StoryblokProvider from '@/providers/StoryblokProvider';
import { StoryblokCMS } from '@/utils/cms';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { Roboto } from '@next/font/google';

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({ children }) {
  const currentConfig = await StoryblokCMS.getConfig();

  return (
    <StoryblokProvider>
      <html lang="en">
        <body className="bg-slate-900">
          <div className="px-4 md:px-8 lg:px-16 xl:px-24">
            <Layout config={currentConfig}>{children}</Layout>
          </div>
        </body>
      </html>
    </StoryblokProvider>
  );
}
