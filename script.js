  // Ticking timecode, synced loosely to the playhead loop
  const tc = document.getElementById('timecode');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;
  function pad(n){ return String(n).padStart(2,'0'); }
  function tick(){
    frame = (frame + 1) % (7*30); // 7s loop at ~30fps
    const totalFrames = frame;
    const s = Math.floor(totalFrames/30);
    const f = totalFrames % 30;
    tc.textContent = `00:00:${pad(s)}:${pad(f)}`;
  }
  if(!prefersReduced){
    setInterval(tick, 1000/30);
  } else {
    tc.textContent = '00:00:03:15';
  }

  function sendToWhatsApp(){
    const name = document.getElementById('f-name').value.trim();
    const business = document.getElementById('f-business').value.trim();
    const message = document.getElementById('f-message').value.trim();
    let text = 'Hola, quiero cotizar un proyecto.';
    if(name) text += ` Soy ${name}.`;
    if(business) text += ` Marca/negocio: ${business}.`;
    if(message) text += ` ${message}`;
    const url = `https://wa.me/525543192379?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }