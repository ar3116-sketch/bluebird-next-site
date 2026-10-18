// X-ray tour: after the flight sequence the skin turns transparent and the camera visits each subsystem.
// sys = node prefix in assets/next_inside.glb (x_<sys>__<part>). dir = camera direction from the subsystem centre
// (glTF frame: x right wing, y up, z aft). pose = what the moving parts do while the stop is in focus.
// Numbers come from the NEXT result files: aero/next/results.yaml (aero, energy), cad/out/detailed/next/next_fit.yaml
// (layout, mass, CG), cad/out/detailed/next/oml_next.yaml (shape), cad/out/detailed/next/parts/next_parts.yaml (part
// sizes) and docs/planned/bluebird_next.md (decisions, survey area). NEXT is a concept: nothing here is built or flown.
export const STOPS = [
  {
    sys: "structure", title: "Structure", dir: [0.2, 0.92, 0.33], color: 0xe9eef3, zoom: 0.78,
    text: "NEXT keeps BLUEBIRD's wing: carbon tubes into a machined 7075 aluminium node, EPP foam outer wings under film. The centre body is deeper, 1.35 times the base section instead of 1.15, and is planned as a glass-skinned foam shell laid up in moulds, with printed frames bonded inside. The frames shown are a concept.",
    specs: [["Centre-body depth", "70.8 mm at x 140 (BLUEBIRD 60.3)"], ["Shell (planned)", "2 plies of E-glass over foam, vacuum-bagged"], ["Skin mass", "≈ 110 g vs 190 g printed (estimate)"]],
  },
  {
    sys: "controls", title: "Control surfaces", dir: [0.06, 0.3, 0.95], color: 0x8dc4e6, zoom: 0.8,
    text: "Unchanged from BLUEBIRD. Each elevon is split into an upper and a lower half on one hinge, each with its own servo. Together they pitch and roll the aircraft; opened like a clamshell they become the crow airbrake for a steep approach.",
    specs: [["Servos", "4 × EMAX ES08MD II, 2.4 kg·cm"], ["Travel", "±25° pitch/roll; crow 31° up / 19° down"], ["Cruise trim", "elevon −3.0° at 14 m/s"]],
  },
  {
    sys: "compute", title: "Compute", dir: [0.35, 0.85, -0.4], color: 0x7cf2c9,
    text: "The flight controller still flies; a companion board now thinks. ArduPlane on the Matek H743 owns stabilisation, navigation and every failsafe. The phone, its holder, USB hub and blower are gone: a Qualcomm QCS6490-class board on a low carrier rides on the underside of the hatch, where the phone did, runs both cameras and records video on board. Its leads cross the hinge in service loops, so opening the hatch swings it clear of the packs.",
    specs: [["Autopilot", "Matek H743-WING, ArduPlane"], ["Companion", "QCS6490-class module, ≤ 12 mm stack, ≈ 5 W (est.)"], ["Bay", "70 × 80 × 13 mm, on the hatch underside"]],
  },
  {
    sys: "sensors", title: "Sensors + payload", dir: [0.82, 0.02, -0.57], color: 0xc7a4ff, beams: true, zoom: 0.9,
    text: "The two cameras move to make room for the nose cells: the thermal core forward and left at x 102, the mapping camera outboard beside the main pack at x 200. Both look straight down (fields of view drawn shortened). With 67 % more usable energy, one sortie maps about 348 ha of a real field at 3.9 cm/px, against 220 ha for BLUEBIRD.",
    specs: [["Mapping", "M12 lens behind a 1 mm clear window; 3.9 cm/px at 100 m"], ["Thermal", "256 × 192 core, open aperture"], ["Survey area", "≈ 348 ha per sortie (BLUEBIRD ≈ 220)"]],
  },
  {
    sys: "comms", title: "Comms", dir: [-0.2, 0.9, 0.3], color: 0xffb86b,
    text: "Four links, each in its own bay in the nose: 915 MHz telemetry to the ground station, 2.4 GHz ExpressLRS for the safety pilot, an LTE modem with two antennas on the inner belly, and an Iridium short-burst satellite modem with its patch under the top skin. Glass passes radio, so every antenna stays inside the shell.",
    specs: [["Telemetry + RC", "SiK 915 MHz; ExpressLRS 2.4 GHz"], ["Cellular", "Quectel EG25-G class LTE modem"], ["Satellite", "Iridium 9603N, short-burst data"]],
  },
  {
    sys: "compliance", title: "Compliance", dir: [0.35, 0.9, 0.3], color: 0xff7a9a, minDist: 0.95,
    text: "The broadcast Remote ID module stays under the avionics cover. LTE and satellite links are there for flights beyond visual line of sight, which need FAA approval that NEXT does not have. Every radio is chosen from parts with existing FCC grants, and each sits on its own tray and plug so a discontinued part can be replaced.",
    specs: [["Remote ID", "Dronetag BS broadcast module"], ["Operations", "Part 107, visual line of sight today"], ["Beyond line of sight", "needs an FAA waiver; not held"]],
  },
  {
    sys: "power", title: "Power", dir: [-0.35, 0.85, -0.3], color: 0xffd54a,
    text: "Twelve Molicel P50B 21700 cells in two removable packs: eight in the main bay, four in a new bay in the nose, each on one plug and joined at a power board through ideal diodes. Open the hatch, pull two plugs and both packs lift straight out; or leave them in and charge through the port under the hatch, which keeps the pair matched. The nose cells are the forward mass the phone used to provide, so NEXT balances at its target with no ballast.",
    specs: [["Packs", "P50B 4S2P 144 Wh + 4S1P 72 Wh, both removable"], ["Usable", "172.8 Wh, 20 % kept in reserve (BLUEBIRD 103.7)"], ["Balance", "CG x 313.0 mm, 8.0 % static margin, 0 g ballast"]],
  },
  {
    sys: "propulsion", title: "Propulsion", dir: [0.55, 0.42, 0.72], color: 0xa9c1d6,
    text: "The centre pusher and folding prop carry over. The firewall is drilled for two motors: the T-Motor AT2814 flown on BLUEBIRD and a Vertiq 40-06 as a later swap, with the same 1.8 mm minimum ligament as today.",
    specs: [["Motor", "T-Motor AT2814 900 KV (Vertiq 40-06 pattern drilled)"], ["Prop", "11×7 folding"], ["Cruise", "L/D 11.6 at 14 m/s, 77.7 W, 89.7 km"]],
  },
  {
    sys: "landing", title: "Launch + landing", dir: [0.82, -0.3, 0.35], color: 0x5fd3a0,
    text: "NEXT weighs 2.70 kg, 50 g more than BLUEBIRD, so it keeps the replaceable TPU skid sled, the belly cones and the passive launch dolly. Its stall speed rises by 0.1 m/s.",
    specs: [["Skid", "TPU-95A sled (BLUEBIRD's)"], ["Stall", "9.6 m/s untrimmed, ≈ 10.0 trimmed"], ["Launch", "passive dolly or hand / bungee"]],
  },
];
