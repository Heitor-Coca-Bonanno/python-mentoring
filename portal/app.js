/**
 * Python Mentoring — student portal
 * Routes (hash): #/  #/course  #/resources  #/resources/:slug  #/day/:n/:tab
 * tab = lesson | examples | practice | solutions
 */

const RESOURCES = [
  { slug: "python", title: "Python cheatsheet", file: "../resources/python_cheatsheet.md" },
  { slug: "git", title: "Git cheatsheet", file: "../resources/git_cheatsheet.md" },
  { slug: "ai", title: "AI prompting", file: "../resources/ai_prompting_guide.md" },
  { slug: "debug", title: "Debugging checklist", file: "../resources/debugging_checklist.md" },
];

const DAYS = [
  {
    num: 1,
    title: "How Computers Think",
    arc: "Arc 1 — Think",
    desc: "Algorithms, pseudocode, and logic before code.",
    lessonPath: "../day-01-how-computers-think/README.md",
    examplesMd: `### Quick examples\n\n**IPO:** input → process → output (like a vending machine).\n\n**Decision:** IF it is raining → take an umbrella.\n\n**Loop:** WHILE the kettle is not boiling → wait.\n`,
    exercisePath: "../day-01-how-computers-think/exercises/flowchart_template.md",
    solutionPath: "../day-01-how-computers-think/solutions/morning_routine_example.md",
    sandboxCode: `# Try tracing this logic in your head, then Run.\nscores = [72, 85, 91, 68, 95]\nbest = scores[0]\nfor s in scores:\n    if s > best:\n        best = s\nprint("Highest:", best)`,
    skulpt: null,
  },
  {
    num: 2,
    title: "Your First Python",
    arc: "Arc 1 — Think",
    desc: "Variables, types, print, input.",
    lessonPath: "../day-02-first-python/README.md",
    examplesMd: `### Mini examples\n\n\`\`\`python\nname = "Alex"\nage = 16\nprint(f"Hi, I'm {name}, {age} years old.")\n\`\`\`\n\nRemember: \`input()\` always returns a **string**. Use \`int()\` if you need a number.\n`,
    exercisePath: "../day-02-first-python/exercises/starter_intro.py",
    solutionPath: "../day-02-first-python/solutions/mad_libs_solution.py",
    sandboxCode: `name = "Alex"\nage = 16\nprint(f"Hi! I'm {name}, {age} years old.")\nprint(name.upper())`,
    skulpt: null,
  },
  {
    num: 3,
    title: "Decisions & Loops",
    arc: "Arc 1 — Think",
    desc: "if/elif/else, for, while.",
    lessonPath: "../day-03-decisions-and-loops/README.md",
    examplesMd: `### Patterns\n\n**Traffic light:** if / elif / else.\n\n**Countdown:** \`while n > 0\` then \`n -= 1\`.\n\n**Iterate:** \`for item in items:\`\n`,
    exercisePath: "../day-03-decisions-and-loops/exercises/starter_quiz.py",
    solutionPath: "../day-03-decisions-and-loops/solutions/guessing_game_solution.py",
    sandboxCode: `score = 85\nif score >= 90:\n    print("A")\nelif score >= 75:\n    print("B")\nelse:\n    print("Keep going")`,
    skulpt: null,
  },
  {
    num: 4,
    title: "Functions",
    arc: "Arc 2 — Build",
    desc: "def, parameters, return, DRY.",
    lessonPath: "../day-04-functions/README.md",
    examplesMd: `### One idea\n\n\`return\` sends a value **back**. \`print\` only shows it.\n\n\`\`\`python\ndef square(x):\n    return x * x\n\nprint(square(5))\n\`\`\`\n`,
    exercisePath: "../day-04-functions/exercises/starter_converter.py",
    solutionPath: "../day-04-functions/solutions/temperature_converter_solution.py",
    sandboxCode: `def c_to_f(c):\n    return (c * 9/5) + 32\nprint(c_to_f(0), "°F")`,
    skulpt: {
      id: "temp-converter",
      instructions:
        "Implement the three conversion functions. Use **return** (not print). Then click **Check**.\n\nFormula: °F = (°C × 9/5) + 32; °C = (°F − 32) × 5/9; K = °C + 273.15",
      starter: `# Functions — temperature conversions\n# Complete each function. Do not change the signatures.\n\n\ndef celsius_to_fahrenheit(celsius):\n    """(C × 9/5) + 32"""\n    pass\n\n\ndef fahrenheit_to_celsius(fahrenheit):\n    """(F - 32) × 5/9"""\n    pass\n\n\ndef celsius_to_kelvin(celsius):\n    """C + 273.15"""\n    pass\n`,
      tests: [
        { name: "C→F: 0°C = 32°F", why: "Reference point: freezing water.", code: `assert abs(celsius_to_fahrenheit(0) - 32) < 1e-9` },
        { name: "F→C: 32°F = 0°C", why: "Inverse must match.", code: `assert abs(fahrenheit_to_celsius(32) - 0) < 1e-9` },
        { name: "C→K: 0°C = 273.15K", why: "Kelvin offset.", code: `assert abs(celsius_to_kelvin(0) - 273.15) < 1e-9` },
        { name: "Round-trip", why: "C→F→C should recover C.", code: `c = 37\nassert abs(fahrenheit_to_celsius(celsius_to_fahrenheit(c)) - c) < 1e-9` },
      ],
    },
  },
  {
    num: 5,
    title: "Collections",
    arc: "Arc 2 — Build",
    desc: "Lists, dicts, list of dicts.",
    lessonPath: "../day-05-collections/README.md",
    examplesMd: `### Pattern\n\n**List:** ordered shelf.\n\n**Dict:** lookup by key.\n\n**List of dicts:** many records (e.g. movies).\n`,
    exercisePath: "../day-05-collections/exercises/starter_movies.py",
    solutionPath: "../day-05-collections/solutions/movie_ranker_solution.py",
    sandboxCode: `movies = [{"title": "Inception", "rating": 8.8}]\nprint(movies[0]["title"], movies[0]["rating"])`,
    skulpt: null,
  },
  {
    num: 6,
    title: "Debugging",
    arc: "Arc 2 — Build",
    desc: "Errors, stack traces, try/except.",
    lessonPath: "../day-06-debugging/README.md",
    examplesMd: `### Three bugs\n\n1. **Syntax** — Python cannot parse.\n2. **Runtime** — crashes while running.\n3. **Logic** — wrong answer, no crash.\n`,
    exercisePath: "../day-06-debugging/exercises/broken_programs/bug_01.py",
    solutionPath: "../day-06-debugging/solutions/input_handler_solution.py",
    sandboxCode: `try:\n    x = int("12")\n    print(x)\nexcept ValueError:\n    print("not a number")`,
    skulpt: null,
  },
  {
    num: 7,
    title: "Databases",
    arc: "Arc 2 — Build",
    desc: "SQLite, CRUD, persistence.",
    lessonPath: "../day-07-databases/README.md",
    examplesMd: `### Real world\n\nContacts app, notes, inventory — same pattern: **create, read, update, delete**.\n`,
    exercisePath: "../day-07-databases/exercises/starter_contacts_db.py",
    solutionPath: "../day-07-databases/solutions/contact_book_solution.py",
    sandboxCode: `# SQLite runs on your machine — use Terminal + VS Code for this day.\nimport sqlite3\nprint(sqlite3.sqlite_version)`,
    skulpt: null,
  },
  {
    num: 8,
    title: "Classes",
    arc: "Arc 3 — Ship",
    desc: "OOP: attributes + methods.",
    lessonPath: "../day-08-classes/README.md",
    examplesMd: `### Idea\n\nClass = blueprint. Object = one real thing built from it.\n\n\`self\` = this specific instance.\n`,
    exercisePath: "../day-08-classes/exercises/starter_movie_class.py",
    solutionPath: "../day-08-classes/solutions/bank_account_solution.py",
    sandboxCode: `class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        return self.name + " says woof"\nprint(Dog("Rex").bark())`,
    skulpt: null,
  },
  {
    num: 9,
    title: "Dev Workflow",
    arc: "Arc 3 — Ship",
    desc: "Git, commits, readable code.",
    lessonPath: "../day-09-dev-workflow/README.md",
    examplesMd: `### Habit\n\nSmall commits, clear messages, run/read before push.\n`,
    exercisePath: "../day-09-dev-workflow/exercises/refactor_this.py",
    solutionPath: "../day-09-dev-workflow/solutions/refactored_example.py",
    sandboxCode: `print("Good names > clever tricks")`,
    skulpt: null,
  },
  {
    num: 10,
    title: "Mini-Project",
    arc: "Arc 3 — Ship",
    desc: "Build and present.",
    lessonPath: "../day-10-mini-project/README.md",
    examplesMd: `### Scope\n\nPick one path: task manager, trivia, or budget tracker. Ship a **small** working version first.\n`,
    exercisePath: "../day-10-mini-project/task_manager/starter_task_manager.py",
    solutionPath: "../day-10-mini-project/README.md",
    sandboxCode: `print("Define your data model, then one feature at a time.")`,
    skulpt: null,
  },
];

