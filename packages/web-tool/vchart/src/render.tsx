import { useLayoutEffect, useRef } from 'react';
import { default as VChart, type ISpec } from '@visactor/vchart';

interface Props {
  spec: ISpec;
}

export default function RenderChart({ spec }: Props) {
  const domRef = useRef<HTMLDivElement>(null);
  const vchartRef = useRef<VChart>(null);

  useLayoutEffect(() => {
    if (!domRef.current) {
      return;
    }

    if (!vchartRef.current) {
      vchartRef.current = new VChart(spec, {
        dom: domRef.current,
      });
      vchartRef.current.renderSync();
    } else {
      vchartRef.current.updateSpec(spec);
    }
  }, [domRef.current, spec]);

  return <div ref={domRef} />;
}
