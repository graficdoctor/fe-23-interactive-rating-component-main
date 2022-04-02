const giveRating = document.getElementById('giverating');
const ratingGiven = document.getElementById('ratinggiven');
const submitBtn = document.getElementById('submitbtn');
const selectedRatingBtn = document.getElementsByTagName('li');

function toggle() {
  giveRating.classList.add('not-active');
  giveRating.classList.remove('active');
  ratingGiven.classList.remove('not-active');
  ratingGiven.classList.add('active');
}

submitBtn.addEventListener('click', toggle);

function selectedRating() {
  const selectedRate = document.getElementById('selectedrating');
  for (let i = 0; i < selectedRatingBtn.length; i++) {
    let html = '';
    selectedRatingBtn[i].addEventListener('click', function (event) {
      html = event.target.innerText;
      selectedRate.innerText = html;
    });
  }
}

selectedRating();
