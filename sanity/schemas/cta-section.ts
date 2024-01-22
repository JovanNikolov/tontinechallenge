export default {
    name: 'ctaSection',
    title: 'CTA Section',
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
        name: 'button',
        title: 'Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Text',
            type: 'string',
            validation: (Rule) => [
              Rule.required().min(1).max(20)
            ],
          },
          {
            name: 'link',
            title: 'Link',
            type: 'string',
            validation: (Rule) => [
              Rule.required()
            ],
          },
        ],
     },
     {
      name: 'bottom',
      title: 'Bottom Text',
      type: 'string',
     },
    ],
  };