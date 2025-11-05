import {defineField, defineType} from 'sanity'

export const navType = defineType({
  name: 'navigation',
  title: 'Navigation',
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
      name: 'navItems',
      type: 'array',
      of: [
        {
          name: 'navItemLogo',
          type: 'image',
          options: {
            accept: 'image/svg+xml', // Specify SVG file type
          },
          fields: [
            defineField({
              name: 'navName',
              type: 'string',
              title: 'Name',
            }),
            defineField({
              name: 'navPath',
              type: 'string',
              title: 'path',
            }),
          ],
          title: 'Item',
        },
      ],
    }),
  ],
})
