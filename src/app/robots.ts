import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";
  return isProduction ? { rules: { userAgent: "*", allow: "/" }, sitemap: "https://paolo-sotelo-portfolio.vercel.app/sitemap.xml" } : { rules: { userAgent: "*", disallow: "/" } };
}
