import { client } from "$lib/sanity";
import { siteNavDetails as siteNavDetailsQuery } from "$lib/queries";
import { socialMediaNavDetails as socialMediaNavDetailsQuery } from "$lib/queries";
import { brandNavDetails as brandNavDetailsQuery } from "$lib/queries";
export async function load() {
  return {
    siteNavItems: await client.fetch(siteNavDetailsQuery),
    socialMediaNavItems: await client.fetch(socialMediaNavDetailsQuery),
    brandNavItems: await client.fetch(brandNavDetailsQuery),
  };
}
