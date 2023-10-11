let currentSlide = 0;
let interval = null;
function createNode(
  {
    tag = 'p',
    classList = null,
    id = null,
    textContent = null,
    href = null,
    src = null,
    data = null,
  },
  parentNode = document.body
) {
  const element = document.createElement(tag);
  if (classList) {
    element.classList.add(...classList);
  }
  if (id) {
    element.id = id;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (href) {
    element.href = href;
  }
  if (src) {
    element.src = src;
  }
  if (data) {
    element.dataset.title = data;
  }
  parentNode.appendChild(element);
  return element;
}

const intro = createNode({
  tag: 'div',
  classList: ['intro'],
});

const main = createNode({
  tag: 'main',
});

createNode(
  {
    tag: 'img',
    src: './assets/shared/logo.svg',
  },
  intro
);
const slideShow = createNode(
  {
    tag: 'h5',
    textContent: 'START SLIDESHOW',
  },
  intro
);

slideShow.addEventListener('click', function (e) {
  e.stopPropagation();
  const show = data[currentSlide];
  slide(show.images.hero.small);
  interval = setInterval(function () {
    if (currentSlide === data.length - 1) currentSlide = 0;
    else currentSlide++;
    const show = data[currentSlide];
    slide(show.images.hero.small);
  }, 3000);
});

function generateImage(img, title, author, parent, imgClassName) {
  const gallery = createNode(
    {
      tag: 'div',
      data: title,
    },
    main
  );

  gallery.addEventListener('click', function (e) {
    const dataTarget = e.target.dataset.title;
    const imageData = data.find(({ name }) => {
      return name === dataTarget;
    });
    const idxOfSlide = data.findIndex(({ name }) => {
      return name === dataTarget;
    });
    currentSlide = idxOfSlide;
    generateGallery({
      author,
      title,
      paragraph: imageData.description,
      img,
      imgAuthor: imageData.artist.image,
      year: imageData.year,
      imgLarge: imageData.images.hero.small,
    });
  });

  createNode(
    {
      tag: 'img',
      src: img,
      classList: [imgClassName],
      data: title,
    },
    gallery
  );

  const galleryContent = createNode(
    {
      tag: 'div',
      classList: ['galleryContent'],
    },
    gallery
  );
  createNode(
    {
      tag: 'h3',
      textContent: title,
    },
    galleryContent
  );
  createNode(
    {
      tag: 'h5',
      textContent: author,
    },
    galleryContent
  );

  parent.append(gallery);
}

const firstRow = createNode(
  {
    tag: 'div',
    classList: ['image'],
  },
  main
);

const secondRow = createNode(
  {
    tag: 'div',
    classList: ['image'],
  },
  main
);

const thirdRow = createNode(
  {
    tag: 'div',
    classList: ['image'],
  },
  main
);

const fourthRow = createNode(
  {
    tag: 'div',
    classList: ['image'],
  },
  main
);

generateImage(
  './assets/starry-night/gallery.jpg',
  'Starry Night',
  'Vincent Van Gogh',
  firstRow,
  'small'
);
generateImage(
  'assets/girl-with-pearl-earring/gallery.jpg',
  'Girl with a Pearl Earring',
  ' Johannes Vermeer',
  secondRow,
  'medium-rare'
);
generateImage(
  'assets/guernica/gallery.jpg',
  'Guernica',
  ' Pablo Picasso',
  thirdRow,
  'medium'
);
generateImage(
  'assets/the-storm-on-the-sea-of-galilee/gallery.jpg',
  'The Storm on the Sea of Galilee',
  'Rembrandt',
  firstRow,
  'medium'
);
generateImage(
  './assets/lady-with-an-ermine/hero-large.jpg',
  'Lady with an Ermine',
  'Leonardo da Vinci',
  firstRow,
  'medium'
);
generateImage(
  './assets/the-boy-in-the-red-vest/hero-large.jpg',
  'The Boy in the Red Vest',
  'Edward Hopper',
  firstRow,
  'small'
);
generateImage(
  './assets/the-great-wave-off-kanagawa/hero-large.jpg',
  'The Great Wave off Kanagawa',
  'Hokusai',
  secondRow,
  'small'
);
generateImage(
  './assets/the-night-cafe/hero-large.jpg',
  'The Night Café',
  'Vincent Van Gogh',
  secondRow,
  'small'
);
generateImage(
  'assets/arnolfini-portrait/gallery.jpg',
  'Arnolfini Portrait',
  'Jan van Eyck',
  secondRow,
  'extra'
);
generateImage(
  './assets/van-gogh-self-portrait/hero-large.jpg',
  'Van Gogh Self-portrait',
  'Vincent Van Gogh',
  thirdRow,
  'large'
);
generateImage(
  './assets/mona-lisa/hero-large.jpg',
  'Mona Lisa',
  ' Leonardo da Vinci',
  thirdRow,
  'large'
);
generateImage(
  './assets/penitent-magdalene/hero-large.jpg',
  'Penitent Magdalene',
  'Artemisia Gentileschi',
  fourthRow,
  'small'
);
generateImage(
  './assets/the-sleeping-gypsy/hero-large.jpg',
  'The Sleeping Gypsy',
  'Henri Rousseau',
  fourthRow,
  'small'
);
generateImage(
  './assets/the-basket-of-apples/hero-large.jpg',
  'The Basket of Apples',
  'Paul Cezzane',
  fourthRow,
  'medium'
);
generateImage(
  './assets/the-swing/hero-large.jpg',
  'The Swing',
  'Jean-Honore Fragonard',
  fourthRow,
  'medium'
);
