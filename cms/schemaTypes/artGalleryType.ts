import {defineField, defineType} from 'sanity'
export const artGalleryType = defineType({
  name: 'artGallery',
  title: 'Art Gallery',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
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
      title: 'Tools Used',
      name: 'toolsUsed',
      type: 'array',
      initialValue: ['vector software'],
      of: [{type: 'string'}],
    }),
    defineField({
      title: 'Art Asset',
      name: 'artAsset',
      type: 'image',
    }),
    defineField({
      title: 'Update Date',
      name: 'updateDate',
      type: 'datetime',
    }),
    defineField({
      title: 'Art Details',
      name: 'artDetails',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
