export default (file, name) => {
  const iconFontStyles = `@font-face {
    src: url(${file});
    font-family: "${name}";
  }`;

  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
      style.styleSheet.cssText = iconFontStyles;
  } else {
      style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
}