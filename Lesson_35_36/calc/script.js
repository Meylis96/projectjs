// JSON
// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };

// console.log(JSON.parse(JSON.stringify(options))); //parse to get the same view


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    function catchData() {
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            
            // request.open(method, url, async, login, pass);
            request.open('GET', 'current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            
            //status of server
            //statusText written status of server
            //responseText written response of server /respone the same
            //readyState
    
            request.onload = function() {
                if(request.readyState === 4) {
                    if(request.status === 200) {
                        resolve(this.response);
                    } else {
                        reject();
                    }
                }
            };
        });
    }
    catchData()
    .then(response => {
        console.log(response);
        let data = JSON.parse(response);
        inputUsd.value = inputRub.value / data.usd;
    })
    .then(() => console.log(5000))
    .catch(() => inputUsd.value = "Что-то пошло не так")
 
});