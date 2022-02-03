const data = {
  program: [
    {
      title: 'Joy',
      img: 'song.png',
      description:
        'You can hear your favorite songs, live being singed by your favorite artist.',
    }, {
      title: 'Excitement',
      img: 'concert.png',
      description: 'You will experience a wonderful unforgettable night.',
    }, {
      title: 'Signed Shirt',
      img: 'shirt.png',
      description: 'You will have this chance to win a T-shirt signed by your favorite artist.',
    }, {
      title: 'Memorial Photo',
      img: 'photo.png',
      description: 'You will get a printed 20x30 memprial photo at the end of the concert. ',
    }, {
      title: 'Meal',
      img: 'meal.png',
      description: 'Immediately after the consert you will be served by a delisious meal.',
    },
  ],
  testimonial: [
    {
      name: 'Salar Aghili',
      title: 'Classic singer',
      img: 'Aghili.jpg',
      quote: 'I have never been a huge fan of Behnam Bani, but after becoming hooked on the 2013 song ‘Hold on we’re going home’, I decided to check out his back catalogue of work, and was really surprised with what I found, and immediately regretted discounting him previously.',
    },
    {
      name: 'Alireza Jahanbakhsh',
      title: 'Pop music singer',
      img: 'Jahanbakhsh.jpg',
      quote: 'I feel God has sent you to Earth to sing. Can\'t wait to listen to your new album.',
    },
    {
      name: 'Keyhan Kalhor',
      title: 'International kamancheh player',
      img: 'Kalhor.jpg',
      quote: 'A song can be more than words and music ... when sung with soul a song carries you to another world, to a place where no matter how much pain you feel, you are never alone. BB makes me feel this by my soul. ',
    },
    {
      name: 'Reza Sadeghi',
      title: 'Pop music singer',
      img: 'Sadeghi.jpg',
      quote: 'BB has a special characteristic. He is a special one by hi appearence and also a more special one by his art.',
    },
    {
      name: 'Morteza Pashaei',
      title: 'Late vocalist and singer',
      img: 'Pashaei.jpg',
      quote: 'The greatest singer in the last decade. Fortunately I had this chance to work with him in \'Don\'t come closer\' album.',
    },
    {
      name: 'Mohsen Yeganeh',
      title: 'Musician and singer',
      img: 'Yeganeh.jpg',
      quote: 'BB Started a new era in the history of persian music. There are several singers who follow his style.',
    },
  ],
  sponsers: [
    {
      title: 'National Institute on Aging',
      link: 'https://www.nia.nih.gov/',
      img: 'sponser1.png',
    }, {
      title: 'Private Internet Access',
      link: 'https://www.privateinternetaccess.com/',
      img: 'sponser2.png',
    }, {
      title: 'wikiHow',
      link: 'https://www.wikihow.com/Main-Page',
      img: 'sponser3.png',
    }, {
      title: 'Platum (플래텀)',
      link: 'https://www.crunchbase.com/organization/platum',
      img: 'sponser4.png',
    }, {
      title: 'MacArthur Foundation',
      link: 'https://www.macfound.org/',
      img: 'sponser5.png',
    },
  ],
};

const program = document.getElementById('program');
if (program !== null) {
  data.program.map((el) => {
    const programItem = document.createElement('div');
    programItem.classList.add('program-item');
    programItem.innerHTML = `<img src="images/${el.img}" />
        <h3>${el.title}</h3>
        <p>${el.description}</p>`;
    program.appendChild(programItem);
    return null;
  });
  const btnBook = document.createElement('button');
  btnBook.innerHTML = 'Book your ticket now';
  program.appendChild(btnBook);
}

const testimonial = document.getElementById('testimonial');
if (testimonial !== null) {
  data.testimonial.map((el, i) => {
    const quote = document.createElement('div');
    quote.classList.add('quote');
    if (i > 1) {
      quote.classList.add('hidden');
    }
    quote.innerHTML = `<div class="img-container">
          <img src="images/${el.img}">
      </div>
      <div class="quoter">
        <h3>${el.name}</h3>
        <h4>${el.title}</h4>
        <span class="devider"></span>
        <p>${el.quote}</p>
      </div>`;
    testimonial.appendChild(quote);
    return null;
  });
  const btnMore = document.createElement('button');
  btnMore.innerHTML = 'MORE <i class=\'fa fa-chevron-down\'></i>';
  btnMore.addEventListener('click', (e) => {
    e.preventDefault();
    if (btnMore.querySelector('i').classList.contains('fa-chevron-down')) {
      btnMore.innerHTML = 'LESS <i class=\'fa fa-chevron-up\'></i>';
      Array.from(document.querySelectorAll('.quote.hidden')).map((el) => {
        el.classList.remove('hidden');
        el.classList.add('visible');
        return null;
      });
    } else {
      btnMore.innerHTML = 'MORE <i class=\'fa fa-chevron-down\'></i>';
      Array.from(document.querySelectorAll('.quote.visible')).map((el) => {
        el.classList.remove('visible');
        el.classList.add('hidden');
        return null;
      });
    }
  });
  testimonial.appendChild(btnMore);
}

const sponsers = document.querySelector('#sponsers>ul');
if (sponsers != null) {
  data.sponsers.map((el) => {
    const sponser = document.createElement('li');
    sponser.innerHTML = `<a href="${el.link}"><img src="images/${el.img}" title="${el.title}" /></a>`;
    sponsers.appendChild(sponser);
    return null;
  });
}

const menuIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('nav>ul');
const page = document.querySelector('html');
menuIcon.addEventListener('click', () => {
  menu.style.display = 'flex';
  page.style.overflow = 'hidden';
  const menuItems = document.querySelectorAll('nav li');
  const menuItemsArr = Array.from(menuItems);
  const closeMenu = document.createElement('li');
  closeMenu.classList.add('closeMenu');
  menuItemsArr.push(closeMenu);
  menuItemsArr.map((el) => {
    el.addEventListener('click', () => {
      menu.style.removeProperty('display');
      closeMenu.remove();
      page.style.overflow = 'auto';
    });
    return null;
  });
  menu.appendChild(closeMenu);
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 30 && window.innerWidth >= 768) {
    nav.setAttribute('style', 'position: fixed; top:0 ');
  } else {
    nav.style.cssText = ' position: absolute, top: 30px ';
  }
});
