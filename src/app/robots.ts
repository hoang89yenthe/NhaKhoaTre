import type { MetadataRoute } from "next";

const BASE_URL = "https://nhakhoatre.vn"; // TODO: cập nhật khi có domain thực tế

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
