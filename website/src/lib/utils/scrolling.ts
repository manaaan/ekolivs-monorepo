// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function scrollIntoView({ target }: { target: any }) {
  const el = document.querySelector(target.getAttribute('href'));
  if (!el) return;
  el.scrollIntoView({
    behavior: 'smooth'
  });
}
