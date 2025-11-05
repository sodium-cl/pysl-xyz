import { client } from "$lib/sanity";
import { siteNavDetails as siteNavDetailsQuery } from "$lib/queries";
import { socialMediaNavDetails as socialMediaNavDetailsQuery } from "$lib/queries";
// import { SiteDetails as siteDetailsquery } from "$lib/queries";
export async function load() {
  return {
    siteNavItems: await client.fetch(siteNavDetailsQuery),
    socialMediaNavItems: await client.fetch(socialMediaNavDetailsQuery),
    // siteItems: await client.fetch(siteDetailsquery),
  };
}
