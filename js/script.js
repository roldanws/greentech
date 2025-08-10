
const galleries = {
  basico: [
    { type: 'video', src: 'video/interiormp2.mp4' },
    { type: 'video', src: 'video/kit2mp-1.mp4' }
    
  ],
  pro: [
    { type: 'video', src: 'video/interiormp4.mp4' },
    { type: 'video', src: 'video/kit4mp-1.mp4' }
  ],
  '4k': [
    { type: 'video', src: 'video/interiormp5.mp4' },
    { type: 'video', src: 'video/exteriormp5.mp4' }
  ]
};

const indexes = { basico: 0, pro: 0, '4k': 0 };

function nextMedia(kit) {
  const container = document.getElementById(`gallery-${kit}`);
  const current = galleries[kit][indexes[kit]];
  container.innerHTML = '';
  indexes[kit] = (indexes[kit] + 1) % galleries[kit].length;
  const next = galleries[kit][indexes[kit]];

  if (next.type === 'img') {
    const img = document.createElement('img');
    img.src = next.src;
    container.appendChild(img);
  } else {
    const video = document.createElement('video');
    video.src = next.src;
    video.controls = true;
    container.appendChild(video);
  }
}

// Inicializar galerías con primera imagen
window.onload = () => {
  Object.keys(galleries).forEach(kit => nextMedia(kit));
};
