let textarea = document.querySelector('textarea');

let tCount = document.querySelector('.total-count')
let rCount = document.querySelector('.remain-count')

let char = 0 ;
let remainCount = 100;

textarea.addEventListener('keyup', updateCounter);

function updateCounter() {
  char = textarea.value.length;
  tCount.textContent = char;
  rCount.textContent = remainCount - char;
}

function copy() {
  textarea.select();
  textarea.setSelectionRange(0,9999);
  window.navigator.clipboard.writeText(textarea.value);
  swal({
    icon: "success",
    text: "Text Copied",
  });
  textarea.value = '';
  tCount.textContent = 0;
  rCount.textContent = remainCount;
}
