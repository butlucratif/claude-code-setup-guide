'use client';

import { useState } from 'react';
import { Terminal, Rocket, Zap, Code2, Book, Shield, CheckCircle2, Copy, ChevronDown, ChevronUp, Star, TrendingUp, Target, Sparkles, ExternalLink, MessageSquare } from 'lucide-react';

const skills = {
  "🎨 Design & Frontend": [
    { name: "frontend-design", desc: "Create distinctive, production-grade frontend interfaces" },
    { name: "frontend-slides", desc: "Create stunning HTML presentations" },
    { name: "canvas-design", desc: "Create beautiful visual art in PNG/PDF" },
    { name: "algorithmic-art", desc: "Creating algorithmic art using p5.js" },
    { name: "claude-d3js-skill", desc: "Interactive data visualizations using d3.js" },
    { name: "theme-factory", desc: "Styling artifacts with themes" },
    { name: "web-asset-generator", desc: "Generate favicons, app icons, social media images" },
    { name: "slack-gif-creator", desc: "Create animated GIFs optimized for Slack" },
  ],
  "🧪 Testing & Quality": [
    { name: "playwright-skill", desc: "Complete browser automation with Playwright" },
    { name: "test-driven-development", desc: "Implementing features with TDD" },
    { name: "systematic-debugging", desc: "Bug investigation with scientific method" },
    { name: "webapp-testing", desc: "Testing local web applications" },
    { name: "verification-before-completion", desc: "Verify work before claiming complete" },
    { name: "property-based-testing", desc: "Property-based testing strategies" },
    { name: "mutation-testing", desc: "Mutation testing for test suite quality" },
  ],
  "📝 Documentation & Writing": [
    { name: "doc-coauthoring", desc: "Co-authoring documentation workflows" },
    { name: "writing-plans", desc: "Writing implementation plans" },
    { name: "internal-comms", desc: "Internal communications writing" },
    { name: "pdf", desc: "PDF file operations" },
    { name: "pptx", desc: "PowerPoint presentation creation" },
    { name: "xlsx", desc: "Excel spreadsheet operations" },
    { name: "docx", desc: "Word document operations" },
  ],
  "🔧 Development Tools": [
    { name: "claude-api", desc: "Build, debug, optimize Claude API apps" },
    { name: "mcp-builder", desc: "Creating high-quality MCP servers" },
    { name: "mcp-cli", desc: "Use MCP servers on-demand" },
    { name: "skill-creator", desc: "Create and improve skills" },
    { name: "writing-skills", desc: "Creating new skills" },
    { name: "executing-plans", desc: "Execute implementation plans" },
    { name: "using-git-worktrees", desc: "Git worktree isolation" },
    { name: "gh-cli", desc: "GitHub CLI operations" },
    { name: "git-cleanup", desc: "Git repository cleanup" },
  ],
  "🔒 Security & Auditing": [
    { name: "ffuf-skill", desc: "Web fuzzing during penetration testing" },
    { name: "burpsuite-project-parser", desc: "Parse Burp Suite project files" },
    { name: "building-secure-contracts", desc: "Secure smart contract development" },
    { name: "supply-chain-risk-auditor", desc: "Supply chain security audits" },
    { name: "insecure-defaults", desc: "Find insecure default configurations" },
    { name: "semgrep-rule-creator", desc: "Create Semgrep security rules" },
    { name: "static-analysis", desc: "Static code analysis" },
    { name: "variant-analysis", desc: "Security variant analysis" },
    { name: "yara-authoring", desc: "YARA rule authoring" },
    { name: "sharp-edges", desc: "Security sharp edges detection" },
  ],
  "🤖 AI & Agents": [
    { name: "using-superpowers", desc: "Find and use skills effectively" },
    { name: "dispatching-parallel-agents", desc: "Run independent tasks in parallel" },
    { name: "subagent-driven-development", desc: "Development with specialized subagents" },
    { name: "agentic-actions-auditor", desc: "Audit agentic action safety" },
  ],
  "📊 Code Analysis": [
    { name: "c-review", desc: "C/C++ code review" },
    { name: "finding-duplicate-functions", desc: "Find semantic code duplication" },
    { name: "requesting-code-review", desc: "Request code reviews" },
    { name: "receiving-code-review", desc: "Process code review feedback" },
    { name: "differential-review", desc: "Differential code review" },
    { name: "audit-context-building", desc: "Build audit context" },
    { name: "spec-to-code-compliance", desc: "Verify spec compliance" },
    { name: "dimensional-analysis", desc: "Dimensional analysis for code" },
  ],
  "🛠️ Specialized Tools": [
    { name: "obsidian-second-brain", desc: "Obsidian knowledge management" },
    { name: "slack-messaging", desc: "Send/read Slack messages" },
    { name: "windows-vm", desc: "Windows 11 VM management" },
    { name: "using-tmux-for-interactive-commands", desc: "Run interactive CLI tools" },
    { name: "ios-simulator-skill", desc: "iOS simulator operations" },
    { name: "expo", desc: "Expo/React Native development" },
    { name: "firebase-apk-scanner", desc: "Scan APKs for Firebase configs" },
    { name: "devcontainer-setup", desc: "Dev container setup" },
    { name: "modern-python", desc: "Modern Python best practices" },
  ],
  "🧬 Low-Level & Systems": [
    { name: "constant-time-analysis", desc: "Constant-time code analysis" },
    { name: "dwarf-expert", desc: "DWARF debugging information" },
    { name: "entry-point-analyzer", desc: "Binary entry point analysis" },
    { name: "fp-check", desc: "Floating-point correctness" },
    { name: "seatbelt-sandboxer", desc: "macOS Seatbelt sandbox analysis" },
    { name: "zeroize-audit", desc: "Zeroize implementation audits" },
    { name: "trailmark", desc: "Code trailmarking" },
  ],
  "📚 Scientific & Research": [
    { name: "scientific-skills", desc: "139 scientific research skills" },
    { name: "testing-handbook-skills", desc: "Testing handbook reference" },
  ],
  "🎯 Workflows": [
    { name: "brainstorming", desc: "Explore requirements before implementation" },
    { name: "finishing-a-development-branch", desc: "Complete dev work (merge/PR/cleanup)" },
    { name: "workflow-skill-design", desc: "Design skill workflows" },
    { name: "let-fate-decide", desc: "Random decision making" },
    { name: "culture-index", desc: "Team culture insights" },
    { name: "second-opinion", desc: "Get second opinions on decisions" },
    { name: "ask-questions-if-underspecified", desc: "Ask clarifying questions" },
    { name: "skill-improver", desc: "Improve existing skills" },
  ],
  "🎮 Game Dev & Special": [
    { name: "claudeskill-loki-mode", desc: "83 Loki mode skills" },
    { name: "get-shit-done", desc: "GSD workflow system" },
    { name: "web-artifacts-builder", desc: "Build web artifacts" },
    { name: "debug-buttercup", desc: "Debug Buttercup tests" },
    { name: "claude-in-chrome-troubleshooting", desc: "Troubleshoot Chrome integration" },
    { name: "brand-guidelines", desc: "Brand guideline management" },
  ]
};

