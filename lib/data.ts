import recrutement from '@/public/pages/home/services/service1.png';
import service1 from '@/public/assets/services/service1.png';
import service2 from '@/public/assets/services/service2.png';
import service3 from '@/public/assets/services/service3.png';
import service4 from '@/public/assets/services/service4.png';
import service5 from '@/public/assets/services/service5.png';
import service6 from '@/public/assets/services/service6.jpg';
import service7 from '@/public/assets/services/service7.png';
import service8 from '@/public/assets/services/service8.jpg';
import service9 from '@/public/assets/services/service9.jpg';
import service10 from '@/public/assets/services/service10.jpg';
import service11 from '@/public/assets/services/service11.jpg';
import service12 from '@/public/assets/services/service12.jpg';
import service13 from '@/public/assets/services/service13.jpg';
import service14 from '@/public/assets/services/service14.jpg';
import cdFlag from '@/public/assets/flag/cd.png';
import rwFlag from '@/public/assets/flag/rw.png';
import biFlag from '@/public/assets/flag/bi.png';
import tzFlag from '@/public/assets/flag/tz.png';
import tgFlag from '@/public/assets/flag/tg.png';
import ngFlag from '@/public/assets/flag/ng.png';
import gbFlag from '@/public/assets/flag/gb.png';
import ugFlag from '@/public/assets/flag/ug.png';
import bnFlag from '@/public/assets/flag/bn.png';
import aoFlag from '@/public/assets/flag/ao.png';
import keFlag from '@/public/assets/flag/ke.png';
import cgFlag from '@/public/assets/flag/cg.png';
import cmFlag from '@/public/assets/flag/cm.png';
import zmFlag from '@/public/assets/flag/zm.png';
import zaFlag from '@/public/assets/flag/za.png';
import deFlag from '@/public/assets/flag/de.png';
import ciFlag from '@/public/assets/flag/ci.png';
import snFlag from '@/public/assets/flag/sn.png';
import gnFlag from '@/public/assets/flag/gn.png';
import cdLogo from '@/public/assets/logo/cd.png';
import hrLogo from '@/public/assets/logo/hr.png';
import aoLogo from '@/public/assets/logo/ao.png';
import bnLogo from '@/public/assets/logo/bn.png';
import cgLogo from '@/public/assets/logo/cg.png';
import keLogo from '@/public/assets/logo/ke.png';
import ngLogo from '@/public/assets/logo/ng.png';
import rwLogo from '@/public/assets/logo/rw.png';
import tzLogo from '@/public/assets/logo/tz.png';
import tgLogo from '@/public/assets/logo/tg.png';
import ugLogo from '@/public/assets/logo/ug.png';
import zmLogo from '@/public/assets/logo/zm.png';
import zaLogo from '@/public/assets/logo/za.png';
import projetService from '@/public/assets/services/projet.png';
import recruitmentService from '@/public/assets/services/recruitment.png';
import personnelService from '@/public/assets/services/personnel.png';
import formationService from '@/public/assets/services/formation.png';
import avatar from '@/public/assets/bg/bg.avatar.png';
import avatarWomen from '@/public/assets/bg/bg.avatar.women.png';
import hr from '@/public/assets/entities/hr.jpg';
import jamon from '@/public/assets/entities/jamon.jpg';
import ifs from '@/public/assets/entities/ifs.jpg';
import ibs from '@/public/assets/entities/ibs.jpg';
import maintenance from '@/public/assets/entities/maintenance.jpg';
import environment from '@/public/assets/entities/environment.jpg';
import geo from '@/public/assets/entities/geo.jpg';
import vendis from '@/public/assets/entities/vendis.jpg';

import eacop from '@/public/EACOP.jpeg';
import cn from '@/public/cn.jpg';

import logo_vendis from '@/public/assets/logo/entities/vendis.png';
import logo_ibs from '@/public/assets/logo/entities/ibs.png';
import logo_maintenance from '@/public/assets/logo/entities/maintenance.png';
import logo_ifs from '@/public/assets/logo/entities/ifs.png';
import logo_geokatanga from '@/public/assets/logo/entities/geokatanga.png';
import logo_hr from '@/public/assets/logo/entities/hr.png';
import logo_env from '@/public/assets/logo/entities/itm_env.png';
import logo_jamon from '@/public/assets/logo/entities/jamon.png';

