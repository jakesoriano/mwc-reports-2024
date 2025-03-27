export type NavItem = {
  name: string;
  url: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    name: 'Our Report',
    url: '#',
    children: [
      {
        name: 'Statement of Responsibility from the Board of Directors',
        url: '/our-report/executive-board-statement-of-resonsibility',
      },
      {
        name: 'Purpose, Mission, Vision & Core Values',
        url: '/our-report/purpose-mission-vision-core-value',
      },
      {
        name: 'Message of the Chairman',
        url: '/our-report/message-of-the-chairman',
      },
      {
        name: 'Message of the President and CEO',
        url: '/our-report/message-of-the-president-and-ceo',
      },
      {
        name: 'Financial and Sustainability Highlights',
        url: '/our-report/financial-and-sustainability-highlights',
      },
    ],
  },
  {
    name: 'Creating Shared Value',
    url: '#',
  },
  {
    name: 'Our Business Review',
    url: '#',
  },
  {
    name: 'Our Corporate Governance',
    url: '#',
  },
  {
    name: 'Annexes',
    url: '#',
  },
];
