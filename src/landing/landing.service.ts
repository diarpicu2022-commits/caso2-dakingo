import { Injectable } from '@nestjs/common';

export interface Product {
  name: string;
  image: string;
  price: number;
  tag: string;
  rating: number;
  reviews: number;
}

@Injectable()
export class LandingService {
  getPage() {
    return {
      title: 'Dakingo — Online Bakery',
      nav: [
        'Cakes',
        'Theme Cakes',
        'Desserts',
        'Birthday',
        'Hampers',
        'Anniversary',
        'Occasions',
        'Occasions',
      ],
      categories: [
        { label: 'Classic', image: '/img/mockup/c-classic.webp' },
        { label: 'Gourmet', image: '/img/mockup/c-gourmet.webp' },
        { label: 'Desserts', image: '/img/mockup/c-desserts.webp' },
        { label: 'Cookies', image: '/img/mockup/c-cookies.webp' },
      ],
      quickPicks: [
        { label: 'Cupcakes', image: '/img/mockup/m-1.webp' },
        { label: 'Chef specials', image: '/img/mockup/m-2.webp' },
        { label: 'Jar cakes', image: '/img/mockup/m-3.webp' },
      ],
      products: this.getBestsellers().map((p) => ({
        ...p,
        stars: Array.from({ length: 5 }, (_, i) => i < p.rating),
      })),
      promises: [
        { label: ['On-time', 'Delivery'], image: '/img/mockup/pr-delivery.webp' },
        { label: ['5000+', 'Designs'], image: '/img/mockup/pr-designs.webp' },
        { label: ['2 Cr+', 'Orders'], image: '/img/mockup/pr-orders.webp' },
        { label: ['Baked', 'Fresh'], image: '/img/mockup/pr-fresh.webp' },
      ],
      gallery: [
        { image: '/img/mockup/g-1.webp', caption: 'Royal Celebration' },
        { image: '/img/mockup/g-2.webp', caption: 'Berry Bliss' },
        { image: '/img/mockup/g-3.webp', caption: 'Birthday Special' },
        { image: '/img/mockup/g-4.webp', caption: 'Chocolate Collection' },
        { image: '/img/mockup/g-5.webp', caption: 'Baked Fresh Daily' },
        { image: '/img/mockup/g-6.webp', caption: 'Custom Celebrations' },
      ],
      avatars: [1, 2, 3, 4, 5].map((n) => `/img/mockup/a-${n}.webp`),
      footer: {
        brandLinks: ['Our Story', 'Contact Us', 'Locate Us', 'Media', 'Careers'],
        columns: [
          { title: 'Know Us', links: ['Contact Us', 'Blog'] },
          { title: 'Need Help', links: ['Cancellation And Refund', 'Privacy Policy'] },
          { title: 'More Info', links: ['Terms And Policy', 'Corporate Enquiries'] },
          { title: 'More Info', links: ['Coupons & Offers', 'Download App'] },
        ],
      },
    };
  }

  getBestsellers(): Product[] {
    return [
      { name: 'Rich Chocolate Truffle Cake', image: '/img/mockup/p-truffle.webp', price: 500, tag: 'Bestseller', rating: 5, reviews: 500 },
      { name: 'Choco Chip Truffle Cake', image: '/img/mockup/p-chocochip.webp', price: 509, tag: 'Bestseller', rating: 5, reviews: 300 },
      { name: 'Tropical Fruit N Almond Cake', image: '/img/mockup/p-tropical.webp', price: 509, tag: 'Bestseller', rating: 5, reviews: 308 },
      { name: 'Rich Butterscotch Crunch Cake', image: '/img/mockup/p-butterscotch.webp', price: 359, tag: 'Bestseller', rating: 4, reviews: 308 },
    ];
  }
}
