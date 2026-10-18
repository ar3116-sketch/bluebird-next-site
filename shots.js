// Images for the placeholder slots (data-slot in index.html; q-* are the Design-quality tabs).
// Only finished, reviewed media are listed; a slot without an entry keeps its placeholder.
// tag: what the viewer is looking at. Every image is a render of a concept: NEXT has not been built or flown.
// 'Illustration' = AI-polished (tools/gpt_illustrations.sh, docs/planned/next_pitch/gpt); never beside a design number.
// Sources: docs/planned/next_pitch (pitch renders, site/tools/render/next_*), site/tools/render/xray_compare.sh (x-ray).
const XRAY = "Renders from the project CAD. The shell is drawn as glass; colours mark systems, not materials.";
const ILL = "Illustration: AI-generated from a BLUEBIRD scene render, with the NEXT model put in its place at the same size. NEXT has not been built or flown.";
export const SHOTS = {
  "card-aircraft": { src: "assets/renders/card_next_sky2", tag: "Render",
    alt: "BLUEBIRD NEXT, a 1.8 m blended wing in a deep blue livery that dissolves into white feathers toward the trailing edge.",
    cap: "BLUEBIRD NEXT in its Sky Sweep II show livery. Render of the NEXT outer shape; the aircraft has not been built." },
  "card-companion": { src: "assets/renders/xray_next_iso", tag: "Render",
    alt: "X-ray of BLUEBIRD NEXT from above and behind: companion board under the hatch above the main pack, nose cells, cameras and radios.",
    cap: `Inside NEXT: the companion board on the hatch above the eight-cell main pack, four cells in the nose, both cameras and the radio bays. ${XRAY}` },
  "card-power": { src: "assets/renders/xray_next_top", tag: "Render",
    alt: "X-ray of BLUEBIRD NEXT from above: eight cells in the main bay and four in the nose.",
    cap: `Top view: eight P50B cells on the main tray, four in the nose bay ahead of them. ${XRAY}` },
  "card-links": { src: "assets/renders/xray_next_side", tag: "Render",
    alt: "X-ray of BLUEBIRD NEXT from the side: the deeper centre body with radios in the nose.",
    cap: `Side view: the deeper centre body, with the telemetry, LTE and satellite radios in the nose. ${XRAY}` },
  "q-companion": { src: "assets/renders/xray_sheet_iso", tag: "Render",
    alt: "BLUEBIRD and BLUEBIRD NEXT x-rays side by side: the phone and its hub are replaced by a flat companion board.",
    cap: `BLUEBIRD (left) and NEXT (right) from one camera: the phone, hub and blower give way to a 13 mm companion bay. ${XRAY}` },
  "q-power": { src: "assets/renders/xray_sheet_top", tag: "Render",
    alt: "BLUEBIRD and BLUEBIRD NEXT x-rays from above: eight cells become twelve, split between the bay and the nose.",
    cap: `From above: BLUEBIRD's eight cells (left) and NEXT's twelve, eight in the bay and four in the nose (right). ${XRAY}` },
  "q-swap": { src: "assets/renders/xray_next_iso", tag: "Render",
    alt: "X-ray of BLUEBIRD NEXT showing each component on its own tray.",
    cap: `Every component sits on a molded tray screwed to heat-set inserts in the bonded frames. ${XRAY}` },
  "q-links": { src: "assets/renders/xray_sheet_side", tag: "Render",
    alt: "BLUEBIRD and BLUEBIRD NEXT x-rays from the side: NEXT's deeper body holds LTE, satellite and telemetry radios in the nose.",
    cap: `Side views: NEXT's centre body is 10.5 mm deeper at x 140, which makes room for the radio bays in the nose. ${XRAY}` },
  "use-conservation": { src: "assets/renders/use_conservation_next", tag: "Illustration",
    alt: "BLUEBIRD NEXT, small and deep blue, flying low over a waterhole in dry red savanna with scattered trees.",
    cap: `A wildlife survey over a waterhole. ${ILL}` },
  "use-agriculture": { src: "assets/renders/use_agriculture_next", tag: "Illustration",
    alt: "BLUEBIRD NEXT flying low over a patchwork of ploughed and green crop fields.",
    cap: `Mapping crop fields at low altitude. ${ILL}` },
};
export const FILM = null;
