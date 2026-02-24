import React, { useState } from "react";
import "./design-system.css";
import { Icon, IconName } from "./icons";

const AVATARS = [
  { initials: "AK", color: "#6366F1" },
  { initials: "BM", color: "#F59E0B" },
  { initials: "CL", color: "#10B981" },
  { initials: "DW", color: "#EF4444" },
];

const NAV_ITEMS: { id: string; icon: IconName; label: string }[] = [
  { id: "home", icon: "home", label: "Home" },
  { id: "inbox", icon: "inbox", label: "Inbox" },
  { id: "projects", icon: "folder", label: "Projects" },
  { id: "analytics", icon: "bar-chart", label: "Analytics" },
  { id: "team", icon: "users", label: "Team" },
  { id: "settings", icon: "settings", label: "Settings" },
];

const TABLE_ROWS = [
  { name: "Apollo Design System", status: "Active", owner: "AK", progress: 78, type: "Design" },
  { name: "Data Pipeline v2", status: "In Review", owner: "BM", progress: 45, type: "Engineering" },
  { name: "Mobile Onboarding", status: "Draft", owner: "CL", progress: 20, type: "Product" },
  { name: "API Gateway Migration", status: "Active", owner: "DW", progress: 92, type: "Engineering" },
];

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "ds-badge ds-badge-success",
    "In Review": "ds-badge ds-badge-warning",
    Draft: "ds-badge ds-badge-neutral",
    Blocked: "ds-badge ds-badge-error",
  };
  return <span className={map[status] ?? "ds-badge ds-badge-neutral"}>{status}</span>;
}