let currentDayNum = null;
let currentTab = "lesson";
let currentSkulptId = null;
let skulptReady = false;

function $(id) {
  return document.getElementById(id);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getDay(n) {
  return DAYS.find((d) => d.num === Number(n)) || null;
}

function navigate(hash) {
  if (window.location.hash === hash) {
    renderRoute();
    return;
  }
  window.location.hash = hash;
}

async function fetchText(url) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error(`HTTP ${r.status} for ${url}`);
  return r.text();
}

function renderMarkdown(el, markdown) {
  if (!el) return;
  let html = markdown;
  if (typeof marked !== "undefined") {
    if (typeof marked.parse === "function") {
      html = marked.parse(markdown, { breaks: true });
    } else if (marked.marked && typeof marked.marked.parse === "function") {
      html = marked.marked.parse(markdown, { breaks: true });
    }
  }
  el.innerHTML = html;
  el.classList.add("md-content");
}

async function renderFileInto(el, path) {
  if (!el) return;
  el.innerHTML = '<p class="loading">Loading…</p>';
  try {
    const text = await fetchText(path);
    const lower = path.toLowerCase();
    if (lower.endsWith(".md")) {
      el.innerHTML = "";
      renderMarkdown(el, text);
    } else {
      el.innerHTML = `<pre class="code-block"><code>${escapeHtml(text)}</code></pre>`;
    }
  } catch (e) {
    el.innerHTML = `<div class="error-box">Could not load file.<br /><br />Run the server from the <strong>repository root</strong>:<br /><code>python3 -m http.server 8000</code><br /><br />Then open <code>http://localhost:8000/portal/</code><br /><br /><small>${escapeHtml(String(e.message))}</small></div>`;
  }
}

