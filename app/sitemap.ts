import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** Uma página só — o passeio é todo na raiz. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
