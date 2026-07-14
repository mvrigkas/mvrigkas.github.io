document.addEventListener('DOMContentLoaded', () => {

  // ---- 1. Copy για τα <pre> tags ----
  const preElements = document.querySelectorAll('pre');

  preElements.forEach((pre) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'pre-wrapper';

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>
    `;

    button.addEventListener('click', () => {
      const text = pre.textContent;

      navigator.clipboard.writeText(text)
        .then(() => {
          button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>
          `;
          button.classList.add('copied');
          setTimeout(() => {
            button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            `;
            button.classList.remove('copied');
          }, 1500);
        })
        .catch((err) => {
          console.error('Copy error:', err);
          button.textContent = 'Error';
        });
    });

    wrapper.appendChild(button);
  });


  // ---- 2. Copy για τα div.span-boxcolor ----
  const boxElements = document.querySelectorAll('div.span-boxcolor');

  boxElements.forEach((box) => {
    const button = document.createElement('button');
    button.className = 'copy-btn-box';
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>
    `;

    button.addEventListener('click', () => {
      // Κλωνοποίηση του box ώστε να μην πειράξουμε το πραγματικό DOM
      const clone = box.cloneNode(true);

      // Αφαίρεση του κουμπιού από το clone
      const btnInClone = clone.querySelector('.copy-btn-box');
      if (btnInClone) {
        btnInClone.remove();
      }

      const text = clone.textContent.trim();

      navigator.clipboard.writeText(text)
        .then(() => {
          button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>
          `;
          button.classList.add('copied');
          setTimeout(() => {
            button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            `;
            button.classList.remove('copied');
          }, 1500);
        })
        .catch((err) => {
          console.error('Copy error:', err);
          button.textContent = 'Error';
        });
    });

    box.appendChild(button);
  });

});
