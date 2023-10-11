function createNode(
  {
    tag = 'p',
    classList = null,
    id = null,
    textContent = null,
    href = null,
    src = null,
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
  parentNode.appendChild(element);
  return element;
}

const body = createNode({
  tag: 'body',
});

const wrap = createNode(
  {
    tag: 'div',
    classList: ['wraper'],
  },
  body
);

const header = createNode(
  {
    tag: 'div',
    classList: ['header'],
  },
  wrap
);

createNode(
  {
    tag: 'h1',
    textContent: 'galleria.',
  },
  header
);

createNode(
  {
    tag: 'h4',
    textContent: 'START SLIDESHOW',
  },
  header
);

const main = createNode(
  {
    tag: 'div',
    classList: ['main'],
  },
  wrap
);

const grid = createNode(
  {
    tag: 'div',
    classList: ['block'],
  },
  main
);

const gridPic = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid
);

const pic = createNode(
  {
    tag: 'img',
    src: './assets/starry-night/gallery.jpg',
  },
  gridPic
);

const title = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic
);

createNode(
  {
    tag: 'h3',
    textContent: 'Starry Night',
  },
  title
);

createNode(
  {
    tag: 'p',
    textContent: 'Vincent Van Gogh',
  },
  title
);

const gridPicTwo = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid
);

const pic2 = createNode(
  {
    tag: 'img',
    src: 'assets/the-storm-on-the-sea-of-galilee/gallery.jpg',
  },
  gridPicTwo
);

const title2 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPicTwo
);

createNode(
  {
    tag: 'h3',
    textContent: 'The Storm on the Sea of Galilee',
  },
  title2
);

createNode(
  {
    tag: 'p',
    textContent: 'Rembrandt',
  },
  title2
);

const gridPic3 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid
);

const pic3 = createNode(
  {
    tag: 'img',
    src: 'assets/lady-with-an-ermine/gallery.jpg',
  },
  gridPic3
);

const title3 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic3
);

createNode(
  {
    tag: 'h3',
    textContent: 'Lady with an Ermin',
  },
  title3
);

createNode(
  {
    tag: 'p',
    textContent: 'Leonardo da Vinci',
  },
  title3
);

const gridPic4 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid
);

const pic4 = createNode(
  {
    tag: 'img',
    src: 'assets/the-boy-in-the-red-vest/gallery.jpg',
  },
  gridPic4
);

const title4 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic4
);

createNode(
  {
    tag: 'h3',
    textContent: 'The Boy in the Red Vest',
  },
  title4
);

createNode(
  {
    tag: 'p',
    textContent: 'Paul Cézanne',
  },
  title4
);

const grid2 = createNode(
  {
    tag: 'div',
    classList: ['block'],
  },
  main
);

const gridPic5 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid2
);

const pic5 = createNode(
  {
    tag: 'img',
    src: 'assets/girl-with-pearl-earring/gallery.jpg',
  },
  gridPic5
);

const title5 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic5
);

createNode(
  {
    tag: 'h3',
    textContent: 'Girl with a Pearl Earring',
  },
  title5
);

createNode(
  {
    tag: 'p',
    textContent: 'Johannes Vermeer',
  },
  title5
);

const gridPic6 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid2
);

const pic6 = createNode(
  {
    tag: 'img',
    src: 'assets/the-great-wave-off-kanagawa/gallery.jpg',
  },
  gridPic6
);

const title6 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic6
);

createNode(
  {
    tag: 'h3',
    textContent: 'The Great Wave off Kanagawa',
  },
  title6
);

createNode(
  {
    tag: 'p',
    textContent: 'Hokusai',
  },
  title6
);

const gridPic7 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid2
);

const pic7 = createNode(
  {
    tag: 'img',
    src: 'assets/the-night-cafe/gallery.jpg',
  },
  gridPic7
);

const title7 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic7
);

createNode(
  {
    tag: 'h3',
    textContent: 'The Night Cafe',
  },
  title7
);

