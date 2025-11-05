import { client } from "$lib/sanity";
import { postDetails as query } from "$lib/queries";
export async function load({ params }) {
  const data = await client.fetch(query(params.slug));
  return {
    post: data ?? [],
  };
}
