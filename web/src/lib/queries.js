// src/lib/queries.ts
export const listOfPosts = `*[_type == 'post']
  {
    "title": title,
    "publishedDate": publishedAt,
    "coverImageURL": coverImage.asset->url,
    "slug": slug.current
  }`;
export const postDetails = (slug) =>
  `*[_type == 'post' && slug.current == '` +
  slug +
  `'][0]{
    "title": title,
    "publishedDate": publishedAt,
    "coverImageURL": coverImage.asset->url,
    body[]{
      _type == 'image' => {
         "imageURL": asset->url
      },
    _type != 'reference' => @,
     }
  }`;
export const landingPageDetails = (slug) =>
  `*[_type == "landingPage" && slug.current == "` +
  slug +
  `"]{
  "title": title,
  "slug": slug.current,
  "imageUrl": logo.asset->url,
  "logocode": logocode,
  "subtitle": subtitle,
  "details": details
}`;
export const siteNavDetails = `*[_type == "navigation" && title == "Site"] {
 "name":  navItems[].navName,
 "imageURL":  navItems[].asset->url,
 "path": navItems[].navPath,
}`;
export const socialMediaNavDetails = `*[_type == "navigation" && title == "Social Media"] {
 "name":  navItems[].navName,
 "imageURL":  navItems[].asset->url,
 "path": navItems[].navPath,
}`;
// export const SiteDetails = `*[_type == "navigation" && title == "Site"] {
//  "name":  navItems[].navName,
//  "imageURL":  navItems[].asset->url,
//  "path": navItems[].navPath,
// }`;
