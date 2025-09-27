import pimg1 from '../images/project/img-1.jpg'
import pimg2 from '../images/project/img-2.jpg'
import pimg3 from '../images/project/img-3.jpg'
import pimg4 from '../images/project/img-4.jpg'

import ps1img1 from '../images/project-single/img-1.jpg'
import ps1img2 from '../images/project-single/img-2.jpg'
import ps1img3 from '../images/project-single/img-3.jpg'
import ps1img4 from '../images/project-single/img-4.jpg'

import psub1img1 from '../images/project-single/p1.jpg'
import psub1img2 from '../images/project-single/p2.jpg'


const Projects = [
    {
       Id:'1',
       pImg:pimg1,
       ps1img:ps1img1,
       psub1img1:psub1img1,
       psub1img2:psub1img2,
       title:'Lookers',  
       subTitle:'Full Stack',  
       description:'Lookers is a web-based job search system designed to help job seekers find jobs that match their skills and location. It provides job search features, job seeker and company account management, and dynamic job data management through an admin panel.',
      location : 'Sleman, Special Region of Yogyakarta',
      duration: ' 4 Month',
      completion: '12 Dec 2022',
      ourapproach: 'We built this system using PHP as the primary programming language, employing a full-stack development approach. This system allows companies to post job openings, and job seekers to create profiles and apply directly through the platform.',
      programminglanguague: 'Programming Language: PHP, HTML, CSS, JavaScript, and SQL',
      framework: 'Framework: Codeigniter',
      database: 'Database: SQL',
      library: 'Library: password_hash(), password_verify(), and mysqli',
      platform: 'Platform: Web', 
    },
    {
       Id:'2',
       pImg:pimg2,
       ps1img:ps1img2,
       psub1img1:psub1img1,
       psub1img2:psub1img2,
       title:'Mavis Betta Fish', 
       subTitle:'Web Design',  
       description:'Mavis Betta Fish is a web marketplace platform for buying and selling betta fish that allows direct interaction between sellers and buyers. The system is designed to support three types of users: admins, sellers, and buyers. Sellers can register and manage their own stores and products, while buyers can create accounts, browse betta fish catalogs from various sellers, and make purchases through the available ordering system.',
      location : 'Sleman, Special Region of Yogyakarta',
      duration: '4 Month',
      completion: '12 Dec 2025',
      ourapproach: 'We built this system from scratch using a full-stack approach with native PHP. Key features include user registration and login, product management by sellers, a shopping cart system, an order form, and an admin dashboard to manage all platform activity. The UI/UX is responsive for comfortable use on both mobile and desktop devices.',
      programminglanguague: 'Programming Language: Python, HTML, CSS, JavaScript, Cypher, and SQL',
      framework: 'Framework: Codeigniter',
      database: 'Database: SQL',
      library: 'Library: Flask, Bootstrap, jQuery, and Font Awesome',
      platform: 'Platform: Web',  
    },
    {
      Id:'3',
      pImg:pimg3,
      ps1img:ps1img3,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title:'Localine',  
      subTitle:'Web Design',
      description:'This project is named LINE, which stands for Local Innovation Network. The platform is designed to serve as a bridge connecting usaha mikro, kecil, dan menengah (UMKM) with buyers, both in Indonesia and worldwide. With a name that implies connectivity, LINE focuses on creating an ecosystem that facilitates the distribution of local products to global markets. Through this platform, local products can be promoted and marketed in a more modern and effective way, enabling UMKM to grow and compete at a higher level. LINE aims to enhance the competitiveness of local products, empower UMKM, and expand their market reach.',
      location : 'Sleman, Special Region of Yogyakarta',
      duration: '1 Month',
      completion: '4 Oct 2024',
      ourapproach: 'LINE, which stands for Local Innovation Network, aims to connect micro, small, and medium enterprises (MSMEs) with buyers in Indonesia and around the world. This platform facilitates the distribution of local products to the global market in a more modern and effective manner, increasing MSME competitiveness and expanding their market reach.',
      programminglanguague: 'Programming Language: HTML, CSS, and JavaScript',
      framework: 'Framework: Next.js',
      database: 'Database: No Database',
      library: 'Library: React, Next.js, and Tailwind CSS',
      platform: 'Platform: Web', 
        
   },
   {
      Id:'4',
      pImg:pimg4,
      ps1img:ps1img4,
      psub1img1:psub1img1,
      psub1img2:psub1img2,
      title:'YogTrip', 
      subTitle:'Fullstack',  
      description:'YogTrip is a web-based Yogyakarta tour package recommendation system that utilizes knowledge graph and uses the Path Ranking Algorithm to provide accurate and relevant travel suggestions for users.',
      location : 'Sleman, Special Region of Yogyakarta',
      duration: '7 Month',
      completion: '10 Jul 2025',
      ourapproach: 'I integrate tourism, accommodation, and restaurant data into a knowledge graph, then apply the Path Ranking Algorithm to find the best recommended route, so that every traveler gets a travel package that suits their preferences.',
      programminglanguague: 'Programming Language: Python, HTML, CSS, JavaScript, Cypher, and SQL',
      framework: 'Framework:Flask',
      database: 'Database: SQL and Neo4j',
      library: 'Library: Flask, Flask-SQLAlchemy, Flask-Migrate, werkzeug.security, neo4j, and json',
      platform: 'Platform: Web',
   },
   
    
]

export default Projects;