export const servicesHome: any = {
  fr: [
    {
      name: 'Recrutement et externalisation du personnel',
      icon: service1,
      description:
        "La gestion d'une main-d'œuvre flexible et qualifiée dans plusieurs régions peut s'avérer difficile. Nous proposons des services de recrutement et d'externalisation de la main-d'œuvre sur mesure qui s'adaptent aux besoins de votre entreprise. Que vous ayez besoin de personnel temporaire ou d'une gestion du personnel à long terme, nous nous occupons du recrutement, de l'intégration et de la conformité. En outre, nos solutions de gestion des effectifs vous permettent de vous concentrer sur votre cœur de métier, tandis que nous gérons toutes les responsabilités en matière de ressources humaines pour votre personnel.",
      image: recruitmentService,
      paragraph:
        "Donnez à votre entreprise les moyens de disposer de la main-d'œuvre adéquate, quand vous en avez besoin, et laissez-nous nous occuper du reste.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Recrutement et externalisation du personnel',
        arrow: true,
      },
    },
    {
      name: 'Recrutement et acquisition de talents',
      icon: service2,
      description:
        "Trouver les bonnes personnes est essentiel pour la croissance. Nos services de recherche de talents vous mettent en relation avec les meilleurs candidats, que vous cherchiez à pourvoir des postes spécialisés ou à embaucher à grande échelle. Nous utilisons une combinaison de technologie et d'expertise locale pour trouver la bonne personne pour votre entreprise.",
      image: personnelService,
      paragraph:
        'Découvrez les talents qui feront progresser votre entreprise.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Recrutement et acquisition de talents',
        arrow: true,
      },
    },
    {
      name: "TalentPro: Votre carrefour d'opportunités de carrière",
      icon: service3,
      description:
        "Prêt pour votre prochaine évolution de carrière ? TalentPro met en relation des professionnels qualifiés et des postes à pourvoir dans toute l'Afrique. C'est la plateforme idéale pour que les demandeurs d'emploi et les employeurs se rencontrent.",
      image: projetService,
      paragraph:
        'Trouvez votre prochaine opportunité ou embauchez les meilleurs talents.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: "TalentPro: Votre carrefour d'opportunités de carrière",
        arrow: true,
      },
    },
    {
      name: 'Gestion de payrolls',
      icon: service4,
      description:
        "La gestion des salaires peut s'avérer délicate, surtout lorsqu'il s'agit de régions différentes. Nous nous chargeons de la gestion des salaires pour vous, en veillant à ce que les employés soient payés à temps et dans le respect des lois locales.",
      image: personnelService,

      paragraph:
        "Grâce à nos services d'experts, la paie devient un jeu d'enfant.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Gestion de payrolls',
        arrow: true,
      },
    },
    {
      name: 'Services de conseil en RH',
      icon: service5,
      description:
        'Chaque entreprise est confrontée à des défis uniques en matière de ressources humaines. Nos services de conseil en ressources humaines vous aident à faire face à toutes les situations, de la planification de vos effectifs au respect des réglementations. Nous travaillons avec vous pour créer des stratégies RH qui répondent aux besoins de votre entreprise.',
      image: projetService,
      paragraph:
        'Résolvons ensemble vos défis en matière de ressources humaines.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Services de conseil en RH',
        arrow: true,
      },
    },
    {
      name: 'KaziPro: Votre solution en RH',
      icon: service6,
      description:
        'Améliorez vos processus RH avec notre logiciel RH facile à utiliser. De la gestion des salaires au suivi des performances, nos solutions technologiques facilitent vos tâches RH et les rendent plus efficaces.',
      image: formationService,
      paragraph:
        'Faites passer vos opérations RH à la vitesse supérieure grâce à une technologie intelligente.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'KaziPro: Votre solution en RH',
        arrow: true,
      },
    },
    {
      name: 'Formation et développement des compétences',
      icon: service7,
      description:
        "Investir dans le développement de votre équipe est la clé d'une réussite à long terme. Nos programmes de formation et de développement des compétences aident vos employés à progresser, qu'ils aient besoin d'améliorer leurs compétences existantes ou d'en acquérir de nouvelles. Nous adaptons les programmes à vos besoins.",
      image: recruitmentService,
      paragraph:
        'Aidez votre équipe à se développer et à réussir grâce à une formation sur mesure.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Formation et développement des compétences',
        arrow: true,
      },
    },
    {
      name: 'Executive Leadership Programs',
      icon: service8,
      description:
        'Nos programmes de leadership sont conçus pour les cadres supérieurs et les étoiles montantes de votre entreprise. Ils permettent de développer les compétences nécessaires pour diriger des équipes et relever des défis complexes, en particulier sur les marchés à croissance rapide.',
      image: formationService,
      paragraph: "Préparez vos dirigeants pour l'avenir.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Executive Leadership Programs',
        arrow: true,
      },
    },
    {
      name: "Pôle d'apprentissage et de développement",
      icon: service9,
      description:
        "Grâce à notre centre d'apprentissage et de développement en ligne, vos employés peuvent accéder aux supports de formation et aux cours à tout moment et en tout lieu. C'est un moyen souple et pratique d'assurer l'apprentissage et le développement de votre équipe.",
      image: projetService,
      paragraph:
        "Favorisez l'apprentissage continu grâce à notre plateforme en ligne.",
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: "Pôle d'apprentissage et de développement",
        arrow: true,
      },
    },
    {
      name: 'Solutions Team Building',
      icon: service10,
      description:
        "Des équipes fortes conduisent à des entreprises fortes. Nos activités de consolidation d'équipe sont conçues pour améliorer la communication, le travail d'équipe et la productivité. Elles sont amusantes, engageantes et adaptées aux besoins de votre équipe.",
      image: formationService,
      paragraph:
        'Rassemblez votre équipe grâce à des activités qui renforcent la confiance.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Solutions Team Building',
        arrow: true,
      },
    },
    {
      name: 'Analyse comparative des avantages sociaux et des salaires',
      icon: service11,
      description:
        "Offrir des avantages compétitifs est essentiel pour que votre équipe soit heureuse et productive. Nous vous aidons à concevoir des ensembles d'avantages sociaux et menons des enquêtes salariales dans différents secteurs d'activité, pays et fonctions pour vous assurer de rester compétitif.",
      image: recruitmentService,
      paragraph:
        'Fidéliser les meilleurs talents grâce à des avantages sociaux intéressants et à une rémunération équitable.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Analyse comparative des avantages sociaux et des salaires',
        arrow: true,
      },
    },
    {
      name: 'Gestion de Performance',
      icon: service12,
      description:
        "Le suivi des performances est essentiel pour une équipe productive. Nous vous aidons à mettre en place des systèmes permettant de suivre les objectifs, de fournir un retour d'information et de veiller à ce que votre équipe reste motivée. Il s'agit de faire en sorte que les gens restent sur la bonne voie pour réaliser de grandes choses.",
      image: projetService,
      paragraph:
        'Améliorez les performances de votre équipe grâce à des outils simples et efficaces.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Gestion de Performance',
        arrow: true,
      },
    },
    {
      name: 'Gestion des expatriés',
      icon: service13,
      description:
        "Lorsque l'on s'implante dans de nouvelles régions, la gestion des expatriés peut s'avérer difficile. Nous nous occupons des visas, du logement et de toutes les formalités administratives, afin que vos employés puissent s'installer en douceur et se concentrer sur leur travail.",
      image: recruitmentService,
      paragraph: 'Faciliter les missions des expatriés.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: 'Gestion des expatriés',
        arrow: true,
      },
    },
    {
      name: "Perspectives et analyse de la main-d'œuvre",
      icon: service14,
      description:
        "Prenez des décisions éclairées grâce à des informations basées sur des données. Notre service d'analyse des effectifs vous aide à comprendre la performance, l'engagement et la rotation des employés, afin que vous puissiez prendre des décisions plus intelligentes en matière de ressources humaines.",
      image: formationService,
      paragraph:
        'Transformez les données en informations exploitables pour prendre de meilleures décisions en matière de ressources humaines.',
      btnMore: {
        text: "LIRE D'AVANTAGE",
        link: '/fr/services',
        title: "Perspectives et analyse de la main-d'œuvre",
        arrow: true,
      },
    },
  ],
  en: [
    {
      name: 'Staffing and Workforce Outsourcing',
      icon: service1,
      description:
        "Managing a flexible, skilled workforce across multiple regions can be challenging. We offer tailor-made recruitment and workforce outsourcing services to suit your company's needs. Whether you need temporary staff or long-term personnel management, we take care of recruitment, integration and compliance. What's more, our workforce management solutions let you focus on your core business, while we manage all HR responsibilities for your staff.",
      image: recruitmentService,
      paragraph:
        'Empower your business with the right workforce, whenever you need it, and let us handle the rest.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Staffing and Workforce Outsourcing',
        arrow: true,
      },
    },
    {
      name: 'Recruitment and Talent Acquisition',
      icon: service2,
      description:
        "Finding the right people is essential for growth. Our talent sourcing services connect you with the best candidates, whether you're looking to fill specialized roles or hire at scale. We use a combination of technology and local expertise to find the right fit for your company.",
      image: personnelService,
      paragraph: 'Discover the talent that will drive your business forward.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Recrutment and Talent Acquisition',
        arrow: true,
      },
    },
    {
      name: 'TalentPro: Your Career Opportunities Hub',
      icon: service3,
      description:
        'Ready for your next career move? TalentPro connects skilled professionals with the right roles across Africa. It’s the perfect platform for job seekers and employers to meet.',
      image: projetService,
      paragraph: 'Find your next opportunity or hire the best talent.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'TalentPro: Your Career Opportunities Hub',
        arrow: true,
      },
    },
    {
      name: 'Payroll Management',
      icon: service4,
      description:
        'Payroll can be tricky, especially when dealing with different regions. We handle payroll management for you, ensuring employees are paid on time and in full compliance with local laws.',
      image: recruitmentService,

      paragraph: 'Make payroll stress-free with our expert services.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Payroll Management',
        arrow: true,
      },
    },
    {
      name: 'HR Advisory Services',
      icon: service5,
      description:
        'Every business has unique HR challenges. Our HR advisory services help you navigate everything from planning your workforce to staying compliant with regulations. We work with you to create HR strategies that meet your company’s needs.',
      image: formationService,
      paragraph: 'Let’s solve your HR challenges together.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'HR Advisory Services',
        arrow: true,
      },
    },
    {
      name: 'KaziPro: Your HR Technology Solution',
      icon: service6,
      description:
        'Upgrade your HR processes with our easy-to-use HR software. From managing payroll to tracking performance, our technology solutions help make your HR tasks easier and more efficient.',
      image: recruitmentService,
      paragraph:
        'Take your HR operations to the next level with smart technology.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'KaziPro: Your HR Technology Solution',
        arrow: true,
      },
    },
    {
      name: 'Training and Skills Development',
      icon: service7,
      description:
        'Investing in your team’s development is the key to long-term success. Our training and skills programs help your employees grow, whether they need to enhance existing skills or develop new ones. We customize programs to fit your needs.',
      image: projetService,
      paragraph: 'Help your team grow and succeed with tailored training.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Training',
        arrow: true,
      },
    },
    {
      name: 'Executive Leadership Programs',
      icon: service8,
      description:
        'Our leadership programs are designed for senior managers and rising stars in your company. These programs help build the skills needed to lead teams and navigate complex challenges, especially in fast-growing markets.',
      image: formationService,
      paragraph: 'Prepare your leaders for the future.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Executive Leadership Programs',
        arrow: true,
      },
    },
    {
      name: 'Learning and Development Hub',
      icon: service9,
      description:
        'With our online Learning and Development Hub, your employees can access training materials and courses anytime, anywhere. It’s a flexible and convenient way to keep your team learning and growing.',
      image: projetService,
      paragraph: 'Enable continuous learning with our online platform.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Learning and Development Hub',
        arrow: true,
      },
    },
    {
      name: 'Team Building Solutions',
      icon: service10,
      description:
        'Strong teams lead to strong businesses. Our team-building activities are designed to improve communication, teamwork, and productivity. They’re fun, engaging, and tailored to your team’s needs.',
      image: recruitmentService,
      paragraph: 'Bring your team together with activities that build trust.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Team Building Solutions',
        arrow: true,
      },
    },
    {
      name: 'Employee Benefits and Salary Benchmarking',
      icon: service11,
      description:
        'Offering competitive benefits is key to keeping your team happy and productive. We help you design benefits packages and conduct salary surveys across industries, countries, and roles to make sure you stay competitive.',
      image: formationService,
      paragraph: 'Retain top talent with great benefits and fair pay.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Employee Benefits and Salary Benchmarking',
        arrow: true,
      },
    },
    {
      name: 'Performance Management',
      icon: service12,
      description:
        'Keeping track of performance is crucial for a productive team. We help you set up systems to track goals, give feedback, and ensure your team stays motivated. It’s all about keeping people on track to achieve great things.',
      image: projetService,
      paragraph: 'Boost your team’s performance with simple, effective tools.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Performance Management',
        arrow: true,
      },
    },
    {
      name: 'Expatriate Management',
      icon: service13,
      description:
        'When expanding into new regions, managing expatriates can be a challenge. We take care of visas, housing, and all the paperwork, so your employees can settle in smoothly and focus on their work.',
      image: recruitmentService,
      paragraph: 'Make expatriate assignments easy and hassle-free.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Expatriate Management',
        arrow: true,
      },
    },
    {
      name: 'Workforce Insights and Analytics',
      icon: service14,
      description:
        'Make informed decisions with data-driven insights. Our workforce analytics service helps you understand employee performance, engagement, and turnover, so you can make smarter HR decisions.',
      image: formationService,
      paragraph: 'Turn data into actionable insights for better HR decisions.',
      btnMore: {
        text: 'READ MORE',
        link: '/en/services',
        title: 'Workforce Insights and Analytics',
        arrow: true,
      },
    },
  ],
};

