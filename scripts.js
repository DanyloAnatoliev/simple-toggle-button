const toggleBtn = document.getElementById('theme-toggle');

const toggleBtnChecked = () => {
  toggleBtn.checked === true ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
}

toggleBtn.addEventListener('change', toggleBtnChecked);