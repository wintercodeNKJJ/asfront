import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: 'q7433i71',
  dataset: 'production',
  apiVersion: "2023-02-19",
  useCdn: true,
})