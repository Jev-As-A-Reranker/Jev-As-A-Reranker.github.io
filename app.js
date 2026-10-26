const METRICS = [
  {
    id: "nDCG@10",
    label: "nDCG@10",
    tab: "comparison",
    better: "high",
    digits: 3,
    help: "Normalized discounted cumulative gain at 10. Higher is better.",
  },
  {
    id: "MRR@10",
    label: "MRR@10",
    tab: "comparison",
    better: "high",
    digits: 3,
    help: "Mean reciprocal rank at 10. Higher is better.",
  },
  {
    id: "MAP@10",
    label: "MAP@10",
    tab: "comparison",
    better: "high",
    digits: 3,
    help: "Mean average precision at 10. Higher is better.",
  },
  {
    id: "Recall@10",
    label: "Recall@10",
    tab: "comparison",
    better: "high",
    digits: 3,
    help: "Recall at 10. Higher is better.",
  },
  {
    id: "Median latency (s)",
    label: "Latency",
    tab: "efficiency",
    better: "low",
    digits: 2,
    help: "Median seconds per query to rerank. Excludes BM25 retrieval, model loading, and scoring. Lower is better.",
  },
  {
    id: "USD / 1k queries (est.)",
    label: "Cost",
    tab: "efficiency",
    better: "low",
    digits: 2,
    help: "Estimated US dollars per 1,000 queries. Local models are 0. Lower is better.",
  },
  {
    id: "Output tokens / query",
    label: "Tokens",
    tab: "efficiency",
    better: "low",
    digits: null,
    help: "Output tokens per query. Lower means less generated text.",
  },
];

const TABS = [
  { id: "comparison", label: "Comparison" },
  { id: "choice", label: "Choice" },
  { id: "efficiency", label: "Efficiency" },
];

const FAMILY_CLASS = {
  "TREC DL": "family-dl",
  BEIR: "family-beir",
  BRIGHT: "family-bright",
};

const state = {
  tab: "comparison",
  metric: "nDCG@10",
  sortKey: "avg",
  sortDir: "desc",
};

const tabsEl = document.getElementById("tabs");
const metricsEl = document.getElementById("metrics");
const helpEl = document.getElementById("metric-help");
const table = document.getElementById("board");
const legendEl = document.getElementById("legend");
const caption = document.getElementById("caption");
const scroller = document.getElementById("scroller");

function metricById(id) {
  return METRICS.find((metric) => metric.id === id);
}

function activeMetrics() {
  if (state.tab === "efficiency") return METRICS.filter((metric) => metric.tab === "efficiency");
  return METRICS.filter((metric) => metric.tab === "comparison");
}

function activeMethods() {
  if (state.tab === "choice") return window.BOARD.methods.filter((method) => method.choice);
  return window.BOARD.methods;
}

function cellValue(method, datasetId) {
  const cell = method.cells[datasetId];
  if (!cell || cell.status !== "ok") return null;
  const value = Number(cell[state.metric]);
  return Number.isFinite(value) ? value : null;
}

function averageOf(method) {
  const values = window.BOARD.datasets
    .map((dataset) => cellValue(method, dataset.id))
    .filter((value) => value !== null);
  if (!values.length) return { mean: null, n: 0 };
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  return { mean, n: values.length };
}

function formatValue(value) {
  if (value === null) return "";
  const metric = metricById(state.metric);
  if (metric.digits === null) {
    const rounded = Math.round(value * 10) / 10;
    return Number.isInteger(rounded)
      ? rounded.toLocaleString("en-US")
      : rounded.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  }
  return value.toFixed(metric.digits);
}

function compareValues(a, b) {
  if (a === null && b === null) return 0;
  if (a === null) return 1;
  if (b === null) return -1;
  return state.sortDir === "asc" ? a - b : b - a;
}

function rankedMethods() {
  const total = window.BOARD.datasets.length;
  const rows = activeMethods().map((method) => {
    const avg = averageOf(method);
    let sortValue = avg.mean;
    if (state.sortKey === "method") sortValue = method.label.toLowerCase();
    else if (state.sortKey !== "avg") sortValue = cellValue(method, state.sortKey);
    return { method, avg, sortValue, complete: avg.n === total };
  });

  rows.sort((a, b) => {
    if (state.sortKey === "avg" && a.complete !== b.complete) return a.complete ? -1 : 1;
    if (state.sortKey === "method") {
      const byName = a.sortValue.localeCompare(b.sortValue);
      if (byName !== 0) return state.sortDir === "asc" ? byName : -byName;
    } else {
      const byValue = compareValues(a.sortValue, b.sortValue);
      if (byValue !== 0) return byValue;
    }
    return window.BOARD.methods.indexOf(a.method) - window.BOARD.methods.indexOf(b.method);
  });

  let last = null;
  let lastRank = 0;
  rows.forEach((row, index) => {
    if (row.sortValue === null) {
      row.rank = null;
      return;
    }
    if (last !== null && Math.abs(row.sortValue - last) < 1e-9) {
      row.rank = lastRank;
      return;
    }
    lastRank = index + 1;
    row.rank = lastRank;
    last = row.sortValue;
  });
  return rows;
}

