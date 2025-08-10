// ハンバーガーでドロワー開閉
const btn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
btn.addEventListener('click', () => drawer.classList.toggle('open'));

// ドロワー外クリックで閉じる（お好み）
document.addEventListener('click', (e) => {
  if (!drawer.classList.contains('open')) return;
  const inside = drawer.contains(e.target) || btn.contains(e.target);
  if (!inside) drawer.classList.remove('open');
});

