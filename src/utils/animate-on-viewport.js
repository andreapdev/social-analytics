export default function animateOnViewport(element) {
  const animationClassName = element.dataset.animation;
  const observer = new IntersectionObserver(entries => {
    element.classList.toggle( animationClassName, entries[0].isIntersecting );
  });

  observer.observe( element );
}