function renderSidebar() {
  const nav = $("sidebarNav");
  if (!nav) return;
  let html = '<div class="sidebar-label">Lessons</div>';
  DAYS.forEach((d) => {
    const active = d.num === currentDayNum ? "active" : "";
    html += `<button type="button" class="day-link ${active}" data-day="${d.num}">
      <span class="day-num">${String(d.num).padStart(2, "0")}</span>
      <span class="day-title">${d.title}</span>
    </button>`;
  });
  nav.innerHTML = html;
  nav.querySelectorAll(".day-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigate(`#/day/${btn.dataset.day}/lesson`);
    });
  });
}

function setTabButtons(day, tab) {
  ["lesson", "examples", "practice", "solutions"].forEach((t) => {
    const b = $(`tab-${t}`);
    if (b) b.classList.toggle("active", t === tab);
  });
}

function renderHome() {
  currentDayNum = null;
  renderSidebar();
  $("main").innerHTML = `
    <h1 class="page-title">Welcome</h1>
    <p class="page-sub">Everything you need is in this window: <strong>Lesson</strong> (from the repo), <strong>Examples</strong>, <strong>Practice</strong> (editor), and <strong>Solutions</strong> when you are ready.</p>
    <div class="grid">
      ${DAYS.map(
        (d) => `
        <div class="card" data-go="#/day/${d.num}/lesson">
          <div class="card-title">Day ${d.num} · ${d.title}</div>
          <div class="card-desc">${d.desc}</div>
        </div>`
      ).join("")}
      <div class="card" data-go="#/course">
        <div class="card-title">Course overview</div>
        <div class="card-desc">How this repo is organized (from README).</div>
      </div>
      <div class="card" data-go="#/resources">
        <div class="card-title">Resources</div>
        <div class="card-desc">Cheatsheets and guides (Python, Git, AI, debugging).</div>
      </div>
    </div>
  `;
  $("main").querySelectorAll(".card[data-go]").forEach((c) => {
    c.addEventListener("click", () => navigate(c.dataset.go));
  });
}

