let bxs = document.querySelectorAll('.box')
let rsbut = document.getElementById('rsbut');
let m = document.getElementById("win")
let tie = document.getElementById("tie")
let cnt = 0;
let flag = false


rsbut.addEventListener("click", () => {
    for (let i of bxs) {
        cnt = 0;
        flag = false
        i.innerText = ""
        i.disabled = false
        m.style.display = "none"
        m.innerHTML = ""
        tie.style.display = "none"
    }
})
let turn = true;
const win_patt = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


bxs.forEach((i, j) => {
    i.addEventListener("click", () => {
        if (turn) {
            i.innerText = "O"
        } else {
            i.innerText = "X"
        }
        turn = !turn
        i.disabled = true;
        checkwinner()
        cnt += 1
        if (cnt == 9 && flag == false) {
            tie.style.display = "block"
        }
    })

});
const checkwinner = () => {
    for (let i of win_patt) {
        let pval1 = bxs[i[0]].innerText;
        let pval2 = bxs[i[1]].innerText;
        let pval3 = bxs[i[2]].innerText;
        if (pval1 != "" && pval2 != "" && pval3 != "") {
            if (pval1 === pval2 && pval2 === pval3) {
                m.innerHTML = "WINNER is " + pval1
                m.style.display = "block";
                m.style.zIndex = "-1"

                flag = true;
                for (i of bxs) {
                    i.disabled = true
                }
            }
        }
    }



}



