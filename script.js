const cookieBox = document.querySelection(".wrapper"),
    buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    
    if(document.cookie.includes("codinglab")) return;
    cookieBox.classlist.add("show");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        cookieBox.classlist.remove("show");

        if(button.id == "acceptBtn") {
            document.cookie = "cookieBy= codinglab; max-age" + 60 * 60 * 24 * 30;
        }
      })  
    })
};
windows.addEventListener("load", executeCodes);