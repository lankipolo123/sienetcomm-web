export const fadeSlideUp = (key) => `
  .client-card {
    opacity: 0;
    animation-duration: 0.3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-name: fadeSlideUp-${key};
  }
  @keyframes fadeSlideUp-${key} {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`