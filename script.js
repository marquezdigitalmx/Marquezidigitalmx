  // Scroll reveal for elements marked .reveal
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal');

  if(prefersReduced){
    revealEls.forEach(el => el.classList.add('in'));
  } else if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
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
