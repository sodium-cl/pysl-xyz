import {defineField, defineType} from 'sanity'
export const workType = defineType({
  name: 'work',
  title: 'Work',
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
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
    }),
    defineField({
      title: 'End Date or Present',
      name: 'endDateOrPresent',
      type: 'array',
      validation: (Rule) => Rule.length(1),
      of: [{type: 'string'}, {type: 'date'}],
    }),
    defineField({
      title: 'City',
      name: 'city',
      type: 'string',
    }),
    defineField({
      title: 'Country',
      name: 'country',
      type: 'string',
    }),
    defineField({
      title: 'Work Logo',
      name: 'workLogo',
      type: 'image',
    }),
    defineField({
      title: 'Work Details',
      name: 'workDetails',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
