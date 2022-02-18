let a = '', //first number
    b = ''; // second number
let sign = ''; //+ - / X =

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['x', '-', '+', '/'];

let out = document.querySelector('.calculator__screen p'); //screen


function clearAll() {
    a = '';
    b = '';
    sign = '';
    out.textContent = 0;   
}

document.querySelector('.ac').onclick = clearAll;


document.querySelector('.buttons').addEventListener('click', function(event) {
    //нажата не кнопка
    if(!event.target.classList.contains('btn')) return;
    // нажата ac
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';


    const key = event.target.textContent; // Нажата кнопака


    if(digit.includes(key)) {
        if(b === '' && sign === '') {

            if(a.includes('.') && key === '.') {
                a += '';
                out.textContent = a;
                 } else {
                    a += key;
        
                    console.log(a, b, sign)
                    out.textContent = a;
                 }
        } else if (a !== '' && b == '' || b !== '')  {

                 if(b.includes('.') && key === '.' ) {
                    
                    b += '';
                    out.textContent = b;
                     } else {
                        b += key;
            
                        console.log(a, b, sign)
                        out.textContent = b;
                     }
        }else {
            b += key;
            out.textContent = b;
        }

    }
    
    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }
// =
    if(key === '=') {
        switch(sign) {
           case '+':   a = (+a) + (+b);
                       b = '';
                       break;
            case '-':  a = (+a) - (+b);
                       b = '';
                       break;
            case '/': 
                       if(b === '0') {
                           out.textContent  = 'error';
                           a ='';
                           b = '';
                           sign = '';
                           return;
                       }
                        a = (+a) / (+b);
                        b = '';
                       break;
            case 'x':  a = (+a) * (+b);
                       b = '';
                       break;
        }

        out.textContent = Math.trunc( a * 100 ) / 100 ;
    }
});