const CodeBlock = ({ code, onCopy }: { code: string; onCopy: (text: string) => void }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    onCopy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="code-block text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="copy-button absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <CheckCircle2 className="w-4 h-4 inline mr-2" /> : <Copy className="w-4 h-4 inline mr-2" />}
        {copied ? 'Copié!' : 'Copier'}
      </button>
    </div>
  );
};

export default function Home() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleCopy = (text: string) => {
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Improved */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-lighter)] to-white opacity-50"></div>
        <div className="mx-auto max-w-6xl relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[var(--primary)] rounded-full text-[var(--primary)] font-bold text-sm mb-8 shadow-lg">
              <Terminal className="w-4 h-4" />
              Le Stack Complet des Pros
            </div>
            <h1 className="text-hero mb-6 leading-tight">
              Transforme ton <span className="text-[var(--primary)] relative">Claude Code<span className="absolute bottom-0 left-0 w-full h-3 bg-[var(--primary)] opacity-10 -z-10"></span></span> en Machine de Guerre IA
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-4xl mx-auto mb-8 leading-relaxed">
              <strong className="text-[var(--text)]">87+ skills experts</strong>, <strong className="text-[var(--text)]">277 agents spécialisés</strong>, et <strong className="text-[var(--text)]">115 commandes</strong> pour créer et vendre de l'IA aux entreprises. La même config que les pros qui facturent €15k-€45k par projet.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <a
                href="#installation"
                className="px-10 py-5 bg-[var(--primary)] text-white rounded-2xl font-bold hover:bg-[var(--primary-hover)] transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Rocket className="w-6 h-6" />
                Setup gratuit (30 min)
              </a>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                <span>Installation guidée</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                <span>100% open-source</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)]" />
                <span>0€ de coût</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters - New Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--surface)]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Pourquoi cette config change tout</h2>
            <p className="text-body-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              Claude Code seul, c'est bien. Avec ce stack, c'est une arme de production massive.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Terminal = 10x plus puissant",
                desc: "Accès direct à git, npm, docker, databases. La web app ne peut pas faire ça. Les pros utilisent le terminal.",
                stat: "10x"
              },
              {
                icon: Shield,
                title: "277 agents spécialisés",
                desc: "Marketing, Sales, Design, Engineering, Security. Une agence IA complète dans ton terminal.",
                stat: "277"
              },
              {
                icon: Code2,
                title: "87 skills production-ready",
                desc: "Frontend design, testing, documentation, security audits. Tout ce qu'il faut pour livrer des projets clients.",
                stat: "87"
              }
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl bg-white border-2 border-[var(--border)] hover:border-[var(--primary)] hover:shadow-2xl transition-all group">
                <div className="absolute top-4 right-4 text-6xl font-black text-[var(--primary)] opacity-5 group-hover:opacity-10 transition-opacity">
                  {item.stat}
                </div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide - Improved */}
      <section id="installation" className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Installation (30 minutes max)</h2>
            <p className="text-body-lg text-[var(--text-muted)]">
              Suis ces 6 étapes pour avoir exactement le même setup que les pros
            </p>
          </div>

          {/* Warp Terminal Recommendation */}
          <div className="mb-8 bg-gradient-to-br from-[var(--accent-light)] to-[var(--primary-lighter)] p-6 rounded-2xl border-2 border-[var(--accent)]">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center flex-shrink-0">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-[var(--text)]">
                  Recommandation: Utilise Warp Terminal
                </h3>
                <p className="text-[var(--text-muted)] mb-3">
                  N'utilise PAS le terminal Mac/Windows par défaut. Warp est un terminal moderne avec AI, auto-complétion intelligente, et interface premium.
                </p>
                <a
                  href="https://www.warp.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--primary)] font-semibold transition-colors"
                >
                  Télécharge Warp gratuitement
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Claude Code CLI</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    Le CLI officiel Anthropic. Si tu ne l'as pas encore:
                  </p>
                  <CodeBlock
                    code={`# macOS / Linux
curl -fsSL https://anthropic.com/claude-code/install.sh | sh

# Vérifie que ça marche
claude --version`}
                    onCopy={handleCopy}
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Everything Claude Code (ECC)</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    <strong>277 agents + 200+ skills + 115 commands.</strong> Le système d'optimisation complet des pros.
                  </p>
                  <CodeBlock
                    code={`git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code
./scripts/install.sh full

# Nettoie (optionnel)
cd .. && rm -rf everything-claude-code`}
                    onCopy={handleCopy}
                  />
                  <div className="mt-4 p-4 bg-[var(--accent-light)] border-2 border-[var(--accent)] rounded-xl">
                    <p className="text-sm font-semibold text-[var(--text)]">
                      ✅ Résultat: 1.3GB installés dans ~/.claude/ — zero impact performance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Agency Agents */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    Agency Agents
                    <span className="px-3 py-1 bg-[var(--warning-light)] text-[var(--warning)] text-xs font-bold rounded-full">96.6K ⭐</span>
                  </h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    <strong>Une agence IA complète:</strong> Marketing (32 agents), Engineering (30+), Design (8), Sales (9), Security...
                  </p>
                  <CodeBlock
                    code={`# Envoie ce lien dans Claude Code
https://github.com/msitarzewski/agency-agents

# Ou dans le chat:
"Install agency-agents from https://github.com/msitarzewski/agency-agents"`}
                    onCopy={handleCopy}
                  />
                </div>
              </div>
            </div>

            {/* Step 4 - Awesome Claude Skills */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Awesome Claude Skills</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    <strong>Directory complet de skills:</strong> Tous les skills officiels + community skills battle-tested.
                  </p>
                  <CodeBlock
                    code={`# Envoie ce lien dans Claude Code
https://github.com/travisvn/awesome-claude-skills

# Ou dans le chat:
"Install skills from https://github.com/travisvn/awesome-claude-skills"`}
                    onCopy={handleCopy}
                  />
                </div>
              </div>
            </div>

            {/* Step 5 - Impeccable */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Impeccable Design System</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    <strong>Design premium pour tes projets clients.</strong> OKLCH colors, pas de false urgency, pro hierarchy.
                  </p>
                  <CodeBlock
                    code={`npx skills add pbakaus/impeccable`}
                    onCopy={handleCopy}
                  />
                </div>
              </div>
            </div>

            {/* Step 6 - Verify */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[var(--border)] hover:border-[var(--primary)] transition-all">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--accent)] to-[var(--accent)] text-white rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Vérification</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    Teste que tout est OK:
                  </p>
                  <CodeBlock
                    code={`# Liste tes skills
ls ~/.claude/skills/

# Vérifie ECC
ls ~/.claude/ecc/

# Lance Claude Code
claude`}
                    onCopy={handleCopy}
                  />
                </div>
              </div>
            </div>
          </div>

          {copiedCommand && (
            <div className="mt-8 p-6 bg-[var(--accent-light)] border-2 border-[var(--accent)] rounded-2xl text-center animate-pulse">
              <CheckCircle2 className="w-6 h-6 inline text-[var(--accent)] mr-3" />
              <span className="text-[var(--text)] font-semibold">Commande copiée! Colle-la dans ton terminal 🚀</span>
            </div>
          )}
        </div>
      </section>

      {/* Skills List - Improved */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Les 87 Skills que tu auras</h2>
            <p className="text-body-lg text-[var(--text-muted)]">
              Organisés par catégorie. S'activent automatiquement selon le contexte.
            </p>
          </div>

          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white border-2 border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--primary)] transition-all">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-[var(--surface)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{category.split(' ')[0]}</span>
                    <div>
                      <h3 className="text-xl font-bold text-left">{category.split(' ').slice(1).join(' ')}</h3>
                      <p className="text-sm text-[var(--text-muted)] text-left font-semibold">{skillList.length} skills</p>
                    </div>
                  </div>
                  {expandedCategories[category] ? (
                    <ChevronUp className="w-6 h-6 text-[var(--primary)]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[var(--text-muted)]" />
                  )}
                </button>

                {expandedCategories[category] && (
                  <div className="px-8 pb-8 pt-4 border-t-2 border-[var(--border)] bg-[var(--surface)]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skillList.map((skill) => (
                        <div key={skill.name} className="skill-card">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-mono text-sm font-bold text-[var(--primary)] mb-1 truncate">
                                {skill.name}
                              </h4>
                              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                                {skill.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-[var(--accent-light)] to-white border-2 border-[var(--accent)] rounded-2xl">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-[var(--accent)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-xl mb-2">Auto-activation intelligente</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Les skills s'activent automatiquement selon ton contexte. Tu codes du React? Les skills frontend se déclenchent.
                  Tu fais de la sécurité? Les skills audit s'activent. <strong>Zero configuration manuelle.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zero to App CTA - PREMIUM DESIGN */}
      <section className="relative overflow-hidden bg-[oklch(0.15_0.01_250)]" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, oklch(0.25 0.08 250 / 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, oklch(0.25 0.08 145 / 0.2) 0%, transparent 50%),
          repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(0.18 0.01 250) 2px, oklch(0.18 0.01 250) 4px)
        `
      }}>
        {/* Geometric accent patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 border-2 border-white transform rotate-45"></div>
        </div>

        <div className="mx-auto max-w-6xl relative z-10 py-32 px-6 lg:px-12">
          {/* Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent)]/20 to-[var(--warning)]/20 backdrop-blur-xl rounded-full border border-[var(--accent)]/30 mb-16">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></span>
              <span className="text-white font-semibold text-sm tracking-wide">Programme Zero-to-App</span>
            </div>
          </div>

          {/* Headline - Premium Typography */}
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
              Crée & Vends des
              <br />
              <span className="bg-gradient-to-r from-[var(--accent)] via-white to-[var(--warning)] bg-clip-text text-transparent">
                Apps IA
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              De zéro à <strong className="text-white font-bold">€2k—€45k par client</strong>
            </p>
          </div>

          {/* Benefits - Premium Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                number: "01",
                title: "Applications IA sur mesure",
                desc: "Chatbots intelligents, automatisation workflow, agents IA, RAG systems. Du concret qui génère de la valeur.",
                color: "var(--accent)"
              },
              {
                number: "02",
                title: "Stack production-grade",
                desc: "Claude Code + 87 skills + 277 agents. Livre des projets clients en semaines, pas en mois.",
                color: "var(--primary)"
              },
              {
                number: "03",
                title: "Minimum €2k/client",
                desc: "Position premium dès le départ. Méthode complète: prospection, pitch, dev, livraison, facturation.",
                color: "var(--warning)"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:-translate-y-2"
                style={{
                  boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="absolute top-6 right-6 text-7xl font-black opacity-5 group-hover:opacity-10 transition-opacity">
                  {item.number}
                </div>
                <div className="relative">
                  <div
                    className="w-1 h-16 mb-6 rounded-full"
                    style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }}
                  ></div>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA - Premium Button */}
          <div className="text-center">
            <a
              href="https://calendly.com/yohanlopes/lance-ton-business-d-application-ia"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--warning)] rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

              {/* Button */}
              <div className="relative px-12 py-7 bg-gradient-to-r from-[var(--accent)] to-[var(--warning)] rounded-2xl font-black text-2xl text-[oklch(0.15_0.01_250)] flex items-center gap-4 transform group-hover:scale-105 transition-transform duration-300"
                style={{
                  boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)'
                }}
              >
                <MessageSquare className="w-8 h-8" />
                <span>Réserve ton appel (30 min)</span>
                <Sparkles className="w-7 h-7 animate-pulse" />
              </div>
            </a>

            {/* Sub-text */}
            <div className="mt-10 max-w-2xl mx-auto">
              <p className="text-white/80 text-lg mb-3 leading-relaxed">
                On analyse ton profil et je te montre <strong className="text-white">comment facturer €2k—€45k</strong> en créant des applications IA pour les entreprises.
              </p>
              <p className="text-white/50 text-sm">
                Pas de vente forcée. Si t'es développeur et que tu veux monétiser l'IA, cet appel est pour toi.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Footer - Improved */}
      <footer className="py-12 px-6 lg:px-8 border-t-2 border-[var(--border)] bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[var(--text-muted)] mb-2">
              Setup guide créé avec <strong className="text-[var(--text)]">Claude Code + Impeccable Design System</strong>
            </p>
            <p className="text-xs text-[var(--text-subtle)] flex items-center justify-center gap-4 flex-wrap">
              <span>OKLCH colors</span>
              <span>•</span>
              <span>Pas de false urgency</span>
              <span>•</span>
              <span>Professional hierarchy</span>
            </p>
            <div className="mt-6 flex items-center justify-center gap-6">
              <a
                href="https://github.com/butlucratif/claude-code-setup-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm font-semibold">Source sur GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
