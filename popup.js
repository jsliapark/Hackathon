// let url = "https://developer.mozilla.org/en-US/search.json?q=" + strUserInput
document.addEventListener('DOMContentLoaded', function() {
    
    var link = document.getElementById('dataSubmit');
    // onClick's logic below:
    
    link.addEventListener('click', function() {
        let userInput = document.querySelector('input').value;
        // var list = document.getElementById("refresh");   
        // // Get the <ul> element with id="myList"
        // list.removeChild(list.childNodes[]); 

    console.log(userInput)
    fetch('https://developer.mozilla.org/en-US/search.json?q=' + userInput)
    .then(function (res) {
    res.json().then(dataAsJson => {
    console.log(dataAsJson);
    
         

        let title = dataAsJson["documents"][0]["title"]
            //title = document.createTextNode(dataAsJson["documents"][0]["title"]);
            console.log(title)
        let description = dataAsJson["documents"][0]["excerpt"]
            //description = document.createTextNode(removeThings(dataAsJson["documents"][0]["excerpt"]));
            console.log(description)
        let titleDisplay = document.querySelector('#result');
            titleDisplay.innerHTML = title;
        let descriptionDisplay = document.querySelector("#description");
            descriptionDisplay.innerHTML = description;

        let search = dataAsJson["documents"][0]["url"]
        let link = document.createElement('a');
        link.setAttribute('href', search);
        link.innerHTML = "Want More Information?"
        link.className = "info-detail"
        link.target = "_blank"
        console.log(link)
        let info = document.querySelector('#moreInfo');
        info.appendChild(link)
        let picture = document.querySelector('#example');
        picture.src = "reduce.png";



            

            function removeThings(str){
                let arr = str.split(" ")
                console.log(arr)
                for(let i = 0; i < arr.length; i++){
                    console.log(arr[i].substring(0,6))
                   if(arr[i].substring(0,6) === "<mark>"){
                       console.log(true)
                       arr[i] = dataAsJson["documents"][0]["title"]
                   }
                   if(arr[i].substring(0,6) === "<mark>"){
                    console.log(true)
                    arr[i] = dataAsJson["documents"][0]["title"]
                }
                }
                return arr.join(" ")
            }

        
     });
     })
    });
});

