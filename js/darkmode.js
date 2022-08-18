const changeThemeCheckbox = document.getElementById('checkbox');

const Theme = {
  LIGHT: 'light',
  DARK: 'dark'
}

let currentTheme = Theme.LIGHT;

const now = new Date();
const hour = now.getHours();

if (hour > 6 && hour < 21) {
  currentTheme = Theme.LIGHT;
} else {
  currentTheme = Theme.DARK;
}

// Set initial style if mode is dark
if (currentTheme === Theme.DARK) {
  enableDarkTheme();
  changeThemeCheckbox.checked = true;
}

changeThemeCheckbox.onclick = function () {
  currentTheme = isDark(currentTheme) ? Theme.LIGHT : Theme.DARK;

  if (isDark(currentTheme)) {
    enableDarkTheme();
  } else {
    const darkThemeEl = document.getElementById('dark-theme');

    if (darkThemeEl) {
      darkThemeEl.remove()
    };
  }
}

function isDark(theme) {
  return theme === Theme.DARK;
}

function enableDarkTheme() {
  document.getElementsByTagName("head")[0].insertAdjacentHTML(
    "beforeend",
    "<link id= \"dark-theme\" rel=\"stylesheet\" href=\"css/dark-theme.css\" />");
}
