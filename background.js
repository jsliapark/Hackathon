window.onload = () => {
    

    function checkTextArea() {
        if(document.querySelector('#coderunner') !== null) {
            init();
        }
        else checkTextArea();
    }

    setTimeout(checkTextArea, 300);
}

function init() {
    console.log(document.querySelector('#coderunner'));
}