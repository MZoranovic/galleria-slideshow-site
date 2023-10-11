function generateGallery({
  img,
  imgAuthor,
  title,
  author,
  year,
  paragraph,
  imgLarge,
}) {
  const oldContent = document.querySelector('.content');

  if (oldContent) oldContent.remove();

  const content = createNode(
    {
      tag: 'div',
      classList: ['content'],
    },
    main
  );

  createNode(
    {
      tag: 'img',
      src: img,
      classList: ['thumbnail'],
    },
    content
  );

  createNode(
    {
      tag: 'img',
      src: imgAuthor,
      classList: ['artist'],
    },
    content
  );

  const rectangle = createNode(
    {
      tag: 'div',
      classList: ['rectangle'],
    },
    content
  );

  createNode(
    {
      tag: 'h1',
      textContent: title,
    },
    rectangle
  );

  createNode(
    {
      tag: 'h4',
      textContent: author,
    },
    rectangle
  );

  createNode(
    {
      tag: 'h2',
      textContent: year,
    },
    content
  );

  const description = createNode(
    {
      tag: 'div',
      classList: ['description'],
    },
    content
  );

  createNode(
    {
      tag: 'p',
      textContent: paragraph,
    },
    description
  );

  createNode(
    {
      tag: 'a',
      textContent: 'GO TO SOURCE',
      href: './index.html',
    },
    description
  );

  const button = createNode(
    {
      tag: 'button',
      classList: ['button'],
    },
    content
  );

  button.addEventListener('click', function (e) {
    e.stopPropagation();
    slide(imgLarge);
  });

  const modal = createNode(
    {
      tag: 'div',
    },
    button
  );
  createNode(
    {
      tag: 'img',
      id: '#gallery-modal',
    },
    modal
  );
  createNode(
    {
      tag: 'div',
      classList: ['header'],
    },
    modal
  );

  createNode(
    {
      tag: 'img',
      src: 'assets/shared/icon-view-image.svg',
    },
    button
  );

  createNode(
    {
      tag: 'span',
      textContent: 'VIEW IMAGE',
    },
    button
  );

  const footer = createNode(
    {
      tag: 'div',
      classList: ['footer'],
    },
    content
  );

  const footerContent = createNode(
    {
      tag: 'div',
    },
    footer
  );

  createNode(
    {
      tag: 'h6',
      textContent: title,
    },
    footerContent
  );

  createNode(
    {
      tag: 'h5',
      textContent: author,
    },
    footerContent
  );

  const arrows = createNode(
    {
      tag: 'div',
      classList: ['arrows'],
    },
    footer
  );

  const prev = createNode(
    {
      tag: 'img',
      src: 'assets/shared/icon-back-button.svg',
      id: 'prev',
    },
    arrows
  );

  prev.addEventListener('click', function () {
    if (currentSlide > 0) {
      currentSlide -= 1;
    } else currentSlide = data.length - 1;

    // currentSlide = Math.max(0,currentSlide-1)
    const currentData = data[currentSlide];
    generateGallery({
      author: currentData.artist.name,
      title: currentData.name,
      img: currentData.images.thumbnail,
      imgAuthor: currentData.artist.image,
      imgLarge: currentData.images.hero.small,
      paragraph: currentData.description,
      year: currentData.year,
    });
  });
  const next = createNode(
    {
      tag: 'img',
      src: 'assets/shared/icon-next-button.svg',
      id: 'next',
    },
    arrows
  );
  next.addEventListener('click', function () {
    // currentSlide

    if (currentSlide < data.length - 1) {
      currentSlide += 1;
    } else currentSlide = 0;

    const currentData = data[currentSlide];
    generateGallery({
      author: currentData.artist.name,
      title: currentData.name,
      img: currentData.images.thumbnail,
      imgAuthor: currentData.artist.image,
      imgLarge: currentData.images.hero.small,
      paragraph: currentData.description,
      year: currentData.year,
    });
    // currentSlide = Math.min(data.length-1,currentSlide+1)
  });

  document.querySelector('main').append(content);
}

function slide(imgLarge) {
  const modal = document.querySelector('#gallery-modal');
  modal.innerHTML = '';
  modal.style.display = 'flex';
  modal.innerHTML = `<img src="${imgLarge}" />`;
  document.addEventListener(
    'click',
    function () {
      // setTimeout(()=>{

      modal.style.display = 'none';
      clearInterval(interval);
      // },3000)
    },
    {
      once: true,
    }
  );
  return modal;
}
