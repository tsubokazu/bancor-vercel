// plugins/fadeInDirective.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('fade-in', {
    mounted(el) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('fade-in');
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0 }
      );

      observer.observe(el);
    },
  });
});