export const entities = [
  {
    fr: 'RD Congo',
    en: 'DR Congo',
    name: 'ITM SARL',
    href: '/fr/cd',
    code: 'cd',
    flag: cdFlag,
    logo: cdLogo,
  },
  {
    fr: 'Tanzanie',
    en: 'Tanzania',
    name: 'ITM TANZANIA',
    href: '/en/tz',
    code: 'tz',
    flag: tzFlag,
    logo: tzLogo,
  },
  {
    fr: 'Togo',
    en: 'Togo',
    name: 'ITM TOGO',
    href: '/en/tg',
    code: 'tg',
    flag: tgFlag,
    logo: tgLogo,
  },
  {
    fr: 'Nigéria',
    en: 'Nigeria',
    name: 'ITM NIGERIA',
    href: '/en/ng',
    code: 'ng',
    flag: ngFlag,
    logo: ngLogo,
  },
  {
    fr: 'Gabon',
    en: 'Gabon',
    name: 'ITM GABON',
    href: '/en/gb',
    code: 'gb',
    flag: gbFlag,
    logo: hrLogo,
  },
  {
    fr: 'Uganda',
    en: 'Uganda',
    name: 'ITM UGANDA',
    href: '/en/ug',
    code: 'ug',
    flag: ugFlag,
    logo: ugLogo,
  },
  {
    fr: 'Bénin',
    en: 'Benin',
    name: 'ITM BENIN',
    href: '/fr/bj',
    code: 'bj',
    flag: bnFlag,
    logo: bnLogo,
  },
  {
    fr: 'Angola',
    en: 'Angola',
    name: 'ITM ANGOLA',
    href: '/en/ao',
    code: 'ao',
    flag: aoFlag,
    logo: aoLogo,
  },
  {
    fr: 'Kenya',
    en: 'Kenya',
    name: 'ITM KENYA',
    href: '/en/ke',
    code: 'ke',
    flag: keFlag,
    logo: keLogo,
  },
  {
    fr: 'Rwanda',
    en: 'Rwanda',
    name: 'ITM RWANDA',
    href: '/en/rw',
    code: 'rw',
    flag: rwFlag,
    logo: rwLogo,
  },
  {
    fr: 'Rép. du Congo',
    en: 'Congo Republic',
    name: 'ITM BRAZZA',
    href: '/fr/cg',
    code: 'cg',
    flag: cgFlag,
    logo: cgLogo,
  },
  {
    fr: 'Cameroun',
    en: 'Cameroun',
    name: 'ITM CAMEROUN',
    href: '/fr/cm',
    code: 'cm',
    flag: cmFlag,
    logo: hrLogo,
  },
  {
    fr: 'Burundi',
    en: 'Burundi',
    name: 'ITM BURUNDI',
    href: '/fr/bi',
    code: 'bi',
    flag: biFlag,
    logo: hrLogo,
  },
  {
    fr: 'Zambie',
    en: 'Zambia',
    name: 'ITM ZAMBIA',
    href: '/en/zm',
    code: 'zm',
    flag: zmFlag,
    logo: zmLogo,
  },
  {
    fr: 'Afrique du sud',
    en: 'South Africa',
    name: 'ITM KATOPE LTD.',
    href: '/en/za',
    code: 'za',
    flag: zaFlag,
    logo: zaLogo,
  },
  {
    fr: 'Allemagne',
    en: 'Germany',
    name: 'ITM NEXUS',
    href: '/en/de',
    code: 'de',
    flag: deFlag,
    logo: hrLogo,
  },
  {
    fr: "Côte d'Ivoire",
    en: 'Ivory Coast',
    name: 'Ivory Coast',
    href: '/fr/ci',
    code: 'ci',
    flag: ciFlag,
    logo: hrLogo,
  },
  {
    fr: 'Sénégal',
    en: 'Senegal',
    name: 'Sénégal',
    href: '/fr/sn',
    code: 'sn',
    flag: snFlag,
    logo: hrLogo,
  },
  {
    fr: 'Guinée',
    en: 'Guinea',
    name: 'ITM SARL',
    href: '/fr/gn',
    code: 'gn',
    flag: gnFlag,
    logo: cdLogo,
  },
];

