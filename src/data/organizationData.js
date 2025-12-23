/**
 * Mock data for AISF and AIYF organizations
 * This data is used throughout the application to switch content dynamically
 */

export const organizationData = {
  aisf: {
    id: 'aisf',
    name: 'All India Students\' Federation',
    shortName: 'AISF',
    tagline: 'Unite, Struggle, Progress!',
    slogan: 'Students of India, Unite!',
    description: 'The All India Students\' Federation (AISF) is the oldest and largest student organization in India, fighting for the rights of students and quality education for all.',
    founded: '1936',
    heroSubtitle: 'Building a progressive student movement since 1936',
    
    about: {
      history: 'Founded on August 12, 1936, in Lucknow, AISF emerged during India\'s freedom struggle as the voice of students. It has played a pivotal role in shaping India\'s educational policies and student rights movement for over eight decades.',
      ideology: 'AISF stands for scientific temper, secularism, democracy, and social justice. We believe in the power of education to transform society and the importance of student unity in achieving progressive change.',
      mission: 'To organize students across India for the cause of quality education, student rights, and social transformation. We fight against commercialization of education and work towards making education accessible to all.',
      vision: 'A society where every student has access to quality education, where scientific thinking prevails over superstition, and where the youth are the architects of a progressive, secular, and just India.',
    },

    leaders: [
      { id: 1, name: 'Vikram Singh', role: 'National President', image: '/placeholder.svg', description: 'Leading the student movement since 2020' },
      { id: 2, name: 'Priya Sharma', role: 'General Secretary', image: '/placeholder.svg', description: 'Organizing students across 28 states' },
      { id: 3, name: 'Rahul Kumar', role: 'Vice President', image: '/placeholder.svg', description: 'Champion of educational reforms' },
      { id: 4, name: 'Anjali Verma', role: 'Joint Secretary', image: '/placeholder.svg', description: 'Advocating for student welfare' },
      { id: 5, name: 'Mohammed Ali', role: 'Treasurer', image: '/placeholder.svg', description: 'Managing organizational resources' },
      { id: 6, name: 'Sunita Devi', role: 'National Executive Member', image: '/placeholder.svg', description: 'Women\'s rights activist' },
    ],

    campaigns: [
      { id: 1, title: 'Education for All', description: 'Campaign against privatization of education and for implementation of Right to Education Act in true spirit.', year: '2024', status: 'Ongoing' },
      { id: 2, title: 'Fee Reduction Movement', description: 'Nationwide agitation against arbitrary fee hikes in universities and colleges.', year: '2023', status: 'Victory' },
      { id: 3, title: 'Save Public Universities', description: 'Protecting public-funded universities from budget cuts and commercialization.', year: '2023', status: 'Ongoing' },
      { id: 4, title: 'Student Safety Campaign', description: 'Demanding safe hostels, transportation, and campus environment for all students.', year: '2022', status: 'Victory' },
      { id: 5, title: 'Digital Divide Bridge', description: 'Fighting for equal access to digital education resources for rural and marginalized students.', year: '2021', status: 'Ongoing' },
      { id: 6, title: 'Anti-Ragging Drive', description: 'Zero tolerance campaign against ragging in educational institutions.', year: '2020', status: 'Ongoing' },
    ],

    contact: {
      address: 'AISF Central Office, Ajoy Bhavan, 15 Kotla Marg, New Delhi - 110002',
      email: 'contact@aisf.in',
      phone: '+91-11-2323-4567',
      social: {
        twitter: 'https://twitter.com/aisfindia',
        facebook: 'https://facebook.com/aisfindia',
        instagram: 'https://instagram.com/aisfindia',
        youtube: 'https://youtube.com/aisfindia',
      },
    },

    highlights: [
      { title: '88+ Years', subtitle: 'of Student Activism' },
      { title: '10M+', subtitle: 'Students United' },
      { title: '28 States', subtitle: 'Nationwide Presence' },
      { title: '500+', subtitle: 'Successful Campaigns' },
    ],
  },

  aiyf: {
    id: 'aiyf',
    name: 'All India Youth Federation',
    shortName: 'AIYF',
    tagline: 'Youth Power, Nation\'s Future!',
    slogan: 'Youth of India, Rise!',
    description: 'The All India Youth Federation (AIYF) is India\'s premier youth organization, mobilizing young people for employment, social justice, and nation-building.',
    founded: '1959',
    heroSubtitle: 'Empowering India\'s youth since 1959',

    about: {
      history: 'Established in 1959, AIYF was born from the vision of creating a unified platform for India\'s youth to address their concerns and contribute to national development. It has been at the forefront of youth movements for over six decades.',
      ideology: 'AIYF believes in the transformative power of youth. We stand for secularism, scientific temper, democracy, and the rights of working youth. Our ideology centers on employment, dignity, and empowerment.',
      mission: 'To organize the youth of India for their rights, employment opportunities, and active participation in democratic processes. We fight against unemployment, exploitation, and work towards a just society.',
      vision: 'An India where every young person has dignified employment, equal opportunities, and the power to shape the nation\'s future. A society free from discrimination where youth lead the change.',
    },

    leaders: [
      { id: 1, name: 'Arun Mehta', role: 'National President', image: '/placeholder.svg', description: 'Championing youth employment since 2019' },
      { id: 2, name: 'Kavita Rao', role: 'General Secretary', image: '/placeholder.svg', description: 'Building youth networks nationwide' },
      { id: 3, name: 'Sanjay Patel', role: 'Vice President', image: '/placeholder.svg', description: 'Fighting for workers\' rights' },
      { id: 4, name: 'Meera Krishnan', role: 'Joint Secretary', image: '/placeholder.svg', description: 'Advocating for rural youth' },
      { id: 5, name: 'Imran Khan', role: 'Treasurer', image: '/placeholder.svg', description: 'Financial management expert' },
      { id: 6, name: 'Lakshmi Nair', role: 'National Executive Member', image: '/placeholder.svg', description: 'Digital rights activist' },
    ],

    campaigns: [
      { id: 1, title: 'Employment Guarantee', description: 'Demanding implementation of comprehensive employment guarantee for youth.', year: '2024', status: 'Ongoing' },
      { id: 2, title: 'Skill India Reality Check', description: 'Ensuring Skill India benefits reach the grassroots youth.', year: '2023', status: 'Ongoing' },
      { id: 3, title: 'Stop Contractualization', description: 'Fighting against contract labor system and for permanent jobs.', year: '2023', status: 'Victory' },
      { id: 4, title: 'Youth Mental Health', description: 'Campaign for mental health support systems for young people.', year: '2022', status: 'Ongoing' },
      { id: 5, title: 'Digital Rights Movement', description: 'Protecting privacy and digital rights of youth in the internet age.', year: '2021', status: 'Ongoing' },
      { id: 6, title: 'Sports for All', description: 'Demanding sports infrastructure and opportunities in every district.', year: '2020', status: 'Victory' },
    ],

    contact: {
      address: 'AIYF Central Office, Ajoy Bhavan, 15 Kotla Marg, New Delhi - 110002',
      email: 'contact@aiyf.in',
      phone: '+91-11-2323-7890',
      social: {
        twitter: 'https://twitter.com/aiyfindia',
        facebook: 'https://facebook.com/aiyfindia',
        instagram: 'https://instagram.com/aiyfindia',
        youtube: 'https://youtube.com/aiyfindia',
      },
    },

    highlights: [
      { title: '65+ Years', subtitle: 'of Youth Activism' },
      { title: '15M+', subtitle: 'Youth Mobilized' },
      { title: '28 States', subtitle: 'Nationwide Presence' },
      { title: '1000+', subtitle: 'Successful Campaigns' },
    ],
  },
};

export const getOrganizationData = (orgId) => {
  return organizationData[orgId] || organizationData.aisf;
};
