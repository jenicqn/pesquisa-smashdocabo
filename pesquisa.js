document.addEventListener('DOMContentLoaded', () => {

  // Botões NPS
  const cont = document.getElementById('indicacaoBotoes');
  const inp  = document.getElementById('inputIndicacao');

  for (let i = 0; i <= 10; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = i;
    btn.classList.add(i <= 4 ? 'vermelho' : i <= 7 ? 'amarelo' : 'verde');

    btn.addEventListener('click', () => {
      cont.querySelectorAll('button').forEach(b => b.classList.remove('selecionado'));
      btn.classList.add('selecionado');
      inp.value = i;
    });

    cont.appendChild(btn);
  }

  // Estrelas
  document.querySelectorAll('.estrelas').forEach(rating => {
    const inputs = Array.from(rating.querySelectorAll('input'));
    const labels = Array.from(rating.querySelectorAll('label'));

    function paint(idx) {
      labels.forEach((lbl, i) => {
        lbl.classList.toggle('filled', i <= idx);
      });
    }

    labels.forEach((lbl, idx) => {
      lbl.addEventListener('click', () => {
        inputs[idx].checked = true;
        paint(idx);
      });

      lbl.addEventListener('mouseover', () => paint(idx));
    });

    rating.addEventListener('mouseleave', () => {
      const checkedIdx = inputs.findIndex(i => i.checked);
      paint(checkedIdx);
    });
  });

});
