const inputJson = document.querySelector(".large-area--input")
const outputJson = document.querySelector(".large-area--output")
const btnBeautify = document.querySelector(".controls__button--beautify")
const btnMinify = document.querySelector(".controls__button--minify")

btnBeautify.addEventListener("click", () => {
    //object, string, spaces
    function isJSONValid(str){
        try{
            JSON.parse(inputJson.value)
        }catch(e){
            return false
        }
        return true
    }

    if (isJSONValid(inputJson)){
        const formatted = JSON.stringify(JSON.parse(inputJson.value), null, 4)
        outputJson.value = formatted
    }else{
        outputJson.value = {"ERROR": "JSON NOT VALID"}
    }
})

btnMinify.addEventListener("click", () => {
    //object, string, spaces
    function isJSONValid(str){
        try{
            JSON.parse(inputJson.value)
        }catch(e){
            return false
        }
        return true
    }
    
    if (isJSONValid(inputJson)){
        const minified = JSON.stringify(JSON.parse(inputJson.value))
        outputJson.value = minified
    }else{
        outputJson.value = JSON.stringify({"ERROR": "JSON NOT VALID"})
    }
})