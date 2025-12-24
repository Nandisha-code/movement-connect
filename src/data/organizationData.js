/**
 * Mock data for AISF and AIYF organizations
 * This data is used throughout the application to switch content dynamically
 */

export const organizationData = {
  aisf: {
    id: 'aisf',
    name: 'All India Student Federation',
    shortName: 'AISF',
    tagline: 'Unite, Struggle, Progress!',
    slogan: 'Study And Struggle',
    description: "The All India Students’ Federation (AISF) is India’s oldest and most influential student movement, uniting students across the country to defend education rights, academic freedom, and social justice, while striving for accessible, democratic, and quality education for all.",
    founded: '1936',
    heroSubtitle: 'A united student movement defending education, democracy, and social justice through knowledge, equality, and resistance since 1936',
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/AISF_Flag.svg/2560px-AISF_Flag.svg.png",
    
    about: {
      history: "AISF was founded on 12 August 1936 during India’s freedom movement. The foundation conference was held at Ganga Prasad Memorial Hall, Lucknow, with the participation of 936 delegates from across India. The historic conference was inaugurated by Jawaharlal Nehru and presided over by Muhammad Ali Jinnah, marking a significant moment in the organization of the student movement at the national level. During this conference, the decision to establish the All India Students Federation (AISF) was formally adopted, and Prem Narayan Bhargava was elected as the first General Secretary, laying the foundation for a united, progressive student organization in India.",
      ideology: "AISF follows a progressive, democratic, and anti-imperialist ideology, rooted in the values of India’s freedom movement. It stands against colonialism, fascism, feudalism, communalism, and separatist forces, while supporting national unity, social justice, and students’rights.",
      mission: "AISF’s mission is to organize and unite students to defend democratic rights, promote quality and accessible education, resist oppression, and actively participate in struggles for social, political, and national causes affecting the country.",
      vision: "AISF envisions a united, secular, and progressive India where students play a leading role in building an egalitarian society based on equality, peace, scientific thinking, and democratic values.",
    },

    leaders: [
      { id: 1, name: 'Satyapal Dang', role: 'National President', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sat_Pal_Dang_addressing._Sohan_Singh_Bhakna._Funeral._21_Dec_1968.jpg/250px-Sat_Pal_Dang_addressing._Sohan_Singh_Bhakna._Funeral._21_Dec_1968.jpg', description: 'Leading the student organisation in 29–31 December 1947' },
      { id: 2, name: 'Shambhu Sharan Shrivastava', role: 'National President', image: '/placeholder.svg', description: 'Organizing students across 28 states' },
      { id: 3, name: '	Atul Kumar Anjan', role: 'National President', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Atul_anjan.jpg/500px-Atul_anjan.jpg', description: 'General Secretary of the All India Kisan Sabha' },
      { id: 4, name: 'Ravindra Nath Rai', role: 'National President', image: '/placeholder.svg', description: 'Advocating for student welfare' },
      { id: 5, name: 'Mohammed Ali', role: 'Treasurer', image: '/placeholder.svg', description: 'Managing organizational resources' },
      { id: 6, name: 'Dodda Basavaraj', role: 'State Secretary 2025', image: '/Hdb.jpeg', description: 'Students rights activist' },
    ],

    campaigns: [
      { id: 1, title: 'Education for All', description: 'Campaign against privatization of education and for implementation of Right to Education Act in true spirit.', year: '2025', status: 'Ongoing' },
      { id: 2, title: 'Fee Reduction Movement', description: 'Nationwide agitation against arbitrary fee hikes in universities and colleges.', year: '2023', status: 'Victory' },
      { id: 3, title: 'Save Public Universities', description: 'Protecting public-funded universities from budget cuts and commercialization.', year: '2025', status: 'Ongoing' },
      { id: 4, title: 'Student Safety Campaign', description: 'Demanding safe hostels, transportation, and campus environment for all students.', year: '2023', status: 'Victory' },
      { id: 5, title: 'Digital Divide Bridge', description: 'Fighting for equal access to digital education resources for rural and marginalized students.', year: '2025', status: 'Ongoing' },
      { id: 6, title: 'Anti-Ragging Drive', description: 'Zero tolerance campaign against ragging in educational institutions.', year: '2025', status: 'Ongoing' },
    ],

    contact: {
      address: 'Ghate Bhavan Sankey Tanky Cross Rd Malleshwaram, Bengaluru, Karnataka 560003',
      email: 'nandish.trg@gmail.com',
      phone: '+91-8088361411',
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
    description: "The All India Youth Federation (AIYF) is a nationwide progressive youth movement mobilising young people to fight unemployment, inequality, and injustice, while actively contributing to peace, democratic values, and the building of a just and inclusive India.",
    founded: '1959',
    heroSubtitle: 'A dynamic youth force mobilising India’s youth to lead movements for peace, progress, justice, and social transformation since 1959',
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Aiyf.svg/1280px-Aiyf.svg.png",

    about: {
      history: 'Established in 1959, AIYF was born from the vision of creating a unified platform for India\'s youth to address their concerns and contribute to national development. It has been at the forefront of youth movements for over six decades.',
      ideology: 'AIYF believes in the transformative power of youth. We stand for secularism, scientific temper, democracy, and the rights of working youth. Our ideology centers on employment, dignity, and empowerment.',
      mission: 'To organize the youth of India for their rights, employment opportunities, and active participation in democratic processes. We fight against unemployment, exploitation, and work towards a just society.',
      vision: 'An India where every young person has dignified employment, equal opportunities, and the power to shape the nation\'s future. A society free from discrimination where youth lead the change.',
    },

    leaders: [
      { id: 1, name: 'Santhosh H M', role: 'Karnataka State Secratory', image: '/Santhosh_sir.jpeg', description: 'Championing youth employment since 2010' },
      { id: 2, name: 'Kavita Rao', role: 'General Secretary', image: '/placeholder.svg', description: 'Building youth networks nationwide' },
      { id: 3, name: 'Sanjay Patel', role: 'Vice President', image: '/placeholder.svg', description: 'Fighting for workers\' rights' },
      { id: 4, name: 'Meera Krishnan', role: 'Joint Secretary', image: '/placeholder.svg', description: 'Advocating for rural youth' },
      { id: 5, name: 'Imran Khan', role: 'Treasurer', image: '/placeholder.svg', description: 'Financial management expert' },
      { id: 6, name: 'Lakshmi Nair', role: 'National Executive Member', image: '/placeholder.svg', description: 'Digital rights activist' },
    ],

    campaigns: [
      { id: 1, title: 'Employment Guarantee', description: 'Demanding implementation of comprehensive employment guarantee for youth.', year: '2025', status: 'Ongoing' },
      { id: 2, title: 'Skill India Reality Check', description: 'Ensuring Skill India benefits reach the grassroots youth.', year: '2025', status: 'Ongoing' },
      { id: 3, title: 'Stop Contractualization', description: 'Fighting against contract labor system and for permanent jobs.', year: '2023', status: 'Victory' },
      { id: 4, title: 'Youth Mental Health', description: 'Campaign for mental health support systems for young people.', year: '2025', status: 'Ongoing' },
      { id: 5, title: 'Digital Rights Movement', description: 'Protecting privacy and digital rights of youth in the internet age.', year: '2025', status: 'Ongoing' },
      { id: 6, title: 'Sports for All', description: 'Demanding sports infrastructure and opportunities in every district.', year: '2024', status: 'Victory' },
    ],

    contact: {
      address: "Ghate Bhavan Sankey Tanky Cross Rd Malleshwaram, Bengaluru, Karnataka 560003. ",
      email: 'nandish.trg@gmail.com',
      phone: ' +91-8088361411',
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