function bestSet(values) {
  const present = values.filter((value) => value !== null);
  if (!present.length) return new Set();
  const target = metricById(state.metric).better === "low" ? Math.min(...present) : Math.max(...present);
  const winners = new Set();
  values.forEach((value, index) => {
    if (value !== null && Math.abs(value - target) < 1e-9) winners.add(index);
  });
  return winners;
}

function makeButton(parent, label, pressed, onClick) {
  const node = document.createElement("button");
  node.type = "button";
  node.textContent = label;
  const attr = parent === tabsEl ? "aria-selected" : "aria-pressed";
  node.setAttribute(attr, pressed ? "true" : "false");
  if (parent === tabsEl) node.setAttribute("role", "tab");
  node.addEventListener("click", onClick);
  parent.appendChild(node);
}

function renderControls() {
  tabsEl.replaceChildren();
  metricsEl.replaceChildren();
  TABS.forEach((tab) => {
    makeButton(tabsEl, tab.label, tab.id === state.tab, () => {
      state.tab = tab.id;
      const metrics = activeMetrics();
      if (!metrics.some((metric) => metric.id === state.metric)) {
        state.metric = metrics[0].id;
        state.sortKey = "avg";
        state.sortDir = metrics[0].better === "low" ? "asc" : "desc";
      }
      render();
    });
  });
  activeMetrics().forEach((metric) => {
    makeButton(metricsEl, metric.label, metric.id === state.metric, () => {
      state.metric = metric.id;
      state.sortKey = "avg";
      state.sortDir = metric.better === "low" ? "asc" : "desc";
      render();
    });
  });
  const metric = metricById(state.metric);
  helpEl.textContent = `${metric.help} Showing ${activeMethods().length} methods.`;
  scroller.classList.toggle("efficiency", state.tab === "efficiency");
}

function headerButton(label, key, alignStart) {
  const node = document.createElement("button");
  node.type = "button";
  if (alignStart) node.style.justifyContent = "flex-start";
  node.append(label);
  if (state.sortKey === key) {
    const mark = document.createElement("span");
    mark.className = "sort-mark";
    mark.setAttribute("aria-hidden", "true");
    mark.textContent = state.sortDir === "asc" ? "▲" : "▼";
    node.append(mark);
  }
  node.addEventListener("click", () => {
    if (state.sortKey === key) state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
    else {
      state.sortKey = key;
      state.sortDir = key === "method" ? "asc" : (metricById(state.metric).better === "low" ? "asc" : "desc");
    }
    render();
  });
  return node;
}

