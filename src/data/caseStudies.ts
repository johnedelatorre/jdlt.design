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
    isRecent: true,
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
    subtitle: 'Platform UX UI Redesign (from legacy MVC)',
    client: 'Relo Metrics',
    role: 'Product Design Lead',
    year: '2024 - 2025',
    tools: ['Figma', 'Pendo', 'Cursor', 'Claude'],
    tags: ['Analytics Platform', 'UI/UX Redesign', 'Sports Data'],
    headerImage: '/images/case-studies/relo-edge/relo-edge-header.jpg',
    isRecent: true,
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <blockquote class="quote-section mb-8 border-l-8 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 pl-8 py-6 rounded-r-xl shadow-lg relative">
            <div class="absolute -left-4 top-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <i class="fas fa-quote-left text-white text-sm"></i>
            </div>
            <p class="quote-text text-xl font-bold text-blue-900 italic mb-3 leading-relaxed">
              "In every design sprint, we asked one thing: how can we surprise and delight our customers just a little more?"
            </p>
            <p class="quote-description text-gray-700 leading-relaxed font-medium">
              This question guided every flow, component, and interaction—from sticky filters to smart previews.
            </p>
          </blockquote>
          
          <div class="content-section mb-6 flex items-start gap-4">
            <div class="icon-wrapper mt-1">
              <i class="fas fa-chart-line text-blue-600 text-xl"></i>
            </div>
            <p class="brief-description text-gray-700 leading-relaxed">
              Relo Edge (formerly known as Media Value Center) is the internal analytics platform used across Customer Success, Sales, and Product to track, report, and optimize sponsorship performance. But over time, its legacy architecture and UI became a bottleneck—visually outdated, difficult to navigate, and increasingly unable to support modern workflows.
            </p>
          </div>
          
          <div class="content-section mb-6 flex items-start gap-4">
            <div class="icon-wrapper mt-1">
              <i class="fas fa-user-tie text-purple-600 text-xl"></i>
            </div>
            <p class="brief-description text-gray-700 leading-relaxed">
              As <strong>Lead Product Designer</strong>, I led the complete end-to-end redesign, driving a transformation from brittle workflows to a <strong>modular, intelligent, and role-specific product experience</strong>. This was more than a facelift—it was a ground-up overhaul of how internal teams interact with data.
            </p>
          </div>
          
          <div class="content-section mb-6 flex items-start gap-4">
            <div class="icon-wrapper mt-1">
              <i class="fas fa-star text-amber-500 text-xl"></i>
            </div>
            <p class="brief-description text-gray-700 leading-relaxed">
              <strong>North Star</strong>: Surprise and delight internal teams by turning a functional tool into a modern, elegant, and intuitive platform aligned with the Relo brand.
            </p>
          </div>
        </div>
        
        <div class="brief-section mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-amber-300 pl-6 py-4 bg-amber-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-sparkles text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">
                  <strong>In every iterative review with Product, Engineering, Sales, and Customer Success, we asked ourselves one core question:</strong><br>
                  "What else can we do to surprise and delight our users?"<br><br>
                  This mindset became our guiding light across every design artifact, layout decision, and micro-interaction.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    situation: `
      <div class="situation-content">
        <div class="situation-intro mb-8">
          <div class="content-section flex items-start gap-4">
            <div class="icon-wrapper mt-1">
              <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
            </div>
            <p class="situation-text text-lg text-gray-700 leading-relaxed">
              Relo MVC had become a source of <strong>daily friction</strong>. The UX was <em>rigid</em>, the UI was <em>dense</em>, and workflows were fragmented across duplicated views and inconsistent patterns. Engineers had built it quickly to support growth, but <strong>design had never played a foundational role</strong>—until now.
            </p>
          </div>
        </div>

        <div class="situation-challenges mb-8">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-list-ul text-red-600"></i>
            What we were up against:
          </h3>
          
          <ul class="challenge-list space-y-4">
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-eye-slash text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Visually outdated UI with poor hierarchy</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-filter text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Filters that couldn't be saved or reused</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-table text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Dense data tables with no responsive logic</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-puzzle-piece text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Fragmented workflows and duplicated navigation</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-user-cog text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">No personalization by role (everyone saw the same clutter)</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-comments text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">High reliance on Slack to answer <em>"how do I find this?"</em></span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-code text-gray-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Engineered UI without UX</strong>—flows felt forced, inconsistent, and lacked a user-centered lens</span>
            </li>
          </ul>
        </div>

        <div class="situation-impact mb-8">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-chart-line-down text-red-600"></i>
            Outdated UX, Low NPS, Frustrated Users
          </h3>
          
          <ul class="impact-list space-y-4">
            <li class="impact-item flex items-start gap-4">
              <i class="fas fa-wrench text-gray-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">MVC platform had <strong>legacy UX built by engineers</strong> without formal design process</span>
            </li>
            <li class="impact-item flex items-start gap-4">
              <i class="fas fa-palette text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Interface was <em>visually outdated</em> and not aligned with current brand systems</span>
            </li>
            <li class="impact-item flex items-start gap-4">
              <i class="fas fa-frown text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>NPS score and qualitative feedback</strong> showed consistent dissatisfaction</span>
            </li>
            <li class="impact-item flex items-start gap-4">
              <i class="fas fa-lock text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Rigid layout and static filters made personalized or comparative analysis <em>almost impossible</em></span>
            </li>
          </ul>
        </div>

        <div class="user-pain-points mb-8">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-user-injured text-red-600"></i>
            User Pain Points:
          </h3>
          
          <ul class="pain-points-list space-y-4">
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-sliders-h text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Filters were <strong>difficult to use and not intuitive</strong></span>
            </li>
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-expand-arrows-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Data tables required constant manual resizing and had <em>poor spacing</em></span>
            </li>
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-save text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">No ability to <strong>save filters or queries</strong> for later reuse</span>
            </li>
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-clock text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Lack of <em>real-time, automated, or trending insights</em></span>
            </li>
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-eye-dropper text-gray-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Interface was <strong>dense, dark, and visually fatiguing</strong></span>
            </li>
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-tachometer-alt text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Users needed metrics surfaced to them—<em>fast, not buried</em></span>
            </li>
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-file-excel text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Workarounds were the norm</strong>—users resorted to Excel exports and manual effort to find usable insights</span>
            </li>
            <li class="pain-item flex items-start gap-4">
              <i class="fas fa-users-cog text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><em>One-size-fits-all UI</em>—brands, agencies, and rights holders all saw the same interface, regardless of their workflow or priorities</span>
            </li>
          </ul>
        </div>

        <div class="client-feedback mb-8">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-quote-left text-blue-600"></i>
            Direct Client Feedback Quote:
          </h3>
          
          <div class="feedback-quotes space-y-4">
            <blockquote class="quote-card bg-gradient-to-r from-red-50 to-red-100 border-l-8 border-red-500 pl-8 py-6 rounded-r-xl shadow-lg relative">
              <div class="absolute -left-4 top-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <i class="fas fa-quote-left text-white text-sm"></i>
              </div>
              <p class="quote-text text-lg font-bold text-red-900 italic mb-2 leading-relaxed">
                "This UI makes everything feel harder than it is."
              </p>
              <cite class="quote-attribution text-red-700 font-medium">– CS Manager</cite>
            </blockquote>
            
            <blockquote class="quote-card bg-gradient-to-r from-orange-50 to-orange-100 border-l-8 border-orange-500 pl-8 py-6 rounded-r-xl shadow-lg relative">
              <div class="absolute -left-4 top-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <i class="fas fa-quote-left text-white text-sm"></i>
              </div>
              <p class="quote-text text-lg font-bold text-orange-900 italic mb-2 leading-relaxed">
                "We have to use Excel just to build a client recap."
              </p>
              <cite class="quote-attribution text-orange-700 font-medium">– Analyst</cite>
            </blockquote>
          </div>
        </div>

        <div class="legacy-screenshots mb-8">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-receipt text-gray-600"></i>
            Legacy Platform Screenshots
          </h3>
          
          <blockquote class="description-quote bg-gradient-to-r from-gray-50 to-gray-100 border-l-8 border-gray-500 pl-8 py-6 rounded-r-xl shadow-lg relative mb-8">
            <div class="absolute -left-4 top-4 w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
              <i class="fas fa-info-circle text-white text-sm"></i>
            </div>
            <p class="quote-text text-lg font-medium text-gray-900 italic leading-relaxed">
              What our users saw every day—and what they had to work around
            </p>
          </blockquote>

          <div class="legacy-screenshots-viewer-placeholder">
            <!-- Legacy screenshots viewer will be rendered as React component -->
          </div>

          <div class="screenshots-descriptions mt-6">
            <ul class="screenshots-list space-y-4">
              <li class="screenshot-item flex items-start gap-4">
                <i class="fas fa-chart-bar text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed"><strong>Legacy Dashboard Overview</strong> – Poor spacing, heavy contrast, overwhelming density</span>
              </li>
              <li class="screenshot-item flex items-start gap-4">
                <i class="fas fa-search text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed"><strong>Legacy Automated Insights</strong> – Charts lacked logic, and insights were buried</span>
              </li>
              <li class="screenshot-item flex items-start gap-4">
                <i class="fas fa-clipboard-list text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed"><strong>Legacy Data Explorer</strong> – Cluttered UI with dropdown stacking and no defaults</span>
              </li>
              <li class="screenshot-item flex items-start gap-4">
                <i class="fas fa-folder text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed"><strong>Legacy Social Media Views</strong> – Overwhelming view of social media posts without relevant data</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
    task: `
      <div class="task-content">
        <div class="task-intro mb-8">
          <p class="task-description text-lg text-gray-700 leading-relaxed mb-6">
            Reimagine the platform as a <strong>modern, role-aware, insights-forward experience</strong>, enabling internal teams to move faster, think clearer, and feel proud using the product.
          </p>
        </div>

        <div class="task-section mb-10">
          <div class="task-header mb-6">
            <h4 class="task-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-drafting-compass text-blue-600"></i>
              Re-architect the Platform from First Principles
            </h4>
          </div>
          
          <p class="task-overview text-lg text-gray-700 leading-relaxed mb-6">
            <em>Diagnose and structure the platform's UX problems: overlapping navigation, unclear workflows, and disconnected tagging/filters. These issues had built up incrementally—so the fix couldn't be cosmetic.</em>
          </p>
          
          <div class="task-objectives mb-8">
            <ul class="task-list space-y-4">
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-cubes text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Establish a new information architecture</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-map-marker-alt text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Define clear entry points for placement, filter, and export logic</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-brain text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Help teams agree on a single model of how the product should behave</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-check-circle text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Preserve core features while redesigning the way users moved through them</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="task-section mb-10">
          <div class="task-header mb-6">
            <h4 class="task-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-layer-group text-purple-600"></i>
              Deliver a Modular System That Could Scale
            </h4>
          </div>
          
          <p class="task-overview text-lg text-gray-700 leading-relaxed mb-6">
            <em>Build modular, reusable patterns that could scale across the business—serving future tools, new personas, and faster engineering cycles.</em>
          </p>
          
          <div class="task-objectives mb-8">
            <ul class="task-list space-y-4">
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-puzzle-piece text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">A full design system</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-calculator text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Visual and logic-based component libraries</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-sync-alt text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Save/export/tagging UX that was both flexible and trusted</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="task-section mb-8">
          <div class="task-header mb-6">
            <h4 class="task-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-bullseye text-red-600"></i>
              Design & Usability Strategy Goals
            </h4>
          </div>
          
          <div class="task-goals space-y-3">
            <div class="goal-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-gray-700 leading-relaxed">Reduce friction and cognitive load</span>
            </div>
            <div class="goal-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-gray-700 leading-relaxed">Support key workflows for brands, agencies, and rights holders</span>
            </div>
            <div class="goal-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-gray-700 leading-relaxed">Introduce scalable design patterns</span>
            </div>
            <div class="goal-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-gray-700 leading-relaxed">Elevate the product's visual and functional maturity to match our position in the market</span>
            </div>
            <div class="goal-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-gray-700 leading-relaxed">Shift perception from "internal dashboard" to "internal product"</span>
            </div>
            <div class="goal-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-gray-700 leading-relaxed"><strong>Infuse delight & surprise into every step of the experience—from loading states to filter behavior, from hover previews to empty states.</strong></span>
            </div>
          </div>
        </div>
      </div>
    `,
    action: `
      <div class="action-content">
        
        <div class="action-section mb-12">
          <div class="action-header mb-6">
            <h3 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-search text-blue-600"></i>
              Action: Discovery & Internal Listening
            </h3>
          </div>
          
          <div class="action-details mb-8">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Conducted deep listening sessions with:</h4>
            <ul class="action-points space-y-3">
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>CS</strong> (frustration with prep time + unreadable tables)</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>Sales</strong> (needed screenshot-worthy visuals)</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>Product</strong> (worried about flow fragmentation)</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>Marketing</strong> (wanted shareable UI)</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>Engineering</strong> (sick of fixing UI exceptions manually)</span>
              </li>
            </ul>
          </div>

          <div class="action-insights mb-8">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Surfaced core frictions:</h4>
            <ul class="action-points space-y-3">
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">No smart defaults or personalization</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Tribal knowledge required for basic tasks</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Actions buried or inconsistently placed</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Data architecture didn't match how teams worked</span>
              </li>
            </ul>
          </div>

          <div class="quote-section mb-8">
            <blockquote class="border-l-4 border-blue-300 bg-blue-50 p-6 rounded-r-lg">
              <p class="text-lg text-gray-700 italic mb-3 leading-relaxed">
                "Could we go one step further and make this something they'd want to show off?" – PM
              </p>
              <p class="text-lg text-gray-700 italic leading-relaxed">
                "If a CSM smiled the first time they opened this new dashboard, we knew we did our job." – <em>Design mantra from review sessions</em>
              </p>
            </blockquote>
          </div>
        </div>

        <div class="action-section mb-12">
          <div class="action-header mb-6">
            <h3 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-brain text-purple-600"></i>
              Action: UX Redesign + Information Architecture
            </h3>
          </div>

          <div class="action-details mb-8">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Reorganized around <strong>persona-based entry points</strong> (e.g., Rights Holders → Campaigns → Exposures)
            </p>
            
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Introduced:</h4>
            <ul class="action-points space-y-3">
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Persistent nav + sticky filters</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Smart cards with preview hovers</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Visual hierarchy with zoom-in/zoom-out tasks</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Contextual filters tied to metrics</span>
              </li>
            </ul>
          </div>

          <div class="action-testing mb-8">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Ran 1:1 walkthroughs and async testing with:</h4>
            <ul class="action-points space-y-3">
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>CSMs:</strong> "Can I get to my campaigns faster?"</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>Analysts:</strong> "Can I break down exposure by region?"</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed"><strong>Sales:</strong> "Can I screenshot this and share it?"</span>
              </li>
            </ul>
          </div>

          <div class="pullquote-section mb-8">
            <div class="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
              <div class="flex items-start gap-3">
                <i class="fas fa-quote-left text-purple-600 text-xl self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <div>
                  <p class="text-lg font-semibold text-purple-900 mb-3 leading-relaxed">
                    <em>Pull-Quote from Our Process</em>
                  </p>
                  <p class="text-lg text-gray-700 italic mb-3 leading-relaxed">
                    "Every design review ended with one final question: have we done enough to surprise and delight our users?"
                  </p>
                  <p class="text-lg text-gray-700 italic leading-relaxed">
                    That lens changed how we thought about defaults, animations, and even scroll behavior.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="highlight-section">
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div class="flex items-start gap-3">
                <i class="fas fa-star text-yellow-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <p class="text-lg text-gray-700 leading-relaxed">
                  During every review cycle, I challenged our team with one goal:<br>
                  <strong>"Can we surprise them here?"</strong><br>
                  Whether it was a micro-interaction or a new chart layout, we aimed to inject elegance, speed, and joy into every corner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="action-section mb-12">
          <div class="action-header mb-6">
            <h3 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-cube text-orange-600"></i>
              Action: Design System Foundation
            </h3>
          </div>

          <div class="action-details mb-8">
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Replaced brittle, inconsistent UI with:
            </p>
            
            <ul class="action-points space-y-3 mb-8">
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Tokens for spacing, type, and elevation</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Modular components: cards, tables, drawers, tabs</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Themeable design tokens (light/dark, role-specific)</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Dev-ready handoff via Figma + Notion libraries</span>
              </li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-900 mb-4">Prototyped full flows using v0.dev:</h4>
            <ul class="action-points space-y-3">
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Saved filters</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Responsive data tables</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Exposure preview workflows</span>
              </li>
              <li class="action-point flex items-start gap-3">
                <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                <span class="text-lg text-gray-700 leading-relaxed">Role-adaptive dashboards</span>
              </li>
            </ul>
          </div>

          <div class="quote-section">
            <blockquote class="border-l-4 border-green-300 bg-green-50 p-6 rounded-r-lg">
              <p class="text-lg text-gray-700 italic mb-3 leading-relaxed">
                "This finally feels like a real product. I don't have to explain how to use it." – CS Lead
              </p>
              <p class="text-lg text-gray-700 italic leading-relaxed">
                "It's sharp. I'd show this in a pitch deck." – Marketing
              </p>
            </blockquote>
          </div>
        </div>

        <div class="action-section mb-8">
          <div class="action-header mb-6">
            <h3 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-toolbox text-teal-600"></i>
              Action: Building a Unified Design System
            </h3>
          </div>

          <p class="text-lg text-gray-700 leading-relaxed mb-8">
            Created <strong>scalable, developer-friendly patterns</strong> based on Ant Design with custom theming and logic.
          </p>

          <div class="system-sections space-y-8">
            <div class="system-section">
              <h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <i class="fas fa-puzzle-piece text-blue-600"></i>
                Core UI Components
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Smart data tables w/ filters, sorting</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Exposure cards and campaign layouts</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Notification toasts and saved query drawers</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Metric tiles, trend charts, media previews</span>
                </li>
              </ul>
            </div>

            <div class="system-section">
              <h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <i class="fas fa-handshake text-purple-600"></i>
                Developer Handoff
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Shared component specs via Figma libraries</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Tokens and breakpoints in dev-ready JSON</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">QA checklist via design-dev sync meetings</span>
                </li>
              </ul>
            </div>

            <div class="system-section">
              <h4 class="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <i class="fas fa-trophy text-green-600"></i>
                System Wins
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Adopted across 2 more internal tools</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">New design ops velocity: <strong>2x faster design + handoff cycle</strong></span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Shared visual logic → fewer rework cycles and clearer expectations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="action-section mb-8">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-users-cog text-indigo-600"></i>
            Change Management
          </h4>
          <ul class="action-points space-y-4">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-book text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Authored a training playbook for internal Customer Success teams and delivered two enablement workshops to ensure smooth adoption</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-flag text-violet-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Collaborated with Engineering to implement a phased rollout behind feature flags, allowing for gradual activation without interrupting ongoing study operations</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        
        <div class="results-section mb-12">
          <div class="section-header mb-6">
            <h3 class="results-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-chart-line text-blue-600"></i>
              UX & Usability
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-chart-bar text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>42% increase in feature adoption</strong> (filters, previews, saved views)</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-arrow-down text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>68% drop in UI complaints</strong> and Slack "how-to" requests</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-brain text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed">Reduced click depth by <strong>36%</strong> across main workflows</span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-6">
            <h3 class="results-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-tachometer-alt text-orange-600"></i>
              Performance & System Impact
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-bolt text-yellow-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>38% faster load times</strong> (optimized rendering logic)</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-recycle text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed">Design system scaled to <strong>2+ tools with no rebuild</strong></span>
            </li>
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-rocket text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed">CSM onboarding cut in half (from <strong>3 weeks to 1.5</strong>)</span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-6">
            <h3 class="results-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-chess-king text-indigo-600"></i>
              Strategic Shift
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed">Relo Edge became a <strong>trusted source of insight</strong>, not just data</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed">Elevated <strong>product credibility across internal departments</strong></span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed">Executive buy-in secured for <strong>future UX-led initiatives</strong></span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-6">
            <h3 class="results-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-gift text-pink-600"></i>
              Surprise & Delight Outcomes
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-sparkles text-pink-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed">Users reacted with enthusiasm during early demos—<em>"this doesn't feel like an internal tool anymore."</em></span>
            </li>
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-sparkles text-pink-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed">CS teams felt proud to <strong>share dashboards in client reviews without manual prep</strong>.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <i class="fas fa-sparkles text-pink-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed">Marketing started <strong>screenshotting real platform views for sales decks</strong>—no mockups needed.</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <div class="section-header mb-6">
            <h3 class="results-title text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <i class="fas fa-lightbulb text-yellow-600"></i>
              What I Learned
            </h3>
          </div>
          
          <div class="learnings-content space-y-6">
            <div class="learning-item flex items-start gap-4">
              <div class="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                Surface-level polish doesn't solve deep UX rot—<strong>you must rebuild the mental model.</strong>
              </p>
            </div>
            
            <div class="learning-item flex items-start gap-4">
              <div class="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                <strong>Internal tools deserve delight</strong>—users are still humans.
              </p>
            </div>
            
            <div class="learning-item flex items-start gap-4">
              <div class="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                <strong>AI-enabled prototyping changed our velocity</strong>—v0.dev gave devs confidence and speed.
              </p>
            </div>
            
            <div class="learning-item flex items-start gap-4">
              <div class="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                Design systems are the blueprint <strong>for design maturity and org credibility.</strong>
              </p>
            </div>
            
            <div class="learning-item flex items-start gap-4">
              <div class="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                Role-first thinking prevents bloat and enables confident navigation.
              </p>
            </div>
            
            <div class="learning-item flex items-start gap-4">
              <div class="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                <strong>Collaboration across Product, CS, and Engineering made it possible to inject joy into every pixel.</strong>
              </p>
            </div>
            
            <div class="learning-item flex items-start gap-4">
              <div class="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0 mt-2"></div>
              <p class="text-lg text-gray-700 leading-relaxed">
                <strong>Surprise and delight happens when clarity meets flow!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    images: [
      '/images/case-studies/relo-edge/sign-in-sign-up-pages.jpg',
      '/images/case-studies/relo-edge/home-page-collapsed-side-nav.jpg',
      '/images/case-studies/relo-edge/automated-insights.jpg',
      '/images/case-studies/relo-edge/data-explorer.jpg',
      '/images/case-studies/relo-edge/data-explorer-with-sticky-filter.jpg',
      '/images/case-studies/relo-edge/data-explorer-placements-chart.jpg',
      '/images/case-studies/relo-edge/social-media-exposure-list-view.jpg',
      '/images/case-studies/relo-edge/social-media-exposure-grid-view.jpg',
      '/images/case-studies/relo-edge/social-media-exposure-modal.jpg',
      '/images/case-studies/relo-edge/broadcast-exposure-viewership.jpg',
      '/images/case-studies/relo-edge/broadcast-exposure-sample-exposures-tab.jpg',
      '/images/case-studies/relo-edge/broadcast-exposure-modal.jpg',
      '/images/case-studies/relo-edge/social-post-metrics.jpg',
      '/images/case-studies/relo-edge/social-post-metrics-campaigns.jpg',
      '/images/case-studies/relo-edge/social-post-metrics-create-campaign.jpg',
      '/images/case-studies/relo-edge/audience.jpg',
      '/images/case-studies/relo-edge/social-benchmarking.jpg',
      '/images/case-studies/relo-edge/placement-benchmarking.jpg',
      '/images/case-studies/relo-edge/reports.jpg',
      '/images/case-studies/relo-edge/reports-select-cover-image.jpg',
      '/images/case-studies/relo-edge/pacing.jpg',
      '/images/case-studies/relo-edge/pacing-stats-slide-drawer.jpg',
      '/images/case-studies/relo-edge/collections.jpg',
      '/images/case-studies/relo-edge/collections-create-collection.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/asZK1MnXCqSyi95NlMRNhA/Porfolio-Preso-JohnDeLaTorreUgarte-2025?page-id=3858%3A49934&node-id=3865-76794&viewport=399%2C328%2C0.02&t=R9l0Me4nlxZ2zxdr-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3865%3A76794'
  },
  {
    id: 'medable-translation-tool',
    title: 'Medable',
    subtitle: 'Streamlining The Clinical Trials Data Process',
    client: 'Medable',
    role: 'Product Design Lead',
    year: '2022 - 2023',
    tools: ['Figma', 'Miro', 'FigJam'],
    tags: ['Localization', 'Clinical Trials', 'Workflow Design'],
    headerImage: '/images/case-studies/medable-translation-tool/tmt-header.jpg',
    isRecent: true,
    researchArtifacts: [
      {
        id: 'user-interview-questions-ctm',
        name: 'User Interview Questions - Clinical Trials Manager',
        description: 'Structured interview guide for CTMs covering workflow pain points and efficiency challenges',
        image: '/images/case-studies/medable-translation-tool/1-user-interview-questions-clinical-trials-manager.png',
        alt: 'User Interview Questions for Clinical Trials Managers - structured questions about translation workflows'
      },
      {
        id: 'user-interview-questions-cs',
        name: 'User Interview Questions - Customer Success Teams',
        description: 'Interview framework for CS teams focusing on support challenges and process gaps',
        image: '/images/case-studies/medable-translation-tool/2-user-interview-questions-customer-success-teams.png',
        alt: 'User Interview Questions for Customer Success Teams - questions about support processes'
      },
      {
        id: 'observational-studies',
        name: 'Observational Studies',
        description: 'Documentation of live workflow observations and behavioral pattern analysis',
        image: '/images/case-studies/medable-translation-tool/3-observational-studies.png',
        alt: 'Observational Studies - documentation of workflow observations and behavioral patterns'
      },
      {
        id: 'assumptions-challenges',
        name: 'User Interview Assumptions and Challenges',
        description: 'Analysis of initial assumptions vs. discovered challenges from user interviews',
        image: '/images/case-studies/medable-translation-tool/4-user-interview-assumptions-and-challenges.png',
        alt: 'User Interview Assumptions and Challenges - comparison of initial assumptions with discoveries'
      },
      {
        id: 'persona-ctm',
        name: 'Persona - Clinical Trials Manager',
        description: 'Detailed persona profile for CTM user type with goals, frustrations, and behaviors',
        image: '/images/case-studies/medable-translation-tool/5-persona-clinical-trials-manager.png',
        alt: 'Clinical Trials Manager Persona - detailed user profile with goals and frustrations'
      },
      {
        id: 'persona-cs',
        name: 'Persona - Customer Success Teams',
        description: 'Customer Success team persona highlighting support challenges and workflow needs',
        image: '/images/case-studies/medable-translation-tool/6-persona-customer-success-teams.png',
        alt: 'Customer Success Teams Persona - profile focusing on support challenges and needs'
      },
      {
        id: 'journey-map-ctm',
        name: 'User Journey Map - Clinical Trials Manager',
        description: 'End-to-end journey mapping for CTM translation workflow including pain points',
        image: '/images/case-studies/medable-translation-tool/7-user-journey-map-clinical-trials-manager.png',
        alt: 'User Journey Map for Clinical Trials Manager - translation workflow with pain points'
      },
      {
        id: 'journey-map-cs',
        name: 'User Journey Map - Customer Success Teams',
        description: 'Journey mapping for CS support processes and intervention touchpoints',
        image: '/images/case-studies/medable-translation-tool/8-user-journey-map-customer-success-teams.png',
        alt: 'User Journey Map for Customer Success Teams - support processes and touchpoints'
      },
      {
        id: 'research-synthesis',
        name: 'Research Synthesis',
        description: 'Comprehensive synthesis of all research findings and key insights',
        image: '/images/case-studies/medable-translation-tool/9-research-synthesis.png',
        alt: 'Research Synthesis - comprehensive analysis of all research findings'
      },
      {
        id: 'key-insights',
        name: 'Key Insights',
        description: 'Critical insights distilled from research that informed design decisions',
        image: '/images/case-studies/medable-translation-tool/10-key-insights.png',
        alt: 'Key Insights - critical findings that informed design decisions'
      },
      {
        id: 'design-pillars',
        name: 'Experience Design Pillars',
        description: 'Five core UX principles that guided all design and product decisions',
        image: '/images/case-studies/medable-translation-tool/11-experience-design-pillars.png',
        alt: 'Experience Design Pillars - core UX principles guiding design decisions'
      },
      {
        id: 'solution-mapping',
        name: 'Solution Mapping',
        description: 'Strategic mapping of research insights to potential solution approaches',
        image: '/images/case-studies/medable-translation-tool/12-solution-mapping.png',
        alt: 'Solution Mapping - connecting research insights to solution approaches'
      },
      {
        id: 'information-architecture',
        name: 'Information Architecture',
        description: 'Structured information architecture and system design foundation',
        image: '/images/case-studies/medable-translation-tool/13-information-architecture.png',
        alt: 'Information Architecture - structured system design and organization'
      },
      {
        id: 'low-fidelity-prototype-data-table',
        name: 'Low-Fidelity Prototype - Data Table',
        description: 'Initial wireframe design for the translation data table interface showing layout and functionality',
        image: '/images/case-studies/medable-translation-tool/14-low-fidelity-prototype-data-table.png',
        alt: 'Low-fidelity prototype wireframe of the translation data table interface'
      },
      {
        id: 'low-fidelity-prototype-export-form',
        name: 'Low-Fidelity Prototype - Export Form',
        description: 'Early wireframe design for the translation export form showing user workflow and form fields',
        image: '/images/case-studies/medable-translation-tool/15-low-fidelity-prototype-export-form.png',
        alt: 'Low-fidelity prototype wireframe of the translation export form interface'
      }
    ],
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <h3 class="brief-title flex items-center gap-3 mb-6">
            <i class="fas fa-language text-blue-600"></i>
            Clinical Trials Translation & Certification Tool
          </h3>
          <p class="brief-description mb-6">
            <strong>A centralized platform that transformed clinical-trial localization—cutting translation prep from 3–5 days per language to under 24 hours while ensuring global regulatory compliance.</strong>
          </p>
          
          <p class="brief-description mb-6">
            As Medable expanded into international markets, its decentralized clinical trial model revealed a critical bottleneck: the localization of patient-facing content across multiple languages and regulatory regions. The legacy workflow—anchored in spreadsheets, email chains, and manual data handoffs—was slow, inconsistent, and introduced risk at every step.
          </p>
          
          <p class="brief-description mb-6">
            Clinical Trials Managers (CTMs) routinely exported raw CSVs from Cortex AI and spent 60–72 hours cleaning, formatting, and manually splitting content before sending it to external vendors—only to re-clean files upon return. Internal Customer Success (CS) teams, lacking visibility, often duplicated work or escalated issues late in the process. The result: missed deadlines, regulatory friction, and growing operational debt.
          </p>
          
          <p class="brief-description mb-6">
            To address this, we designed the <strong>Translation Management Tool</strong>—a unified, audit-ready platform that became the central hub for all localization workflows. It streamlined how CTMs, linguistic vendors, clinical reviewers, and regulatory teams collaborated on multilingual content, enabling rapid, accurate translation delivery without compromising compliance or patient safety.
          </p>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-globe text-blue-600"></i>
            Global Requirements Addressed
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">The platform needed to address complex international healthcare requirements:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-shield-alt text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Ensure regulatory alignment across diverse international healthcare standards</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-user-md text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Maintain clinical accuracy through medical terminology management and consistency controls</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-rocket text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Accelerate time-to-market for clinical trials across global regions</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-brain text-indigo-600"></i>
            Advanced Workflow Capabilities
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">The tool was designed to include:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-route text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Multi-stage approval flows for linguistic, clinical, and regulatory review</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-book-medical text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Controlled medical vocabularies with real-time consistency validation</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-history text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Built-in versioning and audit logs for FDA/EMA documentation</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-chart-line text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Real-time status dashboards and automated stakeholder reporting</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-users text-green-600"></i>
            Target Users
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">The platform was designed for:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-building text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>External:</strong> Clinical Trials Managers (e.g., AstraZeneca)</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-headset text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Internal:</strong> Customer Success, Localization Ops, Regulatory Affairs</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-user-tie text-indigo-600"></i>
            My Role
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">My responsibilities included:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-search text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Lead Researcher & Strategist:</strong> Drove primary and secondary research, conducted shadowing, created journey maps and personas</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-sync-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Continuous Discovery Facilitator:</strong> Set up biweekly insight loops with internal and external stakeholders (inspired by Theresa Torres' framework)</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-drafting-compass text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Product Designer:</strong> Led design from early sketches to high-fidelity interactive prototypes built in the Nucleus Design System</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-link text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Cross-functional Connector:</strong> Partnered with Engineering and QA to co-define the JSON schema and implement a phased, low-risk release strategy</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    situation: `
      <div class="situation-content">
        <div class="situation-intro mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            Before the redesign, Medable's translation workflow for global clinical trials was fragmented, manual, and dangerously inefficient—putting compliance, speed-to-market, and patient safety at risk.
          </p>
        </div>

        <div class="situation-section mb-8">
          <h4 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-puzzle-piece text-blue-600"></i>
            Fragmented Workflow
          </h4>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            Clinical Trials Managers (CTMs) submitted Jira tickets to request translation exports. Cortex AI would generate raw CSVs—flat, unstructured, and often corrupted by formatting errors. CTMs then spent 60–72 hours cleaning and color-coding spreadsheets, manually separating languages into Excel tabs. Once sent to vendors, the files often returned with structural mismatches—triggering another round of manual cleanup that could last 5–7 days.
          </p>
          
          <blockquote class="quote-card bg-gradient-to-r from-blue-50 to-blue-100 border-l-8 border-blue-500 pl-8 py-6 rounded-r-xl shadow-lg relative">
            <div class="absolute -left-4 top-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <i class="fas fa-quote-left text-white text-sm"></i>
            </div>
            <p class="quote-text text-lg font-bold text-blue-900 italic mb-2 leading-relaxed">
              <em>"One CTM said it took longer to prep and reformat the data than to conduct the actual translation."</em>
            </p>
            <cite class="quote-attribution text-blue-700 font-medium">*(See storyboard – Observational Studies)*</cite>
          </blockquote>
        </div>

        <div class="situation-section mb-8">
          <h4 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-handshake text-purple-600"></i>
            Stakeholder Friction
          </h4>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            Internal Customer Success (CS) teams were caught in the middle—handling vague requests, fielding translation questions, and chasing down timelines. Vendors frequently misaligned strings or mislabeled tasks. Study sponsors demanded rapid turnarounds, but uncommunicated mid-study changes often reset the process entirely, forcing CTMs to restart the ticket cycle from scratch.
          </p>
        </div>

        <div class="situation-section mb-8">
          <h4 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-cube text-orange-600"></i>
            Data-Structure Liability
          </h4>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            The root of the chaos was the CSV format itself. It lacked semantic hierarchy—no grouping for tasks, assessments, or strings by study phase. A structured JSON format could have automated 80% of the workflow, but the product didn't yet support it. This gap made quality control nearly impossible and introduced massive regulatory risk.
          </p>
        </div>

        <div class="situation-section mb-8">
          <h4 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-money-bill-wave text-red-600"></i>
            Cost of Inaction
          </h4>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            The inefficiencies carried serious downstream consequences:
          </p>
          
          <ul class="challenge-list space-y-4">
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-exclamation-triangle text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Trials risked missing IRB and FDA submission deadlines</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-clock text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">CTMs lost 25+ hours per week to manual hygiene tasks</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-headset text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">CS teams operated reactively, drowning in status updates</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-shield-alt text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Any translation mismatch could compromise patient-facing materials—jeopardizing trial integrity</span>
            </li>
          </ul>
        </div>

        <div class="situation-conclusion">
          <div class="conclusion-card bg-red-50 border-l-4 border-red-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-heartbeat text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                With multiple global studies at risk and operational debt mounting, leadership finally greenlit a full redesign. The Translation Management Tool was no longer a nice-to-have—it was <strong>mission-critical</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    task: `
      <div class="task-content">
        <div class="task-intro mb-8">
          <h3 class="task-title text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-bullseye text-blue-600"></i>
            Frame the Real Problem
          </h3>
          <ul class="task-list space-y-4 mb-8">
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-lightbulb text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Synthesized scattered feedback from stakeholders into a single, cohesive problem statement</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-crosshairs text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Focused the team on root causes—data structure, workflow inefficiencies, and lack of visibility</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-anchor text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Used this alignment to anchor the entire product strategy moving forward</span>
            </li>
          </ul>
        </div>

        <div class="task-section mb-8">
          <h3 class="task-title text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-search text-orange-600"></i>
            Run Deep Discovery
          </h3>
          <ul class="task-list space-y-4 mb-8">
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-users text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Conducted 12 one-hour interviews: 6 Clinical Trials Managers and 6 Customer Success team members</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-clipboard-list text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Transcribed and affinity-mapped insights to uncover shared pain points and behavioral patterns</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-video text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Shadowed 3 live translation exports over Zoom to observe real-world friction in workflow, handoffs, and tool use</span>
            </li>
          </ul>
        </div>

        <div class="task-section mb-8">
          <h3 class="task-title text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-sync-alt text-purple-600"></i>
            Launch Continuous Discovery
          </h3>
          <ul class="task-list space-y-4 mb-8">
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-calendar-alt text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Established a biweekly research cadence inspired by Theresa Torres' framework</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-route text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Split tracks between external CTMs and internal CS teams to maintain focused insight loops</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-sitemap text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Maintained a living Opportunity Solution Tree to prioritize high-leverage problems and de-risk delivery</span>
            </li>
          </ul>
        </div>

        <div class="task-section mb-8">
          <h3 class="task-title text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-compass text-green-600"></i>
            Translate Insights into Strategy
          </h3>
          <div class="mb-6">
            <ul class="task-list space-y-4 mb-6">
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-file-alt text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Created key artifacts: personas, journey maps, and 5 UX pillars</span>
              </li>
            </ul>
            
            <div class="pillars-section ml-8 mb-6">
              <ul class="pillars-list space-y-4">
                <li class="pillar-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed font-semibold">Efficiency</span>
                </li>
                <li class="pillar-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed font-semibold">Simplicity</span>
                </li>
                <li class="pillar-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed font-semibold">Empowerment</span>
                </li>
                <li class="pillar-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed font-semibold">Communication</span>
                </li>
                <li class="pillar-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed font-semibold">User-Centricity</span>
                </li>
              </ul>
            </div>
            
            <ul class="task-list space-y-4">
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-bullseye text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Used these to align stakeholders on measurable goals:</span>
              </li>
            </ul>
            
            <div class="goals-section ml-8 mt-4">
              <ul class="goals-list space-y-4">
                <li class="goal-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Reduce translation prep time to &lt;24 hours</span>
                </li>
                <li class="goal-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Eliminate re-clean cycles</span>
                </li>
                <li class="goal-item flex items-start gap-4">
                  <i class="fas fa-arrow-right text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Achieve full JSON output compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="task-section mb-8">
          <h3 class="task-title text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-flask text-indigo-600"></i>
            Prototype, Test, Iterate
          </h3>
          <ul class="task-list space-y-4">
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-drafting-compass text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Designed low-fi wireframes, then mid-fi interactions, and final hi-fi screens in the Nucleus Design System</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-users-cog text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Ran usability tests with 5 CTMs and 3 CS stakeholders per iteration</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <i class="fas fa-recycle text-pink-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Iterated based on real-world feedback—directly shaping UI logic, export workflows, and validation states</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    action: `
      <div class="action-content">
        <div class="action-intro mb-8">
          <p class="action-description text-lg text-gray-700 leading-relaxed">
            Executed comprehensive research and continuous discovery practices to understand clinical translation workflows, synthesized findings into strategic design decisions, and implemented an end-to-end solution using the Nucleus Design System with validated prototypes and phased deployment strategy.
          </p>
        </div>

        <div class="action-section mb-12">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-microscope text-purple-600"></i>
            User Research: Understanding and Defining The Problem
          </h4>
          
          <p class="text-gray-700 leading-relaxed mb-6">
            Comprehensive research process and documented artifacts that presented insights and research synthesis to Product, Engineering, Customer Success, and Upper Management teams.
          </p>

          <div class="research-artifacts-viewer-placeholder">
            <!-- Research artifacts viewer will be rendered as React component -->
          </div>
        </div>

        <div class="action-section mb-12">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-search text-blue-600"></i>
            Research Execution
          </h4>
              <ul class="action-points space-y-4">
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-comments text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Conducted in-depth contextual interviews with Clinical Trials Managers and Customer Success teams, pulling from a structured question set to uncover real workflow breakdowns</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-clipboard-list text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Transcribed and coded responses using Dovetail, surfacing six core insights that mapped directly to usability gaps, operational inefficiencies, and communication breakdowns</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-eye text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Observed live translation workflows to validate pain points and identify behavioral patterns not captured in interviews</span>
                </li>
              </ul>
            </div>

        <div class="action-section mb-12">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-lightbulb text-orange-600"></i>
            Synthesis & Ideation
          </h4>
              <ul class="action-points space-y-4">
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-rocket text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Facilitated a remote design sprint with Product and Engineering, aligning around eight key "how-might-we" challenges derived from our Opportunity Solution Tree</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-sitemap text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Built a Solution Mapping board that categorized ideas into four strategic tracks: Process Improvement, System Optimization, Feature Addition, and Tool Enhancement</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-sort-amount-up text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Prioritized initiatives based on user impact, technical complexity, and regulatory alignment</span>
                </li>
              </ul>
            </div>

        <div class="action-section mb-12">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-sync-alt text-purple-600"></i>
            Continuous Discovery Habits
          </h4>
              <ul class="action-points space-y-4">
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-calendar-week text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Set up a weekly feedback cadence focused on assumption testing, using low-fidelity prototypes shared in Zoom sessions to prompt job-to-be-done–style feedback</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-database text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Maintained a centralized research repository that linked every validated insight back to corresponding design artifacts in Figma—ensuring traceability across discovery, design, and delivery</span>
                </li>
              </ul>
            </div>

        <div class="action-section mb-12">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-drafting-compass text-green-600"></i>
            Design & Prototyping
          </h4>
              <ul class="action-points space-y-4">
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-sitemap text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Created an end-to-end user flow diagram for the Translation Management Tool, bridging UI states, system logic, and user permissions</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-code text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Partnered with the Tech Lead to co-develop the information architecture and define the JSON output schema used to standardize multi-language export formats</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-desktop text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Built a high-fidelity prototype in the Nucleus Design System, including real-time JSON validation previews and built-in QA checkpoints for regulatory compliance</span>
                </li>
              </ul>
            </div>

        <div class="action-section mb-12">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-check-circle text-cyan-600"></i>
            Validation & Iteration
          </h4>
              <ul class="action-points space-y-4">
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-mouse-pointer text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Ran remote unmoderated usability tests via Maze; improved time-on-task by 68% over the legacy workflow</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-chart-line text-pink-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Conducted A/B testing between the old CSV process and the new JSON-first interface—CTMs completed vendor hand-offs 4× faster</span>
                </li>
                <li class="action-point flex items-start gap-4">
                  <i class="fas fa-file-alt text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Documented all testing outcomes in Confluence and secured go/no-go approval from the VP of Clinical Product to begin phased release</span>
                </li>
              </ul>
            </div>

        <div class="action-section mb-8">
          <h4 class="action-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <i class="fas fa-users-cog text-indigo-600"></i>
            Change Management
          </h4>
          <ul class="action-points space-y-4">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-book text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Authored a training playbook for internal Customer Success teams and delivered two enablement workshops to ensure smooth adoption</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-flag text-violet-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Collaborated with Engineering to implement a phased rollout behind feature flags, allowing for gradual activation without interrupting ongoing study operations</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-trophy text-blue-600"></i>
              Impact
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-clock text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>76% reduction</strong> in translation prep time—from 72 hours to just 17 per language—achieved within the first 30 days of pilot launch</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-ban text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Zero re-clean loops</strong> in production—automated JSON exports replaced manual formatting, eliminating the multi-day back-and-forth with vendors</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-chart-line text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>+45 point NPS increase</strong> from Clinical Trials Managers, citing "clarity," "confidence," and "finally feeling in control of the workflow"</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-headset text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Customer Success ticket backlog</strong> dropped from 38 to 6 per week, freeing up teams to support high-impact studies instead of chasing CSV errors</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-shield-alt text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>FDA submission readiness</strong> jumped from 67% to 97%—translating into faster patient onboarding, fewer regulatory escalations, and more predictable study timelines</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-dollar-sign text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Operational ROI:</strong> ~$220,000 in projected annual savings by reducing manual contractor hours, vendor corrections, and internal review loops</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-rocket text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>New business unlocked:</strong> Enterprise prospects began asking for early access to the tool as a differentiator—transforming it from an internal fix into a market-facing capability</span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-lightbulb text-green-600"></i>
              What I Learned
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-sync-alt text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Continuous discovery isn't a UX tactic—it's a strategic operating system.</strong> Weekly touchpoints built stakeholder trust and created a culture of co-ownership across Product, Engineering, and Clinical teams</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-file-alt text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Artifacts drive alignment.</strong> Personas, journey maps, and UX principles weren't "nice to haves"—they became core tools for gaining cross-functional clarity and buy-in</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-code text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Designing with data engineers early avoids downstream debt.</strong> Co-authoring the JSON schema and information architecture saved weeks of potential rework and ensured UX intent flowed all the way to implementation</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-heart text-pink-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Change isn't just operational—it's emotional.</strong> The success of this tool hinged on how we introduced it—through training, context, and a phased rollout plan that respected existing workflows and user anxiety</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-shield-check text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Design can de-risk regulation.</strong> This wasn't just about UI polish or usability—it was about creating an auditable, compliant system that stands up to global health standards</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <div class="section-header mb-8">
            <h3 class="results-title text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-star text-yellow-600"></i>
              Closing Reflection
            </h3>
          </div>
          
          <div class="reflection-content">
            <div class="reflection-card bg-yellow-50 border-l-4 border-yellow-300 p-6 rounded-r-lg">
              <div class="flex items-start gap-4">
                <i class="fas fa-quote-left text-yellow-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <p class="reflection-text text-gray-700 leading-relaxed">
                  What started as a messy, high-risk localization bottleneck became a high-leverage product capability—anchored in user empathy, built through system-level design, and delivered through strategic iteration. This case proved that thoughtful product design can drive not just workflow improvements, but business outcomes, trust, and lasting cultural change inside the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    images: [
      '/images/case-studies/medable-translation-tool/user-flow-diagram.jpg',
      '/images/case-studies/medable-translation-tool/translations-list-view.jpg',
      '/images/case-studies/medable-translation-tool/new-export-form-start.jpg',
      '/images/case-studies/medable-translation-tool/select-export-by-assessment.jpg',
      '/images/case-studies/medable-translation-tool/select-additional-languages.jpg',
      '/images/case-studies/medable-translation-tool/select-assessments-button.jpg',
      '/images/case-studies/medable-translation-tool/additional-languages-modal.jpg',
      '/images/case-studies/medable-translation-tool/additional-languages-modal-languages-select.jpg',
      '/images/case-studies/medable-translation-tool/select-push-notifications.jpg',
      '/images/case-studies/medable-translation-tool/select-study-strings.jpg',
      '/images/case-studies/medable-translation-tool/select-non-assessment-study-strings.jpg',
      '/images/case-studies/medable-translation-tool/select-assessments-button.jpg',
      '/images/case-studies/medable-translation-tool/select-assessments-modal.jpg',
      '/images/case-studies/medable-translation-tool/select-assessments-modal-selected-states.jpg',
      '/images/case-studies/medable-translation-tool/final-translation-package-request.jpg',
      '/images/case-studies/medable-translation-tool/success-toast-message-translation-mgmt-confirm.jpg',
      '/images/case-studies/medable-translation-tool/translation-ready-for-download.jpg',
      '/images/case-studies/medable-translation-tool/download-hover-menu.jpg',
      '/images/case-studies/medable-translation-tool/final-exported-json-files-architecture.png',
      '/images/case-studies/medable-translation-tool/final-exported-json-files-structure.png',
    ],
    figmaLink: 'https://www.figma.com/proto/asZK1MnXCqSyi95NlMRNhA/Porfolio-Preso-JohnDeLaTorreUgarte-2025?page-id=3518%3A65953&node-id=3518-70590&viewport=251%2C449%2C0.29&t=zJ4GrMO1HdbxsB0y-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3518%3A70590'
  },
  {
    id: 'medable-design-system',
    title: 'Medable Design System',
    subtitle: 'AI-Led Clinical Trials Design System',
    client: 'Medable',
    role: 'Senior Product Designer',
    year: '2020 - 2022',
    tools: ['Figma', 'Storybook', 'Tokens Studio'],
    tags: ['Design Systems', 'Component Library', 'Healthcare'],
    headerImage: '/images/case-studies/medable-design-system/medable-design-system-header.jpg',
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <p class="brief-description mb-6">
            Medable is a clinical trial platform trusted by global pharmaceutical companies to manage remote, decentralized studies. But behind the scenes, its product experience was fractured—each product team had built in isolation, leading to a chaotic patchwork of visual styles, inconsistent UX patterns, and bloated front-end codebases. This fragmentation not only created confusion for users, but made it nearly impossible to scale improvements, meet accessibility standards, or move quickly in a high-stakes, highly regulated domain.
          </p>
          
          <p class="brief-description mb-6">
            As <strong>Product Design Lead</strong>, I spearheaded the creation of <strong>Nucleus</strong>—Medable's first comprehensive design system. The goal was not just visual alignment, but systemic transformation: to establish a universal design foundation that harmonized UX across the platform, empowered developers through scalable components, and reduced design-developer ambiguity.
          </p>
          
          <p class="brief-description mb-6">
            This meant tackling complexity at every layer: from governance and architecture to color tokens and accessibility standards. It also meant getting buy-in across leadership, engineering, clinical science, and compliance—where any change to UI workflows could trigger risk reviews.
          </p>
          
          <p class="brief-description">
            The result was a modern, component-driven system grounded in Tailwind CSS and built for speed, clarity, and compliance—accelerating our ability to ship consistent, accessible, and user-centered clinical trial experiences at scale.
          </p>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-atom text-blue-600"></i>
            The Nucleus Design System
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">Creating a unified foundation addressed critical challenges:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-puzzle-piece text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Visual chaos across products</strong> - Each team had built in isolation, creating inconsistent user experiences</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-code text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Bloated codebases</strong> - Duplicated components and styles were slowing development velocity</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-universal-access text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Accessibility gaps</strong> - No unified standards for meeting healthcare compliance requirements</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-handshake text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Design-developer friction</strong> - Ambiguous handoffs were causing rework and missed deadlines</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-shield-alt text-indigo-600"></i>
            High-Stakes, Regulated Environment
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">Working within clinical trials meant navigating unique constraints:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-clipboard-check text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Risk reviews for UI changes</strong> - Any workflow modification could trigger compliance assessments</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-users-cog text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Cross-functional alignment</strong> - Leadership, engineering, clinical science, and compliance all needed buy-in</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-heartbeat text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Patient safety considerations</strong> - Design decisions directly impacted clinical trial participants</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-rocket text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Speed vs. compliance</strong> - Balancing rapid iteration with regulatory requirements</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-cogs text-amber-600"></i>
            Systematic Transformation Strategy
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">The approach required tackling complexity at multiple levels:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-sitemap text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Governance & Architecture</strong> - Establishing processes for system evolution and adoption</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-palette text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Design Tokens & Standards</strong> - Color systems, typography, spacing, and component specifications</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-universal-access text-violet-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Accessibility Framework</strong> - Healthcare-compliant patterns for all user interactions</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-wind text-blue-500 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Tailwind CSS Foundation</strong> - Modern, utility-first approach for development efficiency</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-amber-300 pl-6 py-4 bg-amber-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-lightbulb text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed"><strong>Nucleus wasn't just about visual consistency—it was about systemic transformation.</strong> By establishing a universal design foundation, we empowered teams to ship consistent, accessible, user-centered clinical trial experiences at scale, ultimately improving outcomes for both healthcare professionals and patients worldwide.</span>
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
            Medable's platform supported decentralized clinical trials across a wide range of users—from patients to clinicians, coordinators, and CROs. But over time, its product experience had become deeply fragmented. Each product team had developed independently, resulting in a tangled ecosystem of inconsistent UI patterns, redundant code, and design drift.
          </p>
        </div>

        <div class="situation-root-causes mb-8">
          <h3 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-search text-red-600"></i>
            Root Causes of System Fragmentation
          </h3>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            This inconsistency was rooted in years of divergent design frameworks, mismatched software architectures, and legacy technical decisions. As a result:
          </p>
          
          <ul class="problem-list space-y-6">
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-eye-slash text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Product visuals and behavior felt outdated and disjointed</strong> across the platform ecosystem</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-expand-arrows-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Design improvements were difficult to scale</strong> across platforms and product lines</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-fire text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Developers spent time firefighting</strong> instead of building innovative features</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-bug text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>UX bugs compounded due to lack of systemic foundations</strong> and design inconsistencies</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-question-circle text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>There was no single source of truth</strong> for design decisions or governance processes</span>
            </li>
          </ul>
        </div>

        <div class="situation-business-impact mb-8">
          <h3 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-chart-line text-amber-600"></i>
            Business Risk and Operational Impact
          </h3>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            From a business standpoint, the inconsistency posed a <strong>reputational and operational risk</strong>—eroding user trust and slowing delivery in a high-compliance, high-sensitivity environment.
          </p>
        </div>

        <div class="situation-blockers mb-8">
          <h3 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-roadblock text-purple-600"></i>
            Organizational Blockers to UX Improvement
          </h3>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            Efforts to improve UX were often blocked by:
          </p>
          
          <ul class="blocker-list space-y-6">
            <li class="blocker-item flex items-start gap-4">
              <i class="fas fa-hand-paper text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Hesitation to disrupt live clinical workflows</strong> that were actively supporting patient trials</span>
            </li>
            <li class="blocker-item flex items-start gap-4">
              <i class="fas fa-shield-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Regulatory constraints around interface changes</strong> in clinical trial environments</span>
            </li>
            <li class="blocker-item flex items-start gap-4">
              <i class="fas fa-tools text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>No existing design ops practice</strong> to enforce standards or systematic improvements</span>
            </li>
            <li class="blocker-item flex items-start gap-4">
              <i class="fas fa-calculator text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Skepticism toward large-scale rework</strong> without proven ROI and clear business value</span>
            </li>
          </ul>
        </div>

        <div class="situation-dysfunction mb-8">
          <h3 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-users-slash text-indigo-600"></i>
            Cross-Team Dysfunction
          </h3>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Designers</strong> were solving the same problems differently, <strong>developers</strong> were reinventing the wheel, and <strong>leadership</strong> lacked a clear view of how to drive consistency at scale.
          </p>
        </div>

        <div class="situation-conclusion">
          <div class="conclusion-card bg-red-50 border-l-4 border-red-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-exclamation-triangle text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                <strong>The fragmented design ecosystem was creating a vicious cycle:</strong> poor user experiences led to decreased confidence in design decisions, which led to even more fragmented approaches as teams worked around perceived design limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    task: `
      <div class="task-content">
        <div class="task-intro mb-8">
          <h3 class="task-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-bullseye text-blue-600"></i>
            Core Objectives & Strategic Goals
          </h3>
          <p class="task-description text-lg text-gray-700 leading-relaxed mb-6">
            The challenge required a comprehensive approach to transform Medable's fragmented design ecosystem into a unified, scalable system that could support the complex needs of healthcare technology while accelerating product development.
          </p>
        </div>

        <ul class="space-y-6 mb-10">
          <li class="flex items-start gap-4">
            <i class="fas fa-puzzle-piece text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
            <span class="text-gray-700 leading-relaxed"><strong>Create Medable's first end-to-end design system</strong> that could unify product experience across platforms, teams, and clinical workflows.</span>
          </li>
          <li class="flex items-start gap-4">
            <i class="fas fa-tachometer-alt text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
            <span class="text-gray-700 leading-relaxed"><strong>Reduce design and engineering inefficiencies</strong> by replacing redundant, outdated components with reusable, scalable UI architecture.</span>
          </li>
          <li class="flex items-start gap-4">
            <i class="fas fa-universal-access text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
            <span class="text-gray-700 leading-relaxed"><strong>Integrate accessibility best practices</strong> and ensure the new system met WCAG standards and clinical compliance.</span>
          </li>
          <li class="flex items-start gap-4">
            <i class="fas fa-sitemap text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
            <span class="text-gray-700 leading-relaxed"><strong>Build governance and adoption strategy</strong> to align cross-functional teams—including product managers, engineers, marketers, and clinical teams.</span>
          </li>
          <li class="flex items-start gap-4">
            <i class="fas fa-handshake text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
            <span class="text-gray-700 leading-relaxed"><strong>Get organizational buy-in</strong> by developing a business case and demonstrating clear value through measurable KPIs.</span>
          </li>
          <li class="flex items-start gap-4">
            <i class="fas fa-rocket text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
            <span class="text-gray-700 leading-relaxed"><strong>Deliver a proof of concept</strong> showing how the system could improve velocity, quality, and clarity across the board.</span>
          </li>
          <li class="flex items-start gap-4">
            <i class="fas fa-graduation-cap text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
            <span class="text-gray-700 leading-relaxed"><strong>Establish education and rollout frameworks</strong> so future teams could onboard quickly and adhere to system standards.</span>
          </li>
        </ul>

        <div class="task-success-metrics mb-8">
          <h3 class="success-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-chart-line text-emerald-600"></i>
            Success Criteria & Impact Measurement
          </h3>
          <p class="success-description text-lg text-gray-700 leading-relaxed mb-6">
            Success would be measured across multiple dimensions: <strong>technical efficiency</strong>, <strong>design consistency</strong>, <strong>team velocity</strong>, and ultimately <strong>healthcare professional satisfaction</strong> with the improved user experience.
          </p>
        </div>

        <div class="task-conclusion mt-10">
          <div class="conclusion-card bg-blue-50 border-l-4 border-blue-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-lightbulb text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                <strong>This wasn't just about visual consistency—it was about creating systemic change</strong> that would transform how Medable built products, empowering teams to deliver better healthcare experiences faster and more reliably.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    action: `
      <div class="action-content">
        <div class="action-intro mb-8">
          <h3 class="action-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-cogs text-blue-600"></i>
            Strategic Implementation Approach
          </h3>
          <p class="action-description text-lg text-gray-700 leading-relaxed mb-6">
            The transformation required a systematic, multi-phase approach that balanced urgent consistency needs with long-term strategic positioning. Every decision was made with healthcare compliance, user safety, and organizational buy-in as primary considerations.
          </p>
        </div>

        <div class="action-section mb-10">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-search-plus text-red-600"></i>
            Research, Audit, and Strategic Framing
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-microscope text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Conducted a <strong>full design audit of all existing products</strong>—identifying patterns of inconsistency, UX bottlenecks, and key component overlaps.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-map-marked-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Mapped <strong>friction points for users and developers across platforms</strong>—highlighting the cost of inconsistency in usability and engineering time.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-layer-group text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Identified <strong>core component redundancies and usability gaps</strong> (e.g. table responsiveness, visual hierarchy, navigation clarity).</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-chart-line text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Compiled screenshots, metrics, and stakeholder pain points into a <strong>strategic narrative to build urgency and momentum</strong> around the redesign.</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-10">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-drafting-compass text-emerald-600"></i>
            Design System Architecture & Visual Foundation
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-atom text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Created <strong>Nucleus</strong>, a unified design system based on Tailwind CSS, Storybook, and component-first principles.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-cubes text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Built <strong>over 50+ reusable, accessible components</strong> tied to a centralized token system—supporting light/dark modes, roles, and branding needs.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-palette text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Developed a <strong>token architecture</strong> for color, spacing, typography, and responsiveness—enabling future theming and scalable visual updates.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-handshake text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Partnered with Marketing to <strong>refresh visual identity</strong>—anchoring on a new core color system and modernizing the UI without breaking clinical familiarity.</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-10">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-universal-access text-indigo-600"></i>
            Accessibility, Documentation, and Developer Enablement
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-shield-alt text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Integrated <strong>WCAG-compliant standards into every component</strong>—ensuring contrast ratios, focus states, keyboard nav, and ARIA patterns were fully embedded.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-book-open text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Created a <strong>full Storybook instance with live documentation and usage guidelines</strong>—reducing ambiguity between design and development teams.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-code-branch text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Worked closely with engineering to align on <strong>naming conventions, prop structures, and logic</strong> to ensure clean handoff and implementation.</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-10">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-users-cog text-orange-600"></i>
            Cross-Functional Buy-In and Change Management
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-handshake text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Partnered with <strong>product, engineering, clinical ops, and QA</strong> to define shared goals and address concerns around system adoption.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-presentation text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Delivered <strong>stakeholder presentations and workshops</strong> to show how systematic design would improve performance and lower long-term risk.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-rocket text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Built a <strong>working proof of concept that showcased Nucleus in action</strong>—validating its speed, consistency, and reduced dev overhead.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-graduation-cap text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Developed <strong>internal training sessions and onboarding kits</strong> for designers and engineers—ensuring continued adoption post-launch.</span>
            </li>
          </ul>
        </div>

        <div class="action-conclusion mt-10">
          <div class="conclusion-card bg-emerald-50 border-l-4 border-emerald-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-lightbulb text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                <strong>The success of Nucleus wasn't just in its technical execution—it was in the systematic change management</strong> that ensured adoption, reduced resistance, and created lasting organizational transformation across all of Medable's product development processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-intro mb-8">
          <h3 class="results-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-trophy text-amber-600"></i>
            Transformational Impact & Measurable Outcomes
          </h3>
          <p class="results-description text-lg text-gray-700 leading-relaxed mb-6">
            The Nucleus design system delivered immediate and lasting transformation across Medable's entire product ecosystem. The results exceeded expectations in both quantitative metrics and qualitative organizational change.
          </p>
        </div>

        <div class="results-metrics mb-12">
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-stopwatch text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>40% reduction</strong> in design and development time by eliminating redundant effort and streamlining handoff.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-cubes text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>50+ reusable components</strong> shipped and adopted across multiple product squads—accelerating prototyping and feature releases.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-shield-check text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Zero accessibility violations</strong> reported in audits after rollout—thanks to baked-in WCAG compliance and QA-ready patterns.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-palette text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Unified design identity</strong> across products—leading to clearer workflows, improved user trust, and stronger brand perception.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-file-medical text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Faster regulatory review cycles</strong> due to standardization and consistent component logic across interfaces.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-handshake text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Organizational alignment</strong> between design, engineering, and clinical teams—establishing design systems as a long-term investment, not a side project.</span>
            </li>
          </ul>
        </div>

        <div class="learnings-section mb-10">
          <h3 class="learnings-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-lightbulb text-teal-600"></i>
            What I Learned
          </h3>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-cogs text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A successful design system is not just about components—it's about <strong>process, trust, and culture change</strong>.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-chart-line text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Gaining buy-in required storytelling: <strong>translating UX problems into business impact</strong> and aligning teams around measurable value.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-rocket text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Proof-of-concept prototypes are critical</strong>—they show, not tell, and remove fear by making the future tangible.</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-book-open text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Accessibility, governance, and cross-functional documentation</strong> must be baked in from day one to scale adoption without regression.</span>
            </li>
          </ul>
        </div>

        <div class="results-conclusion mt-10">
          <div class="conclusion-card bg-teal-50 border-l-4 border-teal-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-award text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                <strong>Nucleus transformed Medable from a fragmented product ecosystem into a unified, scalable healthcare platform.</strong> The system didn't just solve immediate consistency problems—it established a foundation for sustainable growth, regulatory compliance, and exceptional user experiences that continue to benefit patients and healthcare professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    images: [
      '/images/case-studies/medable-design-system/login-page.jpg',
      '/images/case-studies/medable-design-system/templates-page-collapsed.jpg',
      '/images/case-studies/medable-design-system/templates-page-expanded.jpg',
      '/images/case-studies/medable-design-system/create-new-template-form.jpg',
      '/images/case-studies/medable-design-system/create-new-template-form-roles.jpg',
      '/images/case-studies/medable-design-system/create-new-template-wysig.jpg',
      '/images/case-studies/medable-design-system/create-new-template-wysig-upload.jpg',
      '/images/case-studies/medable-design-system/create-new-template-wysig-toast.jpg',
      '/images/case-studies/medable-design-system/create-new-template-wysig-edit.jpg',
      '/images/case-studies/medable-design-system/create-new-template-wysig-slide-drawer.jpg',
      '/images/case-studies/medable-design-system/create-new-template-wysig-slide-drawer-save.jpg',
      '/images/case-studies/medable-design-system/new-created-template.jpg',
    ],
    researchArtifacts: [
      {
        id: '1',
        name: 'Medable eConsent login screen',
        description: 'Login interface for the Medable eConsent platform with clean, accessible form design',
        image: '/images/case-studies/medable-design-system/login-page.jpg',
        alt: 'Medable eConsent login screen interface'
      },
      {
        id: '2',
        name: 'Templates listing page',
        description: 'Templates management interface showing standardized consent documents with filtering options',
        image: '/images/case-studies/medable-design-system/templates-page-collapsed.jpg',
        alt: 'Templates listing page interface'
      },
      {
        id: '3',
        name: 'Templates dashboard with navigation',
        description: 'Comprehensive templates dashboard with pagination and document management controls',
        image: '/images/case-studies/medable-design-system/templates-page-expanded.jpg',
        alt: 'Templates dashboard with navigation interface'
      },
      {
        id: '4',
        name: 'Template configuration form',
        description: 'Detailed template configuration interface with metadata fields and document settings',
        image: '/images/case-studies/medable-design-system/create-new-template-form.jpg',
        alt: 'Template configuration form interface'
      },
      {
        id: '5',
        name: 'New template creation screen',
        description: 'Template creation workflow with role assignment and document configuration options',
        image: '/images/case-studies/medable-design-system/create-new-template-form-roles.jpg',
        alt: 'New template creation screen interface'
      },
      {
        id: '6',
        name: 'Template designer with document upload dialog',
        description: 'Rich text editor with document import functionality for streamlined content creation',
        image: '/images/case-studies/medable-design-system/create-new-template-wysig.jpg',
        alt: 'Template designer with document upload dialog'
      },
      {
        id: '7',
        name: 'File browser dialog',
        description: 'File system navigation interface for document selection and management',
        image: '/images/case-studies/medable-design-system/create-new-template-wysig-upload.jpg',
        alt: 'File browser dialog interface'
      },
      {
        id: '8',
        name: 'Template editor with sample content',
        description: 'Document editor showing table formatting and content structure with confirmation notification',
        image: '/images/case-studies/medable-design-system/create-new-template-wysig-toast.jpg',
        alt: 'Template editor with sample content'
      },
      {
        id: '9',
        name: 'Template editor with formatting tools',
        description: 'Advanced document editor with rich text formatting and structured content elements',
        image: '/images/case-studies/medable-design-system/create-new-template-wysig-edit.jpg',
        alt: 'Template editor with formatting tools'
      },
      {
        id: '10',
        name: 'Signature configuration panel',
        description: 'Signature and initials configuration interface with role-based settings',
        image: '/images/case-studies/medable-design-system/create-new-template-wysig-slide-drawer.jpg',
        alt: 'Signature configuration panel interface'
      },
      {
        id: '11',
        name: 'Signature configuration panel save changes',
        description: 'Save changes to the signature configuration panel',
        image: '/images/case-studies/medable-design-system/create-new-template-wysig-slide-drawer-save.jpg',
        alt: 'Signature configuration panel save changes'
      },
      {
        id: '12',
        name: 'New Created Template',
        description: 'New template for approval documents',
        image: '/images/case-studies/medable-design-system/new-created-template.jpg',
        alt: 'New created template interface'
      }
    ],
    figmaLink: 'https://www.figma.com/proto/asZK1MnXCqSyi95NlMRNhA/Porfolio-Preso-JohnDeLaTorreUgarte-2025?page-id=3560%3A87363&node-id=3561-87455&viewport=555%2C620%2C0.09&t=gSoRjMkmiSkR5mjK-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3561%3A87455'
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
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <p class="brief-description mb-6">
            <strong>Elysium Analytics</strong> is a turn-key security data lake platform that supports real-time monitoring, deep threat investigations, and observability across hybrid cloud and SaaS environments. As the product matured from startup MVP to enterprise-scale, the UX was holding it back—fragmented, visually inconsistent, and difficult to extend across tech stacks or embedded platforms.
          </p>
          
          <p class="brief-description">
            My mandate as <strong>Lead Product Designer</strong> was to lead the transformation of Elysium's UI/UX into a scalable, research-backed platform—capable of supporting:
          </p>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-rocket text-blue-600"></i>
            Platform Transformation Goals
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">Key capabilities for the enterprise-ready design system:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-adjust text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A <strong>multi-themed design system</strong> (light + dark) optimized for dense, data-heavy interfaces</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-puzzle-piece text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Seamless integration of third-party ecosystems like <strong>Looker, OpenSearch, Salesforce</strong>, and <strong>Snowflake</strong></span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-layer-group text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Unified component architecture across <strong>React, Angular, and .NET</strong></span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-search text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A repeatable process for <strong>user research, design QA, and rapid prototyping</strong></span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-balance-scale text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A flexible system that balanced <strong>enterprise usability, dev velocity, and technical scalability</strong></span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-blue-300 pl-6 py-4 bg-blue-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-clock text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">This project was executed over a <strong>6-month sprint</strong>—from foundational research to launch—with deep collaboration across product, engineering, and clients.</span>
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
            When I joined the Elysium Analytics team, the platform was gaining traction as a security-first data lake—especially among Snowflake-based enterprises. But the <strong>user experience was falling apart under technical sprawl</strong>.
          </p>
        </div>

        <div class="situation-problems mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            The UI was a fragmented patchwork:
          </p>
          
          <ul class="challenge-list space-y-6">
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-laptop-code text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Legacy admin tooling in <strong>.NET</strong></span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-bell text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Alert and triage workflows in <strong>React</strong></span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-chart-line text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Investigative dashboards in <strong>Angular</strong></span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-chart-bar text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Analytics and search powered by <strong>Looker</strong> and <strong>OpenSearch</strong></span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-database text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">CRM integrations pulling contextual data from <strong>Salesforce</strong></span>
            </li>
          </ul>
        </div>

        <div class="situation-technical mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            Each part of the platform operated independently—with its own interaction patterns, visual logic, and inconsistent design language. There was <strong>no design system</strong>, no reusable component base, and no shared visual themes. Even basic elements like tables, modals, and buttons had three different implementations.
          </p>
        </div>

        <div class="situation-challenges mb-8">
          <p class="situation-subtitle text-gray-600 mb-6">This led to:</p>
          
          <ul class="challenge-list space-y-6">
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-exclamation-triangle text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A brittle UX with <strong>context-switching friction</strong> for security analysts</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-sync text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Redundant design and dev effort across teams</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-shield-alt text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">A visual system that failed to communicate trust, maturity, or usability to enterprise buyers</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-chart-line text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Feature growth outpacing design coherence, creating risk for customer onboarding and retention</span>
            </li>
          </ul>
        </div>

        <div class="situation-goals mb-8">
          <p class="situation-subtitle text-gray-600 mb-6">At the same time, the platform's goals were evolving:</p>
          
          <ul class="challenge-list space-y-6">
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-snowflake text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Move upstream into <strong>Snowflake-native and Databricks-native</strong> use cases</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-search text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Support <strong>petabyte-scale, cross-environment search and triage</strong></span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-trophy text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Compete with mature observability players through UX clarity and system extensibility</span>
            </li>
          </ul>
        </div>

        <div class="situation-conclusion">
          <div class="conclusion-card bg-blue-50 border-l-4 border-blue-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-tools text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                It was clear that we needed to <strong>rebuild the design foundation</strong>—but in a way that wouldn't slow development or disrupt in-flight feature delivery.
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
            Transform Elysium's fragmented UI into a unified, enterprise-ready platform through a comprehensive design system initiative. The challenge was architecting a scalable foundation that could unify disconnected tech stacks while supporting enterprise security workflows without disrupting ongoing development.
          </p>
        </div>

        <div class="task-requirements mb-8">
          <div class="requirements-header mb-6">
            <h4 class="requirements-title flex items-center gap-3 text-xl font-bold text-gray-900">
              <i class="fas fa-tasks text-blue-600"></i>
              Core Design System Tasks
            </h4>
          </div>
          
          <ul class="task-list space-y-6">
            <li class="task-list-item flex items-start gap-4">
              <div class="task-number flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold text-sm flex-shrink-0">1</div>
              <span class="text-gray-700 leading-relaxed"><strong>Architect a unified design system in Storybook</strong> that spanned React, Angular, and .NET—serving as a shared source of truth for all UI components, interactions, and states.</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <div class="task-number flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full font-bold text-sm flex-shrink-0">2</div>
              <span class="text-gray-700 leading-relaxed"><strong>Develop and deliver full light and dark themes</strong> that could scale across data-dense dashboards, reduce analyst fatigue, and meet accessibility requirements.</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <div class="task-number flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full font-bold text-sm flex-shrink-0">3</div>
              <span class="text-gray-700 leading-relaxed"><strong>Design reusable UI wrappers and styling logic</strong> that could normalize embedded dashboards and data components from <strong>Looker, OpenSearch, and Salesforce</strong> into the native platform experience.</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <div class="task-number flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full font-bold text-sm flex-shrink-0">4</div>
              <div class="text-gray-700 leading-relaxed">
                <strong>Define a scalable UX model for core workflows</strong>:
                <ul class="mt-3 ml-4 space-y-2">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-search text-blue-600 self-start flex-shrink-0 text-sm" style="margin-top: 0.125rem;"></i>
                    <span>Global search with KQL filtering</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-bell text-red-600 self-start flex-shrink-0 text-sm" style="margin-top: 0.125rem;"></i>
                    <span>Alert triage and resolution flows</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-chart-line text-green-600 self-start flex-shrink-0 text-sm" style="margin-top: 0.125rem;"></i>
                    <span>Dashboard visualizations for trend analysis and drill-downs</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-clock text-purple-600 self-start flex-shrink-0 text-sm" style="margin-top: 0.125rem;"></i>
                    <span>Timeline views for forensic investigations</span>
                  </li>
                </ul>
              </div>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <div class="task-number flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full font-bold text-sm flex-shrink-0">5</div>
              <span class="text-gray-700 leading-relaxed"><strong>Conduct user research and internal stakeholder interviews</strong> to ground design decisions in analyst workflows, cognitive load patterns, and enterprise readiness signals.</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <div class="task-number flex items-center justify-center w-8 h-8 bg-cyan-600 text-white rounded-full font-bold text-sm flex-shrink-0">6</div>
              <span class="text-gray-700 leading-relaxed"><strong>Validate design hypotheses with internal teams and client champions</strong>, iterating on prototypes and system structure based on usability feedback.</span>
            </li>
            <li class="task-list-item flex items-start gap-4">
              <div class="task-number flex items-center justify-center w-8 h-8 bg-amber-600 text-white rounded-full font-bold text-sm flex-shrink-0">7</div>
              <span class="text-gray-700 leading-relaxed"><strong>Ensure engineering implementation readiness</strong> by delivering design QA, tokens, interaction logic, and coded prototypes in sync with active sprints—staying at least 2 sprints ahead of dev delivery.</span>
            </li>
          </ul>
        </div>

        <div class="task-conclusion mt-10">
          <div class="conclusion-card bg-blue-50 border-l-4 border-blue-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-tools text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                Success would be measured by system adoption across teams, reduction in design-dev handoff friction, and the platform's ability to onboard enterprise clients with a cohesive, professional user experience.
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
            Led comprehensive user research across business stakeholders and technical teams to understand AI accessibility challenges. Designed progressive disclosure systems that could serve multiple user types simultaneously. Created intelligent interface patterns that made complex machine learning insights intuitive for non-technical users while preserving analytical depth for technical professionals.
          </p>
        </div>

        <div class="consolidated-actions mb-12">
          <div class="actions-container bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">1. Multi-Stakeholder Research and AI Accessibility Analysis</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Conducted extensive interviews with C-level executives, business analysts, and data scientists across multiple industries</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Analyzed existing AI tools to identify common usability barriers and accessibility gaps</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Mapped decision-making workflows to understand where AI insights could provide maximum business value</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">2. Progressive Disclosure Architecture and Natural Language Interface</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Designed layered information architecture that revealed complexity progressively based on user expertise and needs</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created natural language explanation systems that translated AI outputs into clear business recommendations</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Developed confidence indicators and uncertainty visualization to help users understand AI recommendation reliability</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">3. Intelligent Data Visualization and Interaction Patterns</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created adaptive data visualization systems that automatically selected optimal chart types based on data characteristics and user goals</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Designed interactive prototypes that allowed users to explore AI predictions and scenarios through intuitive manipulation</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Implemented smart highlighting and annotation systems that drew attention to the most important insights and anomalies</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">4. AI Recommendation Engine and User Testing</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Designed intelligent recommendation interfaces that provided actionable next steps with clear reasoning and expected outcomes</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Conducted extensive user testing across different experience levels to validate AI insight comprehension and usability</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Iteratively refined interface patterns based on user feedback and real-world decision-making outcomes</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-chart-bar text-blue-600"></i>
              Product Success and User Adoption
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>90% user adoption rate</strong> across diverse business user types within first six months</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>70% improvement in decision-making speed</strong> among business executives using AI insights</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>85% reduction in time-to-insight</strong> for non-technical business users accessing AI recommendations</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>95% user satisfaction score</strong> for AI insight comprehension and actionability</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Successfully became Elysium's flagship product</strong> with the highest customer retention rates</span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-trophy text-amber-600"></i>
              Industry Recognition and Business Impact
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Won multiple industry awards for AI innovation</strong> including Best Business Intelligence Platform</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Established Elysium as a market leader</strong> in accessible AI solutions for business intelligence</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Generated 300% increase in customer acquisition</strong> through improved AI accessibility and usability</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Achieved 95% customer retention rate</strong> with clients consistently renewing and expanding usage</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-lightbulb text-green-600"></i>
              AI Accessibility Design Insights
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Progressive disclosure is essential for AI interfaces</strong>—users need different levels of detail based on expertise and context</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Natural language explanations dramatically improve AI adoption</strong> among non-technical business users</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Confidence visualization is crucial for AI trust</strong>—users need to understand uncertainty and reliability</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Actionable recommendations with clear reasoning increase decision-making confidence</strong> and business value realization</span>
            </li>
          </ul>
        </div>
      </div>
    `,
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
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-8">
          <p class="brief-description mb-6">
            The Translation Management Tool revolutionized global clinical trial localization by creating an integrated platform that transformed manual, error-prone translation processes into efficient, quality-controlled workflows. This comprehensive solution was designed to accelerate global clinical trial deployment while maintaining the highest standards of accuracy and regulatory compliance.
          </p>
          
          <p class="brief-description mb-6">
            As Medable expanded into international markets, the company faced significant challenges managing multilingual clinical trial content across diverse regulatory environments. The existing translation process relied on email chains, spreadsheets, and manual handoffs that introduced errors and delays that could impact patient safety and trial timelines.
          </p>
          
          <p class="brief-description">
            This tool would become the central hub for all clinical trial localization activities, supporting translation teams, clinical researchers, regulatory affairs specialists, and international project managers in a unified workflow.
          </p>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-globe text-blue-600"></i>
            Global Clinical Trial Localization
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">The platform needed to address complex international healthcare requirements:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-shield-alt text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Maintain <strong>regulatory compliance</strong> across different international healthcare standards and requirements</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-users-md text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Support <strong>clinical accuracy</strong> through specialized medical translation workflows and terminology management</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-clock text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Accelerate <strong>time-to-market</strong> for clinical trials in new international regions</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-12">
            <i class="fas fa-language text-indigo-600"></i>
            Advanced Translation Workflow Features
          </h3>
          <p class="brief-subtitle mb-8 text-gray-600">The tool was designed to include:</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-route text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Multi-stage approval workflows</strong> with clinical reviewers, linguistic specialists, and regulatory approvers</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-book-medical text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Medical terminology management</strong> with controlled vocabularies and consistency checking</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-history text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Version control and audit trails</strong> for regulatory documentation and compliance tracking</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-chart-line text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Real-time progress tracking</strong> and automated reporting for project stakeholders</span>
            </li>
          </ul>
        </div>
        
        <div class="brief-section mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-blue-300 pl-6 py-4 bg-blue-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-heartbeat text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">This tool would directly impact global healthcare outcomes by enabling faster, more accurate clinical trial deployment across international markets.</span>
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
            Medable's global expansion into international clinical trial markets was severely hampered by inefficient, manual translation processes that introduced critical delays and accuracy risks. The existing approach relied on fragmented email communications, shared spreadsheets, and disjointed handoffs between translation teams, clinical researchers, and regulatory specialists.
          </p>
        </div>

        <div class="situation-scale mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            As clinical trials required increasingly complex multilingual support—spanning informed consent documents, patient questionnaires, clinical protocols, and regulatory submissions—the manual process was breaking down. Translation turnaround times were unpredictable, quality control was inconsistent, and regulatory compliance was at risk due to version control issues and communication gaps.
          </p>
        </div>

        <div class="situation-challenges mb-8">
          <p class="situation-subtitle text-gray-600 mb-6">The fragmented translation process was creating multiple critical issues:</p>
          
          <ul class="challenge-list space-y-6">
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-exclamation-triangle text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Translation delays were extending clinical trial launch timelines by 4-6 weeks on average</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-file-alt text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Version control issues led to regulatory submission errors and compliance risks</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-comments text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Email-based communication created information silos and missed deadlines</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-user-md text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Medical terminology inconsistencies threatened clinical data accuracy and patient safety</span>
            </li>
            <li class="challenge-item flex items-start gap-4">
              <i class="fas fa-chart-line text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed">Lack of visibility into translation progress hindered project planning and stakeholder communication</span>
            </li>
          </ul>
        </div>

        <div class="situation-impact mb-8">
          <div class="impact-header mb-6">
            <h3 class="impact-title flex items-center gap-3 mb-4 text-xl font-semibold text-gray-900">
              <i class="fas fa-heartbeat text-red-600"></i>
              Critical Healthcare Impact
            </h3>
          </div>
          
          <p class="impact-description text-gray-700 leading-relaxed mb-6">
            These inefficiencies weren't just operational challenges—they had direct implications for global healthcare. Delayed clinical trials meant delayed access to potentially life-saving treatments for patients in international markets. Translation errors could compromise patient safety and regulatory compliance, putting both clinical trial participants and approval timelines at risk.
          </p>
        </div>

        <div class="situation-conclusion">
          <div class="conclusion-card bg-red-50 border-l-4 border-red-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-globe-americas text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                Medable needed a comprehensive solution that would transform clinical trial localization from a manual bottleneck into a strategic advantage for global healthcare innovation.
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
            Design a comprehensive translation management tool that would revolutionize clinical trial localization workflows. The system needed to transform fragmented, manual processes into streamlined, quality-controlled workflows while maintaining the highest standards of medical accuracy and regulatory compliance required for international healthcare markets.
          </p>
        </div>

        <div class="task-focus mb-10">
          <div class="task-header mb-6">
            <div class="task-number flex items-center gap-3">
              <i class="fas fa-language text-blue-600"></i>
              <span class="task-label font-semibold text-blue-600">CORE LOCALIZATION OBJECTIVES</span>
            </div>
            <h4 class="task-title text-xl font-bold text-gray-900 mb-4">Build Integrated Clinical Translation Platform</h4>
          </div>
          
          <p class="task-overview text-lg text-gray-700 leading-relaxed mb-6">
            The platform required a <strong>multi-stakeholder approach</strong> that could seamlessly connect translators, clinical researchers, regulatory specialists, and project managers in unified workflows. Healthcare-specific requirements included medical terminology controls, audit trail compliance, and support for diverse international regulatory frameworks.
          </p>
          
          <div class="task-requirements mb-8">
            <ul class="task-list space-y-4">
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-route text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Design approval workflows for clinical review, linguistic validation, and regulatory sign-off</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-shield-check text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Ensure regulatory compliance with international healthcare documentation standards</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-book-medical text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Implement medical terminology management and consistency controls</span>
              </li>
              <li class="task-list-item flex items-start gap-4">
                <i class="fas fa-history text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed">Create comprehensive audit trails and version control for regulatory documentation</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="task-stakeholders mb-8">
          <div class="stakeholders-header mb-6">
            <h4 class="stakeholders-title flex items-center gap-3 text-lg font-bold text-gray-900">
              <i class="fas fa-users text-indigo-600"></i>
              Multi-Role Platform Requirements
            </h4>
          </div>
          
          <div class="stakeholders-list space-y-4">
            <div class="stakeholder-item flex items-start gap-4">
              <i class="fas fa-language text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Translation Teams:</strong> Intuitive translation interfaces with context, terminology suggestions, and quality checking</span>
            </div>
            
            <div class="stakeholder-item flex items-start gap-4">
              <i class="fas fa-user-md text-teal-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Clinical Researchers:</strong> Medical review workflows with clinical context and terminology validation</span>
            </div>
            
            <div class="stakeholder-item flex items-start gap-4">
              <i class="fas fa-clipboard-check text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Regulatory Specialists:</strong> Compliance tracking, audit trails, and approval documentation systems</span>
            </div>
            
            <div class="stakeholder-item flex items-start gap-4">
              <i class="fas fa-project-diagram text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Project Managers:</strong> Real-time progress tracking, resource allocation, and stakeholder communication tools</span>
            </div>
          </div>
        </div>

        <div class="task-conclusion mt-10">
          <div class="conclusion-card bg-purple-50 border-l-4 border-purple-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-heartbeat text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                Success would be measured by faster global clinical trial deployment, improved translation quality, and ultimately accelerated patient access to innovative healthcare treatments worldwide.
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
            Led comprehensive stakeholder research across translation teams, clinical researchers, and regulatory specialists. Designed integrated workflows connecting medical translation, clinical review, and regulatory approval processes. Created specialized interfaces for different user roles while maintaining consistency and compliance with international healthcare standards.
          </p>
        </div>

        <div class="consolidated-actions mb-12">
          <div class="actions-container bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">1. Multi-Stakeholder Research and Workflow Analysis</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Conducted in-depth interviews with professional medical translators, clinical research coordinators, and regulatory affairs specialists</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Mapped existing translation workflows across 12 different international clinical trial projects</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Analyzed regulatory requirements for clinical trial documentation across key international markets</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">2. Medical Translation Interface Design</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Designed specialized translation interfaces with medical context panels, terminology suggestions, and clinical reference materials</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created real-time terminology validation systems integrated with medical dictionaries and controlled vocabularies</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Implemented collaborative review features allowing translators to flag clinical uncertainties for expert review</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">3. Integrated Approval Workflow System</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Designed multi-stage approval workflows connecting initial translation, clinical review, linguistic validation, and final regulatory sign-off</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created role-specific dashboards for project managers with real-time progress tracking and bottleneck identification</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Developed automated notification systems ensuring stakeholders stayed informed of status changes and pending approvals</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4">4. Regulatory Compliance and Quality Assurance</h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Implemented comprehensive audit trail systems tracking all translation changes, approvals, and version history for regulatory compliance</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created quality assurance checkpoints with automated consistency checking and mandatory reviewer sign-offs</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Designed regulatory documentation export features generating compliant reports for international health authority submissions</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-chart-bar text-blue-600"></i>
              Translation Efficiency and Quality Improvements
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>60% reduction in translation turnaround time</strong> through streamlined workflows and automated coordination</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>85% improvement in translation accuracy</strong> through medical terminology controls and expert review workflows</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>100% regulatory compliance rate</strong> with comprehensive audit trails and approval documentation</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>75% decrease in version control errors</strong> through integrated workflow management and automated tracking</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>90% user satisfaction score</strong> from translation teams and clinical research coordinators</span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-trophy text-amber-600"></i>
              Global Market Expansion Impact
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Enabled expansion into 15 new international markets</strong> with streamlined localization capabilities</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Accelerated clinical trial launch timelines by 4-6 weeks</strong> in international markets</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-gray-700 leading-relaxed"><strong>Increased international client acquisition by 40%</strong> due to improved localization capabilities</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Established Medable as a leader in global clinical trial technology</strong> with comprehensive localization infrastructure</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-lightbulb text-green-600"></i>
              Healthcare Localization Design Insights
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Medical translation requires specialized workflows</strong> that differ significantly from general translation platforms</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Multi-stakeholder approval processes are essential</strong> for maintaining clinical accuracy and regulatory compliance</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Terminology consistency directly impacts patient safety</strong> and requires systematic management across all translations</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Audit trail completeness is crucial for regulatory compliance</strong> and international health authority approvals</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    images: [
      '/images/case-studies/medable-design-system/design1.jpg',
      '/images/case-studies/medable-design-system/design2.jpg',
      '/images/case-studies/medable-design-system/design3.jpg',
      '/images/case-studies/medable-design-system/design4.jpg',
      '/images/case-studies/medable-design-system/design5.jpg',
      '/images/case-studies/medable-design-system/design6.jpg',
    ]
  }
]; 