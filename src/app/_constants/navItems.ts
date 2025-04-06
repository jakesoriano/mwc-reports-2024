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
      {
        name: 'Geographic Presence',
        url: '/our-report/geographic-presence',
      },
      {
        name: 'Board of Directors',
        url: '/our-report/board-of-directors',
      },
    ],
  },
  {
    name: 'Creating Shared Value',
    url: '#',
    children: [
      {
        name: 'Value Creation Framework',
        url: '/creating-shared-values/value-creation-framework',
      },
      {
        name: 'Outlook and Strategy',
        url: '/creating-shared-values/outlook-and-strategy',
      },
      {
        name: 'Risk Management',
        url: '/creating-shared-values/risk-management',
      },
      {
        name: 'Our Sustainability Approach',
        url: '/creating-shared-values/our-sustainability-approach',
        children: [
          {
            name: 'Stakeholder Engagement',
            url: '/creating-shared-values/our-sustainability-approach/stakeholder-engagement',
          },
          {
            name: 'Determining What Matters',
            url: '/creating-shared-values/our-sustainability-approach/determining-what-matters',
          },
          {
            name: 'Helping Communities Thrive',
            url: '/creating-shared-values/our-sustainability-approach/helping-communities-thrive',
          },
          {
            name: 'Protecting the Environment',
            url: '/creating-shared-values/our-sustainability-approach/protecting-the-environment',
          },
          {
            name: 'Building a Culture of Trust and Care',
            url: '/creating-shared-values/our-sustainability-approach/building-a-culture',
          },
        ],
      },
      {
        name: 'Manila Water Foundation',
        url: '/creating-shared-values/manila-water-foundation',
      },
    ],
  },
  {
    name: 'Our Business Review',
    url: '#',
    children: [
      {
        name: 'Consolidated Performance',
        url: '/our-business-review/consolidated-performance',
      },
      {
        name: 'East Zone Concession',
        url: '/our-business-review/east-zone-concession',
      },
      {
        name: 'Non-East Zone Philippines',
        url: '/our-business-review/non-east-zone-philippines',
      },
      {
        name: 'Non-East Zone International Businesses',
        url: '/our-business-review/non-east-zone-international',
      },
      {
        name: 'Our Corporate Governance',
        url: '#',
      },
    ],
  },
  {
    name: 'Annexes',
    url: '#',
  },
];
