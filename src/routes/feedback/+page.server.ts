import { error } from "@sveltejs/kit";
import { put } from "@vercel/blob";
import { BLOB_READ_WRITE_TOKEN, ANTIABUSE_SECRET } from "$env/static/private"
import { RateLimiter } from 'sveltekit-rate-limiter/server';

/* First time I'm using this, absolutely no idea if it's right :D */
const limiter = new RateLimiter({
  IP: [1, 'd'],
  IPUA: [1, 'd'],
  cookie: {
    name: 'vercelStorageAntiAbuse',
    secret: ANTIABUSE_SECRET,
    rate: [1, 'd'],
    preflight: true
  }
});

export const load = async (event) => {
  await limiter.cookieLimiter?.preflight(event);
};

export const actions = {
  upload: async ({ request }) => {
    const form = await request.formData();
    const name = form.get("name") as string;
    const likes = form.get("likes") as string;
    const improvements = form.get("improvements") as string;

    if (!name || !likes || !improvements) {
      throw error(400, { message: "All fields are required." });
    }

    const data = { name, likes, improvements };
    const key = `feedback-${Date.now()}.json`;

    const { url } = await put(key, new Blob([JSON.stringify(data)], { type: 'application/json' }), { access: "public", token: BLOB_READ_WRITE_TOKEN });
    return { uploaded: url };
  },
};