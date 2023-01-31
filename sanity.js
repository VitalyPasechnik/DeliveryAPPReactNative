import React from 'react'
import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: '271qvugq',
  dataset: 'production',
  useCdn: true,
  apiVersion: "2023-01-13",
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);

// sanity cors and http://localhost:19006/


export default client;