import { defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
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
      name: 'introText',
      type: 'string',
    }),
    defineField({
      name: 'highlightItems',
      type: 'array',
      of: [{
        type: 'object', fields: [
          {
            title: 'Name',
            name: 'name',
            type: 'string'
          },
          {
            title: 'Icon',
            name: 'icon',
            type: 'image',
            options: {
              accept: 'image/svg+xml', // Specify SVG file type
            },
          },
        ]
      }],
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