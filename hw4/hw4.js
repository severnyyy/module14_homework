function returnUrl() {
  const value1 = document.querySelector(".input1").value;
  const value2 = document.querySelector(".input2").value;
  if (+value1 >= 100 && +value1 <= 300 && +value2 >= 100 && +value2 <= 300) {
    let returnedUrl = `https://picsum.photos/${value1}/${value2}`;
    return returnedUrl;
  } else {
    alert( 'одно из чисел вне диапазона от 100 до 300' );
  };
};

 const resultNode = document.querySelector('.j-result');
 const btnNode = document.querySelector('.j-btn-request');

const useRequest = () => {
return fetch(returnUrl())
.then((response) => {
  console.log('response', response);
  const result = response;
  return result;
})
.catch(() => { console.log('error') });
}

function displayResult(requestResult) {
  const cardBlock = `
  <div class="card">
  <img
  src="${requestResult.url}" class="card-image"/>
</div>
`;
resultNode.innerHTML = cardBlock;
}

btnNode.addEventListener('click', async() => {
  const requestResult = await useRequest();
  displayResult(requestResult);
});