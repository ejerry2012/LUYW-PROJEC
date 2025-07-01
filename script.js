 const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

// Show/hide menu + animate icon
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggle.classList.toggle("active");
});

// Scroll background change
window.addEventListener("scroll", function () {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});



const headers = document.querySelectorAll('.accordion-content header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const parent = header.parentElement;
        const description = parent.querySelector('.description');

        // Close all others
        document.querySelectorAll('.accordion-content').forEach(item => {
          if (item !== parent) {
            item.classList.remove('active');
            item.querySelector('.description').style.maxHeight = null;
          }
        });

        // Toggle current
        parent.classList.toggle('active');
        if (parent.classList.contains('active')) {
          description.style.maxHeight = description.scrollHeight + 'px';
        } else {
          description.style.maxHeight = null;
        }
      });
    });




   const swiper = new Swiper('.testimonialSwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoHeight: false, // ✅ Prevent height jump
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});
