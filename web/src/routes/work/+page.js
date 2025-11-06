import { client } from "$lib/sanity";
import { defaultPageDetails as defaultPageDetailsQuery } from "$lib/queries";
import { workList as workListQuery } from "../../lib/queries";
export async function load() {
  return {
    defaultPageItems: await client.fetch(defaultPageDetailsQuery("work")),
    workListItems: await client.fetch(workListQuery),
  };
}
