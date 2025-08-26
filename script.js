
    // Mobile menu toggle (accessible)
    const toggles = document.querySelectorAll('.mobile-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const headerBtn = toggles[0];

    function setOpen(open){
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      headerBtn.setAttribute('aria-expanded', String(open));
      if(open){ drawer.querySelector('a,button')?.focus(); }
    }

    toggles.forEach(btn => btn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      setOpen(!isOpen);
    }));

    // Close drawer with ESC
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape'){ setOpen(false); }
    });

    // Smooth scroll for same-page links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href');
        if(id.length > 1){
          const el = document.querySelector(id);
          if(el){
            e.preventDefault();
            window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior:'smooth' });
            setOpen(false);
          }
        }
      });
    });
 
