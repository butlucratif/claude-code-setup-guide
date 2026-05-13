'use client';

import { useState } from 'react';
import { Terminal, Rocket, Zap, Code2, Book, Shield, CheckCircle2, Copy, ChevronDown, ChevronUp, ExternalLink, Briefcase } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary-lighter)] rounded-full text-[var(--primary)] font-semibold text-sm mb-8">
              <Terminal className="w-4 h-4" />
              Setup Guide Complet
            </div>
            <h1 className="text-hero mb-6">
              Setup <span className="text-[var(--primary)]">Claude Code</span> comme un Pro
            </h1>
            <p className="text-body-lg text-[var(--text-muted)] max-w-3xl mx-auto mb-12">
              Guide complet pour installer Claude Code, tous mes skills (87+), Everything Claude Code (277 agents),
              et le skill Impeccable. De zéro à expert en 30 minutes.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#installation"
                className="px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-semibold hover:bg-[var(--primary-hover)] transition-all flex items-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Commencer le setup
              </a>
              <a
                href="#business"
                className="px-8 py-4 bg-white border-2 border-[var(--border)] text-[var(--text)] rounded-xl font-semibold hover:border-[var(--primary)] transition-all flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Opportunités business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Claude Code */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Pourquoi Claude Code ?</h2>
            <p className="text-body-lg text-[var(--text-muted)]">
              L'assistant IA le plus puissant pour les développeurs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Terminal intégré",
                desc: "Accès direct aux commandes système, git, npm, docker. Plus puissant que la web app."
              },
              {
                icon: Code2,
                title: "87+ Skills disponibles",
                desc: "Frontend, testing, security, AI, documentation. Tout ce dont tu as besoin."
              },
              {
                icon: Shield,
                title: "Everything Claude Code",
                desc: "277 agents, 200+ skills, 115 commands. Le système complet d'optimisation."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[var(--primary-lighter)] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h3 className="text-h3 mb-3 text-xl">{item.title}</h3>
                <p className="text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="installation" className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Installation Step-by-Step</h2>
            <p className="text-body-lg text-[var(--text-muted)]">
              Suis ces étapes pour avoir exactement la même config que moi
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--border)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-h3 text-xl mb-3">Installer Claude Code CLI</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    Si tu ne l'as pas encore, installe le CLI officiel:
                  </p>
                  <CodeBlock
                    code={`# macOS / Linux
curl -fsSL https://anthropic.com/claude-code/install.sh | sh

# Vérifie l'installation
claude --version`}
                    onCopy={handleCopy}
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--border)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-h3 text-xl mb-3">Installer Everything Claude Code (ECC)</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    Le système d'optimisation complet avec 277 agents, 200+ skills, 115 commands:
                  </p>
                  <CodeBlock
                    code={`# Clone le repo
git clone https://github.com/affaan-m/everything-claude-code.git
cd everything-claude-code

# Install le profil "full" (tout inclus)
./scripts/install.sh full

# Nettoie le repo cloné (optionnel)
cd ..
rm -rf everything-claude-code`}
                    onCopy={handleCopy}
                  />
                  <div className="mt-4 p-4 bg-[var(--accent-light)] border border-[var(--accent)] rounded-xl">
                    <p className="text-sm text-[var(--text)]">
                      <strong>✅ Résultat:</strong> 1.3GB de skills, agents, rules installés dans ~/.claude/
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--border)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-h3 text-xl mb-3">Installer le skill Impeccable</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    Design system premium pour créer des interfaces Impeccables:
                  </p>
                  <CodeBlock
                    code={`npx skills add pbakaus/impeccable`}
                    onCopy={handleCopy}
                  />
                  <p className="text-[var(--text-muted)] mt-4 text-sm">
                    Ce skill applique les principes Impeccable: OKLCH colors, pas de false urgency, proper hierarchy
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--border)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-h3 text-xl mb-3">Vérifier l'installation</h3>
                  <p className="text-[var(--text-muted)] mb-4">
                    Teste que tout fonctionne:
                  </p>
                  <CodeBlock
                    code={`# Liste les skills installés
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
            <div className="mt-8 p-4 bg-[var(--accent-light)] border border-[var(--accent)] rounded-xl text-center">
              <CheckCircle2 className="w-5 h-5 inline text-[var(--accent)] mr-2" />
              <span className="text-[var(--text)]">Commande copiée! Colle-la dans ton terminal</span>
            </div>
          )}
        </div>
      </section>

      {/* Skills List */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Mes 87 Skills Installés</h2>
            <p className="text-body-lg text-[var(--text-muted)]">
              Tous les skills que j'utilise, organisés par catégorie
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-[var(--surface)] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{category.split(' ')[0]}</span>
                    <div>
                      <h3 className="text-xl font-bold text-left">{category.split(' ').slice(1).join(' ')}</h3>
                      <p className="text-sm text-[var(--text-muted)] text-left">{skillList.length} skills</p>
                    </div>
                  </div>
                  {expandedCategories[category] ? (
                    <ChevronUp className="w-6 h-6 text-[var(--text-muted)]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[var(--text-muted)]" />
                  )}
                </button>

                {expandedCategories[category] && (
                  <div className="px-8 pb-8 pt-4 border-t border-[var(--border)] bg-[var(--surface)]">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skillList.map((skill) => (
                        <div key={skill.name} className="skill-card">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-mono text-sm font-semibold text-[var(--primary)] mb-1 truncate">
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

          <div className="mt-12 p-8 bg-[var(--accent-light)] border border-[var(--accent)] rounded-2xl">
            <div className="flex items-start gap-4">
              <Book className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Skills s'activent automatiquement</h3>
                <p className="text-[var(--text-muted)]">
                  Les skills se déclenchent automatiquement selon le contexte. Tu n'as rien à faire!
                  Claude détecte ce dont tu as besoin et active le bon skill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tally Form Section */}
      <section id="proposition" className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Besoin d'une Proposition Commerciale ?</h2>
            <p className="text-body-lg text-[var(--text-muted)]">
              Remplis ce formulaire pour recevoir une proposition personnalisée
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[var(--border)] shadow-lg">
            <iframe
              src="https://tally.so/embed/3jdzEd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulaire Proposition Commerciale"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Business CTA */}
      <section id="business" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)]">
        <div className="mx-auto max-w-5xl text-center text-white">
          <Briefcase className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-h2 mb-6">Opportunités Business avec Claude Code</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Claude Code + ces skills = opportunité énorme. Tu peux implémenter des systèmes IA dans des entreprises,
            automatiser leurs workflows, créer des agents custom. Le marché est chaud, la demande explose.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
            {[
              {
                title: "Consulting IA",
                desc: "Conseille les entreprises sur l'intégration d'agents IA dans leurs process"
              },
              {
                title: "Développement custom",
                desc: "Crée des automatisations sur mesure avec Claude Code et les skills"
              },
              {
                title: "Formation",
                desc: "Forme les équipes techniques à utiliser Claude Code efficacement"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#proposition"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary)] rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <ExternalLink className="w-5 h-5" />
            Discutons de ton projet
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-[var(--border)]">
        <div className="mx-auto max-w-7xl text-center text-[var(--text-muted)]">
          <p className="text-sm">
            Setup guide créé avec Claude Code + Impeccable Design System
          </p>
          <p className="text-xs mt-2 opacity-75">
            OKLCH colors • Pas de false urgency • Professional hierarchy
          </p>
        </div>
      </footer>
    </div>
  );
}