export const organisations: any = {
  fr: [
    {
      image: hr,
      name: 'ITM RH',
      logo: logo_hr,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "ITM HR est la filiale d'ITM Holding spécialisée dans les solutions de ressources humaines. Notre expertise du droit du travail local et des meilleures pratiques en matière de ressources humaines garantit à nos clients des solutions sur mesure qui répondent à leurs besoins spécifiques. Avec plus de 15 000 employés sous notre gestion, nous nous attachons à les doter des compétences essentielles pour conduire l'excellence opérationnelle et contribuer au succès de nos clients.",
    },
    {
      image: maintenance,
      name: 'ITM MAINTENANCE',
      logo: logo_maintenance,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "ITM Maintenance est spécialisé dans les solutions de maintenance pour les industries telles que l'exploitation minière, la construction, la fabrication et la logistique. Nos techniciens assurent des réparations expertes sur site et en atelier, des programmes de formation personnalisés, ainsi que des mesures de maintenance préventive visant à prolonger la durée de vie des équipements, à minimiser les temps d'arrêt et à assurer la continuité des activités de nos clients.",
    },
    {
      image: geo,
      name: 'GEO-INTERNATIONAL',
      logo: logo_geokatanga,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "Geo-Katanga exploite plusieurs branches d'activité axées sur les services d'appui à l'exploitation minière, les fournitures chimiques et le génie civil. Notre offre de solutions minières est conçue pour aider les sociétés minières à préserver l'intégrité de l'environnement grâce à des produits géosynthétiques, à la protection contre la corrosion, à des systèmes de tuyauterie et à une gestion complète des eaux minières, y compris des services d'entretien.",
    },
    {
      image: ifs,
      name: 'ITM FINANCIAL SERVICES',
      logo: logo_ifs,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "ITM Financial Services (IFS), se spécialise dans les solutions financières complètes conçues pour soutenir la croissance des revenus des entreprises et des communautés africaines. Parallèlement à notre application fintech innovante, Kitoko Pay, qui simplifie la gestion de l'argent, les paiements et les transferts de fonds, nous fournissons un éventail complet de services financiers, y compris des solutions numériques de gestion de la paie, des services bancaires d'agence maîtresse et des services de transfert d'argent. Notre prestation de services est axée sur l'efficacité et la sécurité, garantissant des opérations financières transparentes pour nos clients.",
    },
    {
      image: environment,
      name: 'ITM ENVIRONMENT',
      logo: logo_env,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "ITM Environement utilise des technologies avancées et un personnel qualifié pour fournir des services efficaces de gestion des déchets et d'hygiène environnementale. Grâce à notre engagement en faveur de la durabilité et du bien-être de la communauté, nos solutions visent à promouvoir des environnements de vie plus propres et plus sains tout en soutenant le développement urbain durable.",
    },
    {
      image: vendis,
      name: 'VENDIS',
      logo: logo_vendis,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "Vendis propose des solutions de vente et de distribution aux entreprises de divers secteurs. Avec une expertise dans la distribution B2B et B2C, Vendis excelle dans l'élaboration de stratégies d'accès au marché sur mesure et dans l'exécution de campagnes d'activation de marque et de tournées de présentation percutantes. Spécialisés dans le commerce électronique, la distribution de masse et les services de voyage, y compris les réservations de vols et les forfaits vacances, nous nous engageons à optimiser les performances du marché et la croissance des revenus de nos clients.",
    },
    {
      image: jamon,
      name: 'JAMON',
      logo: logo_jamon,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "JAMON offre une large gamme de solutions de transport et de logistique, depuis les expéditions de marchandises et la location de remorques jusqu'au transport de différents produits. S'appuyant sur des technologies avancées de gestion de flotte et de suivi, nos équipes assurent des livraisons sûres et ponctuelles. Qu'il s'agisse de petits colis ou de projets de grande envergure, notre travail est axé sur la qualité et la fiabilité.",
    },
    {
      image: ibs,
      name: 'IBS',
      logo: logo_ibs,
      slogant: "Votre partenaire pour les solutions d'entreprise",
      description:
        "JAMON offre une large gamme de solutions de transport et de logistique, depuis les expéditions de marchandises et la location de remorques jusqu'au transport de différents produits. S'appuyant sur des technologies avancées de gestion de flotte et de suivi, nos équipes assurent des livraisons sûres et ponctuelles. Qu'il s'agisse de petits colis ou de projets de grande envergure, notre travail est axé sur la qualité et la fiabilité.",
    },
  ],
  en: [
    {
      image: hr,
      name: 'ITM HR',
      logo: logo_hr,
      slogant: 'Your busness Solutions partner',
      description:
        'ITM HR is the subsidiary of ITM Holding that specializes in Human Resource solutions. Our expertise in local labor laws and HR best practices ensures that our clients receive tailored solutions that meet their specific needs. With over 10,000 employees under our management, we we focus on equipping them with essential skills to drive operational excellence and contribute to our clients’ success.',
    },
    {
      image: maintenance,
      name: 'ITM MAINTENANCE',
      logo: logo_maintenance,
      slogant: 'Your busness Solutions partner',
      description:
        "ITM Maintenance specialises in maintenance solutions for industries such as mining, construction, manufacturing, and logistics. Our technicians deliver expert on-site and workshop repairs, customized training programs, as well as preventive maintenance measures aimed at extending equipment lifespan, minimizing downtime, and ensuring our clients' business continuity.",
    },
    {
      image: geo,
      name: 'GEO INTERNATIONAL',
      logo: logo_geokatanga,
      slogant: 'Your busness Solutions partner',
      description:
        'Geo-Katanga operates multiple business branches focused on mining support services, chemical supplies, and civil engineering. Our Mining Solutions Package is tailored to help mining companies maintain environmental integrity through geosynthetic products, corrosion protection, piping systems, and comprehensive mining water management, including maintenance services.',
    },
    {
      image: ifs,
      name: 'ITM FINANCIAL SERVICES',
      logo: logo_ifs,
      slogant: 'Your busness Solutions partner',
      description:
        'ITM Financial Services (IFS), specializes in comprehensive financial solutions designed to support income growth for African businesses and communities. Alongside our innovative fintech application, Kitoko Pay, which simplifies money management, payments, and fund transfers, we provide a full spectrum of financial services including digital payroll solutions, master agency banking,  and money transfer services. Our service delivery focuses on efficiency and security, ensuring seamless financial operations for our clients and customers.',
    },
    {
      image: environment,
      name: 'ITM ENVIRONMENT',
      logo: logo_env,
      slogant: 'Your busness Solutions partner',
      description:
        'ITM Environment employs advanced technologies and skilled personnel to provide efficient waste management and environmental hygiene services. From our commitment to sustainability and community well-being, our solutions aim to promote cleaner and healthier living environments while supporting sustainable urban development.',
    },
    {
      image: vendis,
      name: 'VENDIS',
      logo: logo_vendis,
      slogant: 'Your busness Solutions partner',
      description:
        'Vendis offers sales and distribution solutions to businesses in various industries. With expertise in both B2B and B2C distribution, Vendis excels in developing tailored route-to-market strategies and executing impactful brand activation campaigns and road shows. Specializing in e-commerce, mass market distribution, and travel services including flight bookings and holiday packages, we are committed to optimizing market performance and revenue growth for our clients.',
    },
    {
      image: jamon,
      name: 'JAMON',
      logo: logo_jamon,
      slogant: 'Your busness Solutions partner',
      description:
        'JAMON offers a wide range of transport and logistics solutions from cargo shipments and trailer leasing to the transportation of different products. Supported by advanced fleet management and tracking technologies, our teams ensure safe and punctual deliveries. Whether handling small packages or large-scale projects, the focus of our work lies on quality and reliability.',
    },
    {
      image: ibs,
      name: 'IBS',
      logo: logo_ibs,
      slogant: 'Your busness Solutions partner',
      description:
        'JAMON offers a wide range of transport and logistics solutions from cargo shipments and trailer leasing to the transportation of different products. Supported by advanced fleet management and tracking technologies, our teams ensure safe and punctual deliveries. Whether handling small packages or large-scale projects, the focus of our work lies on quality and reliability.',
    },
  ],
};
export const langs = [
  { fr: 'Français', en: 'French', tag: '' },
  { fr: 'RDC', en: 'RDC', tag: '', code: 'CD' },
];

