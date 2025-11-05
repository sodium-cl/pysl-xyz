import { client } from "$lib/sanity";
import { defaultPageDetails as defaultPageDetailsQuery } from "$lib/queries";
export async function load() {
  return {
    defaultPageItems: await client.fetch(defaultPageDetailsQuery('art')),
  };
}
