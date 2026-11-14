import styles from "./IntroSpray.module.css";

// Opening shot: the blue spray gun of the logo fires paint and the rest of the logo
// is painted in from left to right. Pure CSS, so it runs before hydration and always
// ends hidden. It lives in the root layout, so it plays once per page load, not on in-site navigation.

// deterministic droplets (same markup on server and client)
function droplets(count: number) {
  let seed = 1985;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  return Array.from({ length: count }, (_, i) => ({
    dx: 16 + rnd() * 66, // how far along the logo it flies (% of logo width)
    dy: (rnd() - 0.5) * 2 * (6 + rnd() * 22), // vertical spread of the spray cone (% of logo height)
    size: 5 + rnd() * 11,
    delay: 0.7 + (i / count) * 1.75 + rnd() * 0.12, // spread over the 2.2s paint pass
    color: rnd() < 0.62 ? "#e00000" : "#002398",
  }));
}

const DROPS = droplets(48);

const WAIT = `(function(){var el=document.getElementById("intro-spray");if(!el)return;el.setAttribute("data-wait","");var img=el.querySelector("img"),done=false;function go(){if(done)return;done=true;requestAnimationFrame(function(){requestAnimationFrame(function(){el.removeAttribute("data-wait")})})}if(img.complete){(img.decode?img.decode():Promise.resolve()).then(go,go)}else{img.addEventListener("load",function(){(img.decode?img.decode():Promise.resolve()).then(go,go)});img.addEventListener("error",go)}setTimeout(go,2500)})();`;

export function IntroSpray() {
  return (
    <div id="intro-spray" suppressHydrationWarning className={`intro-spray ${styles.intro}`} aria-hidden="true">
      <div className={styles.stage}>
        <div className={styles.gun}>
          <img className={styles.logo} src="/brand/primapox-logo-intro.webp" alt="" width={840} height={340} fetchPriority="high" decoding="sync" />
          <span className={styles.cover} />
          <span className={styles.flash} />
          {DROPS.map((d, i) => (
            <i
              key={i}
              className={styles.drop}
              style={{
                "--dx": `${d.dx.toFixed(1)}cqw`,
                "--dy": `${(d.dy * 0.405).toFixed(1)}cqw`, // logo height is 40.5% of its width
                "--s": `${(d.size / 5.6).toFixed(2)}cqw`,
                "--d": `${d.delay.toFixed(2)}s`,
                background: d.color,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
      {/* hold every animation until the logo is decoded, so slow phones see the whole sequence
          instead of a blank stage followed by the finished logo; gives up after 2.5s */}
      <script dangerouslySetInnerHTML={{ __html: WAIT }} />
    </div>
  );
}
