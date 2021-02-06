btn1 = document.getElementsByClassName("button")[0]

btn1.addEventListener("click", function () {

    if (btn1.innerText == "Pause") {
        btn1.innerText = "Start"

    }
    else {

        btn1.innerText = "Pause"
    }
})
if (btn1.innerText == "Pause"){
skip()}

function skip() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url_location = tabs[0].url;
        console.log(url_location)
        try {
                url_location.indexOf("elbaestes")
                new_location = url_location.substring(url_location.indexOf("dest"), url_location.length)
                new_location = new_location.substring(5,new_location.length)
                new_loc = decodeURIComponent(new_location)
                console.log(new_loc)
     
                chrome.tabs.update(tabs[0], {url: new_loc});
            }

        
        catch (err) { }
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {chrome.tabs.update(tabs[0], {url: new_loc});})


    });


}
