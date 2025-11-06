import { client } from "$lib/sanity";
import { homePageDetails as homePageDetailsQuery } from "$lib/queries";
export async function load() {
  return {
    homePageItems: await client.fetch(homePageDetailsQuery('pysl-xyz')),
  };
}
