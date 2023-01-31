import restaurant from '../../assets/data/restaurant.js';

export const featuredMenuCategories = [
    {
      id: "1",
      title: "Featured",
      description: "Paid placements from our partners",
      featuredCategory: "Featured",
    },
    {
      id: "2",
      title: "Testy Discounts",
      description: "Why not support your local restaurant tonight",
      featuredCategory: "Discounts",
    },
    {
      id: "3",
      title: "Offers near you!",
      description: "Offers near you!",
      featuredCategory: "NearbBy",
    },
  ]

  export default featuredMenuCategories;
  
//     {
//       name: 'short_description',
//       title: 'Short Description',
//       type: 'string',
//       validation: (Rule) => Rule.max(200),
//     },
//     {
//       name: "restoraunts",
//       title: "Restaurants",
//       type: "array",
//       of: [{ type: "reference", to: [{ type: "restaurant" }] }],
//     },
//     // {
//     //   name: 'price',
//     //   title: 'Price of the dish in GBP',
//     //   type: 'number',
//     // },
//     // {
//     //   name: 'image',
//     //   title: 'Image of the Dish',
//     //   type: 'image',

//     // },
//   ]
// }