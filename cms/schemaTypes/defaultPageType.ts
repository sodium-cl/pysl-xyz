import {defineField, defineType} from 'sanity'

export const defaultPageType = defineType({
  name: 'defaultPage',
  title: 'Default Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'logo',
      type: 'image',
      options: {
        accept: 'image/svg+xml', // Specify SVG file type
      },
      title: 'logo-svg',
    }),
  ],
})