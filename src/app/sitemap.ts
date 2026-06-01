import type { MetadataRoute } from "next";

const BASE_URL = "https://nhakhoatre.vn"; // TODO: cập nhật khi có domain thực tế

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
