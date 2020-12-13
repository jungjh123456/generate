const $body = document.querySelector('.body-container');
const $button = document.querySelector('.nav-list');
const $btn = document.querySelectorAll('.nav-list-item button');
const $navlistCommend = document.querySelectorAll('.nav-list-commend');
const $navlistCommendLi = document.querySelectorAll('.nav-list-commend li');
const $subList1 = document.querySelector('.sub-list1');
const $subList2 = document.querySelector('.sub-list2');
const $subList3 = document.querySelector('.sub-list3');
const $searchInput = document.querySelector('.search-input');
const $searchBtn = document.querySelector('.search-btn');
const $toggle = document.querySelector('.toggle');
let state = true;


$button.onclick = e => {
  console.log(e.target);
    [...$btn].forEach(item => {
    item.nextElementSibling.style.transition = 'none';
    item.nextElementSibling.classList.remove('on');
    item.classList.remove('on');
  });
  e.target.classList.toggle('on');
  e.target.nextElementSibling.classList.toggle('on');
}



window.onclick = e => {
  if (!e.target.matches('html')) return;
  removeElement();
}

$searchBtn.onclick = e => {
  e.preventDefault();
  
  // if (state === true){
  // $searchInput.classList.add('active');
  // state = false
  // } else {
  //   $searchInput.classList.remove('active');
  //   state = true
  // }
  $searchInput.classList.toggle('active');
}

$toggle.onclick = e => {
  e.preventDefault();

  $toggle.classList.toggle('active');
}