export function DesignSystem() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeNav, setActiveNav] = useState("projects");
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);

  return (
    <div className="ds-page">
      {modalOpen && (
        <div className="ds-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="ds-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ds-modal-header">
              <h2 className="ds-modal-title">Confirm Action</h2>
              <button className="ds-modal-close" onClick={() => setModalOpen(false)} aria-label="Close modal">
                <Icon name="x" size={16} />
              </button>
            </div>
            <div className="ds-modal-body">
              <p>
                This action will permanently delete the selected project and all associated data. This cannot be undone once confirmed.
              </p>
              <div className="ds-field">
                <label className="ds-label">Type the project name to confirm</label>
                <input className="ds-input" placeholder="e.g. Apollo Design System" />
              </div>
            </div>
            <div className="ds-modal-footer">
              <button className="ds-btn ds-btn-secondary" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="ds-btn ds-btn-danger">Delete Project</button>
            </div>
          </div>
        </div>
      )}

      <div className="ds-inner">

        {/* ── HERO ────────────────────────────────────────── */}
        <header className="ds-hero">
          <p className="ds-hero-eyebrow">Design System · v1.0</p>
          <h1 className="ds-hero-title">Component Library</h1>
          <p className="ds-hero-subtitle">
            A living reference of every UI component and pattern built on the Soft Modern &amp; Approachable Neumorphism design language.
          </p>
        </header>

        {/* ── ICONOGRAPHY ─────────────────────────────────── */}
        <section className="ds-section" aria-label="Iconography">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Iconography</h2>
            <span className="ds-section-tag">24 Most Common</span>
          </div>
          <div className="ds-demo-card">
            <div className="ds-demo-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 24 }}>
              {[
                "home", "inbox", "folder", "bar-chart", "users", "settings",
                "check", "alert-triangle", "close", "info", "edit-2", "copy",
                "share-2", "star", "trash", "plus", "at-sign", "smile",
                "image", "mic", "more-horizontal", "chevron-down", "chevron-left", "chevron-right"
              ].map((iconName) => (
                <div key={iconName} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                  <div style={{ color: "var(--ds-color-text-primary)" }}>
                    <Icon name={iconName as IconName} size={24} />
                  </div>
                  <span className="ds-type-caption" style={{ margin: 0, textAlign: "center" }}>{iconName}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TYPOGRAPHY ──────────────────────────────────── */}
        <section className="ds-section" aria-label="Typography">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Typography</h2>
            <span className="ds-section-tag">Geist Mono + Plus Jakarta Sans</span>
          </div>
          <div className="ds-demo-card">
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-display">The quick brown fox</div>
              <span className="ds-type-spec">Display · Geist Mono 700 · 56px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-h1">Heading One — Primary Title</div>
              <span className="ds-type-spec">H1 · Geist Mono 700 · 36px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-h2">Heading Two — Section Title</div>
              <span className="ds-type-spec">H2 · Geist Mono 600 · 28px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-h3">Heading Three — Subsection</div>
              <span className="ds-type-spec">H3 · Geist Mono 600 · 22px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-italic">An elegant italic headline in Geist Mono</div>
              <span className="ds-type-spec">Italic · Geist Mono 400i · 22px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-h4">Heading Four — Component Heading</div>
              <span className="ds-type-spec">H4 · Plus Jakarta Sans 700 · 18px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-body-lg">Body Large — Used for introductory paragraphs and important supporting copy that needs slightly more visual weight on the page.</div>
              <span className="ds-type-spec">Body LG · Plus Jakarta Sans 400 · 17px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-body">Body — The default copy style. Used across all standard paragraphs, descriptions, and supplementary text throughout the application.</div>
              <span className="ds-type-spec">Body · Plus Jakarta Sans 400 · 15px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-body-sm">Body Small — Contextual helper text, secondary descriptions, and metadata that supports primary content.</div>
              <span className="ds-type-spec">Body SM · Plus Jakarta Sans 400 · 13px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-label">Label — Form Labels &amp; Strong UI Text</div>
              <span className="ds-type-spec">Label · Plus Jakarta Sans 600 · 13px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-caption">Caption — supplemental context, timestamps, and footnotes</div>
              <span className="ds-type-spec">Caption · Plus Jakarta Sans 500 · 12px</span>
            </div>
            <div className="ds-type-row">
              <div className="ds-type-specimen ds-type-meta">Meta / Overline — Section Labels</div>
              <span className="ds-type-spec">Meta · Plus Jakarta Sans 600 · 11px uppercase</span>
            </div>
          </div>
        </section>

        {/* ── COLOR PALETTE ───────────────────────────────── */}
        <section className="ds-section" aria-label="Color palette">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Color Palette</h2>
            <span className="ds-section-tag">Design Tokens</span>
          </div>
          <div className="ds-swatch-grid">
            {[
              { name: "App Background", value: "#F5F3F1", style: { background: "#F5F3F1", border: "1px solid #E8E4E1" } },
              { name: "Surface Primary", value: "#FFFFFF", style: { background: "#FFFFFF", border: "1px solid #E8E4E1" } },
              { name: "Surface Inverted", value: "#2F2D2C", style: { background: "#2F2D2C" } },
              { name: "Surface Hover", value: "#F9F8F7", style: { background: "#F9F8F7", border: "1px solid #E8E4E1" } },
              { name: "Text Primary", value: "#1C1A19", style: { background: "#1C1A19" } },
              { name: "Text Secondary", value: "#716C6A", style: { background: "#716C6A" } },
              { name: "Text Disabled", value: "#A8A3A0", style: { background: "#A8A3A0" } },
              { name: "Border Subtle", value: "#E8E4E1", style: { background: "#E8E4E1" } },
              { name: "Success", value: "#10B981", style: { background: "#10B981" } },
              { name: "Error", value: "#EF4444", style: { background: "#EF4444" } },
              { name: "Warning", value: "#F59E0B", style: { background: "#F59E0B" } },
              { name: "Mention Accent", value: "#E8E4E1", style: { background: "#E8E4E1", border: "1px solid #D6D1CE" } },
            ].map((swatch) => (
              <div className="ds-swatch" key={swatch.value}>
                <div className="ds-swatch-color" style={swatch.style} />
                <div className="ds-swatch-info">
                  <p className="ds-swatch-name">{swatch.name}</p>
                  <p className="ds-swatch-value">{swatch.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ELEVATION & SHADOWS ─────────────────────────── */}
        <section className="ds-section" aria-label="Elevation and shadows">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Elevation &amp; Shadows</h2>
            <span className="ds-section-tag">Depth</span>
          </div>
          <div className="ds-demo-grid ds-demo-grid-3">
            <div className="ds-demo-card" style={{ boxShadow: "var(--ds-shadow-sm)" }}>
              <p className="ds-subsection-title" style={{ margin: 0 }}>Small</p>
              <p className="ds-type-body-sm" style={{ marginTop: 8, marginBottom: 0 }}>Used for cards and standard elevated elements.</p>
            </div>
            <div className="ds-demo-card" style={{ boxShadow: "var(--ds-shadow-md)" }}>
              <p className="ds-subsection-title" style={{ margin: 0 }}>Medium</p>
              <p className="ds-type-body-sm" style={{ marginTop: 8, marginBottom: 0 }}>Used for floating action buttons and active toolbars.</p>
            </div>
            <div className="ds-demo-card" style={{ boxShadow: "var(--ds-shadow-lg)" }}>
              <p className="ds-subsection-title" style={{ margin: 0 }}>Large</p>
              <p className="ds-type-body-sm" style={{ marginTop: 8, marginBottom: 0 }}>Used for modals, dropdown menus, and overlays.</p>
            </div>
          </div>
        </section>

        {/* ── BUTTONS ─────────────────────────────────────── */}
        <section className="ds-section" aria-label="Buttons">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Buttons</h2>
            <span className="ds-section-tag">Interactive</span>
          </div>

          <div className="ds-demo-card" style={{ marginBottom: 16 }}>
            <p className="ds-subsection-title">Variants</p>
            <div className="ds-demo-row">
              <button className="ds-btn ds-btn-primary">Primary</button>
              <button className="ds-btn ds-btn-secondary">Secondary</button>
              <button className="ds-btn ds-btn-ghost">Ghost</button>
              <button className="ds-btn ds-btn-success">Success</button>
              <button className="ds-btn ds-btn-danger">Destructive</button>
            </div>
          </div>

          <div className="ds-demo-card" style={{ marginBottom: 16 }}>
            <p className="ds-subsection-title">Sizes</p>
            <div className="ds-demo-row" style={{ alignItems: "center" }}>
              <button className="ds-btn ds-btn-primary ds-btn-sm">Small</button>
              <button className="ds-btn ds-btn-primary">Default</button>
              <button className="ds-btn ds-btn-primary ds-btn-lg">Large</button>
              <button className="ds-btn ds-btn-primary ds-btn-disabled">Disabled</button>
            </div>
          </div>

          <div className="ds-demo-card" style={{ marginBottom: 16 }}>
            <p className="ds-subsection-title">Dropdown &amp; Pill</p>
            <div className="ds-demo-row">
              <button className="ds-btn ds-btn-dropdown">Regular Font <span className="ds-chevron"><Icon name="chevron-down" size={12} /></span></button>
              <button className="ds-btn ds-btn-dropdown">Sort by: Recent <span className="ds-chevron"><Icon name="chevron-down" size={12} /></span></button>
              <button className="ds-btn ds-btn-dropdown">All Projects <span className="ds-chevron"><Icon name="chevron-down" size={12} /></span></button>
            </div>
          </div>

          <div className="ds-demo-card" style={{ marginBottom: 16 }}>
            <p className="ds-subsection-title">Icon Buttons — Light Surface</p>
            <div className="ds-demo-row">
              {["bold", "italic", "strikethrough", "underline", "code"].map((icon, i) => (
                <button key={i} className={`ds-btn ds-btn-icon ${i === 0 ? "ds-btn-icon-active" : ""}`} aria-label={icon}>
                  <Icon name={icon as IconName} />
                </button>
              ))}
              <div style={{ width: 1, height: 24, background: "var(--ds-color-border-subtle)", margin: "0 4px" }} />
              {["list", "bar-chart"].map((icon, i) => (
                <button key={i} className="ds-btn ds-btn-icon" aria-label={icon}>
                  <Icon name={icon as IconName} />
                </button>
              ))}
            </div>
          </div>

          <div className="ds-demo-card-dark">
            <p className="ds-subsection-title" style={{ color: "rgba(255,255,255,0.45)" }}>Icon Buttons — Dark Toolbar</p>
            <div className="ds-demo-row">
              {["plus", "at-sign", "smile", "image", "mic", "more-horizontal"].map((icon, i) => (
                <button key={i} className="ds-btn ds-btn-icon-circle" aria-label={icon}>
                  <Icon name={icon as IconName} />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM ELEMENTS ───────────────────────────────── */}
        <section className="ds-section" aria-label="Form elements">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Form Elements</h2>
            <span className="ds-section-tag">Inputs</span>
          </div>
          <div className="ds-demo-grid ds-demo-grid-2">

            <div className="ds-demo-card">
              <div className="ds-field" style={{ marginBottom: 16 }}>
                <label className="ds-label">Project Name</label>
                <div className="ds-input-group">
                  <span className="ds-input-icon"><Icon name="folder" size={16} /></span>
                  <input className="ds-input" placeholder="Untitled Project" />
                </div>
                <span className="ds-hint">This will be visible to all team members.</span>
              </div>
              <div className="ds-field" style={{ marginBottom: 16 }}>
                <label className="ds-label">Email Address</label>
                <input className="ds-input" type="email" placeholder="you@company.com" />
              </div>
              <div className="ds-field">
                <label className="ds-label">Error State</label>
                <input className="ds-input ds-input-error" defaultValue="invalid-email" />
                <span className="ds-hint" style={{ color: "var(--ds-color-error)" }}>Please enter a valid email address.</span>
              </div>
            </div>

            <div className="ds-demo-card">
              <div className="ds-field" style={{ marginBottom: 16 }}>
                <label className="ds-label">Description</label>
                <textarea className="ds-textarea" placeholder="Describe the goals and scope of this project…" />
              </div>
              <div className="ds-field">
                <label className="ds-label">Project Type</label>
                <select className="ds-select">
                  <option>Design System</option>
                  <option>Engineering</option>
                  <option>Product</option>
                  <option>Research</option>
                </select>
              </div>
            </div>

            <div className="ds-demo-card">
              <p className="ds-subsection-title">Checkboxes</p>
              <div className="ds-check-group">
                {["Notify team on updates", "Allow public access", "Enable version history", "Auto-archive after 90 days"].map((label, i) => (
                  <label key={i} className="ds-check-item">
                    <input type="checkbox" defaultChecked={i < 2} />
                    <span className="ds-check-label">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="ds-demo-card">
              <p className="ds-subsection-title">Radio Buttons</p>
              <div className="ds-check-group" style={{ marginBottom: 24 }}>
                {["Public", "Private", "Invite only"].map((label, i) => (
                  <label key={i} className="ds-check-item">
                    <input type="radio" name="visibility" defaultChecked={i === 1} />
                    <span className="ds-check-label">{label}</span>
                  </label>
                ))}
              </div>
              <p className="ds-subsection-title">Toggle Switches</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div className="ds-toggle" onClick={() => setToggle1((v) => !v)}>
                  <div className={`ds-toggle-track ${toggle1 ? "ds-toggle-on" : ""}`}>
                    <div className="ds-toggle-thumb" />
                  </div>
                  <span className="ds-toggle-label">Dark mode</span>
                </div>
                <div className="ds-toggle" onClick={() => setToggle2((v) => !v)}>
                  <div className={`ds-toggle-track ${toggle2 ? "ds-toggle-on" : ""}`}>
                    <div className="ds-toggle-thumb" />
                  </div>
                  <span className="ds-toggle-label">Marketing emails</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ds-demo-card" style={{ marginTop: 16 }}>
            <p className="ds-subsection-title">Inline Mentions &amp; Rich Text Preview</p>
            <p className="ds-type-body" style={{ margin: 0 }}>
              Here are the files you needed{" "}
              <span className="ds-mention">@masum</span>{" "}
              — I've attached them below. Let me know if you need anything else from{" "}
              <span className="ds-mention">@design-team</span>.
            </p>
          </div>
        </section>

        {/* ── NAVIGATION ──────────────────────────────────── */}
        <section className="ds-section" aria-label="Navigation patterns">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Navigation</h2>
            <span className="ds-section-tag">Sidebar + Tabs</span>
          </div>
          <div className="ds-demo-grid ds-demo-grid-2">

            <div className="ds-demo-card" style={{ display: "flex", gap: 24 }}>
              <nav className="ds-sidebar" aria-label="App navigation">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    className={`ds-nav-item ${activeNav === item.id ? "ds-nav-item-active" : ""}`}
                    onClick={() => setActiveNav(item.id)}
                    aria-current={activeNav === item.id ? "page" : undefined}
                  >
                    <span className="ds-nav-icon"><Icon name={item.icon} size={16} /></span>
                    {item.label}
                  </button>
                ))}
              </nav>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <p className="ds-type-label" style={{ marginBottom: 4 }}>Active page</p>
                <p className="ds-type-body-sm" style={{ margin: 0 }}>
                  <strong style={{ textTransform: "capitalize" }}>{activeNav}</strong> is selected in the sidebar.
                </p>
              </div>
            </div>

            <div className="ds-demo-card">
              <p className="ds-subsection-title">Pill Tabs</p>
              <div style={{ marginBottom: 24 }}>
                <div className="ds-tabs" role="tablist">
                  {["Overview", "Activity", "Files", "Settings"].map((tab, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={activeTab === i}
                      className={`ds-tab ${activeTab === i ? "ds-tab-active" : ""}`}
                      onClick={() => setActiveTab(i)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <p className="ds-subsection-title">Breadcrumbs</p>
              <nav className="ds-breadcrumbs" aria-label="Breadcrumbs">
                {["Workspace", "Projects", "Apollo DS", "Components"].map((crumb, i, arr) => (
                  <React.Fragment key={crumb}>
                    <span
                      className={`ds-breadcrumb-item ${i === arr.length - 1 ? "ds-breadcrumb-active" : ""}`}
                    >
                      {crumb}
                    </span>
                    {i < arr.length - 1 && <span className="ds-breadcrumb-sep">/</span>}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* ── TOOLBARS ────────────────────────────────────── */}
        <section className="ds-section" aria-label="Toolbars">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Toolbars</h2>
            <span className="ds-section-tag">Top + Bottom Action</span>
          </div>

          <div className="ds-demo-card" style={{ marginBottom: 16 }}>
            <p className="ds-subsection-title">Top Formatting Toolbar</p>
            <div className="ds-toolbar-top" role="toolbar" aria-label="Text formatting">
              <button className="ds-btn ds-btn-dropdown" style={{ fontSize: 13 }}>Regular Font <span className="ds-chevron"><Icon name="chevron-down" size={12} /></span></button>
              <div className="ds-toolbar-divider" />
              {["bold", "italic", "strikethrough", "underline", "code"].map((icon, i) => (
                <button key={i} className={`ds-btn ds-btn-icon ${i === 0 ? "ds-btn-icon-active" : ""}`} aria-label={icon}>
                  <Icon name={icon as IconName} />
                </button>
              ))}
              <div className="ds-toolbar-divider" />
              {["list", "bar-chart"].map((icon, i) => (
                <button key={i} className="ds-btn ds-btn-icon" aria-label={icon}>
                  <Icon name={icon as IconName} />
                </button>
              ))}
            </div>
          </div>

          <div className="ds-demo-card">
            <p className="ds-subsection-title">Bottom Action Toolbar (Dark)</p>
            <div style={{ display: "flex", justifyContent: "center", padding: "16px 0" }}>
              <div className="ds-toolbar-bottom" role="toolbar" aria-label="Message actions">
                {[
                  { icon: "plus", label: "Add" },
                  { icon: "at-sign", label: "Mention" },
                  { icon: "smile", label: "Emoji" },
                  { icon: "image", label: "Media" },
                  { icon: "mic", label: "Audio" },
                  { icon: "more-horizontal", label: "More" },
                ].map((btn) => (
                  <button key={btn.label} className="ds-btn ds-btn-icon-circle" aria-label={btn.label}>
                    <Icon name={btn.icon as IconName} size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CARDS ───────────────────────────────────────── */}
        <section className="ds-section" aria-label="Cards">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Cards</h2>
            <span className="ds-section-tag">Containers</span>
          </div>
          <div className="ds-demo-grid ds-demo-grid-3">

            <div className="ds-card">
              <div className="ds-card-header">
                <h3 className="ds-card-title">Project Update</h3>
                <p className="ds-card-subtitle">Last edited 2 hours ago</p>
              </div>
              <div className="ds-card-body">
                <p>The new component library is taking shape. Typography and color tokens are finalized — buttons next.</p>
              </div>
              <div className="ds-card-footer">
                <span className="ds-badge ds-badge-success">Active</span>
                <button className="ds-btn ds-btn-secondary ds-btn-sm">View</button>
              </div>
            </div>

            {AVATARS.slice(0, 3).map((av, i) => (
              <div className="ds-stat-card" key={i}>
                <p className="ds-stat-label">{["Total Projects", "Team Members", "Deliverables"][i]}</p>
                <p className="ds-stat-value">{["24", "8", "142"][i]}</p>
                <span className="ds-stat-delta" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Icon name="bar-chart" size={12} /> {["12% this week", "2 added", "18 this month"][i]}
                </span>
              </div>
            ))}

          </div>
        </section>

        {/* ── BADGES, TAGS & STATUS ───────────────────────── */}
        <section className="ds-section" aria-label="Badges, tags, and status indicators">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Badges, Tags &amp; Status</h2>
            <span className="ds-section-tag">Metadata</span>
          </div>
          <div className="ds-demo-card" style={{ marginBottom: 16 }}>
            <p className="ds-subsection-title">Badges</p>
            <div className="ds-demo-row">
              <span className="ds-badge ds-badge-success">Success</span>
              <span className="ds-badge ds-badge-error">Error</span>
              <span className="ds-badge ds-badge-warning">Warning</span>
              <span className="ds-badge ds-badge-neutral">Neutral</span>
              <span className="ds-badge ds-badge-dark">Dark</span>
            </div>
          </div>
          <div className="ds-demo-card" style={{ marginBottom: 16 }}>
            <p className="ds-subsection-title">Tags with remove</p>
            <div className="ds-demo-row">
              {["Design", "Engineering", "React", "Figma", "Q1 2026"].map((tag) => (
                <span key={tag} className="ds-tag">
                  {tag}
                  <button className="ds-tag-remove" aria-label={`Remove ${tag}`}>
                    <Icon name="x" size={10} />
                  </button>
                </span>
              ))}
            </div>
          </div>
          <div className="ds-demo-card">
            <p className="ds-subsection-title">Status Dots</p>
            <div className="ds-demo-row">
              {[
                { label: "Online", cls: "ds-status-dot-success" },
                { label: "Away", cls: "ds-status-dot-warning" },
                { label: "Busy", cls: "ds-status-dot-error" },
                { label: "Offline", cls: "ds-status-dot-neutral" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className={`ds-status-dot ${s.cls}`} />
                  <span className="ds-type-body-sm" style={{ margin: 0 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AVATARS ─────────────────────────────────────── */}
        <section className="ds-section" aria-label="Avatars">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Avatars</h2>
            <span className="ds-section-tag">Identity</span>
          </div>
          <div className="ds-demo-card">
            <div className="ds-demo-row" style={{ alignItems: "center", flexWrap: "wrap", gap: 32 }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <p className="ds-subsection-title" style={{ margin: 0 }}>Sizes</p>
                <div className="ds-demo-row" style={{ alignItems: "center" }}>
                  {AVATARS.slice(0, 3).map((av, i) => (
                    <div key={i} className={`ds-avatar ${["ds-avatar-sm", "", "ds-avatar-lg"][i]}`} style={{ background: av.color }}>
                      {av.initials}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <p className="ds-subsection-title" style={{ margin: 0 }}>With Status</p>
                <div className="ds-demo-row">
                  {[
                    { av: AVATARS[0], dot: "ds-status-dot-success" },
                    { av: AVATARS[1], dot: "ds-status-dot-warning" },
                    { av: AVATARS[3], dot: "ds-status-dot-neutral" },
                  ].map(({ av, dot }, i) => (
                    <div key={i} className="ds-avatar" style={{ background: av.color }}>
                      {av.initials}
                      <span className={`ds-avatar-status ${dot}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <p className="ds-subsection-title" style={{ margin: 0 }}>Stacked Group</p>
                <div className="ds-avatar-group">
                  {AVATARS.map((av, i) => (
                    <div key={i} className="ds-avatar" style={{ background: av.color, zIndex: AVATARS.length - i }}>
                      {av.initials}
                    </div>
                  ))}
                  <div className="ds-avatar" style={{ background: "var(--ds-color-bg-field)", color: "var(--ds-color-text-secondary)", border: "2.5px solid white" }}>
                    +5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ATTACHMENTS ─────────────────────────────────── */}
        <section className="ds-section" aria-label="Attachments">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Attachments</h2>
            <span className="ds-section-tag">Files & Media</span>
          </div>
          <div className="ds-demo-card">
            <div className="ds-attachments-row">
              {[
                { icon: "image", badge: "success" as const, label: "screenshot.png" },
                { icon: "file-text", badge: "loading" as const, label: "brief.pdf" },
                { icon: "bar-chart", badge: "loading" as const, label: "metrics.xlsx" },
                { icon: "pen-tool", badge: "success" as const, label: "brand.fig" },
              ].map((file, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
                  <div className="ds-attachment">
                    <div className="ds-attachment-thumb">
                      <Icon name={file.icon as IconName} size={28} color="var(--ds-color-text-secondary)" />
                    </div>
                    {file.badge === "success" ? (
                      <div className="ds-attachment-badge ds-attachment-badge-success">
                        <Icon name="check" size={12} />
                      </div>
                    ) : (
                      <div className="ds-attachment-badge ds-attachment-badge-loading">
                        <div className="ds-spinner" />
                      </div>
                    )}
                  </div>
                  <span className="ds-type-caption" style={{ margin: 0, maxWidth: 96, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{file.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALERTS ──────────────────────────────────────── */}
        <section className="ds-section" aria-label="Alerts and banners">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Alerts &amp; Banners</h2>
            <span className="ds-section-tag">Feedback</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { cls: "ds-alert-success", icon: "check", title: "Changes saved successfully", body: "Your project settings have been updated and are now live for all members." },
              { cls: "ds-alert-error", icon: "x", title: "Failed to upload file", body: "The file exceeds the 50 MB limit. Please compress it and try again." },
              { cls: "ds-alert-warning", icon: "alert-triangle", title: "Approaching storage limit", body: "You've used 90% of your available storage. Consider archiving older projects." },
              { cls: "ds-alert-info", icon: "info", title: "Maintenance scheduled", body: "The platform will be unavailable on Feb 28 from 2:00–4:00 AM UTC." },
            ].map((alert) => (
              <div key={alert.cls} className={`ds-alert ${alert.cls}`} role="alert">
                <span className="ds-alert-icon">
                  <Icon name={alert.icon as IconName} size={18} />
                </span>
                <div className="ds-alert-content">
                  <p className="ds-alert-title">{alert.title}</p>
                  <p className="ds-alert-body">{alert.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── DROPDOWN MENU ───────────────────────────────── */}
        <section className="ds-section" aria-label="Dropdown menus">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Dropdown Menu</h2>
            <span className="ds-section-tag">Contextual</span>
          </div>
          <div className="ds-demo-card">
            <div className="ds-demo-row" style={{ alignItems: "flex-start", gap: 32 }}>
              <div>
                <p className="ds-subsection-title">Standard Menu</p>
                <div className="ds-dropdown-menu" role="menu">
                  {[
                    { icon: "edit-2", label: "Edit Project" },
                    { icon: "copy", label: "Duplicate" },
                    { icon: "share-2", label: "Share" },
                    { icon: "star", label: "Add to Favourites" },
                  ].map((item) => (
                    <button key={item.label} className="ds-dropdown-item" role="menuitem">
                      <span className="ds-dropdown-item-icon">
                        <Icon name={item.icon as IconName} size={15} />
                      </span>
                      {item.label}
                    </button>
                  ))}
                  <div className="ds-dropdown-separator" role="separator" />
                  <button className="ds-dropdown-item ds-dropdown-item-danger" role="menuitem">
                    <span className="ds-dropdown-item-icon">
                      <Icon name="trash" size={15} />
                    </span>
                    Delete Project
                  </button>
                </div>
              </div>
              <div>
                <p className="ds-subsection-title">Tooltip</p>
                <div className="ds-tooltip-wrap">
                  <button className="ds-btn ds-btn-secondary">Hover over me</button>
                  <div className="ds-tooltip">Keyboard shortcut: Cmd+S</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROGRESS ────────────────────────────────────── */}
        <section className="ds-section" aria-label="Progress bars">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Progress &amp; Loading</h2>
            <span className="ds-section-tag">Feedback</span>
          </div>
          <div className="ds-demo-grid ds-demo-grid-2">
            <div className="ds-demo-card">
              <p className="ds-subsection-title">Progress Bars</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Apollo Design System", pct: 78, cls: "" },
                  { label: "Data Pipeline v2", pct: 45, cls: "ds-progress-fill-warning" },
                  { label: "Mobile Onboarding", pct: 20, cls: "ds-progress-fill-error" },
                  { label: "API Migration", pct: 92, cls: "ds-progress-fill-success" },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span className="ds-type-body-sm" style={{ margin: 0 }}>{item.label}</span>
                      <span className="ds-type-body-sm" style={{ margin: 0, fontWeight: 600 }}>{item.pct}%</span>
                    </div>
                    <div className="ds-progress-track" role="progressbar" aria-valuenow={item.pct} aria-valuemin={0} aria-valuemax={100}>
                      <div className={`ds-progress-fill ${item.cls}`} style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ds-demo-card">
              <p className="ds-subsection-title">Skeleton Loaders</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 20 }}>
                <div className="ds-skeleton ds-skeleton-line" style={{ width: "60%" }} />
                <div className="ds-skeleton ds-skeleton-line" style={{ width: "100%" }} />
                <div className="ds-skeleton ds-skeleton-line" style={{ width: "85%" }} />
                <div className="ds-skeleton ds-skeleton-line" style={{ width: "40%" }} />
              </div>
              <p className="ds-subsection-title">Spinner</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {[20, 28, 36].map((size) => (
                  <div key={size} style={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    border: `${Math.round(size / 10) + 1}px solid var(--ds-color-border-subtle)`,
                    borderTopColor: "var(--ds-color-text-secondary)",
                    animation: "ds-spin 0.75s linear infinite",
                  }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TABLE ───────────────────────────────────────── */}
        <section className="ds-section" aria-label="Data table">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Data Table</h2>
            <span className="ds-section-tag">Data Display</span>
          </div>
          <div className="ds-table-wrap">
            <table className="ds-table">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Status</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Type</th>
                  <th scope="col">Progress</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row) => {
                  const av = AVATARS.find((a) => a.initials === row.owner)!;
                  return (
                    <tr key={row.name}>
                      <td style={{ fontWeight: 500 }}>{row.name}</td>
                      <td><StatusBadge status={row.status} /></td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div className="ds-avatar ds-avatar-sm" style={{ background: av.color, border: "none" }}>{av.initials}</div>
                          <span style={{ fontSize: 13, color: "var(--ds-color-text-secondary)" }}>{av.initials}</span>
                        </div>
                      </td>
                      <td><span style={{ fontSize: 13, color: "var(--ds-color-text-secondary)" }}>{row.type}</span></td>
                      <td style={{ minWidth: 120 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div className="ds-progress-track" style={{ flex: 1 }}>
                            <div className="ds-progress-fill" style={{ width: `${row.progress}%` }} />
                          </div>
                          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ds-color-text-secondary)", minWidth: 30, textAlign: "right" }}>{row.progress}%</span>
                        </div>
                      </td>
                      <td><button className="ds-btn ds-btn-ghost ds-btn-sm">Open</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, flexWrap: "wrap", gap: 12 }}>
            <span className="ds-type-body-sm" style={{ margin: 0 }}>Showing 4 of 24 projects</span>
            <nav className="ds-pagination" aria-label="Table pagination">
              <button className="ds-page-btn" aria-label="Previous page">
                <Icon name="chevron-left" size={16} />
              </button>
              {[1, 2, 3, "...", 6].map((p, i) => (
                <button key={i} className={`ds-page-btn ${p === 1 ? "ds-page-btn-active" : ""}`}>
                  {p === "..." ? <Icon name="more-horizontal" size={16} /> : p}
                </button>
              ))}
              <button className="ds-page-btn" aria-label="Next page">
                <Icon name="chevron-right" size={16} />
              </button>
            </nav>
          </div>
        </section>

        {/* ── MODAL ───────────────────────────────────────── */}
        <section className="ds-section" aria-label="Modal dialog">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Modal / Dialog</h2>
            <span className="ds-section-tag">Overlay</span>
          </div>
          <div className="ds-demo-card" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
            <p className="ds-type-body" style={{ margin: 0, maxWidth: 480 }}>
              Modals use a white surface with a 24px border radius and a translucent dark overlay backdrop. Click the button to see a live example.
            </p>
            <button className="ds-btn ds-btn-primary" onClick={() => setModalOpen(true)}>Open Modal</button>
          </div>
        </section>

        {/* ── EMPTY STATE ─────────────────────────────────── */}
        <section className="ds-section" aria-label="Empty state">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Empty State</h2>
            <span className="ds-section-tag">Feedback</span>
          </div>
          <div className="ds-empty" role="status" aria-live="polite">
            <div className="ds-empty-icon">
              <Icon name="folder" size={48} />
            </div>
            <h3 className="ds-empty-title">No projects yet</h3>
            <p className="ds-empty-body">
              Get started by creating your first project. Everything you build will appear here.
            </p>
            <button className="ds-btn ds-btn-primary">
              <Icon name="plus" size={16} /> Create Project
            </button>
          </div>
        </section>

        {/* ── DIVIDERS ────────────────────────────────────── */}
        <section className="ds-section" aria-label="Dividers">
          <div className="ds-section-header">
            <h2 className="ds-section-title">Dividers</h2>
            <span className="ds-section-tag">Layout</span>
          </div>
          <div className="ds-demo-card">
            <p className="ds-type-body-sm" style={{ margin: "0 0 16px" }}>Horizontal rule</p>
            <div className="ds-divider" role="separator" />
            <p className="ds-type-body-sm" style={{ margin: "16px 0" }}>Labelled divider</p>
            <div className="ds-divider-label" role="separator">or continue with</div>
            <p style={{ marginTop: 16 }} />
          </div>
        </section>

      </div>
    </div>
  );
}
