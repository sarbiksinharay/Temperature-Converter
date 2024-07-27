document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('convert').addEventListener('click', () => {
      const degree = parseFloat(document.getElementById('degree').value);
      const output_type = document.querySelector('input[name="value-radio"]:checked').value;
      const result = document.querySelector('.result');
      const container = document.querySelector('.t_calculator');

      if (!isNaN(degree)) {
         if (output_type === 'Celsius') {
            let F_to_C = (degree - 32) * (5 / 9);
            container.style.height='400px'
            result.innerHTML = `<h2>${F_to_C.toFixed(2)} °C</h2>`;
         } else {
            let C_to_F = (degree * (9 / 5)) + 32;
            container.style.height='400px'
            result.innerHTML = `<h2>${C_to_F.toFixed(2)} °F</h2>`;
         }
      } else {
         alert("Enter a valid degree");
      }
   });
});
