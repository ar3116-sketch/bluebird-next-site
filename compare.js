// X-ray comparison (the interim page's viewer): view and layout toggles, wipe slider, numbers from data.json.
(() => {
    const ALT = {
      iso: "3/4 view", top: "top view, nose left", side: "side view, nose left"
    };
    let view = "iso";
    const $ = (id) => document.getElementById(id);
    function setView(v) {
      view = v;
      document.querySelectorAll("[data-view]").forEach(b => b.setAttribute("aria-pressed", b.dataset.view === v));
      for (const [id, w] of [["imgA", "bluebird"], ["imgB", "next"], ["wA", "bluebird"], ["wB", "next"]]) {
        $(id).src = `img/${w}_${v}.jpg`;
        $(id).alt = `${w === "next" ? "BLUEBIRD NEXT" : "BLUEBIRD"} x-ray, ${ALT[v]}`;
      }
    }
    function setMode(m) {
      document.querySelectorAll("[data-mode]").forEach(b => b.setAttribute("aria-pressed", b.dataset.mode === m));
      $("pair").hidden = m !== "pair";
      $("wipe").hidden = m !== "wipe";
      $("hint").textContent = m === "wipe"
        ? "Drag across the image: left of the line is BLUEBIRD, right is NEXT."
        : "Both renders use one camera, so parts that move sit at the same place in both frames.";
    }
    document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => setView(b.dataset.view)));
    document.querySelectorAll("[data-mode]").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));
    $("slider").addEventListener("input", e => $("wipe").style.setProperty("--x", e.target.value + "%"));
    ["iso", "top", "side"].forEach(v => ["bluebird", "next"].forEach(w => { const i = new Image(); i.src = `img/${w}_${v}.jpg`; }));

    fetch("data.json").then(r => r.json()).then(d => {
      const fmt = (v, u) => `${v}${u ? (u === "%" ? " %" : " " + u) : ""}`;
      $("rows").innerHTML = d.rows.map(r => {
        const pct = r.bluebird ? ((r.next - r.bluebird) / r.bluebird) * 100 : 0;
        const ch = Math.abs(pct) < 0.5 ? "same" : `${pct > 0 ? "+" : "−"}${Math.abs(pct).toFixed(0)} %`;
        return `<tr><td>${r.label}</td><td>${fmt(r.bluebird, r.unit)}</td><td class="n">${fmt(r.next, r.unit)}</td><td class="d">${ch}</td></tr>`;
      }).join("");
      document.querySelectorAll("[data-row]").forEach(el => {
        const r = d.rows.find(x => x.label === el.dataset.row);
        if (r) el.textContent = `${fmt(r.bluebird, r.unit)} → ${fmt(r.next, r.unit)}`;
      });
    }).catch(() => { $("rows").innerHTML = '<tr><td colspan="4">Numbers unavailable.</td></tr>'; });
})();