async function renderCourseOverview() {
  currentDayNum = null;
  renderSidebar();
  const el = document.createElement("div");
  $("main").innerHTML = `<h1 class="page-title">Course overview</h1><div id="courseMd"></div>`;
  await renderFileInto($("courseMd"), "../README.md");
}

function renderResourcesIndex() {
  currentDayNum = null;
  renderSidebar();
  $("main").innerHTML = `
    <h1 class="page-title">Resources</h1>
    <p class="page-sub">Short references you can open any time.</p>
    <div class="grid">
      ${RESOURCES.map(
        (r) => `
        <div class="card" data-go="#/resources/${r.slug}">
          <div class="card-title">${r.title}</div>
          <div class="card-desc">Open in browser</div>
        </div>`
      ).join("")}
    </div>
  `;
  $("main").querySelectorAll(".card[data-go]").forEach((c) => {
    c.addEventListener("click", () => navigate(c.dataset.go));
  });
}

async function renderResourcePage(slug) {
  currentDayNum = null;
  renderSidebar();
  const r = RESOURCES.find((x) => x.slug === slug);
  $("main").innerHTML = r
    ? `<p class="page-sub"><a href="#/resources" id="backRes" style="color:var(--amber2)">← Resources</a></p><h1 class="page-title">${escapeHtml(r.title)}</h1><div id="resMd"></div>`
    : `<p class="page-sub">Not found.</p>`;
  $("backRes")?.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("#/resources");
  });
  if (r) await renderFileInto($("resMd"), r.file);
}

async function renderDay(dayNum, tab) {
  const d = getDay(dayNum);
  if (!d) {
    $("main").innerHTML = `<p class="page-sub">Day not found.</p>`;
    return;
  }
  currentDayNum = d.num;
  currentTab = tab || "lesson";
  currentSkulptId = d.skulpt ? d.skulpt.id : null;
  renderSidebar();

  $("main").innerHTML = `
    <p class="day-badge">${escapeHtml(d.arc)}</p>
    <h1 class="page-title">Day ${d.num} · ${escapeHtml(d.title)}</h1>
    <p class="page-sub">${escapeHtml(d.desc)}</p>
    <nav class="tabs">
      <button type="button" class="tab" id="tab-lesson" data-tab="lesson">Lesson</button>
      <button type="button" class="tab" id="tab-examples" data-tab="examples">Examples</button>
      <button type="button" class="tab" id="tab-practice" data-tab="practice">Practice</button>
      <button type="button" class="tab" id="tab-solutions" data-tab="solutions">Solutions & tips</button>
    </nav>
    <div id="dayContent"></div>
  `;

  ["lesson", "examples", "practice", "solutions"].forEach((t) => {
    $(`tab-${t}`)?.addEventListener("click", () => navigate(`#/day/${d.num}/${t}`));
  });
  setTabButtons(d, currentTab);
  await renderDayPanel(d, currentTab);
}