function renderTable() {
  const metric = metricById(state.metric);
  const datasets = window.BOARD.datasets;
  const rows = rankedMethods();
  const showBatch = state.tab === "efficiency";
  caption.textContent = `${TABS.find((tab) => tab.id === state.tab).label}, ${metric.label}`;

  const avgWinners = bestSet(rows.map((row) => (row.complete ? row.avg.mean : null)));
  const columnWinners = datasets.map((dataset) => bestSet(rows.map((row) => cellValue(row.method, dataset.id))));

  const thead = document.createElement("thead");
  const groupRow = document.createElement("tr");
  groupRow.className = "group-row";
  const nameRow = document.createElement("tr");
  nameRow.className = "name-row";

  const rankGap = document.createElement("th");
  rankGap.className = "sticky col-rank";
  groupRow.append(rankGap);
  const rankTh = document.createElement("th");
  rankTh.className = "sticky col-rank";
  rankTh.scope = "col";
  rankTh.textContent = "#";
  nameRow.append(rankTh);

  const methodGap = document.createElement("th");
  methodGap.className = "sticky col-method";
  groupRow.append(methodGap);
  const methodTh = document.createElement("th");
  methodTh.className = "sticky col-method";
  methodTh.scope = "col";
  if (state.sortKey === "method") methodTh.setAttribute("aria-sort", state.sortDir === "asc" ? "ascending" : "descending");
  methodTh.append(headerButton("Method", "method", true));
  nameRow.append(methodTh);

  const avgGap = document.createElement("th");
  avgGap.className = "sticky col-avg";
  groupRow.append(avgGap);
  const avgTh = document.createElement("th");
  avgTh.className = "sticky col-avg";
  avgTh.scope = "col";
  if (state.sortKey === "avg") avgTh.setAttribute("aria-sort", state.sortDir === "asc" ? "ascending" : "descending");
  avgTh.append(headerButton("Avg", "avg"));
  nameRow.append(avgTh);

  if (showBatch) {
    const batchGap = document.createElement("th");
    batchGap.className = "sticky col-batch";
    groupRow.append(batchGap);
    const batchTh = document.createElement("th");
    batchTh.className = "sticky col-batch";
    batchTh.scope = "col";
    batchTh.textContent = "Batch";
    nameRow.append(batchTh);
  }

  const families = [];
  datasets.forEach((dataset) => {
    const last = families[families.length - 1];
    if (!last || last.name !== dataset.family) families.push({ name: dataset.family, count: 1 });
    else last.count += 1;
  });
  families.forEach((family) => {
    const th = document.createElement("th");
    th.colSpan = family.count;
    th.textContent = family.name;
    th.className = FAMILY_CLASS[family.name];
    groupRow.append(th);
  });
  datasets.forEach((dataset) => {
    const th = document.createElement("th");
    th.scope = "col";
    th.className = FAMILY_CLASS[dataset.family];
    th.title = dataset.full;
    if (state.sortKey === dataset.id) th.setAttribute("aria-sort", state.sortDir === "asc" ? "ascending" : "descending");
    th.append(headerButton(dataset.label, dataset.id));
    nameRow.append(th);
  });
  thead.append(groupRow, nameRow);

  const tbody = document.createElement("tbody");
  rows.forEach((row, index) => {
    const tr = document.createElement("tr");
    if (row.method.group === "jev") tr.classList.add("jev");

    const rank = document.createElement("td");
    rank.className = "sticky col-rank";
    rank.textContent = row.rank === null ? "" : String(row.rank);
    tr.append(rank);

    const name = document.createElement("td");
    name.className = "sticky col-method";
    const nameText = document.createElement("span");
    nameText.className = "method-name";
    nameText.textContent = row.method.label;
    name.title = row.method.id;
    name.append(nameText);
    tr.append(name);

    const avg = document.createElement("td");
    avg.className = "sticky col-avg";
    if (row.avg.mean !== null) {
      avg.append(formatValue(row.avg.mean));
      avg.title = row.avg.mean.toFixed(4);
      if (avgWinners.has(index)) avg.classList.add("best");
      if (row.avg.n < datasets.length) {
        const coverage = document.createElement("span");
        coverage.className = "coverage";
        coverage.textContent = `${row.avg.n}/${datasets.length}`;
        avg.append(coverage);
      }
    }
    tr.append(avg);

    if (showBatch) {
      const batch = document.createElement("td");
      batch.className = "sticky col-batch";
      batch.textContent = row.method.batch === "N/A" ? "—" : row.method.batch;
      tr.append(batch);
    }

    datasets.forEach((dataset, datasetIndex) => {
      const td = document.createElement("td");
      td.className = FAMILY_CLASS[dataset.family];
      const cell = row.method.cells[dataset.id];
      const value = cellValue(row.method, dataset.id);
      if (value !== null) {
        td.textContent = formatValue(value);
        td.title = cell[state.metric];
        if (columnWinners[datasetIndex].has(index)) td.classList.add("best");
      } else if (cell && cell.status === "limit") {
        td.textContent = "limit";
        td.classList.add("limit");
        td.title = "The 100-passage request exceeded the context window.";
      } else {
        td.textContent = "—";
        td.classList.add("absent");
        td.title = "This fallback was not run.";
      }
      tr.append(td);
    });
    tbody.append(tr);
  });

  table.replaceChildren(caption, thead, tbody);
}

function renderLegend() {
  const partial = "Methods that missed at least one dataset are listed after complete runs when the table is sorted by average, and the average is marked with how many datasets it covers.";
  if (state.tab === "choice") {
    legendEl.textContent = `Gold is the best value in that column. limit is a Choice request the context window rejected. An em dash is a fallback that was not run, because the native request already fit. ${partial}`;
    return;
  }
  if (state.tab === "efficiency") {
    legendEl.textContent = `Gold is the best value in that column. Latency is the median per query. Cost is estimated from token counts and list prices. Batch is how many passages were scored together. ${partial}`;
    return;
  }
  legendEl.textContent = `Gold is the best value on each dataset. limit is a run the context window rejected. An em dash is a configuration that was not run. ${partial}`;
}

function render() {
  renderControls();
  renderTable();
  renderLegend();
}

render();
