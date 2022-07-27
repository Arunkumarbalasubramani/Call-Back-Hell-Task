
const countdownDiv = document.createElement('div');
countdownDiv.classList.add('display-div')
setTimeout(() => {
    countdownDiv.innerText ='10'
    setTimeout(() => {
        countdownDiv.innerText ='';
        countdownDiv.innerText='9'
        setTimeout(() => {
            countdownDiv.innerText ='';
            countdownDiv.innerText='8'
            setTimeout(() => {
                countdownDiv.innerText ='';
                countdownDiv.innerText='7'
                setTimeout(() => {
                    countdownDiv.innerText ='';
                    countdownDiv.innerText='6'
                    setTimeout(() => {
                        countdownDiv.innerText ='';
                        countdownDiv.innerText='5'
                        setTimeout(() => {
                            countdownDiv.innerText ='';
                            countdownDiv.innerText='4';
                            setTimeout(() => {
                                countdownDiv.innerText ='';
                                countdownDiv.innerText='3';
                                setTimeout(() => {
                                    countdownDiv.innerText ='';
                                    countdownDiv.innerText='2'; 
                                    setTimeout(() => {
                                        countdownDiv.innerText ='';
                                        countdownDiv.innerText='1';
                                        setTimeout(() => {
                                            countdownDiv.innerText ='';
                                            countdownDiv.innerText='Happy New Year !!!!!'; 
                                           
                                        }, 1000); 
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

document.body.append(countdownDiv);