async function renderDayPanel(d, tab) {
  const root = $("dayContent");
  if (!root) return;

  if (tab === "lesson") {
    root.innerHTML = `<div class="panel"><div id="lessonBody"></div></div>`;
    await renderFileInto($("lessonBody"), d.lessonPath);
    return;
  }

  if (tab === "examples") {
    root.innerHTML = `<div class="panel"><div id="exBody"></div></div>`;
    $("exBody").innerHTML = "";
    renderMarkdown($("exBody"), d.examplesMd);
    return;
  }

  if (tab === "practice") {
    const sk = d.skulpt;
    const starter = sk ? sk.starter : d.sandboxCode;
    const instrMd =
      sk?.instructions ||
      "Experiment in the editor — click **Run**. When an exercise has auto-checks (Day 4), use **Check** after you implement the required functions.";
    root.innerHTML = `
      <div class="panel">
        <div id="instrMd" class="md-content" style="margin-bottom:14px"></div>
        <p class="panel-hint">Starter file in the repo: <code>${escapeHtml(d.exercisePath)}</code>. You can load it below and copy into the editor.</p>
        <p style="margin-bottom:10px">
          <button type="button" class="btn btn-ghost" id="btnLoadExercise">Load exercise file</button>
          ${sk ? `<button type="button" class="btn btn-primary" id="btnLoadStarter">Load starter</button>` : ""}
        </p>
        <div id="exercisePreview" style="margin-bottom:14px"></div>
        <div class="playground">
          <div class="playground-header">
            <div class="playground-title" id="pgTitle">practice.py</div>
            <button type="button" class="btn btn-ghost" id="btnClear">Clear</button>
            <button type="button" class="btn btn-ghost" id="btnRun">Run</button>
            ${sk ? `<button type="button" class="btn btn-primary" id="btnCheck">Check</button>` : ""}
          </div>
          <textarea class="code-textarea" id="codeArea" spellcheck="false"></textarea>
          <div class="playground-output">
            <div class="output-label">Output</div>
            <div class="output-text muted" id="outputArea">Output appears here.</div>
          </div>
        </div>
        <div id="testResults" style="display:none" class="test-results"></div>
      </div>
    `;
    renderMarkdown($("instrMd"), instrMd);
    $("codeArea").value = starter;
    $("btnLoadExercise")?.addEventListener("click", async () => {
      try {
        const t = await fetchText(d.exercisePath);
        const prev = $("exercisePreview");
        if (d.exercisePath.toLowerCase().endsWith(".md")) {
          prev.innerHTML = '<div id="exPrevMd"></div>';
          renderMarkdown($("exPrevMd"), t);
        } else {
          prev.innerHTML = `<pre class="code-block"><code>${escapeHtml(t)}</code></pre>`;
        }
      } catch (e) {
        $("exercisePreview").innerHTML = `<div class="error-box">${escapeHtml(e.message)}</div>`;
      }
    });
    $("btnLoadStarter")?.addEventListener("click", () => {
      if (sk) $("codeArea").value = sk.starter;
    });
    $("btnClear")?.addEventListener("click", () => {
      $("codeArea").value = "";
      $("outputArea").textContent = "Cleared.";
      $("outputArea").className = "output-text muted";
    });
    $("btnRun")?.addEventListener("click", runCode);
    $("btnCheck")?.addEventListener("click", checkExercise);
    setupTabIndent("codeArea");
    return;
  }

  if (tab === "solutions") {
    root.innerHTML = `
      <div class="panel">
        <p class="panel-hint">Use this after you have tried yourself. Understanding beats copying.</p>
        <div id="solBody"></div>
      </div>
    `;
    await renderFileInto($("solBody"), d.solutionPath);
  }
}

function setupTabIndent(textareaId) {
  const ta = $(textareaId);
  if (!ta) return;
  ta.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    e.preventDefault();
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    ta.value = ta.value.substring(0, start) + "    " + ta.value.substring(end);
    ta.selectionStart = ta.selectionEnd = start + 4;
  });
}

function getSkulptErrorMessage(err) {
  let msg = err.toString();
  if (err && err.args) {
    try {
      msg = err.args.v[0].v;
    } catch (e) {}
  }
  return msg;
}

function runPython(code, captureOutput = true) {
  return new Promise((resolve, reject) => {
    let buf = "";
    function outfn(t) {
      if (captureOutput) buf += t;
    }
    function builtinRead(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles["files"][x];
    }
    Sk.configure({
      output: outfn,
      read: builtinRead,
      inputfun: (prompt) =>
        new Promise((res) => {
          res(window.prompt(prompt || "") || "");
        }),
      inputfunTakesPrompt: true,
    });
    Sk.misceval
      .asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, code, true))
      .then(() => resolve(buf))
      .catch(reject);
  });
}

function runCode() {
  const code = $("codeArea").value;
  const out = $("outputArea");
  const btn = $("btnRun");
  if (!skulptReady) {
    out.textContent = "Python is still loading…";
    out.className = "output-text muted";
    return;
  }
  btn.disabled = true;
  runPython(code)
    .then((output) => {
      if (!output) {
        out.textContent = "(no output — did you forget print()?)";
        out.className = "output-text muted";
      } else {
        out.textContent = output;
        out.className = "output-text";
      }
    })
    .catch((err) => {
      out.textContent = "❌ " + getSkulptErrorMessage(err);
      out.className = "output-text err";
    })
    .finally(() => {
      btn.disabled = false;
    });
}

