export default {
    name: 'infoSection',
    title: 'Info Section',
    type: 'object',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required().min(3).max(50),
        },
        {
          name: 'body',
          title: 'Body',
          type: 'string',
          validation: (Rule) => [
              Rule.required().min(10),
              Rule.max(200).warning("Shorter body won't break site elements!")
          ]
      },
      {
        name: 'image',
        Title: 'Image',
        type: 'image',
        options: {hotspot: true},
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          }
        ]
      }
      ],
  };