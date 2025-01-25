document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
    
  window.addEventListener('scroll', function() {
      if (window.scrollY > headerHeight) {
          header.classList.add('header--scrolled');
      } else {
          header.classList.remove('header--scrolled');
      }
  });
  
   const swiper = new Swiper(".portfolio__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
       breakpoints: {
           768: {
             slidesPerView: 2,
          },
         480: {
             slidesPerView: 1,
         },
       }
  });
 

// script.jsに追加
    const titleElement = document.querySelector('.hero__title--main');
    const originalText = titleElement.textContent;
    const speed = 50; // タイピング速度（ms）
    const pause = 3333; // 停止時間（ms）
  
    // 既存のテキストを分解
    titleElement.innerHTML = `
      <span class="typewriter-text"></span>
      <span class="typewriter-cursor"></span>
    `;
  
    const textElement = titleElement.querySelector('.typewriter-text');
    const cursorElement = titleElement.querySelector('.typewriter-cursor');
  
    let isDeleting = false;
    let index = 0;
  
    function animate() {
      const currentText = textElement.textContent;
      const targetText = originalText;
  
      if (!isDeleting) {
        // タイピングモード
        textElement.textContent = targetText.slice(0, index + 1);
        index++;
  
        if (index === targetText.length) {
          isDeleting = true;
          setTimeout(animate, pause);
          return;
        }
      } else {
        // 削除モード
        textElement.textContent = currentText.slice(0, -1);
        index--;
  
        if (index === 0) {
          isDeleting = false;
        }
      }
  
      setTimeout(animate, isDeleting ? speed / 2 : speed);
    }
  
    // アニメーション開始
    animate();
  });