'use client';

import { useMemo } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';

// ITM entity code -> ISO 3166-1 numeric id used by world-atlas
const NUMERIC_ID: Record<string, string> = {
  cd: '180',
  tz: '834',
  tg: '768',
  ng: '566',
  gb: '266', // Gabon (the site uses "gb" for Gabon)
  ug: '800',
  bj: '204',
  ao: '024',
  ke: '404',
  rw: '646',
  cg: '178',
  cm: '120',
  bi: '108',
  zm: '894',
  za: '710',
  de: '276',
  ci: '384',
  sn: '686',
  gn: '324',
};

const WIDTH = 1000;
const HEIGHT = 800;

type Props = {
  activeCodes: string[];
  hovered: string | null;
  labels: Record<string, string>;
  onHover: (code: string | null) => void;
  onSelect: (code: string) => void;
};

export default function WorldMap({
  activeCodes,
  hovered,
  labels,
  onHover,
  onSelect,
}: Props) {
  const { countries, centroids } = useMemo(() => {
    const geo: any = feature(world as any, (world as any).objects.countries);
    // Centered on Africa so the continent fills the frame, like ITM Holding
    const projection = geoNaturalEarth1()
      .scale(440)
      .center([22, 12])
      .translate([WIDTH * 0.44, HEIGHT * 0.5]);
    const path = geoPath(projection);
    const idToCode: Record<string, string> = {};
    Object.entries(NUMERIC_ID).forEach(([code, id]) => (idToCode[id] = code));
    const centroids: Record<string, [number, number]> = {};
    const countries = geo.features.map((f: any, i: number) => {
      const code = idToCode[String(f.id).padStart(3, '0')];
      if (code) centroids[code] = path.centroid(f) as [number, number];
      return { key: `${f.id ?? 'x'}-${i}`, code, d: path(f) as string };
    });
    return { countries, centroids };
  }, []);

  const hoveredPoint = hovered ? centroids[hovered] : null;

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Map"
    >
      <g>
        {countries
          .filter((c: any) => !c.code || !activeCodes.includes(c.code))
          .map((c: any) => (
            <path
              key={c.key}
              d={c.d}
              className="fill-[#F1F3F6] stroke-white"
              strokeWidth={0.6}
            />
          ))}
      </g>
      <g>
        {countries
          .filter((c: any) => c.code && activeCodes.includes(c.code))
          .map((c: any) => {
            const isActive = hovered === c.code;
            return (
              <path
                key={c.key}
                d={c.d}
                onMouseEnter={() => onHover(c.code)}
                onMouseLeave={() => onHover(null)}
                onClick={() => onSelect(c.code)}
                strokeWidth={isActive ? 1.2 : 0.6}
                className={`cursor-pointer stroke-white transition-all duration-300 ${
                  isActive ? 'fill-[#29BDBC]' : 'fill-[#2A4296]'
                }`}
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  filter: isActive
                    ? 'drop-shadow(0 4px 6px rgba(18,56,185,0.45))'
                    : undefined,
                }}
              />
            );
          })}
      </g>
      {hovered && hoveredPoint && (
        <g pointerEvents="none">
          <rect
            x={hoveredPoint[0] - 5 * (labels[hovered]?.length ?? 6) - 10}
            y={hoveredPoint[1] - 52}
            width={10 * (labels[hovered]?.length ?? 6) + 20}
            height={28}
            rx={14}
            fill="#1238B9"
          />
          <text
            x={hoveredPoint[0]}
            y={hoveredPoint[1] - 33}
            textAnchor="middle"
            fontSize={15}
            fontWeight={600}
            fill="#fff"
          >
            {labels[hovered]}
          </text>
        </g>
      )}
    </svg>
  );
}
