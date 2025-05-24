"use strict";
const thead = document.querySelector("thead");
thead.addEventListener("click", (sort)=>{
    const headers = thead.querySelectorAll("th");
    const index = Array.from(headers).indexOf(sort.target);
    const tbody = document.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    rows.sort((a, b)=>{
        const aText = a.children[index].textContent;
        const bText = b.children[index].textContent;
        if (!isNaN(Number(aText)) && !isNaN(Number(bText))) {
            const aClean = aText.replace(/\$|,/g, "");
            const bClean = bText.replace(/\$|,/g, "");
            return Number(aClean) - Number(bClean);
        } else return aText.localeCompare(bText);
    });
    tbody.innerHTML = "";
    rows.forEach((row)=>tbody.appendChild(row));
});

//# sourceMappingURL=index.f75de5e1.js.map
