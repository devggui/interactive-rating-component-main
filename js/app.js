
function thankYou() {
  const thankyou = document.querySelectorAll('#thankyou');
  const form = document.querySelectorAll('#form');
  const selected = document.querySelectorAll('#selected');
  const getValues = document.querySelectorAll('[type=checkbox]:checked');
  const values = [];

  for(let i = 0; i < getValues.length; i++) {
    let result = values.push(getValues[i].value);
    console.log(result);
  }

  thankyou[0].classList.remove('hidden');
  form[0].classList.add('hidden');

  selected[0].innerHTML += `<span class="font-normal text-[var(--Orange)]">You selected ${values.length} out of 5</span>`;
}