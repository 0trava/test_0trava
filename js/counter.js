document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".elementor-counter-number");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-to-value");
      const duration = +counter.getAttribute("data-duration") || 2000;
      const increment = target / (duration / 20);

      let count = +counter.innerText;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});