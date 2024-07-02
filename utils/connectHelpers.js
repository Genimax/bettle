export function isMobile() {
  return window.innerWidth <= 500;
}

export function isDesktop() {
  return window.innerWidth >= 1050;
}

export function openLink(href, target = "_self") {
  window.open(href, target, "noreferrer noopener");
}