createNode(
  {
    tag: 'p',
    textContent: 'Vincent van Gogh',
  },
  title7
);

const gridPic8 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid2
);

const pic8 = createNode(
  {
    tag: 'img',
    src: 'assets/the-basket-of-apples/arnolfini-portrait/gallery.jpg',
  },
  gridPic8
);

const title8 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic8
);

createNode(
  {
    tag: 'h3',
    textContent: 'Arnolfini Portrait',
  },
  title8
);

createNode(
  {
    tag: 'p',
    textContent: 'Jan van Eyck',
  },
  title8
);

const grid3 = createNode(
  {
    tag: 'div',
    classList: ['block'],
  },
  main
);

const gridPic9 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid3
);

const pic9 = createNode(
  {
    tag: 'img',
    src: 'assets/guernica/gallery.jpg',
  },
  gridPic9
);

const title9 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic9
);

createNode(
  {
    tag: 'h3',
    textContent: 'Guernica',
  },
  title9
);

createNode(
  {
    tag: 'p',
    textContent: 'Pablo Picasso',
  },
  title9
);

const gridPic10 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid3
);

const pic10 = createNode(
  {
    tag: 'img',
    src: 'assets/van-gogh-self-portrait/gallery.jpg',
  },
  gridPic10
);

const title10 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic10
);

createNode(
  {
    tag: 'h3',
    textContent: 'Van Gogh self-portrait',
  },
  title10
);

createNode(
  {
    tag: 'p',
    textContent: 'Vincent van Gogh',
  },
  title10
);

const gridPic11 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid3
);

const pic11 = createNode(
  {
    tag: 'img',
    src: 'assets/mona-lisa/gallery.jpg',
  },
  gridPic11
);

const title11 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic11
);

createNode(
  {
    tag: 'h3',
    textContent: 'Mona Lisa',
  },
  title11
);

createNode(
  {
    tag: 'p',
    textContent: 'Leonardo da Vinci',
  },
  title11
);

const grid4 = createNode(
  {
    tag: 'div',
    classList: ['block'],
  },
  main
);

const gridPic12 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid4
);

const pic12 = createNode(
  {
    tag: 'img',
    src: 'assets/penitent-magdalene/gallery.jpg',
  },
  gridPic12
);

const title12 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic12
);

createNode(
  {
    tag: 'h3',
    textContent: 'Penitent Magdalene',
  },
  title12
);

createNode(
  {
    tag: 'p',
    textContent: 'Artemisia Gentileschi',
  },
  title12
);

const gridPic13 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid4
);

const pic13 = createNode(
  {
    tag: 'img',
    src: 'assets/the-sleeping-gypsy/gallery.jpg',
  },
  gridPic13
);

const title13 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic13
);

createNode(
  {
    tag: 'h3',
    textContent: 'The Sleeping Gypsy',
  },
  title13
);

createNode(
  {
    tag: 'p',
    textContent: 'Henri Rousseau',
  },
  title13
);

const gridPic14 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid4
);

const pic14 = createNode(
  {
    tag: 'img',
    src: 'assets/the-basket-of-apples/hero-large.jpg',
  },
  gridPic14
);

const title14 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic14
);

createNode(
  {
    tag: 'h3',
    textContent: 'The Basket of Apples',
  },
  title14
);

createNode(
  {
    tag: 'p',
    textContent: 'Paul Cezanne',
  },
  title14
);

const gridPic15 = createNode(
  {
    tag: 'div',
    classList: ['blockpic'],
  },
  grid4
);

const pic15 = createNode(
  {
    tag: 'img',
    src: 'assets/the-swing/gallery.jpg',
  },
  gridPic15
);

const title15 = createNode(
  {
    tag: 'div',
    classList: ['text'],
  },
  gridPic15
);

createNode(
  {
    tag: 'h3',
    textContent: 'The Swing',
  },
  title15
);

createNode(
  {
    tag: 'p',
    textContent: 'Jean-Honoré Fragonard',
  },
  title15
);
