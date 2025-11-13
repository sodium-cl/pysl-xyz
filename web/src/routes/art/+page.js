import { client } from "$lib/sanity";
import { defaultPageDetails as defaultPageDetailsQuery } from "$lib/queries";
import { artGallery as artGalleryQuery } from "$lib/queries";
export async function load() {
  return {
    defaultPageItems: await client.fetch(defaultPageDetailsQuery("art")),
    artGalleryItems: await client.fetch(artGalleryQuery),
  };
}
