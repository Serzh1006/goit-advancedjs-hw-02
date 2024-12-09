import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const dataForm = {};
  const formData = new FormData(form);
  formData.forEach((value, name) => {
    dataForm[name] = value;
  });

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (dataForm['state'] === 'fulfilled') {
        res(`✅ Fulfilled promise in ${dataForm['delay']}ms`);
      } else {
        rej(`❌ Rejected promise in ${dataForm['delay']}ms`);
      }
    }, Number(dataForm['delay']));
  });
  promise
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: value,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
      });
    });
});
