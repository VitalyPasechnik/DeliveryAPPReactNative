export default {
  name: 'featured',
	title: 'Featured Menu categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restoraunts",
      title: "Restaurants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
    // {
    //   name: 'price',
    //   title: 'Price of the dish in GBP',
    //   type: 'number',
    // },
    // {
    //   name: 'image',
    //   title: 'Image of the Dish',
    //   type: 'image',

    // },
  ]
}