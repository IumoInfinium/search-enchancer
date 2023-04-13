// Script loaded on every request of google.com
// What it does ?
// Adds a button to search on youtube for the searched google text


// adds a button to search on youtube
// works on google results page
const menu_bar = document.getElementById("hdtb-msb") ?? null;

const searchResultsElement = document.createElement("button");
searchResultsElement.textContent="YouTube";
searchResultsElement.classList.add("t2vtad");
searchResultsElement.style.backgroundColor= "transparent";

// if the menu bar exists, add the button onclick event to it.
if(menu_bar != null){
    searchResultsElement.onclick = () =>{
        const input_text_element = document.evaluate(
            // '/html/body/div[4]/div[2]/form/div[1]/div[1]/div[2]/div/div[2]/input',   
            '/html/body/div[4]/div[2]/form/div[1]/div[1]/div[2]/div/div[2]/textarea',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
        ).singleNodeValue;
        
        let searched_text = `${input_text_element.textContent}`;
        if(searched_text != ""){
            searched_text.replace(' ', '+');
            window.location.href= `https://youtube.com/results?search_query=${searched_text}`;
        }
    }
    menu_bar.appendChild(searchResultsElement);
}


// adds a button to search on youtube
// works google search homepage

const searchHomepageElement = document.evaluate(
    '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[1]/div',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
).singleNodeValue ?? null;

// add an onclick event to the search button
if(searchHomepageElement != null){
    searchHomepageElement.onclick = ()=> {
        console.log("Here 1!");
        const input_element = document.evaluate(
            '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/textarea',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null,
        ).singleNodeValue;
    
        let searched_text = `${input_element.value}`;
    
        if(searched_text != ""){
            searched_text.replace(' ','+');
            window.location.href= `https://youtube.com/results?search_query=${searched_text}`;
        }
    };
}    
