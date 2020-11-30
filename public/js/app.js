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


[...$btn].forEach(item => item.onclick = e => {
  e.target.nextElementSibling.style.transition = 'none';
  console.log(e.target.nextElementSibling);
  state = false;
  [...$btn].forEach(item => {
    item.nextElementSibling.style.transition = 'none';
    item.nextElementSibling.classList.remove('on');
    item.classList.remove('on');
  });

  e.target.classList.add('on');

    e.target.nextElementSibling.classList.add('on');
    // e.target.nextElementSibling.style.transition = '1s';
  
  // if(item.classList.contains('on')) item.classList.remove('on')
  // e.target.nextElementSibling.classList.toggle('on');
  
})
$button.onclick = e => {
  if (!e.target.classList.contains('on')) {
    e.target.nextElementSibling.style.transition = '1s';
  }
  console.log(e.target)

}
window.onclick = e => {
  if (!e.target.matches('html')) return;
  removeElement();
}

$searchBtn.onclick = e => {
  e.preventDefault();
  console.log(e.target)
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