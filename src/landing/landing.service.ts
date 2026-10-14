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
        { label: 'Classic', icon: 'icon-classic' },
        { label: 'Gourmet', icon: 'icon-gourmet' },
        { label: 'Desserts', icon: 'icon-desserts' },
        { label: 'Cookies', icon: 'icon-cookies' },
      ],
      products: this.getBestsellers().map((p) => ({
        ...p,
        stars: Array.from({ length: 5 }, (_, i) => i < p.rating),
      })),
      promises: [
        { label: ['On-time', 'Delivery'], icon: 'icon-clock' },
        { label: ['5000+', 'Designs'], icon: 'icon-truck' },
        { label: ['2 Cr+', 'Orders'], icon: 'icon-orders' },
        { label: ['Baked', 'Fresh'], icon: 'icon-fresh' },
      ],
      gallery: [
        { image: '/img/g-1.webp', caption: 'Royal Celebration' },
        { image: '/img/g-2.webp', caption: 'Berry Bliss' },
        { image: '/img/g-3.webp', caption: 'Birthday Special' },
        { image: '/img/g-4.webp', caption: 'Chocolate Collection' },
        { image: '/img/g-5.webp', caption: 'Baked Fresh Daily' },
        { image: '/img/g-6.webp', caption: 'Custom Celebrations' },
      ],
      avatars: [1, 2, 3, 4, 5].map((n) => `/img/a-${n}.webp`),
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
      { name: 'Rich Chocolate Truffle Cake', image: '/img/p-truffle.webp', price: 500, tag: 'Bestseller', rating: 5, reviews: 500 },
      { name: 'Choco Chip Truffle Cake', image: '/img/p-chocochip.webp', price: 509, tag: 'Bestseller', rating: 5, reviews: 300 },
      { name: 'Tropical Fruit N Almond Cake', image: '/img/p-tropical.webp', price: 509, tag: 'Bestseller', rating: 5, reviews: 308 },
      { name: 'Rich Butterscotch Crunch Cake', image: '/img/p-butterscotch.webp', price: 359, tag: 'Bestseller', rating: 4, reviews: 308 },
    ];
  }
}
