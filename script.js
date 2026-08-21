// Links e configurações editáveis
const config = {
  social: {
    github: 'https://github.com/elibertosc1',
    instagram: 'https://instagram.com/elibertosc',
    linkedin: '#',
    whatsapp: 'https://wa.me/5583986693820'
  }
};

// Número curto (sem sinais) usado para envio via wa.me
config.whatsappNumber = '5583986693820';

// Substitua o src de assets/images/dev-photo.svg pela sua foto quando estiver pronto.

// Active state for multi-page navigation
const currentPage = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.vertical-nav li').forEach(li => {
  const link = li.querySelector('a');
  if(!link) return;
  const href = (link.getAttribute('href') || '').toLowerCase();
  if(currentPage === href || (currentPage === '' && href === 'index.html')) {
    li.classList.add('active');
  } else {
    li.classList.remove('active');
  }
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const vnav = document.getElementById('verticalNav');
if(navToggle){
  navToggle.addEventListener('click',()=>{
    const isOpen = vnav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Intersection observer for reveal animations
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }
  });
},{threshold:0.12});

document.querySelectorAll('.section, .photo-wrap img, .card, .project-card, .contact-link').forEach(el=>observer.observe(el));

// Counters (numbers easy to edit in HTML: use data-target attribute)
document.querySelectorAll('.counter').forEach(counter=>{
  const num = counter.querySelector('.num');
  const target = parseInt(counter.dataset.target||num.textContent.replace(/\\D/g,''),10)||0;
  num.textContent = target + '+';
});

// Formulário removido: contatos agora são exibidos diretamente no HTML como links/buttons.

// Substituir links de redes sociais (opcional)
document.getElementById('github').href = config.social.github;
document.getElementById('instagram').href = config.social.instagram;
document.getElementById('linkedin').href = config.social.linkedin;

// Tenta carregar imagens processadas: webp -> png -> mantém fallback atual
;(function(){
  const imgEl = document.getElementById('devPhoto');
  if(!imgEl) return;
  // Ensure immediate visible fallback while we probe for processed files
  // Use foto2.png as the immediate visible image for local preview
  imgEl.src = 'assets/images/dev.png';
  const webp = 'assets/images/dev-photo.webp';
  const png = 'assets/images/dev-photo.png';
  const cacheBust = src => src + '?v=' + Date.now();

  const setSrc = (src) => {
    try{ imgEl.src = cacheBust(src); }catch(e){}
    imgEl.classList.add('processed');
  };

  const probeWebp = new Image();
  probeWebp.onload = function(){ setSrc(webp); };
  probeWebp.onerror = function(){
    const probePng = new Image();
    probePng.onload = function(){ setSrc(png); };
    probePng.onerror = function(){
      // nenhum processado encontrado — mantém o src atual (ex: foto2.png)
      imgEl.classList.add('processed');
    };
    probePng.src = cacheBust(png);
  };
  probeWebp.src = cacheBust(webp);
})();

// Brief button: open WhatsApp with a short briefing template
const briefBtn = document.getElementById('briefBtn');
if(briefBtn){
  briefBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const phone = config.whatsappNumber || (config.social && config.social.whatsapp && config.social.whatsapp.replace(/[^0-9]/g,'')) || '';
    if(!phone){ alert('Número de WhatsApp não configurado.'); return; }
    const text = `Olá, sou *${window.prompt('Seu nome (opcional)') || 'Interessado'}*. Gostaria de solicitar um orçamento/briefing para um projeto. Descreva brevemente:`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url,'_blank');
  });
}

// Comentários úteis:
// - Coloque sua foto em: assets/images/dev-photo.svg (mesmo nome) ou altere o elemento <img> em index.html
// - Troque textos e projetos diretamente em index.html
// - Atualize links de redes sociais em 'config.social' acima
// - Para enviar formulário ao servidor, faça fetch() para sua API no listener de submit
