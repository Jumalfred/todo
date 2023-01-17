let input = document.getElementById("input");
let ul = document.getElementsByTagName("ol")[0];
let btn = document.getElementById("btn");
let selected = document.getElementById("select");
let oginga = "";
let del = "";
let counter = 3;

let edit_button = "";
let edit = "";
let task = document.querySelectorAll("article");
let date_inp = document.querySelectorAll("#date");
let checkboxEvent = document.querySelectorAll("#checkbox");
let Items = [
    {
        no: 0,
        itemName: "Programming",
        description: "I will programme to learn more by coding and debugging of my codes to check errors available and how to solve them out.",
        createdTime: "Time created : Mon Dec 19 2022 at 6:42:22 PM",
        ExpiryDate: "Due : Mon Dec 26 2022 at 6:42:22 PM"
    },
    {
        no: 1,
        itemName: "Learning",
        description: "I will learn more on university lectures,revise and go through past papers.",
        createdTime: "Time created : Sun Dec 18 2022 at 6:22:02 PM",
        ExpiryDate: "Due : Sun Dec 25 2022 at 6:22:02 PM"
    },
    {
        no: 2,
        itemName: "Swimming and skarting",
        description: "I will find cool place with warm swimming pool to enjoy by swimming.It is a recreational day !!!",
        createdTime: "Time created : Mon Dec 19 2022 at 4:12:22 PM",
        ExpiryDate: "Due : Mon Dec 26 2022 at 4:12:22 PM"
    }
];
btn.addEventListener("click", function () {
    if (input.value !== "") {
        let item_name = input.value;
        let exp = document.getElementById("created_dat").value.split("T")[0];
        let tm = document.getElementById("created_dat").value.split("T")[1];
        let expirydate = new Date(exp).toDateString() + " at " + tm;
        let li = document.createElement("li");
        del = document.createElement("button");
        let text = document.createTextNode("del");
        edit = document.createElement("button");
        let art = document.createElement("article");
        let text_edit = document.createTextNode("Edit");
        let checkbox = document.createElement("input")
        let date_pos = document.createElement("div");
        let date_time = document.createElement("div");
        date_pos.setAttribute("id", "date")
        date_time.setAttribute("id", "time")
        let date = new Date();
        date_pos.append(date.toDateString());
        date_time.append(date.toLocaleTimeString("en-US"));
        del.append(text);
        del.setAttribute("id", "delete_btn")
        edit.append(text_edit);
        edit.setAttribute("id", "edit_btn")
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("id", "checkbox")
        li.append(checkbox)
        art.append(input.value);
        li.appendChild(art);
        li.appendChild(date_pos)
        li.appendChild(date_time)
        li.appendChild(del);
        li.appendChild(edit);
        ul.appendChild(li);
        li.setAttribute("class", "index")
        li.setAttribute("data-index", Date.parse(date.toDateString()) / 3600000)
        li.setAttribute("data-no", counter)
        input.value = "";
        document.getElementById("created_dat").value = "";
        document.getElementById("created_dat").type = "text";
        let item = {
            no: counter,
            itemName: item_name,
            description: document.getElementById("describe").value,
            createdTime: "Time created : "+ date.toDateString() + " at " + date.toLocaleTimeString("en-US"),
            ExpiryDate: "Due : "+expirydate
        }
        if (selected.selectedIndex === 1 || selected.selectedIndex === 2) {
            function comparator(a, b) {
                if (a.dataset.index > b.dataset.index) {
                    return -1;
                }
                if (a.dataset.index < b.dataset.index) {
                    return 1;
                }
                return 0;
            }

            let subjects = document.querySelectorAll("[data-index]");
            let subjectsArray = Array.from(subjects);
            let sorted = subjectsArray.sort(comparator);
            sorted.forEach(e =>
                document.querySelector("ol").appendChild(e));

        }
        document.getElementById("describe").value = "";
        Items.push(item)
        counter++
        let listItems = document.querySelectorAll("li");

        listItems.forEach(item => {
            item.addEventListener("click", function () {

                let selItem = Items.filter(obj => {
                    return obj.no == item.dataset.no
                })

                e = window.event || e;
                if (this === e.target) {
                    document.getElementById("item_name").innerHTML = selItem[0].itemName;
                    document.getElementById("description").innerHTML = selItem[0].description;
                    document.getElementById("created_date").innerHTML = selItem[0].createdTime;
                    document.getElementById("expiry_date").innerHTML = selItem[0].ExpiryDate;
                    document.getElementById("item_details").style.display = "block"
                    document.getElementById("modal_3").style.display = "none"
                    document.getElementById("modal_4").style.display = "none"
                    document.getElementById("modal").style.display = "none"
                }
            })
        });


        del = document.querySelectorAll("#delete_btn");
        for (let j = 0; j < del.length; j++) {
            del[j].addEventListener("click", function () {

                let li = this.parentElement;
                let selItem = Items.findIndex(obj => {
                    return obj.no == li.dataset.no
                })

                Items.splice(selItem, selItem)
                this.parentElement.remove();

            })
        }
        checkbox = document.querySelectorAll("#checkbox")
        for (let ch = 0; ch < checkbox.length; ch++) {
            checkbox[ch].onclick = function () {
                if (checkbox[ch].checked) {
                    this.parentElement.classList.add("checked");
                    this.parentElement.children[1].style.textDecoration = "line-through";
                }
                else {
                    this.parentElement.classList.remove("checked")
                    this.parentElement.children[1].style.textDecoration = "none";
                }

                if (selected.selectedIndex === 3) {
                    let subjects = document.querySelectorAll(".checked");
                    let subjectsArray = Array.from(subjects);
                    subjectsArray.forEach(e =>
                        document.querySelector("ol").appendChild(e));
                }
            }
        }
        let lists = document.querySelectorAll("li");
        for (let u = 0; u < lists.length; u++) {
        }
    }
    else if (input.value === "") {
        alert("Please enter a valid value !")
    }
    let edit_button = document.querySelectorAll("#edit_btn");
    for (let n = 0; n < edit_button.length; n++) {
        edit_button[n].addEventListener("click", function () {
            let to_inpuT = document.getElementById("change")
            let task = document.querySelectorAll("article");
            content = task[n];
            to_inpuT.value = content.innerText;
            document.getElementById("modal").style.display = "block";
            document.getElementById("upd").addEventListener("click", function () {
                to_inpuT = document.getElementById("change");
                content.innerText = to_inpuT.value;
                document.getElementById("modal").style.display = "none";
            })
            document.getElementById("cancel").addEventListener("click", function () {
                document.getElementById("modal").style.display = "none";
            })
        })
    }

    if (selected.selectedIndex === 3) {
        let subjects = document.querySelectorAll(".checked");
        let subjectsArray = Array.from(subjects);
        subjectsArray.forEach(e =>
            document.querySelector("ol").appendChild(e));
    }
    document.getElementById("modal_4").style.display = "none";
})
let juma = document.getElementsByTagName("li");
for (let i = 0; i < juma.length; i++) {
    let num = Date.parse(date_inp[i].innerHTML) / 3600000;
    del = document.createElement("button");
    edit = document.createElement("button");
    let text = document.createTextNode("del");
    let text_edit = document.createTextNode("Edit");
    del.setAttribute("id", "delete_btn")
    edit.setAttribute("id", "edit_btn")
    del.append(text)
    edit.append(text_edit)
    juma[i].appendChild(del)
    juma[i].append(edit)
    juma[i].setAttribute("class", "index");
    juma[i].setAttribute("data-index", num);
}
let deleteOut = document.querySelectorAll("#delete_btn");
deleteOut.forEach(del => {
    del.addEventListener("click", function () {

        let li = del.parentElement;
        let selItem = Items.findIndex(obj => {
            return obj.no == li.dataset.no
        })

        Items.splice(selItem, selItem)
        li.remove();

    })
});