export const testimonies = [
  {
    poste: 'Supervisor, EACOP',
    name: 'Rukia Ismail',
    description:
      'It has been a great journey working with ITM Tanzania on their recruitment service, they are very professional and career-oriented.',
    image: cn,
  },
  {
    poste: 'Biodiversity Coordinator, EACOP',
    name: 'Jennifer Nyanda',
    description:
      'ITM Recruitment provided me with an opportunity to practice my knowledge in Biodiversity as much as I could and meet with various stakeholders with whom I exchanged knowledge.',
    image: eacop,
  },
  {
    poste: "Director, Paddy O'Dwyer",
    name: "Paddy O'Dwyer",
    description:
      'A truly professional organisation with a dedicated and inspiring leadership team. It has been a pleasure partnering with ITM Tanzania Limited.',
    image: eacop,
  },
];

export const entitiesInfos: any = {
  cd: {
    address: '575 Av Kasavubu, Quartier Makutano, Lubumbashi',
    phone: '+243 828 502 119',
    email: 'infocustomer@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  za: {
    address: '360 Oak Avenue, 4 Tulbagh, Ferndale, 2194',
    phone: '+27 10 825 9413',
    email: 'admin.katope@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/company/itm-katope-ltd/',
      instagram:
        'https://www.instagram.com/itm_katope_ltd/?igsh=MWpoYngyajl1M2xxag%3D%3D#',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  rw: {
    address: 'KG 220 ST, House 7, Gishushu - Kigali, Rwanda',
    phone: '+250 790 009 444',
    email: 'inforwanda@itmafrica.com',
    social_medias: {
      facebook:
        'https://www.facebook.com/people/ITM-Africa-LTD/100090874923287/?mibextid=LQQJ4d',
      linkedin: 'https://www.linkedin.com/company/itmafricaltdrw/',
      instagram:
        'https://www.instagram.com/itm_africa_ltd/?igsh=cjB2MG9xcWkyMDJy#',
      twitter: 'https://x.com/itmafricaltdrw?s=21&t=6hx5ru-D_IrsTXYN2Ot2fQ',
    },
  },
  ao: {
    address: 'Centro Comercial 3M, Largo do Patriota, Luanda, Angola',
    phone: '+244 946 083 313',
    email: 'infoangola@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  cg: {
    address:
      '243, Boulevard Charles DE GAULLE, immeuble Tour MAYOMBE, centre-ville/ Pointe-Noire',
    phone: '+242 056 401 750',
    email: 'infocongobrazza@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  bj: {
    address:
      'St Michel, Immeuble MAVEKA, à 50 m de la poste au 3ème étage aile gauche',
    phone: '+229 015 507 19 19 ',
    email: 'infobenin@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/profile.php?id=100080658041714',
      linkedin: 'https://www.linkedin.com/company/105272657/',
      instagram: 'https://www.instagram.com/itm_benin_?igsh=OTVoNmgzaGh3d2Uz',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  ng: {
    address:
      'Abuja Office: St. James House, 167 Adetokunbo Ademola Crescent Wuse 2, Abuja. Lagos Office: Suite 310A, 3rd floor, Mulliner Towers, 39 Alfred Rwene road, Ikoyi, Lagos.',
    phone: '(+234)07025090000',
    email: 'info.abuja@itmafrica.com',
    social_medias: {
      facebook:
        'https://www.facebook.com/people/itmnigerialimited/100066818145274/',
      linkedin: 'https://www.linkedin.com/company/itm-services-ltd/',
      instagram: 'https://www.instagram.com/itmserviceslimited/?__pwa=1',
      twitter: 'Twitter/X - https://x.com/ItmNigerialtd',
    },
  },
  ke: {
    address: '104 KOFISI DRIVE, Nairobi, Kenya',
    phone: '+254 718 162 617',
    email: 'infokenya@itmafrica.com',
    social_medias: {
      facebook:
        'https://www.facebook.com/people/ITM-Kenya/61561472194322/?_rdr',
      linkedin:
        'https://www.linkedin.com/company/itm-kenya/?originalSubdomain=ke',
      instagram: 'https://www.instagram.com/itm_kenya/',
      twitter: 'https://x.com/ItmKenyaltd ',
    },
  },
  tz: {
    address:
      'ITM Tanzania Limited Offices, Suredi Street, Plot 1103, Mikocheni B, Industry Way Road',
    phone: '+255 763 554 258',
    email: 'infotanzania@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/p/ITM-Tanzania-100085252992636/',
      linkedin:
        'https://www.linkedin.com/company/itm-tanzania-ltd?originalSubdomain=tz',
      instagram: 'https://www.instagram.com/_itmtanzania/',
      twitter: ' https://x.com/itmtanzania?mx=2 ',
    },
  },
  tg: {
    address:
      '2ème Etage Immeuble DEO, Boulevard circulaire, Rue Sédomé, Lomé-TOGO',
    phone: '+228 79 32 95 89',
    email: 'infotogo@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/people/ITM-Togo/100090020845747/',
      linkedin:
        'https://www.linkedin.com/company/itm-togo-sarl/posts/?feedView=all',
      instagram: 'https://www.instagram.com/itm_tgo/',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  cm: {
    address: 'Centro Comercial 3M, Largo do Patriota, Luanda, Angola',
    phone: '+244 946 083 313',
    email: 'infocustomer@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  bi: {
    address: 'Avenue Songa 11-13 B.P 172, Bujumbura, Burundi',
    phone: '(+257) 610 66161',
    email: 'infoburundi@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  de: {
    address: 'Centro Comercial 3M, Largo do Patriota, Luanda, Angola',
    phone: '+244 946 083 313',
    email: 'infocustomer@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  gb: {
    address: 'Centro Comercial 3M, Largo do Patriota, Luanda, Angola',
    phone: '+244 946 083 313',
    email: 'infocustomer@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  zm: {
    address: 'Centro Comercial 3M, Largo do Patriota, Luanda, Angola',
    phone: '+244 946 083 313',
    email: 'infocustomer@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  ug: {
    address:
      '6th Floor, Block B, Nakawa Business Park. Plot 3-5, Portbell Road.',
    phone: '+256 707 331 616',
    email: 'infouganda@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin:
        'https://www.linkedin.com/posts/itm-uganda_itmuganda-activity-7281983653528690689-31EO/',
      instagram: 'https://www.instagram.com/itmuganda/',
      twitter: 'https://x.com/itmuganda',
    },
  },
  ci: {
    address: '575 Av Kasavubu, Quartier Makutano, Lubumbashi',
    phone: '+243 828 502 119',
    email: 'infocustomer@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
  sn: {
    address: '575 Av Kasavubu, Quartier Makutano, Lubumbashi',
    phone: '+243 828 502 119',
    email: 'infocustomer@itmafrica.com',
    social_medias: {
      facebook: 'https://www.facebook.com/itmafrica',
      linkedin: 'https://www.linkedin.com/in/itm-africa-7526a6162/',
      instagram: 'https://www.instagram.com/itm_africa/?hl=fr',
      twitter: 'https://twitter.com/ItmRdc',
    },
  },
};
