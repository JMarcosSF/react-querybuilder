import Layout from '@theme/Layout';
import React, { useEffect } from 'react';

const discordLink = 'https://discord.gg/MnAQWyUtEg';

export default function DiscordRedirect() {
  useEffect(() => {
    setTimeout(() => window.location.replace(discordLink), 500);
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'var(--ifm-global-spacing)',
        }}>
        Redirecting to <a href={discordLink}>React Query Builder Discord server</a>...
      </div>
    </Layout>
  );
}
