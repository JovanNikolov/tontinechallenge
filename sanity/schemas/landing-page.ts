export default {
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required().min(3).max(50),
      },
      {
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
            {
                name: 'sectionType',
                title: 'Section Type',
                type: 'reference',
                to: [
                  { type: 'ctaSection' },
                  { type: 'infoSection' },
                ],
              },
            ],
      },
    ],
  };