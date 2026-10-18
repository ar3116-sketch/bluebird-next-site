// Methodology panel content for BLUEBIRD NEXT: one entry per design decision, in the order they were made.
// Every number is from a result file: aero/next_sizing.yaml (size sweep), cad/out/detailed/next/next_fit.yaml (pack fit,
// layout, mass, CG), aero/next/results.yaml (aero), cad/out/detailed/next/oml_next.yaml (shape),
// cad/out/detailed/next/parts/next_parts.yaml (internals), docs/planned/bluebird_next.md (decisions, survey area).
// trade.win = adopted row (-1: none). figs: [file in assets/method/, caption]. sec: unused (NEXT has no white paper yet).
export const METHOD = [
  {
    step: "Size",
    decision: "Stay at 1.8 m and put the gain into the battery, not the wing.",
    why: "A bigger aircraft carries more cells, but at a fixed cell count it flies less far: structure mass grows faster than the lift-to-drag ratio (11.96 to 12.61 from 1.0 to 1.3 times the size). Size only pays as room for cells and a lower stall speed to carry them. At 1.8 m a 12-cell pack reaches about 91 km at 2.65 kg with the trimmed stall under the 10.2 m/s limit; the 2 m version adds about 11 km for 0.7 kg and a bigger motor.",
    trade: { cols: ["Span", "Best pack under the stall limit", "Mass", "Range", "Trimmed stall"], win: 0, rows: [
      ["1.80 m", "4S3P (12 cells)", "2.65 kg", "91 km", "9.90 m/s"],
      ["1.80 m", "4S4P (16 cells)", "2.97 kg", "112 km", "10.48 m/s, over the limit"],
      ["1.98 m", "4S4P", "3.35 kg", "102 km", "10.12 m/s"],
      ["2.16 m", "4S4P", "3.80 kg", "93 km", "9.87 m/s"]] },
    method: "Sweep of span scale 1.0–1.3 and centre-body thickness with AeroBuildup polars (AeroSandbox), structure mass scaled as span^2.6, 75 g per cell, best-range speed. Masses are estimates until the CAD exists.",
    stats: [["91", "km", "1.8 m, 12 cells (sweep)"], ["2.65", "kg", "take-off mass"], ["9.9", "m/s", "trimmed stall (limit 10.2)"]],
    figs: [],
  },
  {
    step: "Battery fit",
    decision: "Split the 12 cells: eight in the main bay, four in the nose, and deepen the centre body to hold them.",
    why: "Twelve cells do not fit BLUEBIRD's body as one block: a second layer needs about 47 mm of depth where the body has 30–33 mm, and a single layer needs 257 mm of width. Without the phone the aircraft is also tail-heavy and would need 91–136 g of dead ballast in the nose. A 4-cell string in the nose solves both, if the forward body is about 8 mm deeper. Raising the centre-body thickness from 1.15 to 1.35 of the base section gives 10.5 mm at x 140 and costs about 0.02 in lift-to-drag ratio.",
    trade: { cols: ["Option", "Fits", "Ballast", "Range at 14 m/s"], win: 2, rows: [
      ["One 12-cell block, BLUEBIRD body", "no: misses by 10 mm or more", "n/a", "n/a"],
      ["8 cells + nose ballast, BLUEBIRD body", "yes", "91–136 g", "≈ 65 km"],
      ["8 + 4 cells, 1.35 centre body", "yes", "0 g", "89.7 km"]] },
    method: "Free-space map of the centre body on 2 mm voxels, about 3–4 mm conservative per side; candidate packs placed cell by cell. New outer shape lofted from the parameter file and re-checked for the nose string.",
    stats: [["70.8", "mm", "depth at x 140 (was 60.3)"], ["12", "cells", "Molicel P50B, 8 + 4"], ["0", "g", "nose ballast"]],
    figs: [],
  },
  {
    step: "Layout + balance",
    decision: "Companion over the pack, cameras moved to clear the nose cells, radios in the nose, flight controller back in its aft bay.",
    why: "A tailless aircraft balances in a narrow window, so every component is placed for the centre of gravity as well as for fit. The companion takes the phone's slot over the pack, in the same cooling path. The thermal camera moves forward and left of the nose cells, the mapping camera outboard beside the main pack. The result balances at x 313.0 mm against a 312.4 mm target with the pack front at 180.4 mm, mid-way in its 165–199 mm travel, so there is room to trim either way.",
    trade: null,
    method: "Component list with masses (datasheet or estimate), placed on the voxel map; CG and static margin computed against the neutral point from the aero model.",
    stats: [["2652.6", "g", "layout mass"], ["313.0", "mm", "CG (target 312.4)"], ["8.0", "%", "static margin"]],
    figs: [["next_layout.webp", "NEXT layout on the free-space map: main and nose packs, companion, cameras, radios and the CG against its target."]],
  },
  {
    step: "Aero",
    decision: "Same wing and airfoils; the deeper body costs almost nothing, and the extra energy turns into range.",
    why: "The aero model was re-run on the NEXT outer shape and mass. Centre-body area grows 0.6 %, the neutral point sits at 337.4 mm, and cruise lift-to-drag at 14 m/s is 11.6 against BLUEBIRD's 11.7. Cruise needs 77.7 W including a 5 W companion, a little more than BLUEBIRD's 72.5 W, but the pack holds 67 % more usable energy.",
    trade: { cols: ["", "BLUEBIRD", "NEXT"], win: 1, rows: [
      ["Usable energy", "103.7 Wh", "172.8 Wh"],
      ["Cruise power, 14 m/s", "72.5 W", "77.7 W"],
      ["Endurance", "1.14 h", "1.78 h"],
      ["Range at 14 m/s", "57.6 km", "89.7 km"],
      ["Stall, 1 g untrimmed", "9.5 m/s", "9.5 m/s"]] },
    method: "AeroBuildup (NeuralFoil) with a vortex-lattice cross-check in AeroSandbox; drag add-ons for skin, skid, windows, gaps and the pusher (Δc_d 0.014); propulsive efficiency 0.5; 20 % reserve.",
    stats: [["89.7", "km", "range at 14 m/s"], ["1.78", "h", "endurance"], ["11.6", "", "cruise L/D"]],
    figs: [],
  },
  {
    step: "Camera",
    decision: "Keep a mapping camera of about 12 MP: a lower-resolution global-shutter sensor would give back the gain.",
    why: "A global shutter avoids motion skew, but no global-shutter sensor of 5 MP or more with a driver for the companion's Qualcomm platform has been found yet. At the same 3.9 cm/px ground resolution a 5 MP frame is only 96 m wide, so the aircraft flies more, shorter lines and turns more often. Over a real square field with run-outs and turns, NEXT with 12 MP maps 352 ha per sortie; with 5 MP, 223 ha, the same as BLUEBIRD.",
    trade: { cols: ["Camera", "Ideal area", "Real field"], win: 1, rows: [
      ["BLUEBIRD, 12 MP", "256 ha", "220 ha"],
      ["NEXT, 12 MP", "400 ha", "352 ha"],
      ["NEXT, 5 MP global shutter", "258 ha", "223 ha"]] },
    method: "100 m above ground, 3.9 cm/px, 70/75 % overlap, 14 m/s, reserve held, no wind or transit; field with 40 m run-outs and 133 m turns at 30° bank. The formula matches the ground planner's path length.",
    stats: [["352", "ha", "per sortie, NEXT"], ["+60", "%", "vs BLUEBIRD"], ["3.9", "cm/px", "at 100 m"]],
    figs: [],
  },
  {
    step: "Internals as CAD",
    decision: "Model every new part as checked CAD before showing it, and fix every clash.",
    why: "The renders and the x-ray tour on this page show NEXT's insides as solid models at datasheet sizes, not as boxes: both packs cell by cell with nickel strip and straps, the companion with its heat spreader, both cameras with mounts and seals, the three radios with their cradles, and the trays, frames, inserts and screws. Each part is checked to lie inside the shell and not to touch any other. The first pass had 31 clashes; three rounds of fixes brought it to 0: the nose tray against the LTE modem and thermal camera, rails running out of depth over the aft belly, square holders in round holes, a strap against the mapping-camera shelf, and screw heads under the telemetry cradle.",
    trade: { cols: ["Check pass", "1", "2", "3", "4"], win: -1, rows: [
      ["Solid clashes", "31", "12", "1", "0"]] },
    method: "62 parts in CadQuery; containment against the NEXT outer mould line and pairwise solid intersection over 0.5 mm³. BLUEBIRD parts that carry over are mapped point by point into the deeper body. The centre-body structure itself is not designed yet.",
    stats: [["62", "", "new parts"], ["0", "", "outside the shell"], ["0", "", "clashes"]],
    figs: [["xray_sheet_iso.webp", "BLUEBIRD (left) and NEXT (right) from one camera, shell drawn as glass. Colours mark systems."]],
  },
];
