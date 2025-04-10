export type NavItem = {
  name: string;
  url: string;
  target: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    name: 'Our Report',
    url: '#',
    target: '_self',
    children: [
      {
        name: 'Statement of Responsibility from the Board of Directors',
        url: '/our-report/executive-board-statement-of-resonsibility',
        target: '_self'
      },
      {
        name: 'Purpose, Mission, Vision & Core Values',
        url: '/our-report/purpose-mission-vision-core-value',
        target: '_self'
      },
      {
        name: 'Message of the Chairman',
        url: '/our-report/message-of-the-chairman',
        target: '_self'
      },
      {
        name: 'Message of the President and CEO',
        url: '/our-report/message-of-the-president-and-ceo',
        target: '_self'
      },
      {
        name: 'Financial and Sustainability Highlights',
        url: '/our-report/financial-and-sustainability-highlights',
        target: '_self'
      },
      {
        name: 'Geographic Presence',
        url: '/our-report/geographic-presence',
        target: '_self'
      },
      {
        name: 'Board of Directors',
        url: '/our-report/board-of-directors',
        target: '_self'
      },
    ],
  },
  {
    name: 'Creating Shared Value',
    url: '#',
    target: '_self',
    children: [
      {
        name: 'Value Creation Framework',
        url: '/creating-shared-values/value-creation-framework',
        target: '_self'
      },
      {
        name: 'Outlook and Strategy',
        url: '/creating-shared-values/outlook-and-strategy',
        target: '_self'
      },
      {
        name: 'Risk Management',
        url: '/creating-shared-values/risk-management',
        target: '_self'
      },
      {
        name: 'Our Sustainability Approach',
        url: '/creating-shared-values/our-sustainability-approach',
        target: '_self',
        children: [
          {
            name: 'Stakeholder Engagement',
            url: '/creating-shared-values/our-sustainability-approach/stakeholder-engagement',
            target: '_self'
          },
          {
            name: 'Determining What Matters',
            url: '/creating-shared-values/our-sustainability-approach/determining-what-matters',
            target: '_self'
          },
          {
            name: 'Helping Communities Thrive',
            url: '/creating-shared-values/our-sustainability-approach/helping-communities-thrive',
            target: '_self'
          },
          {
            name: 'Protecting the Environment',
            url: '/creating-shared-values/our-sustainability-approach/protecting-the-environment',
            target: '_self'
          },
          {
            name: 'Building a Culture of Trust and Care',
            url: '/creating-shared-values/our-sustainability-approach/building-a-culture',
            target: '_self'
          },
        ],
      },
      {
        name: 'Manila Water Foundation',
        url: '/creating-shared-values/manila-water-foundation',
        target: '_self'
      },
    ],
  },
  {
    name: 'Our Business Review',
    url: '#',
    target: '_self',
    children: [
      {
        name: 'Consolidated Performance',
        url: '/our-business-review/consolidated-performance',
        target: '_self'
      },
      {
        name: 'East Zone Concession',
        url: '/our-business-review/east-zone-concession',
        target: '_self'
      },
      {
        name: 'Non-East Zone Philippines',
        url: '/our-business-review/non-east-zone-philippines',
        target: '_self'
      },
      {
        name: 'Non-East Zone International Businesses',
        url: '/our-business-review/non-east-zone-international',
        target: '_self'
      },
      {
        name: 'Corporate Governance',
        url: '/our-business-review/corporate-governance',
        target: '_self'
      },
      {
        name: 'Awards & Citations',
        url: '/our-business-review/awards-citations',
        target: '_self'
      },
    ],
  },
  {
    name: 'Annexes',
    url: '#',
    target: '_self',
    children: [
      {
        name: 'Financial Report',
        url: '/downloads/2024-Financial-Report.pdf',
        target: '_blank'
      },
      {
        name: 'Independent Assurance Statement',
        url: '/downloads/Independent-Assurance-Opinion-Statement.pdf',
        target: '_blank'
      },
      {
        name: 'Watershed Management Report',
        url: '/downloads/2024-Watershed-Management-Report.pdf',
        target: '_blank'
      },
      {
        name: 'Sustainability Content Index',
        url: '/downloads/Sustainability-Content-Index.pdf',
        target: '_blank'
      },
      {
        name: 'ESG Performance Data',
        url: '/downloads/ESG-Performance-Data.pdf',
        target: '_blank'
      },
    ],
  },
];
