import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/webp"],
    qualities: [75, 90, 100],
    maximumRedirects: 0,
  },
  async redirects() {
    return [
      { source:"/index.php",destination:"/",permanent:true },
      { source:"/empresa.php",destination:"/empresa",permanent:true },
      { source:"/servicos.php",destination:"/servicos",permanent:true },
      { source:"/manutencao.php",destination:"/manutencao",permanent:true },
      { source:"/galeria.php",destination:"/galeria",permanent:true },
      { source:"/contato.php",destination:"/contato",permanent:true },
      { source:"/solucoes",destination:"/servicos",permanent:true },
      { source:"/solucoes/:path*",destination:"/servicos",permanent:true },
      { source:"/processo",destination:"/servicos",permanent:true },
      { source:"/aplicacoes",destination:"/servicos",permanent:true },
      { source:"/central-tecnica",destination:"/servicos",permanent:true },
    ];
  },
  async headers() {
    const production = process.env.NODE_ENV === "production";
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline'${production ? "" : " 'unsafe-eval'"}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      `connect-src 'self'${production ? "" : " ws: wss:"}`,
      "media-src 'self'", "frame-src https://www.google.com",
      "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'none'",
    ].join("; ");
    return [{ source:"/:path*", headers: [
      {key:"X-Content-Type-Options",value:"nosniff"},
      {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
      {key:"Permissions-Policy",value:'camera=(), microphone=(), geolocation=(), web-share=(self), fullscreen=(self "https://www.google.com")'},
      {key:"X-Frame-Options",value:"DENY"},
      {key:"Content-Security-Policy",value:csp},
      ...(production ? [{key:"Strict-Transport-Security",value:"max-age=31536000"}] : []),
    ] }];
  },
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.15.74", "192.168.1.81", "26.89.184.158"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
