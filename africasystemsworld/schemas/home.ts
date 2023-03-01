import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'topContent',
      title: 'Top Content',
      type: 'array',
      of: [{type: 'reference', to: {type: 'content'}}],
    }),
    defineField({
      name: 'middleContent',
      title: 'middle Content',
      type: 'array',
      of: [{type: 'reference', to: {type: 'content'}}],
    }),
    defineField({
      name: 'buttomContent',
      title: 'Buttom Content',
      type: 'array',
      of: [{type: 'reference', to: {type: 'content'}}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
