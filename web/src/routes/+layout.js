import { client } from "$lib/sanity";
import { navDetails as navDetailsquery } from "$lib/queries";
// import { socialMediaDetails as socialMediaDetailsquery } from "$lib/queries";
// import { SiteDetails as siteDetailsquery } from "$lib/queries";
export async function load() {
  return {
    navItems: await client.fetch(navDetailsquery),
    // socialMediaItems: await client.fetch(socialMediaDetailsquery),
    // siteItems: await client.fetch(siteDetailsquery),
  };
}