let lists = document.querySelectorAll("li");
for (let u = 0; u < lists.length; u++) {
}
document.getElementById("year").innerHTML = new Date().getFullYear();

edit_button = document.querySelectorAll("#edit_btn");
for (let no = 0; no < edit_button.length; no++) {
    edit_button[no].addEventListener("click", function () {
        let to_input = document.getElementById("change")
        content = task[no];
        to_input.value = content.innerText;
        document.getElementById("modal").style.display = "block";
        document.getElementById("upd").addEventListener("click", function () {
            to_input = document.getElementById("change");
            content.innerText = to_input.value;
            document.getElementById("modal").style.display = "none";
        })
        document.getElementById("cancel").addEventListener("click", function () {
            document.getElementById("modal").style.display = "none";
        })
    })
}
selected.addEventListener("click", function () {
    if (selected.selectedIndex === 1 || selected.selectedIndex === 2) {
        function comparator(a, b) {
            if (a.dataset.index > b.dataset.index) {
                return -1;
            }
            if (a.dataset.index < b.dataset.index) {
                return 1;
            }
            return 0;
        }

        let subjects = document.querySelectorAll("[data-index]");
        let subjectsArray = Array.from(subjects);
        let sorted = subjectsArray.sort(comparator);
        sorted.forEach(e =>
            document.querySelector("ol").appendChild(e));

    }
    if (selected.selectedIndex === 3) {
        let subjects = document.querySelectorAll(".checked");
        let subjectsArray = Array.from(subjects);
        subjectsArray.forEach(e =>
            document.querySelector("ol").appendChild(e));
    }
})
for (let ch = 0; ch < checkboxEvent.length; ch++) {
    checkboxEvent[ch].onclick = function () {
        if (checkboxEvent[ch].checked) {
            this.parentElement.classList.add("checked");
            this.parentElement.children[1].style.textDecoration = "line-through";
        }
        else {
            this.parentElement.classList.remove("checked"); 
            this.parentElement.children[1].style.textDecoration = "none";
        }

        if (selected.selectedIndex === 3) {
            let subjects = document.querySelectorAll(".checked");
            let subjectsArray = Array.from(subjects);
            subjectsArray.forEach(e =>
                document.querySelector("ol").appendChild(e));
    }
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (document.getElementById("modal_4").style.display == "block") {
            document.getElementById("btn").click()
        }
        else if (document.getElementById("modal").style.display == "block") {
            document.getElementById("upd").click()
        }
    }
})
let li_items = document.querySelectorAll("li");
Items.forEach((item, index) => {
    li_items[index].addEventListener("click", function () {

        e = window.event || e;
        if (this === e.target) {
            document.getElementById("item_name").innerHTML = Items[index].itemName;
            document.getElementById("description").innerHTML = Items[index].description;
            document.getElementById("created_date").innerHTML = Items[index].createdTime;
            document.getElementById("expiry_date").innerHTML = Items[index].ExpiryDate;
            document.getElementById("item_details").style.display = "block"
            document.getElementById("modal_3").style.display = "none"
            document.getElementById("modal_4").style.display = "none"
            document.getElementById("modal").style.display = "none"
        }
    })
});

document.getElementsByClassName("exit_btn")[0].addEventListener("click", function () {
    document.getElementById("item_details").style.display = "none";
})
document.getElementsByTagName("aside")[0].addEventListener("click", function () {
    let profile = document.getElementById("modal_3");
    if (profile.style.display == "block") {
        profile.style.display = "none"
    }
    else {
        profile.style.display = "block"
        let add = document.getElementById("modal_4");
        document.getElementsByClassName("add")[0].addEventListener("click", function () {
            add.style.display = "block";
            profile.style.display = "none"
            document.getElementById("exitAdd").onclick = function () {
                add.style.display = "none"
            }
        })
    }
})
document.querySelector(".calendars").addEventListener("click", function () {
    window.location.assign("new/lv.html")
})