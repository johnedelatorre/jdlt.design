import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'relo-census-dashboard',
    title: 'Relo Census',
    subtitle: 'Building a New Sports Sponsorship Analytics Platform (0→1)',
    client: 'Relo Metrics',
    role: 'Founding Product Design Lead (IC → Player-Coach → Coach → Org-Builder)',
    scope: 'Create a new recurring-revenue stream by productizing sponsorship insights into a self-serve experience.',
    outcome: 'Established the first UX practice; shipped MVP in ~60 days',
    year: '2023 - 2024',
    tools: ['Figma', 'UXPilot', 'Vercel'],
    tags: ['Sports Analytics', 'Data Platform', 'Sponsorship'],
    headerImage: '/images/case-studies/relo-census/header.jpg',
    isRecent: true,
    projectBrief: `
      <div class="project-brief-content">
        <div class="brief-section mb-12">
          <h3 class="font-serif text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-building text-blue-600"></i>
            Company Need & Key Results
          </h3>
          
          <div class="mb-8">
            <p class="brief-description mb-6">
              <strong>Business need</strong> Launch a subscription platform that turns a services-heavy workflow into self-serve analytics—enabling deeper, more granular, wider cuts of sponsorship data and opening a new recurring-revenue funnel.
            </p>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-4">Company KRs (how success is measured)</h4>
              <ul class="brief-list space-y-3 ml-6">
                <li class="flex items-start gap-3">
                  <i class="fas fa-chart-line text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Adoption:</strong> high activation/usage depth across brands, agencies, and rights holders</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-dollar-sign text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Revenue:</strong> new logos, seat expansion, and plan upgrades driven by product value</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-clock text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Time-to-value:</strong> faster first answers; less reliance on services</span>
                </li>
              </ul>
            </div>
            
            <div class="text-sm text-gray-600 italic border-l-4 border-gray-300 pl-4 py-2 bg-gray-50 rounded-r">
              <strong>Data context:</strong> Upstream measurement is modeled in our BI layer and surfaced as stakeholder-facing KPI/ROI views with plain-language definitions.
            </div>
          </div>
        </div>
        
        <div class="brief-section mb-12">
          <h3 class="font-serif text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-users text-indigo-600"></i>
            Product Overview & Audience
          </h3>
          
          <div class="mb-8">
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">What Relo Census is</h4>
              <p class="text-gray-700 leading-relaxed">A self-serve sponsorship analytics platform where non-analysts can explore, filter, compare, save, and share credible answers—and compose dashboards from saved views for recurring stories.</p>
            </div>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-4">Who it serves</h4>
              <ul class="brief-list space-y-3 ml-6">
                <li class="flex items-start gap-3">
                  <i class="fas fa-store text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Brands:</strong> pinpoint assets/partners that drive quality exposure; defend investments</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-handshake text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Agencies:</strong> build client scenarios quickly; benchmark credibly; reuse/share views</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-trophy text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed"><strong>Rights Holders (placement types):</strong> prove partner value at asset level; justify pricing/renewals</span>
                </li>
              </ul>
            </div>
            
            <div class="text-sm text-gray-700 italic border-l-4 border-blue-300 pl-4 py-3 bg-blue-50 rounded-r">
              <strong>Core value</strong> Start in the right place → reach a trustworthy answer fast → save/share the evidence → tell the story repeatedly via dashboards → keep metrics explainable, not a black box.
            </div>
          </div>
        </div>
        
        <div class="brief-section mt-10">
          <h3 class="font-serif text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-arrow-right text-green-600"></i>
            Challenges → Goals
          </h3>
          <p class="brief-subtitle mb-6 text-gray-600">Where we started → What success required</p>
          
          <ul class="brief-list space-y-6">
            <li class="flex items-start gap-4">
              <i class="fas fa-compass text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>No UX precedent/process →</strong> Set strategy (problem, north star); define the core flow Explore → Filter → Save/Share → Dashboards</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-user-check text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>No validated personas/needs →</strong> Name audiences & first decisions; add JTBD with acceptance</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-sitemap text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Task lists, not a product →</strong> Tie work to company KRs; set IA & conceptual model for deep/granular/horizontal cuts</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-code text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Eng not used to design specs/systems →</strong> Agree on what good looks like (clear specs, reusable patterns); set performance & quality bars</span>
            </li>
            <li class="flex items-start gap-4">
              <i class="fas fa-bullhorn text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>High visibility, no shared direction →</strong> Tell one story (problem → north star → outcomes); keep metrics explainable and align GTM on value</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    
    designProcess: `
      <div class="design-process-content">
        <div class="process-header mb-10">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="font-serif text-2xl font-bold text-gray-900 uppercase tracking-wide">Design and Usability Strategy</h3>
            <div class="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
        </div>

        <div class="process-steps grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <!-- IC -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-user text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">IC</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Discovery & Research</p>
              <p>Persona Development</p>
              <p>Problem Framing</p>
            </div>
          </div>

          <!-- Player-Coach -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Player</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Strategic Alignment</p>
              <p>Product KRs</p>
              <p>Roadmap Sequencing</p>
            </div>
          </div>

          <!-- Coach -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-clipboard-list text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Coach</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Decision Principles</p>
              <p>Quality Standards</p>
              <p>Team Alignment</p>
            </div>
          </div>

          <!-- Org-Builder -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-building text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Org-Builder</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Design System</p>
              <p>Product Scorecard</p>
              <p>Working Rules</p>
            </div>
          </div>

        </div>

        <div class="brief-section space-y-8">
          
          <div class="detail-group">
            <h5 class="font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-user text-blue-600"></i>
              IC
            </h5>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-3">
                <i class="fas fa-search text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Ran discovery (interviews, usage/request audit, competitive scan)</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-user-friends text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Synthesized into personas, first decisions, and a clear problem frame</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-sitemap text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Drafted initial IA and flows to organize the problem space</span>
              </li>
            </ul>
          </div>
          
          <div class="detail-group">
            <h5 class="font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-users text-emerald-600"></i>
              Player-Coach
            </h5>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-3">
                <i class="fas fa-lightbulb text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Turned insights into How-Might-We prompts and Jobs-To-Be-Done (by persona)</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-link text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Connected product goals to the subscription revenue strategy</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-chart-line text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Set simple product KRs: more starts, faster first answer, deeper use, fewer support tickets</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-road text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Sequenced a Now → Next → Later roadmap; aligned PM/Eng/CS on acceptance criteria</span>
              </li>
            </ul>
          </div>

          <div class="detail-group">
            <h5 class="font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-clipboard-list text-indigo-600"></i>
              Coach
            </h5>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-3">
                <i class="fas fa-balance-scale text-indigo-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Defined decision principles and trade-offs</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-clock text-indigo-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Set review & testing cadence and clear quality bars (performance, states, clarity)</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-handshake text-indigo-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Kept teams aligned with short, regular check-ins and written decisions</span>
              </li>
            </ul>
          </div>
          
          <div class="detail-group">
            <h5 class="font-semibold text-gray-900 mb-4 flex items-center gap-3">
              <i class="fas fa-building text-amber-600"></i>
              Org-Builder
            </h5>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start gap-3">
                <i class="fas fa-cubes text-amber-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Built the design system so engineers ship faster and stay consistent (tokens, components, patterns, spec templates)</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-chart-bar text-amber-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Set a simple product scorecard tied to goals (more starts, faster first answer, more save/share) to track adoption and value</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-cogs text-amber-600 text-xs mt-2 flex-shrink-0"></i>
                <span>Working rules & handoff: single naming convention, reuse-first, clear add-pattern criteria, brief spec checklist + weekly design–eng sync</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
    
    situation: `
      <div class="situation-content">
        <div class="brief-section mb-8">
          <div class="mb-8">
            <div class="mb-6">
              <p class="text-gray-700 leading-relaxed">Large, credible dataset; insight path was slow and opaque for non-analysts.</p>
            </div>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-3">Task</h4>
              <p class="text-gray-700 leading-relaxed">Identify primary users, their first decisions, and core questions; find friction along the research→insight path.</p>
            </div>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 mb-4">Actions</h4>
              <div class="space-y-6">
                <div class="grid md:grid-cols-3 gap-4 items-start">
                  <div class="flex items-center gap-3">
                    <i class="fas fa-users text-blue-600"></i>
                    <span class="font-semibold text-gray-900">Stakeholder interviews</span>
                  </div>
                  <div class="md:col-span-2">
                    <span class="text-gray-700 leading-relaxed">Met with Customer Success, Marketing, Sales, and Product to map jobs-to-be-done by persona and define the first meaningful answer each needs (activation moment).</span>
                  </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4 items-start">
                  <div class="flex items-center gap-3">
                    <i class="fas fa-chart-bar text-emerald-600"></i>
                    <span class="font-semibold text-gray-900">Usage & Request Audit</span>
                  </div>
                  <div class="md:col-span-2">
                    <span class="text-gray-700 leading-relaxed">Analyzed current data-access patterns and report asks to extract common filters/parameters and the repeatable cuts worth productizing.</span>
                  </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4 items-start">
                  <div class="flex items-center gap-3">
                    <i class="fas fa-balance-scale text-purple-600"></i>
                    <span class="font-semibold text-gray-900">Competitive Benchmarking</span>
                  </div>
                  <div class="md:col-span-2">
                    <span class="text-gray-700 leading-relaxed">Reviewed adjacent analytics tools to benchmark discoverability and speed-to-answer expectations (table → chart → narrative loop).</span>
                  </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4 items-start">
                  <div class="flex items-center gap-3">
                    <i class="fas fa-link text-orange-600"></i>
                    <span class="font-semibold text-gray-900">KPI Definition & Traceability</span>
                  </div>
                  <div class="md:col-span-2">
                    <span class="text-gray-700 leading-relaxed">Partnered with Data/ML to document metric lineage, how KPI/ROI are modeled (dimensions/measures, calc logic), and how plain-language definitions should surface in the UI.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-sm text-gray-700 italic border-l-4 border-blue-300 pl-4 py-3 bg-blue-50 rounded-r">
              <strong>Resulting focus</strong> Make the first credible answer fast and defensible; enable reuse (Saved Views); keep metrics explainable.
            </div>
          </div>
        </div>
        
        <div class="brief-section mb-8">
          <h3 class="font-serif text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-clipboard-list text-indigo-600"></i>
            Discovery Findings
          </h3>
          
          <div class="findings-grid grid md:grid-cols-2 gap-6">
            
                <!-- Primary Research -->
                <div class="finding-card bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                    <i class="fas fa-comments text-blue-600"></i>
                    Primary Research
                  </h4>
                  
                  <div class="mb-4">
                    <h5 class="font-semibold text-blue-900 mb-3 flex items-center gap-2 text-base">
                      <i class="fas fa-circle text-blue-600 text-xs"></i>
                      Internal Stakeholder Interviews
                    </h5>
                    <ul class="space-y-2 text-gray-700 ml-4">
                      <li class="text-base"><strong>2 Customer Success Managers:</strong> <em>"Too much training overhead"</em></li>
                      <li class="text-base"><strong>2 Sales Directors:</strong> <em>"We're losing deals to competitors"</em></li>
                      <li class="text-base"><strong>1 Marketing Manager:</strong> <em>"Can't tell our value story"</em></li>
                    </ul>
                  </div>
                  
                  <div class="mb-4">
                    <h5 class="font-semibold text-purple-900 mb-3 flex items-center gap-2 text-base">
                      <i class="fas fa-circle text-purple-600 text-xs"></i>
                      Client Interviews
                    </h5>
                    <ul class="space-y-2 text-gray-700 ml-4">
                      <li class="text-base"><strong>Kansas City Chiefs:</strong> <em>"Need asset-level valuation"</em></li>
                      <li class="text-base"><strong>Optimum Sports:</strong> <em>"Let me build what I need"</em></li>
                      <li class="text-base"><strong>Optimum Sports:</strong> <em>"Show me vs. competitors"</em></li>
                    </ul>
                  </div>
                </div>
            
            <!-- Secondary Research -->
            <div class="finding-card bg-emerald-50 border border-emerald-200 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-3 text-lg">
                <i class="fas fa-chart-line text-emerald-600"></i>
                Secondary Research
              </h4>
              
              <div class="mb-4">
                <h5 class="font-semibold text-orange-900 mb-3 flex items-center gap-2 text-base">
                  <i class="fas fa-circle text-orange-600 text-xs"></i>
                  MVC Analytics (Pendo)
                </h5>
                <ul class="space-y-2 text-gray-700 ml-4">
                  <li class="text-base">73% drop-off in onboarding</li>
                  <li class="text-base">Users recreating same views daily</li>
                  <li class="text-base">Average 6 support tickets per client</li>
                </ul>
              </div>
              
              <div class="mb-4">
                <h5 class="font-semibold text-pink-900 mb-3 flex items-center gap-2 text-base">
                  <i class="fas fa-circle text-pink-600 text-xs"></i>
                  Market Analysis
                </h5>
                <ul class="space-y-2 text-gray-700 ml-4">
                  <li class="text-base"><strong>Zoomph, Trajectory, SponsorUnited:</strong> lacking real-time data</li>
                  <li class="text-base">No one offering true benchmarking</li>
                  <li class="text-base">Gap in modular solutions</li>
                </ul>
              </div>
            </div>
            
          </div>
          
          
          <!-- Personas -->
            <div class="personas-viewer-placeholder">
              <!-- Personas viewer will be rendered as React component -->
            </div>
          
          <!-- Key Learnings -->
          <div class="key-learnings-section mt-10">
            <h3 class="font-serif text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <i class="fas fa-graduation-cap text-blue-600"></i>
              Key Learnings
            </h3>
            
            <div class="learnings-grid grid md:grid-cols-2 gap-6">
              
              <div class="learning-card bg-gray-800 text-white rounded-lg p-6 border border-gray-700">
                <h4 class="font-bold text-lg mb-3">1. Persona-first landing (hypothesis)</h4>
                <p class="text-gray-300 leading-relaxed">Interviewees asked for three tabs (Brands / Agencies / Placement Types)</p>
              </div>
              
              <div class="learning-card bg-gray-800 text-white rounded-lg p-6 border border-gray-700">
                <h4 class="font-bold text-lg mb-3">2. Real-time deep filtering (hypothesis)</h4>
                <p class="text-gray-300 leading-relaxed">Users asked for a real-time deep filter experience with a clickable deeper dive to go beyond the first answer.</p>
              </div>
              
              <div class="learning-card bg-gray-800 text-white rounded-lg p-6 border border-gray-700">
                <h4 class="font-bold text-lg mb-3">3. Users want control</h4>
                <p class="text-gray-300 leading-relaxed">"Create and save custom views like Pendo" – repeated request from internal stakeholders</p>
              </div>
              
              <div class="learning-card bg-gray-800 text-white rounded-lg p-6 border border-gray-700">
                <h4 class="font-bold text-lg mb-3">4. Save Work, Don't Repeat</h4>
                <p class="text-gray-300 leading-relaxed">Agencies, Brands and Rightsholders wanted saved queries for sponsorship opportunities and KPIs</p>
              </div>
              
              <div class="learning-card bg-gray-800 text-white rounded-lg p-6 border border-gray-700">
                <h4 class="font-bold text-lg mb-3">5. Progressive Complexity</h4>
                <p class="text-gray-300 leading-relaxed">Start with filters → Build views → Create dashboards and share with teams and upper management</p>
              </div>
              
              <div class="learning-card bg-gray-800 text-white rounded-lg p-6 border border-gray-700">
                <h4 class="font-bold text-lg mb-3">6. Competitive Inspiration</h4>
                <p class="text-gray-300 leading-relaxed">Pendo's query builder validated as industry standard for giving users autonomy of custom views and dashboards</p>
              </div>
              
            </div>
            
                <div class="opportunities-card bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                  <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-3">
                    <i class="fas fa-lightbulb text-green-600"></i>
                    The Opportunities
                  </h4>
                  <div class="space-y-3 text-gray-700">
                    <p class="leading-relaxed"><strong>Persona-based MVP:</strong> Start with three tabs (Brands / Agencies / Placement Types) that land in Data Explorer with a fast, deep filter and a click-to-go-deeper path.</p>
                    <p class="leading-relaxed"><strong>Clear first-answer path:</strong> Make the starting route obvious so non-analysts reach a credible answer quickly.</p>
                    <p class="leading-relaxed"><strong>Control & reuse:</strong> Let users create, save, and share views instead of rebuilding work; this drives activation and ongoing use.</p>
                    <p class="leading-relaxed"><strong>Persona-relevant entry points:</strong> Role-specific starts improve relevance and lift share/export (early adoption signal).</p>
                    <p class="leading-relaxed"><strong>Explainable metrics:</strong> Keep KPI/ROI plain-language and transparent to build trust and reduce "what does this mean?" questions.</p>
                    <p class="leading-relaxed"><strong>Dashboards from saved views:</strong> Enable custom dashboards composed from saved views for recurring stories and reviews.</p>
                  </div>
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
          <p class="action-description text-lg text-gray-700 leading-relaxed mb-6">
            Transformed Relo from a requirements-driven workflow to a user-centered design culture, establishing the first formal UX practice while shipping Census MVP in under 90 days with just two engineers.
          </p>
        </div>

        <div class="action-section mb-8">
          <h3 class="action-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-lightbulb text-blue-600"></i>
            Evangelizing UX as Strategic Discipline
          </h3>
          <ul class="action-points space-y-6">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-handshake text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Embedded with engineering from day one</strong>—modeling how design removes ambiguity and improves outcomes through specs, prototypes, and systematic thinking</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-sync-alt text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Introduced modern design operations</strong>—async rituals via Slack demos, Loom walkthroughs, and Notion documentation replacing fragmented hand-drawn workflows</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-8">
          <h3 class="action-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-users text-emerald-600"></i>
            Research-Driven Foundation
          </h3>
          <ul class="action-points space-y-6">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-comments text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Conducted qualitative interviews</strong> with Customer Success, Marketing, and select clients to build three primary personas—Stakeholder, Brands, and Agencies</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-sitemap text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Grounded all design decisions in user behavior</strong>—personas drove architecture, filtering logic, and default view-building experiences</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-8">
          <h3 class="action-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-cubes text-indigo-600"></i>
            Scalable Design System Implementation
          </h3>
          <ul class="action-points space-y-6">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-layer-group text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Architected modular component system</strong> using Ant Design primitives and Ant Charts—enabling reusable UI blocks mapped to both user needs and technical constraints</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-file-code text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Delivered developer-ready specs</strong> via comprehensive Figma documentation covering usage patterns, interaction states, and spacing logic</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-8">
          <h3 class="action-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-rocket text-amber-600"></i>
            Prototype-Led Development
          </h3>
          <ul class="action-points space-y-6">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-desktop text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Accelerated decision-making with interactive prototypes</strong>—using v0.dev and Cursor to enable stakeholder testing and engineering preview before development</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-shipping-fast text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Delivered MVP in under 90 days</strong> with minimal resources—proving that thoughtful design systems enable both speed and long-term scalability</span>
            </li>
          </ul>
        </div>

        <div class="action-conclusion mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-blue-300 pl-6 py-4 bg-blue-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-trophy text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed"><strong>The true victory wasn't just shipping Census</strong>—it was transforming how Relo approaches product development, establishing design as a strategic function that drives better outcomes through user empathy and systematic thinking.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-section mb-12">
          <h3 class="results-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-chart-line text-blue-600"></i>
            Impact
          </h3>
          
          <ul class="results-list space-y-6">
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-rocket text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>45% increase in internal adoption</strong> across Customer Success, Sales, and Product teams—Census became the new go-to platform</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-tachometer-alt text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>30% faster load times</strong> and reduced UI clutter by streamlining views, filters, and interactions</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-heart text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>92% satisfaction score</strong> during stakeholder rollout, with cross-functional praise for clarity and usability</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-graduation-cap text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Established the first formal UX practice at Relo</strong>—introducing systems thinking and persona-driven development</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-shipping-fast text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Delivered MVP in under 90 days</strong> with only 2 engineers while building scalable, extensible foundation</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <h3 class="results-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-lightbulb text-green-600"></i>
            What I Learned
          </h3>
          
          <ul class="learnings-list space-y-6">
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-handshake text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Embedding design thinking</strong> in an org without UX precedent requires patience, proof, and persistent collaboration</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-users text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Personas aren't just research artifacts</strong>—they become blueprints for architecture, logic, and interaction models</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-layer-group text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Design systems deliver strategic leverage</strong>—enabling scalability, velocity, and cross-team understanding beyond aesthetics</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-rocket text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>MVP velocity and long-term scalability</strong> aren't opposing forces when you make smart system decisions early</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-heart text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Great design isn't just what's delivered</strong>—it's the culture, trust, and shared language it creates between teams</span>
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
    
    designProcess: `
      <div class="design-process-content">
        <div class="process-header mb-10">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 uppercase tracking-wide">Design Process</h3>
            <div class="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl">
            Relo Edge required a comprehensive platform transformation approach, grounded in the core philosophy: "How can we surprise and delight our users just a little more?" This guided every design decision from discovery through delivery.
          </p>
        </div>

        <div class="process-steps grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <!-- Discovery & User-Centered Design -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Discovery & Research</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Deep Stakeholder Listening</p>
              <p>"Surprise & Delight" Philosophy</p>
              <p>Real Workflow Validation</p>
            </div>
          </div>

          <!-- UX Architecture -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-drafting-compass text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">UX Architecture</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Information Architecture Rebuild</p>
              <p>Smart Interactions Design</p>
              <p>Visual Hierarchy Enhancement</p>
            </div>
          </div>

          <!-- Design System Implementation -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-cubes text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">System Building</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Ant Design Component Library</p>
              <p>v0.dev Prototyping</p>
              <p>Developer-Ready Handoff</p>
            </div>
          </div>

        </div>

        <!-- Process Details -->
        <div class="process-details bg-gray-50 rounded-xl p-8">
          <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-route text-blue-600"></i>
            The "Surprise & Delight" Transformation Strategy
          </h4>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-lightbulb text-blue-600 text-sm"></i>
                Philosophy-Driven Discovery
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Conducted interviews across CS, Sales, Product, Marketing, and Engineering</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Established "Can we surprise and delight?" as core design principle</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Validated persona-based entry points through 1:1 testing sessions</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Identified friction points in legacy MVC workflows</span>
                </li>
              </ul>
            </div>
            
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-magic text-emerald-600 text-sm"></i>
                Smart System Implementation
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Rebuilt information architecture with persistent navigation</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Introduced sticky filters, hover previews, and saved queries</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Created role-adaptive dashboards for CS, Sales, and Marketing</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Built with Ant Design foundation and v0.dev prototypes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-amber-50 border-l-4 border-amber-300 rounded-r">
            <div class="flex items-start gap-3">
              <i class="fas fa-sparkles text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="text-gray-700 leading-relaxed">
                <strong>The breakthrough insight:</strong> "Every design review ended with one final question: have we done enough to surprise and delight our users?" This mindset transformed the platform from functional but frustrating to elegant and delightful.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    
    situation: `
      <div class="situation-content">
        <div class="situation-intro mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            Relo's Media Value Center had become a daily source of frustration. Years of engineering-driven growth created a <strong>chaotic patchwork of inconsistent patterns, dense interfaces, and fragmented workflows</strong> that made simple tasks feel impossible. Every user interaction was a friction point.
          </p>
        </div>

        <div class="situation-problems mb-8">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-exclamation-triangle text-red-600"></i>
            The Core Problem
          </h3>
          
          <ul class="problem-list space-y-6">
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-code text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Legacy engineering without UX foundation</strong> —rigid layouts, poor hierarchy, and zero personalization</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-filter text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Broken workflow basics</strong> —no saved filters, non-responsive tables, fragmented navigation across views</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-users-cog text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>One-size-fits-all interface</strong> —Customer Success, Sales, and Marketing teams forced into the same cluttered experience</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-comments text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Constant workarounds required</strong> —teams resorted to Excel exports and Slack questions just to complete basic tasks</span>
            </li>
          </ul>
        </div>

        <div class="client-feedback mb-8">
          <div class="feedback-quotes space-y-6">
            <blockquote class="quote-card bg-gradient-to-r from-red-50 to-red-100 border-l-8 border-red-500 pl-8 py-6 rounded-r-xl shadow-lg relative">
              <div class="absolute -left-4 top-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <i class="fas fa-quote-left text-white text-sm"></i>
              </div>
              <p class="quote-text text-xl font-bold text-red-900 italic mb-3 leading-relaxed">
                "This UI makes everything feel harder than it is."
              </p>
              <cite class="quote-attribution text-red-700 font-medium">– CS Manager</cite>
            </blockquote>
            
            <blockquote class="quote-card bg-gradient-to-r from-orange-50 to-orange-100 border-l-8 border-orange-500 pl-8 py-6 rounded-r-xl shadow-lg relative">
              <div class="absolute -left-4 top-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <i class="fas fa-quote-left text-white text-sm"></i>
              </div>
              <p class="quote-text text-xl font-bold text-orange-900 italic mb-3 leading-relaxed">
                "We have to use Excel just to build a client recap."
              </p>
              <cite class="quote-attribution text-orange-700 font-medium">– Analyst</cite>
            </blockquote>
          </div>
        </div>

        <div class="legacy-screenshots mb-8">
          <h3 class="section-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-receipt text-gray-600"></i>
            What Users Faced Daily
          </h3>
          
          <div class="legacy-screenshots-viewer-placeholder">
            <!-- Legacy screenshots viewer will be rendered as React component -->
          </div>
        </div>

        <div class="situation-conclusion mt-10">
          <div class="conclusion-card bg-red-50 border-l-4 border-red-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-heartbeat text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-lg text-gray-700 leading-relaxed">
                <strong>The platform was functional but fundamentally broken from a user perspective.</strong> In a competitive sports analytics market, poor UX was becoming a real business liability—undermining team productivity and client confidence.
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
        <div class="action-intro mb-8">
          <p class="action-description text-lg text-gray-700 leading-relaxed">
            Led a comprehensive transformation grounded in user research and "surprise and delight" thinking. Every design decision prioritized reducing friction while creating experiences teams would feel proud to share.
          </p>
        </div>

        <div class="action-section mb-8">
          <h3 class="action-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-users text-blue-600"></i>
            Discovery & User-Centered Design
          </h3>
          
          <ul class="action-points space-y-6">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-comments text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Deep stakeholder listening</strong> —Conducted interviews across CS, Sales, Product, Marketing, and Engineering to surface core frictions and workflow needs</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-lightbulb text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Established design philosophy</strong> —"Can we surprise and delight our users?" became our guiding principle across every review cycle and interaction</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-mouse-pointer text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Validated through real workflows</strong> —Ran 1:1 testing sessions to ensure persona-based entry points met actual user needs</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-8">
          <h3 class="action-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-drafting-compass text-orange-600"></i>
            UX Architecture & Information Design
          </h3>
          
          <ul class="action-points space-y-6">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-sitemap text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Rebuilt information architecture</strong> —Reorganized around persona-based entry points with persistent navigation and contextual filters</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-magic text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Introduced smart interactions</strong> —Sticky filters, hover previews, saved queries, and role-adaptive dashboards</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-layer-group text-cyan-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Enhanced visual hierarchy</strong> —Clear zoom-in/zoom-out patterns that helped users navigate from overview to detail seamlessly</span>
            </li>
          </ul>
        </div>

        <div class="action-section mb-8">
          <h3 class="action-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-cubes text-emerald-600"></i>
            Scalable Design System
          </h3>
          
          <ul class="action-points space-y-6">
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-atom text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Built comprehensive component library</strong> —Ant Design foundation with tokens, theming, and modular components spanning cards, tables, drawers, and charts</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-code text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Prototyped with v0.dev</strong> —Created high-fidelity, interactive prototypes for saved filters, responsive tables, and role-adaptive workflows</span>
            </li>
            <li class="action-point flex items-start gap-4">
              <i class="fas fa-handshake text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Developer-ready handoff</strong> —Figma libraries, JSON tokens, and QA checklists that accelerated engineering implementation</span>
            </li>
          </ul>
        </div>

        <div class="philosophy-quote mt-10 mb-8">
          <div class="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-quote-left text-yellow-600 text-xl self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <div>
                <p class="text-xl font-bold text-gray-900 mb-3 leading-relaxed">
                  "Every design review ended with one final question: have we done enough to surprise and delight our users?"
                </p>
                <p class="text-lg text-gray-700 italic leading-relaxed">
                  This mindset transformed how we approached everything from micro-interactions to major workflow changes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="action-conclusion">
          <div class="conclusion-card bg-emerald-50 border-l-4 border-emerald-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-trophy text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-lg text-gray-700 leading-relaxed">
                <strong>The result was more than a UI refresh</strong>—it was a fundamental shift from "functional but frustrating" to "elegant and delightful," creating a platform teams actually wanted to use and share.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-section mb-12">
          <h3 class="results-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-chart-line text-blue-600"></i>
            Impact
          </h3>
          
          <ul class="results-list space-y-6">
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-chart-bar text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>42% increase in feature adoption</strong> and 68% drop in UI complaints —teams embraced saved filters, hover previews, and role-adaptive dashboards</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-rocket text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>38% faster load times and 36% reduced click depth</strong> —streamlined workflows and optimized rendering made daily tasks effortless</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-graduation-cap text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>CSM onboarding cut in half</strong> (3 weeks to 1.5) and design system adopted across 2+ additional tools</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-sparkles text-pink-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Cultural transformation achieved</strong> —Marketing started using real platform screenshots for sales decks, and CS teams felt proud sharing dashboards in client reviews</span>
            </li>
            <li class="result-item flex items-start gap-4">
              <i class="fas fa-trophy text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Strategic platform elevation</strong> —Relo Edge transformed from "internal tool" to trusted source of insight, securing executive buy-in for future UX initiatives</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <h3 class="results-title flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-lightbulb text-green-600"></i>
            What I Learned
          </h3>
          
          <ul class="learnings-list space-y-6">
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-brain text-green-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Surface-level polish doesn't solve deep UX rot</strong> —you must rebuild the mental model and information architecture from first principles</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-heart text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Internal tools deserve delight</strong> —users are still humans who respond to thoughtful design and surprise interactions</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-robot text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>AI-enabled prototyping changed our velocity</strong> —v0.dev gave developers confidence and dramatically improved design-to-development cycles</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-users text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Design systems are blueprints for organizational credibility</strong> —they create shared language and trust between teams</span>
            </li>
            <li class="learning-item flex items-start gap-4">
              <i class="fas fa-magic text-amber-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Surprise and delight happens when clarity meets flow</strong> —the best user experiences feel effortless and joyful simultaneously</span>
            </li>
          </ul>
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
          <p class="brief-description text-xl mb-8 font-medium text-gray-800">
            <strong>A centralized platform that transformed clinical-trial localization—cutting translation time from 48 hours to under 12 hours per language while ensuring regulatory compliance.</strong>
          </p>
        </div>
        
        <div class="story-flow space-y-8">
          <div class="challenge-section">
            <h4 class="challenge-title flex items-center gap-3 mb-4 text-lg font-semibold text-gray-900">
              <i class="fas fa-exclamation-triangle text-red-600"></i>
              The Challenge
            </h4>
            
            <div class="challenge-content space-y-4">
              <p class="challenge-description">
                The Clinical Trials Manager at Medable was responsible for translating a vast library of patient-facing content—tasks, assessments, emails, push notifications—used in a Bluetooth-enabled Patient App for trial participants. Every new translation, across multiple languages, was slow, fragmented, and manual.
              </p>
              
              <div class="challenge-stat bg-red-50 border-l-4 border-red-300 p-4 rounded-r">
                <p class="font-semibold text-gray-800">
                  <strong>Each language version took 30–48 hours to complete</strong>, stalling workflows, frustrating internal teams, and delaying Institutional Review Board (IRB) submissions.
                </p>
              </div>
              
              <p class="challenge-impact font-medium text-gray-700">
                The process wasn't just inefficient—<strong>it risked compliance timelines and stakeholder confidence.</strong>
              </p>
            </div>
          </div>

          <div class="opportunity-section">
            <h4 class="opportunity-title flex items-center gap-3 mb-4 text-lg font-semibold text-gray-900">
              <i class="fas fa-bullseye text-blue-600"></i>
              The Opportunity
            </h4>
            
            <div class="opportunity-summary bg-blue-50 border-l-4 border-blue-300 p-4 rounded-r">
              <p class="font-semibold text-gray-800">
                Streamline the entire clinical content translation lifecycle—from intake and certification to delivery—without sacrificing accuracy, traceability, or regulatory readiness.
              </p>
            </div>
          </div>

          <div class="role-section">
            <h4 class="role-title flex items-center gap-3 mb-4 text-lg font-semibold text-gray-900">
              <i class="fas fa-tools text-indigo-600"></i>
              My Role
            </h4>
            
            <div class="role-content space-y-4">
              <div class="role-summary bg-indigo-50 border-l-4 border-indigo-300 p-4 rounded-r">
                <p class="font-semibold text-gray-800">
                  <strong>Product Designer and embedded UX Researcher</strong>, partnered closely with the Product Manager and Tech Lead from day one.
                </p>
              </div>
              
              <p class="role-description">
                We met daily to iterate through requirements, flow optimizations, and engineering constraints—building a unified product vision grounded in user feedback and clinical compliance needs.
              </p>
            </div>
          </div>

          <div class="impact-section">
            <h4 class="impact-title flex items-center gap-3 mb-4 text-lg font-semibold text-gray-900">
              <i class="fas fa-lightbulb text-green-600"></i>
              Key Impact
            </h4>
            
            <div class="impact-content space-y-4">
              <ul class="impact-list space-y-3">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-600 flex-shrink-0 mt-1"></i>
                  <span><strong>Transformed a clunky translation handoff system</strong> into a dynamic, structured Translation Manager Tool</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-600 flex-shrink-0 mt-1"></i>
                  <span><strong>Reduced turnaround time from 48 hours to under 12 hours</strong> per language</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-600 flex-shrink-0 mt-1"></i>
                  <span><strong>Improved alignment across CS, PMs, and IRB review teams</strong> through better transparency and status visibility</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check-circle text-green-600 flex-shrink-0 mt-1"></i>
                  <span><strong>Designed a scalable content workflow</strong> ready to support 30+ languages across global trial deployments</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="why-matters-section">
            <h4 class="why-matters-title flex items-center gap-3 mb-4 text-lg font-semibold text-gray-900">
              <i class="fas fa-search text-purple-600"></i>
              Why It Matters
            </h4>
            
            <div class="why-matters-content space-y-4">
              <p class="why-matters-description">
                In clinical trials, delays aren't just inconvenient—<strong>they can derail entire studies.</strong>
              </p>
              
              <div class="why-matters-summary bg-green-50 border-l-4 border-green-300 p-4 rounded-r">
                <p class="font-semibold text-gray-800">
                  Our solution helped Medable accelerate how quickly patient guidance, consent forms, and app instructions could be deployed around the world—<strong>with speed, clarity, and compassion.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    
    designProcess: `
      <div class="design-process-content">
        <div class="process-header mb-10">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 uppercase tracking-wide">Design Process</h3>
            <div class="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl">
            The Translation Management Tool required a research-intensive approach with continuous discovery practices, inspired by Theresa Torres' framework. This complex clinical trial domain demanded deep user understanding and systematic validation at every step.
          </p>
        </div>

        <div class="process-steps grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          <!-- Deep Research -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-microscope text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Deep Research</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>User Interviews</p>
              <p>Observational Studies</p>
              <p>Personas & Journey Maps</p>
            </div>
          </div>

          <!-- Synthesis & Strategy -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-lightbulb text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Synthesis & Strategy</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Research Synthesis</p>
              <p>5 UX Pillars</p>
              <p>Solution Mapping</p>
            </div>
          </div>

          <!-- Continuous Discovery -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-sync-alt text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Continuous Discovery</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Biweekly Insight Loops</p>
              <p>Weekly Feedback Cadence</p>
              <p>Research Repository</p>
            </div>
          </div>

          <!-- Design & Prototyping -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-drafting-compass text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Design & Prototyping</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Information Architecture</p>
              <p>Nucleus Design System</p>
              <p>High-Fidelity Prototypes</p>
            </div>
          </div>

          <!-- Validation & Testing -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-check-circle text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Validation & Testing</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Usability Testing (Maze)</p>
              <p>A/B Testing</p>
              <p>Phased Rollout</p>
            </div>
          </div>

        </div>

        <!-- Process Details -->
        <div class="process-details bg-gray-50 rounded-xl p-8">
          <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-route text-blue-600"></i>
            Clinical Translation Research-to-Design Pipeline
          </h4>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-search text-blue-600 text-sm"></i>
                Research Foundation
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Interviewed 12 CTMs and 6 CS team members with structured question sets</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Conducted observational studies of live translation workflows</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Created detailed personas and journey maps for CTMs and CS teams</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Synthesized findings into 5 UX pillars: Efficiency, Simplicity, Empowerment, Communication, User-Centricity</span>
                </li>
              </ul>
            </div>
            
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-cogs text-emerald-600 text-sm"></i>
                Systematic Design & Validation
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Implemented Theresa Torres-inspired continuous discovery with biweekly loops</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Partnered with Tech Lead to co-define JSON schema and information architecture</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Built high-fidelity prototypes in Nucleus Design System with JSON validation</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Validated through Maze testing and A/B comparisons with legacy CSV process</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-300 rounded-r">
            <div class="flex items-start gap-3">
              <i class="fas fa-flask text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="text-gray-700 leading-relaxed">
                <strong>The research methodology breakthrough:</strong> By maintaining continuous discovery loops and linking every insight back to design artifacts, we created an audit-ready research pipeline that met clinical trial compliance standards while driving rapid design iteration.
              </p>
            </div>
          </div>
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
            Medable is a clinical trial platform trusted by global pharmaceutical companies to manage remote, decentralized studies. Behind the scenes, its product experience was fractured—each team had built in isolation, creating a chaotic patchwork of visual styles, inconsistent UX patterns, and bloated codebases that made scaling improvements nearly impossible in this highly regulated domain.
          </p>
          
          <p class="brief-description mb-6">
            As <strong>Product Design Lead</strong>, I spearheaded <strong>Nucleus</strong>—Medable's first comprehensive design system. The goal: systemic transformation through a universal design foundation that would harmonize UX, empower developers with scalable components, and reduce design-developer friction while navigating complex compliance requirements.
          </p>
        </div>

        <div class="brief-section mb-8">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-target text-red-600"></i>
            Core Challenges & Constraints
          </h3>
          
          <div class="challenges-grid grid md:grid-cols-2 gap-8">
            <div class="challenge-group">
              <h4 class="challenge-category text-lg font-semibold text-gray-900 mb-4">System Fragmentation</h4>
              <ul class="challenge-list space-y-4">
                <li class="challenge-item flex items-start gap-4">
                  <i class="fas fa-exclamation-triangle text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Visual chaos across isolated product teams</span>
                </li>
                <li class="challenge-item flex items-start gap-4">
                  <i class="fas fa-code text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Bloated codebases with duplicated components</span>
                </li>
                <li class="challenge-item flex items-start gap-4">
                  <i class="fas fa-universal-access text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Accessibility gaps and compliance risks</span>
                </li>
              </ul>
            </div>

            <div class="challenge-group">
              <h4 class="challenge-category text-lg font-semibold text-gray-900 mb-4">Regulatory Environment</h4>
              <ul class="constraint-list space-y-4">
                <li class="constraint-item flex items-start gap-4">
                  <i class="fas fa-shield-alt text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Risk reviews for any UI workflow changes</span>
                </li>
                <li class="constraint-item flex items-start gap-4">
                  <i class="fas fa-users-cog text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Cross-functional buy-in across compliance teams</span>
                </li>
                <li class="constraint-item flex items-start gap-4">
                  <i class="fas fa-heartbeat text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                  <span class="text-gray-700 leading-relaxed">Patient safety impact considerations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="brief-section mb-8">
          <h3 class="brief-title flex items-center gap-3 mb-6 mt-10">
            <i class="fas fa-atom text-blue-600"></i>
            The Nucleus Solution
          </h3>
          <p class="brief-description text-lg text-gray-700 leading-relaxed">
            Built a modern, component-driven system grounded in <strong>Tailwind CSS</strong> with comprehensive governance, design tokens, accessibility frameworks, and developer enablement—creating a foundation for consistent, compliant, and scalable clinical trial experiences.
          </p>
        </div>

        <div class="brief-section mt-10">
          <div class="strategic-impact">
            <div class="impact-note text-gray-600 italic border-l-4 border-blue-300 pl-6 py-4 bg-blue-50 rounded-r">
              <div class="flex items-start gap-3">
                <i class="fas fa-lightbulb text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
                <span class="text-gray-700 leading-relaxed"><strong>Nucleus transformed Medable's entire product development approach</strong>—establishing a universal design foundation that empowered teams to ship consistent, accessible clinical trial experiences at scale, ultimately improving outcomes for healthcare professionals and patients worldwide.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    
    designProcess: `
      <div class="design-process-content">
        <div class="process-header mb-10">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 uppercase tracking-wide">Design Process</h3>
            <div class="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl">
            Nucleus required a comprehensive systems approach that balanced healthcare compliance requirements with modern design practices. This process focused on building organizational alignment while delivering a scalable technical foundation for clinical trial platforms.
          </p>
        </div>

        <div class="process-steps grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <!-- Research & Strategy -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-search-plus text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Research & Strategy</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Comprehensive Design Audit</p>
              <p>Stakeholder Alignment</p>
              <p>Healthcare Compliance Review</p>
            </div>
          </div>

          <!-- System Architecture -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-atom text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">System Architecture</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Tailwind CSS Foundation</p>
              <p>Design Token Structure</p>
              <p>Accessibility Framework</p>
            </div>
          </div>

          <!-- Component Development -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-cubes text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Component Creation</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>50+ Reusable Components</p>
              <p>Storybook Documentation</p>
              <p>WCAG Compliance Testing</p>
            </div>
          </div>

          <!-- Implementation & Adoption -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-users-cog text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Implementation</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Developer Enablement</p>
              <p>Training Programs</p>
              <p>Governance Framework</p>
            </div>
          </div>

        </div>

        <!-- Process Details -->
        <div class="process-details bg-gray-50 rounded-xl p-8">
          <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-route text-blue-600"></i>
            The Nucleus Transformation Strategy
          </h4>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-lightbulb text-red-600 text-sm"></i>
                Strategic Foundation (Month 1-2)
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-red-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Conducted comprehensive design audit across all product teams</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-red-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Mapped component redundancies and accessibility gaps</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-red-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Built business case with cross-functional stakeholder workshops</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-red-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Secured compliance team buy-in for healthcare regulations</span>
                </li>
              </ul>
            </div>
            
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-shipping-fast text-emerald-600 text-sm"></i>
                System + Adoption (Month 3-6)
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Built Tailwind-based token system with light/dark themes</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Created 50+ WCAG-compliant components in Storybook</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Partnered with Marketing on refreshed visual identity</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Delivered training programs and governance frameworks</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-300 rounded-r">
            <div class="flex items-start gap-3">
              <i class="fas fa-heartbeat text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="text-gray-700 leading-relaxed">
                <strong>The breakthrough insight:</strong> Success in healthcare design systems isn't just about visual consistency—it's about creating systematic reliability that healthcare professionals can trust when patient safety depends on clear, accessible workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    
    situation: `
      <div class="situation-content">
        <div class="situation-intro mb-8">
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            Despite supporting critical clinical trials for global pharmaceutical companies, Medable's product experience had devolved into a fractured ecosystem. Years of independent team development created a chaotic patchwork of <strong>inconsistent UI patterns, redundant codebases, and design drift</strong>—making it nearly impossible to scale improvements in this highly regulated environment.
          </p>
          
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            The fragmentation wasn't just visual—it was systemic. Product teams operated in silos, developers firefighted constantly, and there was no single source of truth for design decisions. In healthcare technology, where user trust and workflow reliability are paramount, this inconsistency posed serious <strong>reputational and operational risks</strong>.
          </p>
        </div>

        <div class="situation-problems mb-8">
          <h3 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-exclamation-circle text-red-600"></i>
            Core System Breakdown
          </h3>
          
          <ul class="problem-list space-y-6">
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-code text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Bloated codebases with duplicated components</strong> slowing development velocity</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-bug text-orange-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>UX bugs compounding without systemic fixes</strong> affecting user workflows</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-expand-arrows-alt text-purple-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Impossible to scale design improvements</strong> across products and teams</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-shield-alt text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Regulatory hesitation around UI changes</strong> in clinical environments</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-heartbeat text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>Fear of disrupting live patient workflows</strong> during active trials</span>
            </li>
            <li class="problem-item flex items-start gap-4">
              <i class="fas fa-calculator text-indigo-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <span class="text-gray-700 leading-relaxed"><strong>ROI skepticism for large-scale rework</strong> without clear business value</span>
            </li>
          </ul>
        </div>

        <div class="situation-impact mb-8">
          <h3 class="situation-subtitle flex items-center gap-3 mb-6 text-xl font-bold text-gray-900">
            <i class="fas fa-chart-line text-amber-600"></i>
            Business & User Impact
          </h3>
          <p class="situation-text text-lg text-gray-700 leading-relaxed mb-6">
            The dysfunction created a cascading effect: <strong>designers solved identical problems differently</strong>, <strong>developers reinvented components constantly</strong>, and <strong>leadership lacked visibility into systematic improvement</strong>. Most critically, healthcare professionals experienced inconsistent, frustrating workflows that eroded trust in the platform supporting their critical work.
          </p>
        </div>

        <div class="situation-conclusion mt-10">
          <div class="conclusion-card bg-red-50 border-l-4 border-red-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-exclamation-triangle text-red-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                <strong>This created a vicious cycle:</strong> poor user experiences decreased confidence in design decisions, leading to even more fragmented approaches as teams worked around perceived limitations—ultimately putting patient safety and clinical trial integrity at risk.
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
          <p class="action-description text-lg text-gray-700 leading-relaxed mb-6">
            Led a systematic transformation approach balancing urgent consistency needs with long-term strategic positioning. Every decision prioritized healthcare compliance, user safety, and cross-functional buy-in.
          </p>
        </div>

        <div class="consolidated-actions mb-12">
          <div class="actions-container bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <i class="fas fa-search-plus text-red-600"></i>
                1. Research & Strategic Foundation
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Conducted comprehensive design audit across all products, identifying <strong>component redundancies, UX bottlenecks, and accessibility gaps</strong></span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Mapped user and developer friction points to build <strong>strategic narrative around redesign urgency</strong></span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <i class="fas fa-atom text-emerald-600"></i>
                2. Nucleus Design System Creation
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Built <strong>50+ reusable, WCAG-compliant components</strong> using Tailwind CSS, Storybook, and centralized token architecture</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Developed scalable token system supporting <strong>light/dark modes, role-based themes, and brand consistency</strong></span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Partnered with Marketing to refresh visual identity while <strong>maintaining clinical familiarity</strong></span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <i class="fas fa-handshake text-blue-600"></i>
                3. Developer Enablement & Documentation
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created comprehensive Storybook with <strong>live documentation, usage guidelines, and naming conventions</strong></span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Aligned closely with engineering on <strong>prop structures and implementation logic</strong> for seamless handoff</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title text-lg font-semibold text-gray-900 mb-4 flex items-center gap-3">
                <i class="fas fa-users-cog text-orange-600"></i>
                4. Change Management & Adoption
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Secured buy-in across <strong>product, engineering, clinical ops, and QA</strong> through stakeholder workshops and proof of concept</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Developed <strong>training programs and onboarding kits</strong> ensuring sustained adoption post-launch</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class="action-conclusion">
          <div class="conclusion-card bg-emerald-50 border-l-4 border-emerald-300 p-6 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-lightbulb text-emerald-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="conclusion-text text-gray-700 leading-relaxed">
                <strong>Nucleus transformed Medable's entire product development process</strong>—not just through technical execution, but through systematic change management that reduced resistance and created lasting organizational transformation.
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
    visualDnaArtifacts: [
      {
        id: 'logo-colors',
        name: 'Logo & Color System',
        description: 'Brand logo specifications and comprehensive color token system for light and dark themes',
        image: '/images/case-studies/medable-design-system/logo-and-colors-nucleus.jpg',
        alt: 'Logo specifications and color token system for Nucleus design system'
      },
      {
        id: 'typography-buttons-tables',
        name: 'Typography, Buttons & Tables',
        description: 'Typography hierarchy, button variants, and data table components with accessibility standards',
        image: '/images/case-studies/medable-design-system/typography-buttons-tables-nucleus.jpg',
        alt: 'Typography hierarchy, button variants, and data table components from Nucleus design system'
      },
      {
        id: 'navigation-layouts',
        name: 'Navigation & Layout Systems',
        description: 'Side navigation patterns and responsive layout components for clinical trial interfaces',
        image: '/images/case-studies/medable-design-system/side-navigation-and-layouts-nucleus.jpg',
        alt: 'Side navigation patterns and layout components from Nucleus design system'
      },
      {
        id: 'charts-headers',
        name: 'Chart Variants & Page Headers',
        description: 'Data visualization components and page header templates for healthcare applications',
        image: '/images/case-studies/medable-design-system/chart-variants-page-headers-nucleus.jpg',
        alt: 'Chart variants and page header components from Nucleus design system'
      }
    ],
    figmaLink: 'https://www.figma.com/proto/asZK1MnXCqSyi95NlMRNhA/Porfolio-Preso-JohnDeLaTorreUgarte-2025?page-id=3560%3A87363&node-id=3561-87455&viewport=555%2C620%2C0.09&t=gSoRjMkmiSkR5mjK-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3561%3A87455'
  },
  {
    id: 'elysium-ai-dashboard',
    title: 'Elysium Analytics',
    subtitle: 'Design System in Storybook for a Multi-Technology Platform',
    client: 'Elysium Analytics',
    role: 'Product Design Lead',
    year: '2023',
    tools: ['Figma', 'Storybook', 'Tokens Studio'],
    tags: ['AI/ML', 'Dashboard Design', 'Data Analytics'],
    headerImage: '/images/case-studies/elysium-ai/elysium-ai-header.jpg',
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
    
    designProcess: `
      <div class="design-process-content">
        <div class="process-header mb-10">
          <div class="flex items-center gap-4 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 uppercase tracking-wide">Design Process</h3>
            <div class="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed max-w-4xl">
            Elysium required a systematic multi-platform approach that unified fragmented tech stacks while serving enterprise security analysts. This 6-month transformation focused on building scalable foundations across React, Angular, and .NET while integrating third-party ecosystems.
          </p>
        </div>

        <div class="process-steps grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <!-- Enterprise Research -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Enterprise Research</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>SOC Team Interviews</p>
              <p>Security Analyst Personas</p>
              <p>Cross-Platform Analysis</p>
            </div>
          </div>

          <!-- System Architecture -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-layer-group text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Multi-Platform Architecture</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>React + Angular + .NET</p>
              <p>Storybook Foundation</p>
              <p>Light/Dark Theme System</p>
            </div>
          </div>

          <!-- Integration Design -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-puzzle-piece text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Integration Design</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Looker + OpenSearch + Salesforce</p>
              <p>v0.dev Prototyping</p>
              <p>KQL Search Flows</p>
            </div>
          </div>

          <!-- Enterprise Validation -->
          <div class="process-step text-center">
            <div class="step-icon-container mb-6">
              <div class="w-20 h-20 mx-auto bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <i class="fas fa-check-circle text-white text-2xl"></i>
              </div>
            </div>
            <h4 class="step-title text-xl font-bold text-gray-900 mb-4">Enterprise Validation</h4>
            <div class="step-description space-y-2 text-sm text-gray-600">
              <p>Client Champion Testing</p>
              <p>Cross-Stack Implementation</p>
              <p>Design QA & Regression</p>
            </div>
          </div>

        </div>

        <!-- Process Details -->
        <div class="process-details bg-gray-50 rounded-xl p-8">
          <h4 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <i class="fas fa-route text-blue-600"></i>
            The 6-Month Multi-Platform Transformation Strategy
          </h4>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-lightbulb text-blue-600 text-sm"></i>
                Research & Architecture (Month 1-2)
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Interviewed enterprise security analysts and SOC teams across 4 personas</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Embedded with engineering teams to understand React, Angular, .NET constraints</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Mapped cross-platform workflows and third-party integration points</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-blue-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Architected Storybook foundation with shared tokens and themes</span>
                </li>
              </ul>
            </div>
            
            <div class="detail-group">
              <h5 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <i class="fas fa-shipping-fast text-emerald-600 text-sm"></i>
                Integration + Validation (Month 3-6)
              </h5>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Built comprehensive light/dark themes tuned for analyst fatigue reduction</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Created v0.dev prototypes for KQL search, alert triage, and dashboard flows</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Standardized embedded Looker, OpenSearch, and Salesforce components</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="fas fa-circle text-emerald-600 text-xs mt-2 flex-shrink-0"></i>
                  <span>Validated with client champions and maintained rolling QA checklist</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-blue-50 border-l-4 border-blue-300 rounded-r">
            <div class="flex items-start gap-3">
              <i class="fas fa-shield-alt text-blue-600 self-start flex-shrink-0" style="margin-top: 0.125rem;"></i>
              <p class="text-gray-700 leading-relaxed">
                <strong>The enterprise breakthrough:</strong> Success wasn't just about visual consistency across tech stacks—it was proving that unified design systems could eliminate context-switching fatigue for security analysts while accelerating enterprise client onboarding and retention.
              </p>
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
            Led a comprehensive design system transformation that unified Elysium's fragmented UI across multiple tech stacks. Partnered closely with engineering teams to architect scalable foundations while conducting enterprise user research to ground design decisions in real analyst workflows and security operations.
          </p>
        </div>

        <div class="consolidated-actions mb-12">
            
            <div class="action-section mb-8">
              <h4 class="action-title flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <i class="fas fa-users text-blue-600"></i>
                1. Research & Engineering Partnership
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Conducted interviews with enterprise security analysts (SOC teams) and identified four primary analyst personas and their tool usage patterns across Looker, OpenSearch, and Salesforce.</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Embedded with engineering teams in sprint planning to translate tech constraints into <strong>design guardrails</strong> and created a component delivery roadmap aligned with development velocity.</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Mapped workflows into layered information zones, prioritizing clarity over density with principles for contrast, spacing, and cross-tool transitions.</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <i class="fas fa-layer-group text-green-600"></i>
                2. Design System Architecture
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Built a multi-theme design system in Storybook with shared tokens, <strong>light and dark themes</strong> tuned for accessibility, and reusable components with visual parity across Angular, React, and .NET stacks.</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Developed comprehensive component documentation with coded examples, outlining behavior, states, props, and theming logic for engineering implementation.</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <i class="fas fa-cogs text-orange-600"></i>
                3. Prototyping & Validation
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Created high-fidelity <strong>coded prototypes in v0.dev</strong> for KQL search flows, alert triage cards, OpenSearch visualizations, and Looker dashboard integrations to drive engineering alignment.</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Conducted design walkthroughs with customer-facing teams and early-adopter clients, capturing feedback on theming, hierarchy, and workflow clarity.</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-orange-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Maintained a <strong>rolling QA checklist</strong> and enabled visual regression testing via Storybook documentation to ensure design-dev parity.</span>
                </li>
              </ul>
            </div>

            <div class="action-section mb-8">
              <h4 class="action-title flex items-center gap-3 text-lg font-semibold text-gray-900 mb-4">
                <i class="fas fa-compass text-cyan-600"></i>
                4. Platform Integration
              </h4>
              <ul class="action-points space-y-3">
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-cyan-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed">Standardized embedded components across third-party tools—wrapping OpenSearch charts with platform-native controls, embedding Salesforce data cards using a shared UI shell, and unifying Looker dashboard filters.</span>
                </li>
                <li class="action-point flex items-start gap-3">
                  <div class="w-1.5 h-1.5 bg-cyan-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span class="text-lg text-gray-700 leading-relaxed"><strong>Result:</strong> Eliminated context-switching fatigue—users experienced seamless navigation between different data sources within a unified, cohesive environment.</span>
                </li>
              </ul>
            </div>

        </div>
      </div>
    `,
    result: `
      <div class="results-content">
        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-rocket text-blue-600"></i>
              Business Impact
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>+45% increase in client subscription rates</strong>, post-launch—attributed to improved clarity, themeability, and seamless multi-stack workflows.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>82% feature adoption</strong> rate across new triage, search, and dashboard features within 60 days of rollout.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Reduced onboarding time</strong> by ~40% for new users, thanks to simplified dashboard logic and component consistency.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Design system fully adopted</strong> by engineering teams across all stacks, eliminating duplicated UI efforts and misaligned styling.</span>
            </li>
          </ul>
        </div>

        <div class="results-section mb-12">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-box text-purple-600"></i>
              Platform Outcomes
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Light and dark themes</strong> now deployed across petabyte-scale platforms in Snowflake, Databricks, and hybrid environments.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>OpenSearch and Looker dashboards</strong> visually integrated into the platform UI—eliminating context-switching pain.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Salesforce data surfaced contextually</strong> within analyst dashboards without user disruption.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Component velocity improved</strong>—engineers shipped new features 2x faster using Storybook components and coded prototypes.</span>
            </li>
          </ul>
        </div>

        <div class="results-section">
          <div class="section-header mb-8">
            <h3 class="results-title flex items-center gap-3 mb-4">
              <i class="fas fa-brain text-green-600"></i>
              What I Learned
            </h3>
          </div>
          
          <ul class="results-list space-y-4">
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>You can't retrofit coherence</strong> into a fast-growing product—design systems must be built alongside engineering, not after.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Design QA isn't an event—it's a rhythm.</strong> Being embedded in sprints, paired with codified Storybook docs, ensured we stayed ahead of edge cases and regressions.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Light + dark theme UX is not just visual—it's physiological.</strong> Analysts reported less fatigue and faster scan times when using dark mode over long sessions.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Prototyping with real logic</strong> (vs static mocks) made stakeholder reviews more productive, as we could discuss flows and system logic—not guess at intention.</span>
            </li>
            <li class="result-item flex items-start gap-3">
              <div class="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
              <span class="text-lg text-gray-700 leading-relaxed"><strong>Client feedback loops turn assumptions into proof.</strong> Early buy-in from real customers gave product confidence to ship boldly and engineer faster.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    visualDnaArtifacts: [
      {
        id: 'branding-colors',
        name: 'Branding & Component Variations',
        description: 'Logo design variations, multi-theme side navigation, button states, and steps wizard components',
        image: '/images/case-studies/elysium-ai/elysium-branding-colors.jpg',
        alt: 'Logo design variations, multi-theme side navigation, button states, and steps wizard components'
      },
      {
        id: 'colors-typography',
        name: 'Color System & Typography',
        description: 'Color theme selection system and typography guidelines for effective data communication',
        image: '/images/case-studies/elysium-ai/elysium-colors-typography.jpg',
        alt: 'Color theme selection system and typography guidelines for effective data communication'
      },
      {
        id: 'data-tables-visualization',
        name: 'Data Tables & Visualization',
        description: 'Dynamic real-time tables and data grids with robust content management for data-intensive applications',
        image: '/images/case-studies/elysium-ai/elysium-data-tables-visualization.jpg',
        alt: 'Dynamic real-time tables and data grids with robust content management for data-intensive applications'
      },
      {
        id: 'layouts-themes',
        name: 'Layouts & Theme System',
        description: 'Multiple themed design system demonstrating light and dark theme implementations',
        image: '/images/case-studies/elysium-ai/elysium-layouts-themes.jpg',
        alt: 'Multiple themed design system demonstrating light and dark theme implementations'
      }
    ],
    images: [
      '/images/case-studies/elysium-ai/create-account.jpg',
      '/images/case-studies/elysium-ai/security-section-overview-lite.jpg',
      '/images/case-studies/elysium-ai/security-section-overview-dark.jpg',
      '/images/case-studies/elysium-ai/security-section-dashboards-dark.jpg',
      '/images/case-studies/elysium-ai/security-section-dashboards-lite.jpg',
      '/images/case-studies/elysium-ai/observability-section-modal-lite.jpg',
      '/images/case-studies/elysium-ai/observability-section-overview-dark.jpg',
      '/images/case-studies/elysium-ai/observability-section-overview-lite.jpg',
      '/images/case-studies/elysium-ai/integrations-landing-page-lite.jpg',
      '/images/case-studies/elysium-ai/integrations-landing-page-dark.jpg',
      '/images/case-studies/elysium-ai/home-section-section-welcome-page-lite.jpg',
      '/images/case-studies/elysium-ai/home-section-section-welcome-page-dark.jpg',
    ],
    figmaLink: 'https://www.figma.com/proto/asZK1MnXCqSyi95NlMRNhA/Porfolio-Preso-JohnDeLaTorreUgarte-2025?page-id=3927%3A94028&node-id=3936-62086&viewport=223%2C438%2C0.02&t=RzP9oISu24YPXdry-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=3936%3A62086'
  }
];