import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      "I'm baby air plant cupping humblebrag man bun. Grailed raw denim artisan shoreditch YOLO farm-to-table activated charcoal quinoa hoodie jianbing vegan occupy humblebrag roof party. Pinterest 3 wolf moon mlkshk offal ugh.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      "Gochujang pabst meditation lyft la croix shoreditch offal four dollar toast umami deep v 90's vape mukbang. Mukbang YOLO pabst pop-up. Vaporware wolf subway tile four dollar toast iPhone craft beer air plant, lumbersexual gorpcore.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      "Gorpcore truffaut thundercats, actually polaroid trust fund organic disrupt. Subway tile tonx sus bespoke paleo. Taiyaki gluten-free messenger bag cupping shaman squid 90's.",
  },
]

// export const products_url = 'https://course-api.com/react-store-products'

export const products_url = '/.netlify/functions/products'

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`

export const single_product_url = `/.netlify/functions/single-product?id=`
