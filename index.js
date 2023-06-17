import './style.css';

var navbar = document.querySelector('.navbar');

var searchText = document.getElementById('search-text');

var searchForm = document.getElementById('search-form');

document.getElementById('menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

document.getElementById('nav-close').onclick = () => {
  navbar.classList.toggle('active');
};

document.getElementById('search-delete').onclick = () => {
  searchText.value = '';
};

document.getElementById('search-bar').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
};

document.querySelector('#search-close').onclick = () => {
  searchForm.classList.toggle('active');
};

// Lắng nghe sự kiện scroll
window.addEventListener('scroll', () => {
  var desiredScrollPosition = 200; // Điểm cuộn mong muốn, có thể thay đổi giá trị này

  // Lấy vị trí cuộn hiện tại của trục Y
  var currentScrollPosition = window.scrollY;

  // Kiểm tra nếu vị trí cuộn đã đạt tới điểm mong muốn
  if (currentScrollPosition >= desiredScrollPosition) {
    // Thực hiện hàm hoặc các thao tác bạn muốn ở đây
    var header = document.querySelector('.header');
    header.style.background = 'white';
  } else {
    var header = document.querySelector('.header');
    header.style.background = 'none';
  }
});

// Swipper
