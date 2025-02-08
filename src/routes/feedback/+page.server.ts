import { error } from "@sveltejs/kit";
import { put } from "@vercel/blob";

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

    const { url } = await put(key, new Blob([JSON.stringify(data)], { type: 'application/json' }), { access: "public" });
    return { uploaded: url };
  },
};