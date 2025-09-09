document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.getElementById('about-section');
  const aboutHeading = aboutSection.querySelector('.about');
  const aboutDesc = aboutSection.querySelector('p');

  let hasAnimated = false;

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        aboutHeading.classList.add('active');
        hasAnimated = true;

       
        setTimeout(() => {
          aboutHeading.classList.add('typed');
          aboutDesc.classList.add('active');
        }, 500); 
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.3
  });

  observer.observe(aboutSection);
});


document.addEventListener('DOMContentLoaded', function() {
  const skillsHeadings = document.querySelectorAll('.skills');
  
  skillsHeadings.forEach(skillsHeading => {
    let hasAnimated = false;
  

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        skillsHeading.classList.add('active');
        hasAnimated = true;
        setTimeout(() => {
          skillsHeading.classList.add('finished');
        }, 1000); 
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.4
  });

  observer.observe(skillsHeading);
});

});


document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.skills-section .card');
  const skillsSection = document.getElementById('skills-section');
  let hasAnimated = false;

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        cards.forEach(card => card.classList.add('visible'));
        hasAnimated = true;
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.3
  });

  observer.observe(skillsSection);
});


