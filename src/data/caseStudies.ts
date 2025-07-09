import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'relo-census-dashboard',
    title: 'Relo Census',
    subtitle: 'Next-gen sponsorship data platform',
    client: 'Relo Metrics',
    role: 'Product Design Lead',
    year: '2024',
    tools: ['Figma', 'Miro', 'Principle'],
    tags: ['Sports Analytics', 'Data Platform', 'Sponsorship'],
    headerImage: '/images/case-studies/relo-census/header.jpg',
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <h3 class="brief-title">What is Census?</h3>
          <p class="brief-intro">Census is a modular, persona-driven sponsorship analytics platform designed to help clients:</p>
          <ul class="brief-list">
            <li><i class="fas fa-chart-line"></i>Evaluate sponsorship performance across leagues and channels</li>
            <li><i class="fas fa-balance-scale"></i>Benchmark competitors and industry activity</li>
            <li><i class="fas fa-chart-bar"></i>Build insights and reports tailored to internal needs</li>
            <li><i class="fas fa-brain"></i>Make smarter, faster, more informed decisions</li>
          </ul>
        </div>
        
        <div class="brief-section mb-8">
          <h4 class="brief-subtitle">Census was built from the ground up to be:</h4>
          <ul class="brief-list">
            <li><i class="fas fa-puzzle-piece"></i>UX-first, modular, and componentized</li>
            <li><i class="fas fa-expand-arrows-alt"></i>Scalable across leagues (MLB, NBA, F1, NFL, etc.)</li>
            <li><i class="fas fa-cog"></i>Powered by Relo's proprietary CV engine</li>
            <li><i class="fas fa-link"></i>Separate but complementary to MVC</li>
          </ul>
        </div>
        
        <div class="brief-section">
          <h4 class="brief-subtitle">Key Features:</h4>
          <ul class="brief-list">
            <li><i class="fas fa-user-friends"></i>Sponsorship Evaluation Page with persona-based views</li>
            <li><i class="fas fa-filter"></i>Advanced filtering by placement, league, content type</li>
            <li><i class="fas fa-database"></i>Data Explorer + Dashboard Builder with save/share capabilities</li>
          </ul>
        </div>
      </div>
    `,
    situation: `
      <div class="situation-content">
        <div class="situation-intro mb-8">
          <h3 class="situation-title">Why Redesign Relo Edge?</h3>
          <p class="situation-text">
            Relo Edge (formerly the Media Value Center) had become the internal source of truth for sponsorship reporting—but it was no longer fit for purpose. Years of incremental feature requests had caused fragmentation across screens, inconsistencies in filtering logic, and misalignment between what teams expected and what the tool delivered.
          </p>
        </div>

        <div class="situation-problems mb-8">
          <p class="situation-subtitle">The result was a platform that:</p>
          <ul class="problem-list">
            <li class="problem-item">
              <i class="fas fa-times-circle text-red-500"></i>
              <span>Lacked intuitive navigation or grouping of features</span>
            </li>
            <li class="problem-item">
              <i class="fas fa-times-circle text-red-500"></i>
              <span>Delivered unreliable tagging and saved views</span>
            </li>
            <li class="problem-item">
              <i class="fas fa-times-circle text-red-500"></i>
              <span>Was built with no formal design system, QA flow, or UX architecture</span>
            </li>
            <li class="problem-item">
              <i class="fas fa-times-circle text-red-500"></i>
              <span>Required excessive manual effort from CS to generate reports</span>
            </li>
          </ul>
        </div>

        <div class="situation-teams mb-8">
          <p class="situation-subtitle">Internally, multiple teams were struggling to get what they needed:</p>
          <div class="team-grid">
            <div class="team-card">
              <div class="team-header">
                <i class="fas fa-headset text-blue-600"></i>
                <span class="team-label">CS</span>
                <span class="team-name">Customer Success</span>
              </div>
              <p class="team-problem">Confused by tagging logic and unable to reuse views</p>
            </div>
            
            <div class="team-card">
              <div class="team-header">
                <i class="fas fa-chart-line text-green-600"></i>
                <span class="team-label">SALES</span>
                <span class="team-name">Sales</span>
              </div>
              <p class="team-problem">Needed polished exports for sponsorship pitches</p>
            </div>
            
            <div class="team-card">
              <div class="team-header">
                <i class="fas fa-bug text-purple-600"></i>
                <span class="team-label">QA</span>
                <span class="team-name">QA</span>
              </div>
              <p class="team-problem">Had to manually inspect UI logic with no shared rules or components</p>
            </div>
            
            <div class="team-card">
              <div class="team-header">
                <i class="fas fa-lightbulb text-orange-600"></i>
                <span class="team-label">PROD</span>
                <span class="team-name">Product</span>
              </div>
              <p class="team-problem">Lacked a scalable IA model or clear ownership of UX structure</p>
            </div>
            
            <div class="team-card">
              <div class="team-header">
                <i class="fas fa-code text-indigo-600"></i>
                <span class="team-label">ENG</span>
                <span class="team-name">Engineering</span>
              </div>
              <p class="team-problem">Bottlenecked by ad hoc feature requests and visual inconsistency</p>
            </div>
          </div>
        </div>

        <div class="situation-conclusion">
          <div class="conclusion-card">
            <i class="fas fa-exclamation-triangle text-amber-500"></i>
            <p class="conclusion-text">
              This was not just a design refresh—it was a <strong>UX and IA intervention</strong> with operational impact.
            </p>
          </div>
        </div>
      </div>
    `,
    task: `
      <div class="task-content">
        <div class="task-intro mb-8">
          <p class="task-description">
            Led usability and design strategy for this next-gen sponsorship data platform. The goal was to deliver a clean, scalable UX that helps brands and agencies value every team, asset, and brand across major U.S. leagues.
          </p>
        </div>

        <div class="task-item mb-10">
          <div class="task-header mb-6">
            <div class="task-number">
              <i class="fas fa-drafting-compass text-blue-600"></i>
              <span class="task-label">TASK 1</span>
            </div>
            <h4 class="task-title">Re-architect the Platform from First Principles</h4>
          </div>
          
          <p class="task-overview mb-6">
            My first task was to diagnose and structure the platform's UX problems: overlapping navigation, unclear workflows, and disconnected tagging/filters. These issues had built up incrementally—so the fix couldn't be cosmetic.
          </p>
          
          <div class="task-needs">
            <p class="task-needs-title">I needed to:</p>
            <ul class="task-list">
              <li class="task-list-item">
                <i class="fas fa-cube text-orange-500"></i>
                <span>Establish a new information architecture</span>
              </li>
              <li class="task-list-item">
                <i class="fas fa-map-marker-alt text-blue-500"></i>
                <span>Define clear entry points for placement, filter, and export logic</span>
              </li>
              <li class="task-list-item">
                <i class="fas fa-brain text-purple-500"></i>
                <span>Help teams agree on a single model of how the product should behave</span>
              </li>
              <li class="task-list-item">
                <i class="fas fa-check-circle text-green-500"></i>
                <span>Preserve core features while redesigning the way users moved through them</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="task-item">
          <div class="task-header mb-6">
            <div class="task-number">
              <i class="fas fa-puzzle-piece text-green-600"></i>
              <span class="task-label">TASK 2</span>
            </div>
            <h4 class="task-title">Deliver a Modular System That Could Scale</h4>
          </div>
          
          <p class="task-overview mb-6">
            Once the foundational UX logic was redefined, the next task was to build modular, reusable patterns that could scale across the business—serving future tools, new personas, and faster engineering cycles.
          </p>
          
          <div class="task-needs">
            <p class="task-needs-title">This included:</p>
            <ul class="task-list">
              <li class="task-list-item">
                <i class="fas fa-puzzle-piece text-indigo-500"></i>
                <span>A full design system</span>
              </li>
              <li class="task-list-item">
                <i class="fas fa-calculator text-teal-500"></i>
                <span>Visual and logic-based component libraries</span>
              </li>
              <li class="task-list-item">
                <i class="fas fa-sync-alt text-cyan-500"></i>
                <span>Save/export/tagging UX that was both flexible and trusted</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
    action: `
      <div class="action-content">
        <div class="action-intro mb-8">
          <p class="action-description">
            Conducted extensive user research with brands and agencies, mapped complex data relationships, designed intuitive visualization systems, and created scalable design patterns. Worked closely with data scientists to ensure the platform could handle massive datasets while maintaining usability.
          </p>
        </div>

        <div class="action-item mb-12">
          <div class="action-header mb-6">
            <div class="action-number">
              <i class="fas fa-tools text-blue-600"></i>
              <span class="action-label">ACTION 1</span>
            </div>
            <h4 class="action-title">Build the Design Infrastructure for Speed + Scale</h4>
            <p class="action-subtitle">Create a scalable UI system and eliminate visual/functional inconsistencies</p>
          </div>
          
          <div class="action-details">
            <ul class="action-list">
              <li class="action-list-item">
                <i class="fas fa-search text-purple-500"></i>
                <span>Audited every screen and deconstructed core UI patterns to create a component-based design library</span>
              </li>
              <li class="action-list-item">
                <i class="fas fa-layer-group text-indigo-500"></i>
                <span>Introduced a centralized Figma system with tokens, variants, and interaction states</span>
              </li>
              <li class="action-list-item">
                <i class="fas fa-code text-green-500"></i>
                <span>Embedded design logic into Vercel v0.dev to rapidly generate working UI code for early engineer testing</span>
              </li>
              <li class="action-list-item">
                <i class="fas fa-sitemap text-orange-500"></i>
                <span>Defined shared page architecture for all dashboards (views, filters, tagging, export logic, chart builder)</span>
              </li>
              <li class="action-list-item">
                <i class="fas fa-check-double text-teal-500"></i>
                <span>Setup design QA practices to maintain fidelity and reduce dev back-and-forth</span>
              </li>
            </ul>
            
            <div class="action-result">
              <div class="result-card">
                <i class="fas fa-chart-line text-emerald-500"></i>
                <p class="result-text">
                  <strong>Result:</strong> Engineers could reuse logic and UI for multiple dashboards. Stakeholders understood layouts instantly. Shipping velocity improved with fewer revisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="action-item mb-12">
          <div class="action-header mb-6">
            <div class="action-number">
              <i class="fas fa-users text-green-600"></i>
              <span class="action-label">ACTION 2</span>
            </div>
            <h4 class="action-title">Run Persona-Driven UX Research to Guide Feature Strategy</h4>
            <p class="action-subtitle">Validate assumptions, discover use cases, and humanize product decisions</p>
          </div>
          
          <div class="action-details">
            <div class="action-overview mb-6">
              <p class="overview-text">
                Partnered with our VP of Marketing to evolve outdated personas into modern archetypes:
              </p>
            </div>
            
            <ul class="persona-list mb-6">
              <li class="persona-list-item">
                <i class="fas fa-chart-bar text-blue-500"></i>
                <span><strong>Agency Analysts</strong> needing speed + deck-ready insights</span>
              </li>
              <li class="persona-list-item">
                <i class="fas fa-bullseye text-purple-500"></i>
                <span><strong>Brand Marketers</strong> needing ROI views and presentation-ready dashboards</span>
              </li>
              <li class="persona-list-item">
                <i class="fas fa-handshake text-orange-500"></i>
                <span><strong>Rightsholders</strong> needing real-time reporting to upsell partners</span>
              </li>
            </ul>
            
            <ul class="action-list">
              <li class="action-list-item">
                <i class="fas fa-comments text-cyan-500"></i>
                <span>Ran moderated interviews and card sorting sessions to identify workflow priorities and feature opportunities</span>
              </li>
              <li class="action-list-item">
                <i class="fas fa-sync-alt text-indigo-500"></i>
                <span>Facilitated cross-functional research syncs to share learnings and align roadmap themes</span>
              </li>
            </ul>
            
            <div class="action-result">
              <div class="result-card">
                <i class="fas fa-lightbulb text-amber-500"></i>
                <p class="result-text">
                  <strong>Result:</strong> Personas became foundational to product planning. Engineering and Product used them to validate whether a feature served a real job-to-be-done.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="personas-viewer-placeholder">
          <!-- Persona viewer will be rendered as React component -->
        </div>
      </div>
    `,
    result: 'Delivered a platform that drives smarter decisions and stronger revenue impact. Users report significant improvements in their ability to evaluate sponsorship opportunities and make data-driven investment decisions across major sports leagues.',
    images: [
      '/images/case-studies/relo-census/design1.jpg',
      '/images/case-studies/relo-census/design2.jpg',
      '/images/case-studies/relo-census/design3.jpg',
      '/images/case-studies/relo-census/design4.jpg',
      '/images/case-studies/relo-census/design5.jpg',
      '/images/case-studies/relo-census/design6.jpg',
      '/images/case-studies/relo-census/design7.jpg',
      '/images/case-studies/relo-census/design8.jpg',
      '/images/case-studies/relo-census/design9.jpg',
      '/images/case-studies/relo-census/design10.jpg',
      '/images/case-studies/relo-census/design11.jpg',
      '/images/case-studies/relo-census/design12.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/relo-census'
  },
  {
    id: 'relo-edge-redesign',
    title: 'Relo Edge',
    subtitle: 'Core analytics tool modernization',
    client: 'Relo Metrics',
    role: 'Product Design Lead',
    year: '2023',
    tools: ['Figma', 'Sketch', 'InVision'],
    tags: ['Analytics Platform', 'UI/UX Redesign', 'Sports Data'],
    headerImage: '/images/case-studies/relo-edge/header.jpg',
    projectBrief: 'Relo Edge is the core analytics platform that powers Relo Metrics\' sports data ecosystem. This comprehensive redesign project focused on modernizing the entire user experience, improving usability standards, and creating a foundation for enhanced user engagement and product adoption across the analytics suite.',
    situation: 'Relo\'s core analytics tool needed a complete UI/UX overhaul to improve user adoption and satisfaction. The existing interface lacked modern usability standards and clarity, hindering user engagement across the platform.',
    task: 'Directed a full UI/UX redesign of Relo\'s core analytics tool, focusing on modernizing the interface with best practices in usability and clarity to improve product adoption, user satisfaction, and engagement.',
    action: 'Led comprehensive user research, conducted usability audits, redesigned information architecture, and implemented modern design patterns. Collaborated with engineering teams to ensure technical feasibility while maintaining design integrity throughout implementation.',
    result: 'Achieved higher adoption rates, better user satisfaction scores, and significantly more engagement across the board. The redesigned platform now serves as the foundation for Relo\'s analytics suite.',
    images: [
      '/images/case-studies/relo-edge/design1.jpg',
      '/images/case-studies/relo-edge/design2.jpg',
      '/images/case-studies/relo-edge/design3.jpg',
      '/images/case-studies/relo-edge/design4.jpg',
      '/images/case-studies/relo-edge/design5.jpg',
      '/images/case-studies/relo-edge/design6.jpg',
      '/images/case-studies/relo-edge/design7.jpg',
      '/images/case-studies/relo-edge/design8.jpg',
      '/images/case-studies/relo-edge/design9.jpg',
      '/images/case-studies/relo-edge/design10.jpg',
      '/images/case-studies/relo-edge/design11.jpg',
      '/images/case-studies/relo-edge/design12.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/relo-edge-redesign'
  },
  {
    id: 'relo-sponsorpulse-integration',
    title: 'SponsorPulse Integration',
    subtitle: 'Seamless third-party integration design',
    client: 'Relo Metrics',
    role: 'Product Designer',
    year: '2023',
    tools: ['Figma', 'Zeplin', 'Hotjar'],
    tags: ['Integration Design', 'API Design', 'Data Analytics'],
    headerImage: '/images/case-studies/relo-sponsorpulse/header.jpg',
    projectBrief: 'The SponsorPulse Integration project seamlessly connected Relo\'s platform with SponsorPulse\'s third-party analytics capabilities, creating a unified experience for enhanced reporting and data analysis. This strategic integration expanded Relo\'s analytical capabilities while maintaining data consistency and user experience excellence.',
    situation: 'Relo needed to integrate with SponsorPulse, a third-party analytics platform, to provide enhanced reporting capabilities to their clients. The challenge was creating a seamless user experience that didn\'t feel like a separate tool.',
    task: 'Design the integration interface and user experience for SponsorPulse within the Relo platform, ensuring data consistency and intuitive navigation between systems.',
    action: 'Analyzed both platforms\' design systems, created unified design patterns, designed data visualization components, and worked with both engineering teams to ensure smooth technical integration.',
    result: 'Successfully integrated SponsorPulse with 100% data accuracy and seamless user experience. The integration increased client retention by 25% and became a significant revenue driver for Relo.',
    images: [
      '/images/case-studies/relo-sponsorpulse/design1.jpg',
      '/images/case-studies/relo-sponsorpulse/design2.jpg',
      '/images/case-studies/relo-sponsorpulse/design3.jpg',
      '/images/case-studies/relo-sponsorpulse/design4.jpg',
      '/images/case-studies/relo-sponsorpulse/design5.jpg',
      '/images/case-studies/relo-sponsorpulse/design6.jpg',
      '/images/case-studies/relo-sponsorpulse/design7.jpg',
      '/images/case-studies/relo-sponsorpulse/design8.jpg',
      '/images/case-studies/relo-sponsorpulse/design9.jpg',
      '/images/case-studies/relo-sponsorpulse/design10.jpg',
      '/images/case-studies/relo-sponsorpulse/design11.jpg',
      '/images/case-studies/relo-sponsorpulse/design12.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/sponsorpulse-integration'
  },
  {
    id: 'medable-design-system',
    title: 'Design System Overhaul',
    subtitle: 'Building scalable design foundations',
    client: 'Medable',
    role: 'Senior Product Designer',
    year: '2022',
    tools: ['Figma', 'Storybook', 'Zeroheight'],
    tags: ['Design Systems', 'Component Library', 'Healthcare'],
    headerImage: '/images/case-studies/medable-design-system/header.jpg',
    projectBrief: 'The Medable Design System Overhaul established a comprehensive, scalable design foundation across all Medable healthcare products. This systematic approach unified visual language, streamlined design-to-development workflows, and created a token-based system that accelerated product development while ensuring consistency across the entire product ecosystem.',
    situation: 'Medable\'s product suite was suffering from inconsistent design patterns, duplicated components, and inefficient design-to-development handoffs. This was slowing down product development and creating a fragmented user experience.',
    task: 'Create a comprehensive design system that would unify the visual language across all Medable products, improve design consistency, and accelerate the development process.',
    action: 'Audited existing components, established design principles, created a token-based design system in Figma, built component documentation, and collaborated with developers to implement the system in Storybook.',
    result: 'Reduced design inconsistencies by 80%, decreased development time for new features by 40%, and improved cross-product user experience. The design system became the foundation for all future Medable products.',
    images: [
      '/images/case-studies/medable-design-system/design1.jpg',
      '/images/case-studies/medable-design-system/design2.jpg',
      '/images/case-studies/medable-design-system/design3.jpg',
      '/images/case-studies/medable-design-system/design4.jpg',
      '/images/case-studies/medable-design-system/design5.jpg',
      '/images/case-studies/medable-design-system/design6.jpg',
      '/images/case-studies/medable-design-system/design7.jpg',
      '/images/case-studies/medable-design-system/design8.jpg',
      '/images/case-studies/medable-design-system/design9.jpg',
      '/images/case-studies/medable-design-system/design10.jpg',
      '/images/case-studies/medable-design-system/design11.jpg',
      '/images/case-studies/medable-design-system/design12.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/medable-design-system'
  },
  {
    id: 'medable-translation-tool',
    title: 'Translation Management Tool',
    subtitle: 'Streamlining global clinical trial localization',
    client: 'Medable',
    role: 'Product Designer',
    year: '2022',
    tools: ['Figma', 'Principle', 'Maze'],
    tags: ['Localization', 'Clinical Trials', 'Workflow Design'],
    headerImage: '/images/case-studies/medable-translation/header.jpg',
    projectBrief: 'The Translation Management Tool streamlined global clinical trial localization by creating an integrated platform for managing multilingual content across diverse international markets. This comprehensive solution transformed manual, error-prone translation processes into efficient, quality-controlled workflows that accelerated global clinical trial deployment.',
    situation: 'Medable needed a solution to manage translations for clinical trials across multiple languages and regions. The existing process was manual, error-prone, and time-consuming, often delaying clinical trial launches.',
    task: 'Design a comprehensive translation management tool that would streamline the localization process, ensure accuracy, and integrate with existing clinical trial workflows.',
    action: 'Researched translation workflows, interviewed translators and project managers, designed user-friendly interfaces for both translators and administrators, and created approval workflows to ensure quality control.',
    result: 'Reduced translation turnaround time by 60%, improved translation accuracy through better workflow management, and enabled Medable to expand into 15 new international markets.',
    images: [
      '/images/case-studies/medable-translation/design1.jpg',
      '/images/case-studies/medable-translation/design2.jpg',
      '/images/case-studies/medable-translation/design3.jpg',
      '/images/case-studies/medable-translation/design4.jpg',
      '/images/case-studies/medable-translation/design5.jpg',
      '/images/case-studies/medable-translation/design6.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/translation-tool'
  },
  {
    id: 'elysium-ai-dashboard',
    title: 'AI Analytics Dashboard',
    subtitle: 'Intelligent insights for business intelligence',
    client: 'Elysium',
    role: 'Lead Product Designer',
    year: '2021',
    tools: ['Figma', 'After Effects', 'Framer'],
    tags: ['AI/ML', 'Dashboard Design', 'Data Analytics'],
    headerImage: '/images/case-studies/elysium-ai/header.jpg',
    projectBrief: 'The AI Analytics Dashboard transforms complex artificial intelligence insights into accessible, actionable business intelligence for non-technical users. This flagship product leverages advanced machine learning algorithms to provide intelligent recommendations and data visualizations that accelerate decision-making processes and drive business outcomes.',
    situation: 'Elysium wanted to create an AI-powered analytics dashboard that would help businesses make data-driven decisions. The challenge was presenting complex AI insights in an understandable and actionable way for non-technical users.',
    task: 'Design an intuitive dashboard that leverages AI to provide actionable business insights while making complex data analysis accessible to users without technical backgrounds.',
    action: 'Conducted user research with business analysts, designed progressive disclosure patterns for complex data, created interactive prototypes to test AI recommendation interfaces, and developed data visualization standards.',
    result: 'Successfully launched the AI dashboard, which became Elysium\'s flagship product. Achieved 90% user adoption rate and helped clients increase their decision-making speed by 70%. The product won several industry awards for innovation.',
    images: [
      '/images/case-studies/elysium-ai/design1.jpg',
      '/images/case-studies/elysium-ai/design2.jpg',
      '/images/case-studies/elysium-ai/design3.jpg',
      '/images/case-studies/elysium-ai/design4.jpg',
      '/images/case-studies/elysium-ai/design5.jpg',
      '/images/case-studies/elysium-ai/design6.jpg',
      '/images/case-studies/elysium-ai/design7.jpg',
      '/images/case-studies/elysium-ai/design8.jpg',
      '/images/case-studies/elysium-ai/design9.jpg',
      '/images/case-studies/elysium-ai/design10.jpg',
      '/images/case-studies/elysium-ai/design11.jpg',
      '/images/case-studies/elysium-ai/design12.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/ai-dashboard'
  }
]; 