import { client } from "$lib/sanity";
import { listOfPosts as query } from "$lib/queries";
export async function load({ params }) {
  const data = await client.fetch(query);
  if (data) {
    return {
      posts: data,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}
