import { CommercialExperience } from './commercial-experience.interface';

export const MY_WORKPLACES: CommercialExperience[] = [
  {
    name: 'Freelancing',
    url: null,
    role: 'Webmaster, Web Developer',
    description: [
      'Created and deployed multiple websites using CMS\'s.',
      'Adjusted websites using HTML, CSS and JavaScript.',
      'Launched a business focused on enhancing effectiveness of musicians.',
    ],
    years: {
      since: 2014,
      till: 2016
    },
    noLogo: true
  },
  {
    name: 'Explain Everything',
    url: 'https://explaineverything.com',
    role: 'Project Manager, Product Owner',
    description: [
      'Organized meetings, prioritized work. Managed team and backlog.',
      'Coordinated software development, monitored deadlines and costs.',
      'Tested applications and was responsible for:',
      ' - Web-version of Explain Everything,',
      ' - Custom HTML5 player.',
      ' - Design and development of User Activity Analytics Panel.',
      ' - Managing short term projects.',
    ],
    years: {
      since: 2016,
      till: 2017
    }
  },
  {
    name: 'Wirtualne Wycieczki',
    url: 'http://wirtualnewycieczki.org',
    role: 'Founder',
    description: [
      'Planned and carried out the launch of a company offering',
      'educational VR services.',
      'Arranged getting funded by the city of Wrocław.',
      'Prepared VR hardware and software to take big groups of students',
      'on virtual field trips simultaneously.',
      'Worked with clients to sell and improve offered services.',
    ],
    years: {
      since: 2017,
      till: null
    }
  },
  {
    name: 'Veovo',
    url: 'https://veovo.com',
    role: 'Angular Developer',
    description: [
      'In charge of creating modules and whole apps used by airport',
      'employees in multiple countries. Written inAngular 4.',
      'Created software documentation.',
      'Created unit and E2E tests using Karma, Protractor and Cucumber.',
      'In close cooperation with team in New Zealand.',
    ],
    years: {
      since: 2018,
      till: 2019
    }
  },
  {
    name: 'Monterail',
    url: 'https://monterail.com',
    role: 'Lead Angular Developer',
    description: [
      'In charge of migrating an app used for network administration',
      'from angularJS to Angular 8.',
      'Created unit tests using Jasmine and Karma.',
      'In close cooperation with clients from U.S.',
    ],
    years: {
      since: 2019,
      till: null,
    }
  }
];

