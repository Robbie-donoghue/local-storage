const form = document.querySelector("form")

function savePreferances(event)
{
    event.preventDefault()
    const formData = new FormData(form)
    const colour = formData.get("colour")
    const preferences = 
    {
        colourName: colour
    }
    localStorage.setItem("preferences" , JSON.stringify(preferences))
    loadPreferences()
}

form.addEventListener("submit" , savePreferances)
//parce string back into object when we retrieve it 
const preferences = JSON.parse(localStorage.getItem("preferences"))
//checks if something saved
if(preferences)
{
    const input = document.querySelector("input")
    input.value = preferences.colourName;
}


function loadPreferences()
{
    //resaves  local storage item to the object
    const preferences = JSON.parse(localStorage.getItem("preferences"))
// if we have some prefs
if(preferences)
{
    console.log("anything")
    //if we have prefs, select input on html
    const input = document.querySelector("input")
    //changes whatever is typed(value) to  saved colour (preferences) or white 
    input.value= preferences.colourName ||"#000000";
    //set body colour to the user colour preference, selects body, buts that into value body
    const body = document.querySelector("body")
   // setting colour of style, of body to be prefereneces colour
    body.style.background = preferences.colourName || "#000000"
}
}

//removing items from local storage
function clearPreferences(event)
{
    event.preventDefault()
    localStorage.removeItem("preferences")
//reset to default
const defaults = 
{
    colour: "#000000"
}
body.style.background = preferences.colourName || defaults.colour
}

function handleLocalStorageChange(event) 
    {
        if(event.key === "favouriteColour")
        {
            const newValue = event.newValue;
            console.log  (`local storage favourite colour changed to: ${newValue}` )

        }
    }

window.addEventListener(`storage` , handleLocalStorageChange)

loadPreferences()


