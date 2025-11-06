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
export const homePageDetails = (slug) =>
  `*[_type == "homePage" && slug.current == "` +
  slug +
  `"]{
  "title": title,
  "slug": slug.current,
  "imageUrl": logo.asset->url,
  "subtitle": subtitle,
  "details": details
}`;
export const defaultPageDetails = (slug) =>
  `*[_type == "defaultPage" && slug.current == "` +
  slug +
  `"]{
  "title": title,
  "slug": slug.current,
  "imageUrl": logo.asset->url,
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
export const brandNavDetails = `*[_type == "navigation" && title == "Brand"] {
 "name":  navItems[].navName,
 "imageURL":  navItems[].asset->url,
 "path": navItems[].navPath,
}`;
export const workList = `*[_type == "work"]{
  "title": title,
  "slug": slug.current,
  "startDate": startDate,
  "endDateOrPresent": endDateOrPresent,
  "workLogo": workLogo.asset->url,
  "workDetails": workDetails
}`;
export const workDetails = (slug) =>
  `*[_type == "work" && slug.current == "` +
  slug +
  `"]{
  "title": title,
  "slug": slug.current,
  "startDate": startDate,
  "endDateOrPresent": endDateOrPresent,
  "workLogo": workLogo.asset->url,
  "workDetails": workDetails
}`;
