const divContainer = document.querySelector("[container]");
const ulPaginat = document.querySelector("[paginat]");


function render(data) {
    let res = ""
    data.forEach((post, ind) => {
        res += `<div  class="card" style="width: 49%">
            <div class="card-header">
            <b>${ind + 1}</b> ${post.title.slice(0, 30)}
        </div>
        <div class="card-body">
        ${post.body}
        </div>
        </div>`
    })

    divContainer.innerHTML = res
}

let startInd = 0
let endInd = 10
function ulPaginCreator() {
    let rez = "";
    let count = Math.floor(posts.length / 100);
    document.querySelector("#next").addEventListener("click", () => {
        document.querySelector("#prev").disabled = false
        let ress = "";
        for (let j = 0; j < 1; j++) {
            if (count > 1) {
                for (let i = startInd; i < endInd; i++) {
                    ress += `<li style="cursor: pointer" onclick="btnClick(${i + 1})" id="li" class="page-item"><span class="page-link">${i + 1}</span></li>`
                }
                count--;
            } else {
                for (let i = startInd; i < Number(String((posts.length / 100).toFixed(1)).slice(-1)) + endInd - 10; i++) {
                    ress += `<li style="cursor: pointer" onclick="btnClick(${i + 1})" id="li" class="page-item "><span class="page-link">${i + 1}</span></li>`
                }
                count--
                document.querySelector("#next").disabled = true
            }
            startInd += 10
            endInd += 10
            break;
        }
        ulPaginat.innerHTML = ress
    })

    document.querySelector("#prev").addEventListener("click", () => {

        count++

        document.querySelector("#next").disabled = false
        let ress = ""
        for (let j = 0; j < 1; j++) {
            for (let i = startInd - 20; i < startInd - 10; i++) {
                ress += `<li style="cursor: pointer" onclick="btnClick(${i + 1})" id="li" class="page-item "><span class="page-link">${i + 1}</span></li>`
                if (i === 0) {
                    document.querySelector("#prev").disabled = true
                }
            }
            if (startInd > 10) {
                startInd -= 10
                endInd -= 10
            }
            break;
        }
        ulPaginat.innerHTML = ress
    })

    for (let j = 0; j < 1; j++) {
        for (let i = startInd; i < endInd; i++) {
            rez += `<li style="cursor: pointer" onclick="btnClick(${i + 1})" id="li" class="page-item"><span class="page-link">${i + 1}</span></li>`
        }
        startInd += 10;
        endInd += 10;
        break;
    }
    ulPaginat.innerHTML = rez
}

render(posts.slice(startInd, endInd))
function btnClick(i) {
    // const liEl = document.querySelectorAll("#li");
    let point = i * 10
    // liEl.forEach((v) => {
    //     console.log(i, 'index', clickk);
    //     if (clickk === i - 1) {
    //         v.classList.add("active")

    //     } else {
    //         v.classList.remove("active")
    //     }
    //     clickk++
    // })
    render(
        posts.slice(point - 10, point)
    )
}
ulPaginCreator()

