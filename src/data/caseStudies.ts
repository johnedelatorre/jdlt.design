import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'relo-census-dashboard',
    title: 'Relo Census',
    subtitle: 'Sports Analytics Dashboard Builder',
    client: 'Relo Metrics',
    role: 'Product Design Lead',
    year: '2023 - 2024',
    tools: ['Figma', 'UXPilot', 'Vercel'],
    tags: ['Sports Analytics', 'Data Platform', 'Sponsorship'],
    headerImage: '/images/case-studies/relo-census/header.jpg',
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <p class="brief-description mb-6">
            Relo Census is a modular, persona-driven sponsorship analytics platform built from the ground up to replace the company's legacy Media Value Center (MVC). Designed to help users evaluate brand performance, benchmark competitors, and generate insights across leagues and channels, Census aimed to be scalable, intuitive, and future-ready.
          </p>
          
          <p class="brief-description mb-6">
            When I joined Relo Metrics, the company needed to modernize its legacy analytics platform while building a next-generation solution. I was hired as the first product designer to lead the full end-to-end creation of Census: from defining the strategy and conducting research to designing the systems and final interface.
          </p>
          
          <p class="brief-description">
            My role wasn't just to deliver screens—it was to establish UX as a strategic function, bring design thinking into the org for the first time, and transform raw requirements into a platform that could scale across teams, personas, and verticals.
          </p>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-rocket text-blue-600"></i>
            The Complete Design Transformation
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">To do that, I led a complete shift in how the company thought about product design:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-users text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">I pushed for a <strong>persona-driven experience</strong>, partnering with Customer Success and Marketing to conduct internal and external interviews that shaped our understanding of real user needs.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-cogs text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">I introduced structured design processes—including daily design rituals, interactive prototypes, and modular component systems that engineers could build from.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-shipping-fast text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">I collaborated deeply with a small dev team (only 1 frontend and 1 backend engineer) to ship the MVP in under 90 days—while still delivering a future-ready foundation for growth.</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-cubes text-indigo-600"></i>
            Platform Architecture
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">Census was built to be:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-puzzle-piece text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>UX-first, modular, and componentized</strong>—focused on performance, scale, and reuse</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-expand-arrows-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Scalable across verticals</strong> like MLB, NFL, NBA, F1, and global brands</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-eye text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Powered by Relo's proprietary Computer Vision engine</strong> for accurate asset tracking</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-link text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Separate but complementary to MVC</strong>, designed to evolve into the long-term replacement</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-star text-amber-600"></i>
            Key Features
          </h3>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-chart-bar text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A Sponsorship Evaluation Dashboard with <strong>persona-based views</strong> tailored to each user type</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-filter text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A flexible View Builder with <strong>advanced filtering</strong> by placement, content type, league, platform</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-lightbulb text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Insight cards, benchmarking charts, and visual storytelling tools to drive decision-making</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-blue-300 pl-6 py-4 bg-blue-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-rocket text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">This case study tells the story of how I helped define, design, and deliver Relo Census—transforming raw business goals and Jira requirements into a scalable, user-centered product experience.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    situation: `
      <div class="situation-content">
        <div class="situation-intro mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            When I stepped into the Relo Census project, the environment was fragmented, reactive, and lacking even the most basic design infrastructure. Design had never been part of the product development process—engineers were accustomed to receiving Jira tickets or hand-drawn feature ideas from product managers and turning them directly into production code. This approach led to inconsistent workflows, disjointed experiences, and high friction for both internal teams and clients.
          </p>
        </div>

        <div class="situation-problems mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            The company's existing internal tool—Media Value Center (MVC)—was still in use but had become bloated, unintuitive, and nearly impossible to scale. It was built without a clear understanding of its users and had become a patchwork of one-off features that served no one particularly well. Despite its flaws, MVC was relied on by Customer Success teams to report on multi-million dollar sponsorship performance, and its limitations were slowing down adoption, renewals, and expansion opportunities.
          </p>
        </div>

        <div class="situation-leadership mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            At the same time, the leadership team had ambitious goals for Census: they saw it as the future of Relo's product suite—a modular, extensible platform capable of supporting brands, rights holders, and agency partners across leagues like the NFL, NBA, MLB, and F1. But the vision lacked executional clarity. There were no defined user types. No research. No roadmap grounded in behavior or outcomes. Just a stack of feature asks and a team of two engineers to build it.
          </p>
        </div>

        <div class="situation-challenges mb-8">
          <p class="situation-subtitle text-gray-600 mb-6">In short, I entered a product-critical initiative where:</p>
          
          <ul class="challenge-list space-y-6">
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-ban text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Design had zero precedent or process</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-question-circle text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">No personas or validated user needs had been captured</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-list text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Product thinking defaulted to task lists, not systems or outcomes</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-code text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Engineering had no experience building from design specs or systems</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-eye text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">There was high visibility from leadership—but no shared understanding of direction</span>
            </li>
          </ul>
        </div>

        <div class="situation-conclusion">
          <div class="conclusion-card bg-blue-50 border-l-4 border-blue-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-lightbulb text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                Census wasn't just a dashboard design—it was a chance to rewire how the company approached product, design, and user value from the ground up. But that meant earning trust, creating structure, and turning chaos into clarity—under real deadlines, with minimal resources, and no historical UX baseline to build from.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    task: `
      <div class="task-content">
        <div class="task-intro mb-8">
          <p class="task-description text-lg text-gray-700 leading-relaxed mb-6">
            My primary task was to shift the organization from a "requirements-to-code" mindset to a modern product design culture—one rooted in clarity, usability, and user-centered thinking. At the time, engineers were coding directly from Jira tickets or basic hand-drawn sketches. There were no systems in place to ensure consistency, scalability, or even shared understanding across teams.
          </p>
        </div>

        <div class="task-focus mb-10">
          <div class="task-header mb-6">
            <div class="task-number flex items-center gap-3">
              <i class="fas fa-layer-group text-blue-600"></i>
              <span class="task-label font-semibold text-blue-600">CORE TASK</span>
            </div>
            <h4 class="task-title text-xl font-bold text-gray-900 mb-4">Introduce and Implement a Design System</h4>
          </div>
          
          <p class="task-overview text-lg text-gray-700 leading-relaxed mb-6">
            A critical part of this task was to <strong>introduce and implement a design system</strong> from scratch. This wasn't just a visual upgrade—it was a foundational move to bring consistency to the product's visual and verbal language, reduce ambiguity during handoffs, and enable engineers to work more efficiently with clear, reusable UI patterns. The system needed to solve for:
          </p>
          
          <div class="task-needs mb-8">
            <ul class="task-list space-y-4">
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-palette text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Design consistency across screens, flows, and features</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-rocket text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Faster development cycles through reusable components</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-project-diagram text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Clarity in how data, filters, charts, and cards should be structured and interact</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-expand-arrows-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">A modern, clean, scalable aesthetic that reflected the maturity of the product</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="task-responsibilities">
          <div class="section-header mb-6">
            <h4 class="section-title flex items-center gap-3 text-lg font-bold text-gray-900">
              <i class="fas fa-tasks text-indigo-600"></i>
              Beyond the Design System
            </h4>
            <p class="section-subtitle text-gray-600 mt-2">My responsibilities included:</p>
          </div>
          
          <div class="responsibilities-list space-y-4">
            <div class="responsibility-item flex items-start gap-4">
              <i class="fas fa-handshake text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Building trust with engineers and transitioning workflows from one-off feature tickets to full UX flows and specs</span>
            </div>
            
            <div class="responsibility-item flex items-start gap-4">
              <i class="fas fa-language text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Translating ambiguous product requirements into clear, testable designs grounded in user behavior</span>
            </div>
            
            <div class="responsibility-item flex items-start gap-4">
              <i class="fas fa-users text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Leading a persona-driven approach to development—validating user types and their core needs through research with internal teams and clients</span>
            </div>
            
            <div class="responsibility-item flex items-start gap-4">
              <i class="fas fa-cubes text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Architecting a dashboard builder experience that was modular, scalable, and tailored to multiple user types</span>
            </div>
            
            <div class="responsibility-item flex items-start gap-4">
              <i class="fas fa-cogs text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Establishing a UX practice inside the organization that could ship quickly under pressure—without sacrificing quality or usability</span>
            </div>
          </div>
        </div>

        <div class="task-conclusion mt-10">
          <div class="conclusion-card bg-purple-50 border-l-4 border-purple-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-star text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                Census couldn't just be another analytics tool. It had to prove that thoughtful design could lead to better decision-making, faster development, and stronger product-market alignment.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    action: `
      <div class="action-content">
        <div class="action-intro mb-8">
          <p class="action-description text-lg text-gray-700 leading-relaxed">
            Conducted extensive user research with brands and agencies, mapped complex data relationships, designed intuitive visualization systems, and created scalable design patterns. Worked closely with data scientists to ensure the platform could handle massive datasets while maintaining usability.
          </p>
        </div>

        <div class="consolidated-actions mb-12">
          <div class="actions-container bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">1. Evangelizing UX as a Strategic Discipline</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Embedded directly with engineering from day one, modeling how design can remove ambiguity and improve outcomes</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Introduced a new working model centered around design specs, interactive prototypes, and system thinking—moving away from hand-drawn sketches and Jira-only workflows</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Set up async design rituals including Slack demos, Loom walkthroughs, and Notion-based documentation to keep design tightly looped into a fast-moving dev process</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">2. Research-Driven Persona Foundation</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Partnered with Customer Success and Marketing to scope and conduct qualitative interviews with internal users and select clients</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Synthesized insights into three primary personas—Stakeholder, Brands, and Agencies—each tied to specific data needs, decision flows, and success metrics</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Used these personas to inform architecture, filtering logic, and the default view-building experience across the platform</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Ran alignment workshops to socialize personas and integrate them into product planning and UI decision-making</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">3. Implementing a Scalable, Modern Design System</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Chose and implemented the Ant Design System to provide a strong UI foundation that aligned with our scalability and visual goals</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Designed a modular component set using Ant Design primitives and Ant Charts for dynamic data visualization, along with Font Awesome icons for clarity and accessibility</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Built out cards, filters, views, nav structures, tooltips, and layouts as reusable, systematized UI blocks—mapped to both persona needs and technical constraints</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Documented all components with usage patterns, interaction states, and spacing logic in Figma to support seamless engineering implementation</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">4. Prototype-Led Development and MVP Velocity</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Used Vercel v0.dev and Cursor to generate high-fidelity, fully interactive prototypes early in the process—allowing stakeholders to test flows and engineers to preview logic before tickets were written</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created low-friction feedback loops with engineers to test feasibility, validate assumptions, and reduce rework</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Shipped an MVP in under 90 days with just one frontend and one backend engineer, while designing for long-term platform extensibility (Release 2, 3+)</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="personas-viewer-placeholder">
          <!-- Persona viewer will be rendered as React component -->
        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-chart-bar text-blue-600"></i>
              Results and Business Impact
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>45% increase in internal adoption</strong> across Customer Success, Sales, and Product teams—Census became the new go-to platform for sponsorship analysis</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>30% faster load times</strong> and reduced UI clutter by streamlining views, filters, and interactions</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>92% satisfaction score</strong> during stakeholder rollout, with cross-functional praise for clarity, usability, and system consistency</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>25% decrease in internal support requests</strong>—users could now self-serve advanced filtering and data storytelling tasks</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Successfully shipped the MVP in under 90 days</strong> with only 2 engineers—transforming Jira feature tickets into a scalable, component-driven experience</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Ant Design system adoption</strong> allowed engineers to build new features faster, with consistent logic and visual polish across modules</span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-trophy text-amber-600"></i>
              Major Wins
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Established the first formal UX practice at Relo</strong>—introducing systems thinking, structured design processes, and persona-driven product development</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Built long-term trust with engineering</strong> by pairing design clarity with dev-ready specs and component logic</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Designed and deployed a modular UI architecture</strong> using Ant Design and Ant Charts that remains extensible for future feature releases</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Created a product vision grounded in actual user behavior</strong>—not assumptions—resulting in stronger roadmap alignment across departments</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Turned a chaotic, ticket-driven development process</strong> into a repeatable, design-led approach for future 0→1 initiatives</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-lightbulb text-green-600"></i>
              What I Learned
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>How to embed design thinking inside an org that had never worked with a designer</strong>—while maintaining trust and speed</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>The strategic leverage of a well-implemented design system</strong>—not just for aesthetics, but for scalability, velocity, and cross-team understanding</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>The power of user personas as more than just research artifacts</strong>—they became the blueprint for architecture, logic, and interaction models</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>How to balance MVP velocity with long-term scalability</strong> by making smart system-level decisions early (modularity, reusability, clarity)</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>That great design isn't just what's delivered</strong>—it's the culture, trust, and shared language it creates between teams</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    images: [
      '/images/case-studies/relo-census/Relo Census Login Page.png',
      '/images/case-studies/relo-census/Sponsorship Evaluation Dashboard.png',
      '/images/case-studies/relo-census/Evaluation with Filters.png',
      '/images/case-studies/relo-census/Rightsholder Selection.png',
      '/images/case-studies/relo-census/Interactive Data Tooltips.png',
      '/images/case-studies/relo-census/Detailed Rightsholder Analysis.png',
      '/images/case-studies/relo-census/Views Management Dashboard.png',
      '/images/case-studies/relo-census/View Builder - SMV Analysis.png',
      '/images/case-studies/relo-census/View Builder - Metrics Selection.png',
      '/images/case-studies/relo-census/Advanced View Builder Interface.png',
      '/images/case-studies/relo-census/View Builder - Chart Visualization.png',
      '/images/case-studies/relo-census/Dashboard Builder View.png',
    ],
    figmaLink: 'https://www.figma.com/proto/asZK1MnXCqSyi95NlMRNhA/Porfolio-Preso-JohnDeLaTorreUgarte-2025?page-id=3659%3A58037&node-id=3659-136303&viewport=350%2C587%2C0.02&t=AuMD8R0hy2zSuSnl-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3659%3A136303'
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
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <p class="brief-description mb-6">
            Relo Census is a modular, persona-driven sponsorship analytics platform built from the ground up to replace the company's legacy Media Value Center (MVC). Designed to help users evaluate brand performance, benchmark competitors, and generate insights across leagues and channels, Census aimed to be scalable, intuitive, and future-ready.
          </p>
          
          <p class="brief-description mb-6">
            When I joined, there were no designers—only Jira tickets, hand sketches, and an engineering team that had never collaborated with design. Usability was inconsistent, and product direction was reactive. I was hired as the first product designer to lead the full end-to-end creation of Census: from defining the strategy and conducting research to designing the systems and final interface.
          </p>
          
          <p class="brief-description">
            My role wasn't just to deliver screens—it was to establish UX as a strategic function, bring design thinking into the org for the first time, and transform raw requirements into a platform that could scale across teams, personas, and verticals.
          </p>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-rocket text-blue-600"></i>
            The Complete Design Transformation
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">To do that, I led a complete shift in how the company thought about product design:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-users text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">I pushed for a <strong>persona-driven experience</strong>, partnering with Customer Success and Marketing to conduct internal and external interviews that shaped our understanding of real user needs.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-cogs text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">I introduced structured design processes—including daily design rituals, interactive prototypes, and modular component systems that engineers could build from.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-shipping-fast text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">I collaborated deeply with a small dev team (only 1 frontend and 1 backend engineer) to ship the MVP in under 90 days—while still delivering a future-ready foundation for growth.</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-cubes text-indigo-600"></i>
            Platform Architecture
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">Census was built to be:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-puzzle-piece text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>UX-first, modular, and componentized</strong>—focused on performance, scale, and reuse</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-expand-arrows-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Scalable across verticals</strong> like MLB, NFL, NBA, F1, and global brands</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-eye text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Powered by Relo's proprietary Computer Vision engine</strong> for accurate asset tracking</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-link text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Separate but complementary to MVC</strong>, designed to evolve into the long-term replacement</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-star text-amber-600"></i>
            Key Features
          </h3>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-chart-bar text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A Sponsorship Evaluation Dashboard with <strong>persona-based views</strong> tailored to each user type</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-filter text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A flexible View Builder with <strong>advanced filtering</strong> by placement, content type, league, platform</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-lightbulb text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Insight cards, benchmarking charts, and visual storytelling tools to drive decision-making</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-blue-300 pl-6 py-4 bg-blue-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-rocket text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">This case study tells the story of how I helped define, design, and deliver Relo Census—transforming raw business goals and Jira requirements into a scalable, user-centered product experience.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    situation: `
      <div class="situation-content">
        <div class="situation-intro mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            When I stepped into the Relo Census project, the environment was fragmented, reactive, and lacking even the most basic design infrastructure. Design had never been part of the product development process—engineers were accustomed to receiving Jira tickets or hand-drawn feature ideas from product managers and turning them directly into production code. This approach led to inconsistent workflows, disjointed experiences, and high friction for both internal teams and clients.
          </p>
        </div>

        <div class="situation-problems mb-8">          
          <div class="situation-mvc mb-8">
            <p class="problem-description text-gray-700 leading-relaxed mb-6">
              The company's existing internal tool—Media Value Center (MVC)—was still in use but had become bloated, unintuitive, and nearly impossible to scale. It was built without a clear understanding of its users and had become a patchwork of one-off features that served no one particularly well. Despite its flaws, MVC was relied on by Customer Success teams to report on multi-million dollar sponsorship performance, and its limitations were slowing down adoption, renewals, and expansion opportunities.
            </p>
          </div>

          <div class="situation-vision mb-8">
            <p class="vision-description text-gray-700 leading-relaxed mb-6">
              At the same time, the leadership team had ambitious goals for Census: they saw it as the future of Relo's product suite—a modular, extensible platform capable of supporting brands, rights holders, and agency partners across leagues like the NFL, NBA, MLB, and F1. But the vision lacked executional clarity. There were no defined user types. No research. No roadmap grounded in behavior or outcomes. Just a stack of feature asks and a team of two engineers to build it.
            </p>
          </div>
        </div>

        <div class="situation-starting-point mb-8">
          <div class="starting-point-header mb-6">
            <h3 class="starting-point-title flex items-center gap-3 mb-4 text-xl font-semibold text-gray-900">
              <i class="fas fa-exclamation-triangle text-orange-600"></i>
              In short, I entered a product-critical initiative where:
            </h3>
          </div>
          
          <ul class="starting-point-list space-y-6">
            <li class="starting-point-item flex items-start gap-4">
              <i class="fas fa-times-circle text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Design had zero precedent or process</strong></span>
            </li>
            <li class="starting-point-item flex items-start gap-4">
              <i class="fas fa-question-circle text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>No personas or validated user needs had been captured</strong></span>
            </li>
            <li class="starting-point-item flex items-start gap-4">
              <i class="fas fa-list text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Product thinking defaulted to task lists, not systems or outcomes</strong></span>
            </li>
            <li class="starting-point-item flex items-start gap-4">
              <i class="fas fa-code text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Engineering had no experience building from design specs or systems</strong></span>
            </li>
            <li class="starting-point-item flex items-start gap-4">
              <i class="fas fa-eye text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>There was high visibility from leadership—but no shared understanding of direction</strong></span>
            </li>
          </ul>
        </div>

        <div class="situation-conclusion">
          <div class="conclusion-card bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div class="conclusion-content flex items-start gap-4">
              <i class="fas fa-lightbulb text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                Census wasn't just a dashboard design—it was a chance to rewire how the company approached product, design, and user value from the ground up. But that meant earning trust, creating structure, and turning chaos into clarity—under real deadlines, with minimal resources, and no historical UX baseline to build from.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
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
    // figmaLink: '' // No prototype available
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
    // figmaLink: '' // No prototype available
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
    // figmaLink: '' // No prototype available
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
    // figmaLink: '' // No prototype available
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
    // figmaLink: '' // No prototype available
  }
]; 