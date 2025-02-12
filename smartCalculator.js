let calculation = '';

      const buttons = document.querySelectorAll('button');

      // Mouse Click Event Listener
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          if(button.innerText === 'Clear') {
            clearAll();
          } else if (button.innerText === '=') {
            calculateResult();
          } else {
            const value = button.innerText;
            updateCalculation(value);
          }
        });
      });


      document.addEventListener('keydown', (event) => {
        const key = event.key;

        if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '%', '=', 'Backspace'].includes(key)) {
          if(key === '=') {
            calculateResult();
          } else if (key === 'Backspace'){
            clearAll();
          } else {
            updateCalculation(key);
          }
        }
      });




      function updateCalculation(value) {
        if (calculation === '0'){
          calculation = value;
          displayCalculation(calculation);
        } else {
          calculation += value;
          displayCalculation(calculation);
        }
      }

      function displayCalculation(calculation) {
        document.querySelector('.js-show-result').innerHTML = calculation;
      }

      function clearAll() {
        calculation = '0';
        displayCalculation(calculation);
      }

      function calculateResult() {
        calculation = eval(calculation);
        let check = Number.isInteger(calculation) ? calculation : calculation.toFixed(3);
        displayCalculation(check);
      }