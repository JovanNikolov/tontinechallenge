import { createClient, groq } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    apiVersion: "2022-03-07",
    projectId: "ikxdvz9o",
    dataset: "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
  }
  
export async function getProjects(){

    const queryString = groq`*[_type == "landingPage"]{
        _id,
        title,
        _updatedAt,
        sections[]->{
          _type,
          ...,
        }
    }`;

    return client.fetch(queryString);
}