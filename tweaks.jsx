/* global React, ReactDOM, TweaksPanel, TweakSection, TweakSlider, TweakColor, TweakRadio, useTweaks */
const { useEffect } = React;

function SonaliTweaks(){
  const defaults = window.__TWEAK_DEFAULTS;
  const [t, setTweak] = useTweaks(defaults);
  const root = document.documentElement;

  useEffect(() => {
    document.body.classList.remove('bg-oxblood','bg-tandoor');
    document.body.classList.add('bg-' + t.bgStyle);
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--glass-blur', t.glassBlur + 'px');
    root.style.setProperty('--glass-brightness', t.glassBrightness);
    root.style.setProperty('--reveal-w', t.revealW + 'px');
    root.style.setProperty('--reveal-h', t.revealH + 'px');
    root.style.setProperty('--edge', t.edge);
    window.__easeAmt = t.ease;
    window.__cursorDelay = t.cursorDelay;
    window.__scrollDuration = t.scrollDuration;
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Background">
        <TweakRadio
          label="Tone"
          value={t.bgStyle}
          onChange={(v)=>setTweak('bgStyle', v)}
          options={[
            { value:'oxblood', label:'Oxblood' },
            { value:'tandoor', label:'Tandoor' },
          ]}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          onChange={(v)=>setTweak('accent', v)}
          options={['#e8843a','#c0392b','#d4a24a','#e0683a','#b8451f']}
        />
      </TweakSection>

      <TweakSection title="Liquid glass">
        <TweakSlider
          label="Blur"
          min={6} max={56} step={1}
          value={t.glassBlur}
          onChange={(v)=>setTweak('glassBlur', v)}
        />
        <TweakSlider
          label="Darkness"
          min={0.35} max={1} step={0.01}
          value={t.glassBrightness}
          onChange={(v)=>setTweak('glassBrightness', v)}
        />
      </TweakSection>

      <TweakSection title="Hero reveal">
        <TweakSlider
          label="Width"
          min={200} max={720} step={10}
          value={t.revealW}
          onChange={(v)=>setTweak('revealW', v)}
        />
        <TweakSlider
          label="Height"
          min={260} max={900} step={10}
          value={t.revealH}
          onChange={(v)=>setTweak('revealH', v)}
        />
        <TweakSlider
          label="Edge softness"
          min={5} max={45} step={1}
          value={t.edge}
          onChange={(v)=>setTweak('edge', v)}
        />
      </TweakSection>

      <TweakSection title="Cursor">
        <TweakSlider
          label="Trail (ease)"
          min={0.05} max={1} step={0.01}
          value={t.ease}
          onChange={(v)=>setTweak('ease', v)}
        />
        <TweakSlider
          label="Input delay (ms)"
          min={0} max={400} step={10}
          value={t.cursorDelay}
          onChange={(v)=>setTweak('cursorDelay', v)}
        />
        <TweakSlider
          label="Scroll glide (ms)"
          min={300} max={2800} step={50}
          value={t.scrollDuration}
          onChange={(v)=>setTweak('scrollDuration', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const host = document.createElement('div');
document.body.appendChild(host);
ReactDOM.createRoot(host).render(<SonaliTweaks/>);
