import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    domains: ["st.kp.yandex.net", "avatars.mds.yandex.net", "themoviedb.org"],
  },
};

export default nextConfig;
