import { put } from '@vercel/blob';

export default async function handler(req, res) {
  try {
    const blob = await put("test.txt", "Hello NRIIT", {
      access: "public",
    });

    res.status(200).json({
      success: true,
      url: blob.url,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}
