import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'What Is Staking?',
          href: getPermalink('/homes/staking'),
        },
        {
          text: 'Staking Bitcoin',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Stake ETH',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Custodians',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Protocols',
      links: [
        {
          text: 'Ethereum',
          href: getPermalink('/#features'),
        },
        {
          text: 'Solana',
          href: getPermalink('/services'),
        },
        {
          text: 'Binance',
          href: getPermalink('/pricing'),
        },
        {
          text: 'BASE',
          href: getPermalink('/about'),
        },
        {
          text: 'View All Crypto',
          href: getPermalink('/contact'),
        },
        
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'APP STAKING', href: 'https://linktr.ee/reystaking', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Blockchains',
      links: [
        { text: 'Ethereum', href: '#' },
        { text: 'Solana', href: '#' },
        { text: 'Binance', href: '#' },
        { text: 'BASE', href: '#' },
        { text: 'Cosmos', href: '#' },
        { text: 'Avalanche', href: '#' },
        { text: 'View All Chains', href: '#' },
      ],
    },
    {
      title: 'Staking',
      links: [
        { text: 'What is Staking?', href: '/staking' },
        { text: 'Stake Bitcoin', href: '#' },
        { text: 'Stake Ethereum', href: '#' },
        { text: 'Protocols', href: '#' },
        { text: 'View All Crypto', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://skyro.xyz"> Rey</a> ·2025 Rey.Fan All Rights Reserved.
  `,
};
