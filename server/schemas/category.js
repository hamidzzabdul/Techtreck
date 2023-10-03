export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'array',
      title: 'Image',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
  ],
}