async function checkExercise() {
  const d = getDay(currentDayNum);
  const sk = d && d.skulpt;
  const resultsEl = $("testResults");
  if (!sk || !resultsEl) return;
  if (!skulptReady) {
    resultsEl.style.display = "block";
    resultsEl.className = "test-results fail";
    resultsEl.textContent = "Python engine still loading.";
    return;
  }
  resultsEl.style.display = "block";
  resultsEl.className = "test-results";
  resultsEl.textContent = "Running checks…";

  const studentCode = $("codeArea").value;
  const tests = sk.tests || [];
  const testHarness = `
# --- auto-check ---
def __portal_run_tests__():
    results = []
    def _record(name, ok, why, detail=""):
        results.append((name, ok, why, detail))
    required = ["celsius_to_fahrenheit", "fahrenheit_to_celsius", "celsius_to_kelvin"]
    for fn in required:
        if fn not in globals():
            _record("missing:" + fn, False, "Define this function with the exact name.", "")
            return results
        if not callable(globals()[fn]):
            _record("not callable:" + fn, False, "Should be a function.", "")
            return results
    try:
        ${tests
          .map(
            (t) => `
        try:
            ${t.code}
            _record(${JSON.stringify(t.name)}, True, ${JSON.stringify(t.why)}, "")
        except AssertionError as e:
            _record(${JSON.stringify(t.name)}, False, ${JSON.stringify(t.why)}, str(e))
        except Exception as e:
            _record(${JSON.stringify(t.name)}, False, ${JSON.stringify(t.why)}, f"{type(e).__name__}: {e}")
        `
          )
          .join("")}
    except Exception as e:
        _record("harness", False, "Checker error.", str(e))
    return results
__results__ = __portal_run_tests__()
print("PORTAL_TEST_RESULTS_START")
for (name, ok, why, detail) in __results__:
    print(("PASS" if ok else "FAIL") + "|" + name + "|" + why + "|" + str(detail))
print("PORTAL_TEST_RESULTS_END")
`;

  try {
    const output = await runPython(studentCode + testHarness);
    const start = output.indexOf("PORTAL_TEST_RESULTS_START");
    const end = output.indexOf("PORTAL_TEST_RESULTS_END");
    if (start === -1 || end === -1) {
      resultsEl.className = "test-results fail";
      resultsEl.textContent =
        "Could not read test output. Avoid calling input() during Check, and fix syntax errors first.";
      return;
    }
    const lines = output
      .substring(start, end)
      .split("\n")
      .slice(1)
      .map((l) => l.trim())
      .filter(Boolean);
    const failed = [];
    for (const line of lines) {
      const [st, ...rest] = line.split("|");
      if (st === "FAIL") failed.push(line);
    }
    if (failed.length === 0) {
      resultsEl.className = "test-results pass";
      resultsEl.textContent = "All checks passed.";
    } else {
      resultsEl.className = "test-results fail";
      resultsEl.textContent = failed.join("\n");
    }
  } catch (err) {
    resultsEl.className = "test-results fail";
    resultsEl.textContent = getSkulptErrorMessage(err);
  }
}

function renderRoute() {
  const raw = (window.location.hash || "#/").replace(/^#/, "");
  const parts = raw.split("/").filter(Boolean);

  if (parts.length === 0 || (parts[0] === "" && parts.length <= 1)) {
    renderHome();
    return;
  }

  const top = parts[0];

  if (top === "course") {
    renderCourseOverview();
    return;
  }

  if (top === "resources") {
    if (parts[1]) {
      renderResourcePage(parts[1]);
    } else {
      renderResourcesIndex();
    }
    return;
  }

  if (top === "day" && parts[1]) {
    const dayNum = Number(parts[1]);
    const tab = parts[2] || "lesson";
    const okTabs = ["lesson", "examples", "practice", "solutions"];
    renderDay(dayNum, okTabs.includes(tab) ? tab : "lesson");
    return;
  }

  renderHome();
}

document.addEventListener("DOMContentLoaded", () => {
  $("brand")?.addEventListener("click", () => navigate("#/"));
  $("navHome")?.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("#/");
  });
  $("navCourse")?.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("#/course");
  });
  $("navResources")?.addEventListener("click", (e) => {
    e.preventDefault();
    navigate("#/resources");
  });

  renderRoute();

  setTimeout(() => {
    if (typeof Sk !== "undefined") {
      skulptReady = true;
      const st = $("pyStatus");
      if (st) {
        st.textContent = "Python ready";
        st.classList.add("ready");
        setTimeout(() => {
          st.style.opacity = "0";
          st.style.transition = "opacity 1s";
        }, 1500);
      }
    }
  }, 600);
});

window.addEventListener("hashchange", renderRoute);
