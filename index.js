const currentDate = document.querySelector(".current-date"),
days = document.querySelector(".days"),
prevNextIcons = document.querySelectorAll(".icons i");

let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function renderClalender(){
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    firstDayOfMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(),
    lastDayMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();

    
    let liTag = "";
    for(let i = firstDayOfMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for(let i = 0; i <= lastDateOfMonth; i++){
        let isToday = i === date.getDate() && currMonth == new Date().getMonth()
                    && currYear == new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for(let i = lastDayMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayMonth + 1}</li>`
    }

    days.innerHTML = liTag;
    currentDate.innerHTML = `${months[currMonth]}, ${currYear}`
}
renderClalender();

prevNextIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id == "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11){
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        }else{
            date = new Date();
        }
        renderClalender();
    });
});