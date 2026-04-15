import { AfterViewInit, Component, HostListener, OnDestroy, computed, signal } from '@angular/core';

type Language = 'pt' | 'en';
type SectionId = 'inicio' | 'sobre' | 'projetos' | 'stack' | 'experiencia' | 'contato';
type TopicKey = 'hero' | 'about' | 'projects' | 'stack' | 'experience' | 'impact' | 'contact';

const content = {
  pt: {
    nav: ['Inicio', 'Sobre', 'Projetos', 'Stack', 'Experiencia', 'Contato'],
    heroWelcome: 'BEM-VINDO',
    heroName: 'joao victor barletta',
    role: 'Engenheiro de Software',
    heroTitleAccent: 'SAP ABAP (S/4HANA) | Node.js | TypeScript | Integrações | APIs',
    heroSubtitle:
      'Construo sistemas escalaveis, APIs e solucoes de automacao que geram impacto real nos negocios.',
    ctaPrimary: 'Entrar em contato',
    ctaSecondary: 'Ver projetos',
    dockLabel: 'Navegacao rapida',
    aboutLabel: 'Sobre',
    aboutTitle: 'Software Engineer',
    aboutText:
      'Software Engineer com experiencia no desenvolvimento de sistemas corporativos, aplicacoes web e solucoes SaaS, com foco em back-end, arquitetura de sistemas e integracao de APIs.\n\nAtuacao como Full Stack Developer, com forte direcionamento para Node.js, TypeScript e construcao de solucoes escalaveis voltadas a automacao de processos empresariais e uso de inteligencia artificial.\n\nExperiencia no desenvolvimento de um TMS (Transportation Management System) completo para gestao de transportadoras, responsavel por processar mais de R$ 12 milhoes em receitas nos primeiros 6 meses de operacao, atendendo demandas de controle financeiro, logistica e fluxo operacional.\n\nDesenvolvimento de automacoes com inteligencia artificial para leitura e processamento de invoices em larga escala, realizando extracao, tratamento e estruturacao de dados para banco de dados, reduzindo significativamente o trabalho manual e aumentando a eficiencia operacional.\n\nVivencia em desenvolvimento de APIs REST, modelagem de banco de dados e criacao de aplicacoes SaaS, utilizando Node.js, TypeScript, Python, Angular, MySQL e SQL, alem de experiencia com SAP ABAP e integracoes com sistemas corporativos.\n\nInteresse em oportunidades como Software Engineer, com foco em back-end e desenvolvimento de produtos, contribuindo para a construcao de sistemas escalaveis, eficientes e orientados a impacto de negocio.\n\nAberto a conexoes e trocas sobre desenvolvimento de software, arquitetura de sistemas, SaaS e inteligencia artificial.\n\n📩 Contato: Barletta.contato@gmail.com',
    aboutLocation: 'Localizacao: Curitiba - Parana - Brasil',
    aboutExperience: '3 anos de experiencia em desenvolvimento de sistemas',
    skillsTitle: 'Top 15 Skills',
    skillsList: [
      'Software Engineering',
      'Backend Development',
      'Node.js',
      'SAP ABAP',
      'TypeScript',
      'REST APIs',
      'System Design',
      'SQL',
      'MySQL',
      'Java (Spring Boot)',
      'API Integration',
      'SaaS Development',
      'Microservices',
      'Python',
      'Git'
    ],
    stackLabel: 'Stack',
    stackTitle: 'Principais tecnologias',
    projectsLabel: 'Projetos',
    projectsTitle: 'Projetos com impacto real',
    projectContextLabel: 'Contexto',
    projectBuiltLabel: 'Construido',
    projectTechLabel: 'Tecnologias',
    projectResultLabel: 'Resultado',
    projectDetailsTitle: 'Versao detalhada do projeto',
    projectToolsLabel: 'Ferramentas utilizadas',
    projectCloseLabel: 'Fechar detalhes',
    projects: [
      {
        kind: 'SaaS Logistica',
        title: 'Plataforma TMS - Mais de R$12M processados em 6 meses',
        context: 'A operacao logistica dependia de fluxos manuais com baixa visibilidade e erros recorrentes.',
        built: 'Desenvolvi um sistema completo de gestao de transportadora (TMS), com planejamento, execucao e otimizacao da movimentacao fisica de mercadorias, dashboards, permissoes e fluxos operacionais.',
        tech: 'Angular, Node.js, TypeScript, MySQL, APIs RESTful',
        result: 'Processou mais de R$12M em receita, reduziu retrabalho operacional e melhorou a eficiencia das entregas.',
        details:
          'Projeto proprio com arquitetura full stack em modulos corporativos escalaveis. O produto inclui controle operacional, gestao de cargas, faturamento, acompanhamento logistico, baixa automatica de receitas e controle financeiro operacional. Tambem foi estruturado para alto volume de transacoes com modelagem de banco de dados e arquitetura orientada a servicos.',
        tools: [
          { icon: 'A', name: 'Angular' },
          { icon: 'N', name: 'Node.js' },
          { icon: 'TS', name: 'TypeScript' },
          { icon: 'MY', name: 'MySQL' },
          { icon: 'API', name: 'APIs RESTful' }
        ]
      },
      {
        kind: 'Automacao',
        title: 'Automacao Operacional com IA',
        context: 'Processos internos dependiam de planilhas e atividades manuais para classificar e processar informacoes.',
        built: 'Implementei automacoes com IA para leitura e processamento de invoices em larga escala, com extracao, tratamento e estruturacao de dados.',
        tech: 'Python, Excel, IA aplicada',
        result: 'Reduziu trabalho manual e melhorou os tempos de resposta de SLA ((SLA - Service Level Agreement ou Acordo de Nivel de Servico)) em processos criticos.',
        details:
          'Automacao focada em produtividade operacional com pipeline de tratamento de dados, padronizacao de informacoes e alimentacao de base para tomada de decisao. O fluxo foi desenhado para escalar o processamento sem aumentar o esforco manual da operacao.',
        tools: [
          { icon: 'PY', name: 'Python' },
          { icon: 'XL', name: 'Excel' },
          { icon: 'AI', name: 'Inteligencia Artificial' }
        ]
      },
      {
        kind: 'Projeto Corporativo Full Stack',
        title: 'Plataforma Corporativa com Java, Spring Boot e Angular',
        context: 'Havia necessidade de integrar front-end, APIs e servicos de negocio em um fluxo unico e confiavel.',
        built: 'Desenvolvi aplicacoes web com Angular integradas a APIs RESTful em Java com Spring Boot, com arquitetura modular e foco em manutencao evolutiva.',
        tech: 'Java, Spring Boot, Angular, APIs RESTful',
        result: 'Melhorou a integracao entre camadas da aplicacao, com mais estabilidade e velocidade na entrega de funcionalidades.',
        details:
          'Projeto orientado a padronizacao de componentes, arquitetura modular e integracao de sistemas. A camada back-end em Spring Boot foi desenhada para suportar regras de negocio e exposicao de endpoints REST, enquanto o front-end em Angular entregou interface corporativa com validacoes e controle de permissoes.',
        tools: [
          { icon: 'J', name: 'Java' },
          { icon: 'SB', name: 'Spring Boot' },
          { icon: 'A', name: 'Angular' },
          { icon: 'API', name: 'APIs RESTful' }
        ]
      }
    ],
    projectLink: 'Ver detalhes',
    expLabel: 'Experiencia',
    expTitle: 'Experiencias profissionais',
    expResponsibilitiesLabel: 'Responsabilidades',
    expResultsLabel: 'Resultados/Impactos',
    experiences: [
      {
        company: 'Empresa Sigilosa',
        role: 'Software Engineer',
        periodLocation: 'Feb 2025 - Aug 2025 | Curitiba, Brazil',
        responsibilities: [
          'Desenvolvimento de solucoes para automacao de processos na plataforma Salesforce.',
          'Customizacao de objetos e desenvolvimento com Apex, Visualforce e Lightning Web Components.',
          'Integracao com APIs externas e sistemas corporativos.',
          'Implementacao de fluxos automatizados e regras de negocio.',
          'Manutencao, testes e otimizacao continua das solucoes.'
        ],
        results: [
          'Automacao de processos operacionais, reduzindo atividades manuais e aumentando a eficiencia do time.',
          'Melhoria na integracao entre sistemas, garantindo maior confiabilidade e consistencia dos dados.',
          'Otimizacao de fluxos internos, contribuindo para maior produtividade e escalabilidade das operacoes.'
        ]
      },
      {
        company: 'QAB Consultoria e Qualidade',
        role: 'Backend Developer (Java | Spring Boot)',
        periodLocation: 'Oct 2023 - Feb 2025 | Sao Paulo, Brazil',
        responsibilities: [
          'Desenvolvimento de APIs RESTful com Spring Boot.',
          'Integracao com bancos relacionais via Hibernate e JPA.',
          'Implementacao de autenticacao e autorizacao com Spring Security.',
          'Desenvolvimento de testes unitarios e de integracao com JUnit.',
          'Construcao de aplicacoes web com Spring MVC.',
          'Configuracao e gerenciamento de servidores Apache Tomcat.',
          'Gerenciamento de dependencias com Maven.',
          'Modelagem e manipulacao de dados em MySQL.',
          'Integracao com APIs externas (REST e SOAP).'
        ],
        results: [
          'Desenvolvimento de APIs escalaveis para suportar integracoes entre sistemas corporativos.',
          'Melhoria na seguranca das aplicacoes com implementacao de autenticacao robusta.',
          'Aumento da confiabilidade do sistema com testes automatizados.',
          'Estruturacao de banco de dados para suportar aplicacoes de alta demanda.'
        ]
      },
      {
        company: 'Projeto proprio / Produto SaaS',
        role: 'Software Engineer | SaaS Product Development',
        periodLocation: 'Product Experience',
        responsibilities: [
          'Desenvolvimento de sistema TMS (Transportation Management System) completo.',
          'Arquitetura e desenvolvimento backend com Node.js e TypeScript.',
          'Modelagem de banco de dados e estruturacao de regras de negocio.',
          'Desenvolvimento de APIs REST e integracoes entre sistemas.',
          'Construcao de funcionalidades para gestao financeira, logistica e operacoes.'
        ],
        results: [
          'Sistema responsavel por processar mais de R$12M em receita em 6 meses.',
          'Implementacao de solucao SaaS utilizada em ambiente real de operacao.',
          'Reducao de retrabalho operacional e melhoria no controle logistico e financeiro.',
          'Criacao de produto escalavel voltado a automacao de processos empresariais.'
        ]
      }
    ],
    impactLabel: 'Impacto',
    impactTitle: 'Sistemas que desenvolvi',
    impacts: [
      'Mais de R$12M em receita processada',
      'Automacao de processos de negocio',
      'Reducao de trabalho manual com IA'
    ],
    contactLabel: 'Contato',
    contactTitle: 'Aberto a oportunidades - vamos construir algo de impacto juntos.',
    contactText: 'Disponivel para vagas, consultoria e parcerias em engenharia de software.',
    contactButton: 'Contato',
    sendEmail: 'Enviar pelo email padrao',
    openLinkedIn: 'Abrir LinkedIn',
    contactCardTitle: 'Informacoes de contato',
    contactEmailLabel: 'Email',
    contactPhoneLabel: 'Telefone',
    contactEmailValue: 'Barletta.contato@gmail.com',
    contactPhoneValue: '+5541996950668',
    footer: 'Todos os direitos reservados.'
  },
  en: {
    nav: ['Home', 'About', 'Projects', 'Stack', 'Experience', 'Contact'],
    heroWelcome: 'WELCOME',
    heroName: 'joao victor barletta',
    role: 'Software Engineer',
    heroTitleAccent: 'SAP ABAP (S/4HANA) | Node.js | TypeScript | Integrations | APIs',
    heroSubtitle:
      'I build scalable systems, APIs, and automation solutions that generate real business impact.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'View projects',
    dockLabel: 'Quick navigation',
    aboutLabel: 'About',
    aboutTitle: 'Software Engineer',
    aboutText:
      'Software Engineer with experience in developing corporate systems, web applications, and SaaS solutions, focused on back-end, system architecture, and API integration.\n\nFull Stack Developer with strong focus on Node.js, TypeScript, and building scalable solutions aimed at business process automation and artificial intelligence usage.\n\nExperience developing a complete TMS (Transportation Management System) for carrier management, responsible for processing over R$12 million in revenue in the first 6 months of operation, meeting demands for financial control, logistics, and operational flow.\n\nDeveloped AI-powered automations for reading and processing invoices at scale, performing extraction, processing, and data structuring for databases, significantly reducing manual work and increasing operational efficiency.\n\nExpertise in REST API development, database modeling, and SaaS application creation using Node.js, TypeScript, Python, Angular, MySQL, and SQL, plus experience with SAP ABAP and integrations with corporate systems.\n\nInterested in opportunities as a Software Engineer focused on back-end and product development, contributing to building scalable, efficient systems oriented toward business impact.\n\nOpen to connections and discussions about software development, system architecture, SaaS, and artificial intelligence.\n\n📩 Contact: Barletta.contato@gmail.com',
    aboutLocation: 'Location: Curitiba - Parana - Brazil',
    aboutExperience: '3 years of experience in systems development',
    skillsTitle: 'Top 15 Skills',
    skillsList: [
      'Software Engineering',
      'Backend Development',
      'Node.js',
      'SAP ABAP',
      'TypeScript',
      'REST APIs',
      'System Design',
      'SQL',
      'MySQL',
      'Java (Spring Boot)',
      'API Integration',
      'SaaS Development',
      'Microservices',
      'Python',
      'Git'
    ],
    stackLabel: 'Stack',
    stackTitle: 'Main technologies',
    projectsLabel: 'Projects',
    projectsTitle: 'Impact-driven projects',
    projectContextLabel: 'Context',
    projectBuiltLabel: 'Built',
    projectTechLabel: 'Tech',
    projectResultLabel: 'Result',
    projectDetailsTitle: 'Detailed project view',
    projectToolsLabel: 'Tools used',
    projectCloseLabel: 'Close details',
    projects: [
      {
        kind: 'SaaS Logistics',
        title: 'TMS Platform - Processed R$12M in 6 months',
        context: 'Logistics operation relied on manual workflows with poor visibility and repeated errors.',
        built: 'Built a complete transportation management system (TMS) with planning, execution, and optimization of physical goods movement, dashboards, permissions, and operational workflows.',
        tech: 'Angular, Node.js, TypeScript, MySQL, RESTful APIs',
        result: 'Processed over R$12M in revenue, reduced operational rework, and improved delivery efficiency.',
        details:
          'Proprietary project with full-stack architecture in scalable corporate modules. The product includes operational control, shipment management, billing, logistics tracking, automatic revenue settlement, and operational financial control. It was also designed for high-volume transactions with service-oriented architecture and strong database modeling.',
        tools: [
          { icon: 'A', name: 'Angular' },
          { icon: 'N', name: 'Node.js' },
          { icon: 'TS', name: 'TypeScript' },
          { icon: 'MY', name: 'MySQL' },
          { icon: 'API', name: 'RESTful APIs' }
        ]
      },
      {
        kind: 'Automation',
        title: 'AI Operations Automation',
        context: 'Internal processes depended on spreadsheets and manual activities to classify and process information.',
        built: 'Implemented AI automations for large-scale invoice reading and processing, including extraction, cleanup, and structured data output.',
        tech: 'Python, Excel, Applied AI',
        result: 'Reduced manual work and improved SLA response times in critical processes.',
        details:
          'Automation initiative focused on operational productivity with a data treatment pipeline, information standardization, and dataset generation for decision-making. The flow was designed to scale processing without increasing manual effort.',
        tools: [
          { icon: 'PY', name: 'Python' },
          { icon: 'XL', name: 'Excel' },
          { icon: 'AI', name: 'Artificial Intelligence' }
        ]
      },
      {
        kind: 'Corporate Full-Stack Project',
        title: 'Corporate Platform with Java, Spring Boot, and Angular',
        context: 'There was a need to integrate front-end, APIs, and business services into a single reliable flow.',
        built: 'Developed Angular web applications integrated with Java Spring Boot REST APIs, using modular architecture and maintainability-first design.',
        tech: 'Java, Spring Boot, Angular, RESTful APIs',
        result: 'Improved integration across application layers with better stability and faster feature delivery.',
        details:
          'Project focused on component standardization, modular architecture, and system integration. The Spring Boot back-end was designed to support business rules and REST endpoints, while Angular delivered a corporate interface with validations and permission control.',
        tools: [
          { icon: 'J', name: 'Java' },
          { icon: 'SB', name: 'Spring Boot' },
          { icon: 'A', name: 'Angular' },
          { icon: 'API', name: 'RESTful APIs' }
        ]
      }
    ],
    projectLink: 'View details',
    expLabel: 'Experience',
    expTitle: 'Optimized experience section',
    expResponsibilitiesLabel: 'Responsibilities',
    expResultsLabel: 'Results/Impact',
    experiences: [
      {
        company: 'Confidential Company',
        role: 'Software Engineer',
        periodLocation: 'Feb 2025 - Aug 2025 | Curitiba, Brazil',
        responsibilities: [
          'Developed process automation solutions on Salesforce platform.',
          'Customized objects and implemented solutions with Apex, Visualforce, and Lightning Web Components.',
          'Integrated external APIs and corporate systems.',
          'Implemented automated workflows and business rules.',
          'Maintained, tested, and continuously optimized solutions.'
        ],
        results: [
          'Automated operational processes, reducing manual work and increasing team efficiency.',
          'Improved system integration reliability and data consistency across platforms.',
          'Optimized internal workflows, improving productivity and scalability.'
        ]
      },
      {
        company: 'QAB Consultoria e Qualidade',
        role: 'Backend Developer (Java | Spring Boot)',
        periodLocation: 'Oct 2023 - Feb 2025 | Sao Paulo, Brazil',
        responsibilities: [
          'Built RESTful APIs using Spring Boot.',
          'Integrated relational databases with Hibernate and JPA.',
          'Implemented authentication and authorization with Spring Security.',
          'Created unit and integration tests with JUnit.',
          'Developed web applications with Spring MVC.',
          'Configured and managed Apache Tomcat servers.',
          'Managed dependencies with Maven.',
          'Modeled and manipulated data in MySQL.',
          'Integrated external APIs (REST and SOAP).'
        ],
        results: [
          'Delivered scalable APIs for integrations between corporate systems.',
          'Improved application security with robust authentication layers.',
          'Increased system reliability through automated testing.',
          'Structured database models for high-demand applications.'
        ]
      },
      {
        company: 'Own Project / SaaS Product',
        role: 'Software Engineer | SaaS Product Development',
        periodLocation: 'Product Experience',
        responsibilities: [
          'Developed a complete Transportation Management System (TMS).',
          'Designed backend architecture and implementation with Node.js and TypeScript.',
          'Modeled databases and business rules.',
          'Built REST APIs and cross-system integrations.',
          'Implemented features for financial, logistics, and operations management.'
        ],
        results: [
          'System processed over R$12M in revenue within 6 months.',
          'Implemented SaaS solution used in real production operations.',
          'Reduced operational rework and improved logistics/financial control.',
          'Created a scalable product focused on business process automation.'
        ]
      }
    ],
    impactLabel: 'Impact',
    impactTitle: 'Systems I built have',
    impacts: [
      'Processed R$12M+ in revenue',
      'Automated business operations',
      'Reduced manual work using AI'
    ],
    contactLabel: 'Contact',
    contactTitle: 'Open to opportunities - let\'s build something impactful together.',
    contactText: 'Available for roles, consulting, and software engineering partnerships.',
    contactButton: 'Contact',
    sendEmail: 'Send using default email app',
    openLinkedIn: 'Open LinkedIn',
    contactCardTitle: 'Contact information',
    contactEmailLabel: 'Email',
    contactPhoneLabel: 'Phone',
    contactEmailValue: 'Barletta.contato@gmail.com',
    contactPhoneValue: '+5541996950668',
    footer: 'All rights reserved.'
  }
} as const;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly language = signal<Language>('en');
  protected readonly t = computed(() => content[this.language()]);
  protected readonly particles = Array.from({ length: 72 }, (_, index) => index + 1);
  protected readonly activeSection = signal<SectionId>('inicio');
  protected readonly activeDockIndex = computed(() => {
    const positions: Record<SectionId, number> = {
      inicio: 0,
      sobre: 1,
      projetos: 2,
      stack: 3,
      experiencia: 4,
      contato: 5
    };
    return positions[this.activeSection()];
  });
  protected readonly visibleTopics = signal<Record<TopicKey, boolean>>({
    hero: false,
    about: false,
    projects: false,
    stack: false,
    experience: false,
    impact: false,
    contact: false
  });
  protected readonly selectedProjectIndex = signal<number | null>(null);
  protected readonly selectedProject = computed(() => {
    const index = this.selectedProjectIndex();
    if (index === null) {
      return null;
    }

    return this.t().projects[index] ?? null;
  });
  protected readonly showContactCard = signal(false);

  private readonly sectionIds: SectionId[] = ['inicio', 'sobre', 'projetos', 'stack', 'experiencia', 'contato'];
  private topicObserver: IntersectionObserver | null = null;

  protected setLanguage(language: Language): void {
    this.language.set(language);
  }

  protected setActiveSection(sectionId: SectionId): void {
    this.activeSection.set(sectionId);
  }

  protected isActiveSection(sectionId: SectionId): boolean {
    return this.activeSection() === sectionId;
  }

  protected isTopicVisible(topic: TopicKey): boolean {
    return this.visibleTopics()[topic];
  }

  protected openProjectDetails(index: number): void {
    this.selectedProjectIndex.set(index);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  protected closeProjectDetails(): void {
    this.selectedProjectIndex.set(null);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  protected toggleContactCard(): void {
    this.showContactCard.update((current) => !current);
  }

  ngAfterViewInit(): void {
    this.updateActiveSectionFromScroll();
    this.setupTopicObserver();
  }

  ngOnDestroy(): void {
    this.topicObserver?.disconnect();
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:keydown.escape')
  protected onEscapePressed(): void {
    this.closeProjectDetails();
    this.showContactCard.set(false);
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateActiveSectionFromScroll();
  }

  private updateActiveSectionFromScroll(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const targetLine = window.scrollY + window.innerHeight * 0.35;
    let closestId: SectionId = this.sectionIds[0];
    let closestDistance = Number.POSITIVE_INFINITY;

    for (const id of this.sectionIds) {
      const section = document.getElementById(id);
      if (!section) {
        continue;
      }

      const center = section.offsetTop + section.offsetHeight / 2;
      const distance = Math.abs(center - targetLine);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestId = id;
      }
    }

    this.activeSection.set(closestId);
  }

  private setupTopicObserver(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.topicObserver = new IntersectionObserver(
      (entries) => {
        let changed = false;
        const current = { ...this.visibleTopics() };

        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          const topic = entry.target.getAttribute('data-topic') as TopicKey | null;
          if (!topic || current[topic]) {
            continue;
          }

          current[topic] = true;
          changed = true;
        }

        if (changed) {
          this.visibleTopics.set(current);
        }
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const elements = document.querySelectorAll<HTMLElement>('[data-topic]');
    elements.forEach((element) => this.topicObserver?.observe(element));
  }
}
