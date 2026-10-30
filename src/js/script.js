// index page
let btn = document.querySelector('.menu-btn');
let menu = document.querySelector(".mobile-menu");

btn.onclick = () => {
    menu.classList.toggle('top-22.5');
    menu.classList.toggle('-top-50');
};

document.body.onclick = e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.add('-top-50');
        menu.classList.remove('top-22.5');
    }
};

// end index page

// courses page


let section = document.querySelector("section[data-course]");
let courseName = section.dataset.course;
let links = document.querySelectorAll(".youtube-link");
let progressBar = document.getElementById("progress-bar");
let label = document.getElementById("progress-label");

// دالة تحديث الـ progress
function updateProgress() {
    // عدّ الـ items المخلصة من الـ localStorage
    let done = 0;
    links.forEach((e, index) => {
        if (localStorage.getItem(`${courseName}-link-${index}`) === "true")
            done++;
    });

    let total = links.length;
    let percent = Math.round((done / total) * 100);

    progressBar.style.width = percent + "%";
    label.innerHTML = percent + "% completed";
}

links.forEach((link, index) => {
    link.onclick = e => {
        localStorage.setItem(`${courseName}-link-${index}`, "true");

        // عشان اغير لون الصح
        let parent = link.closest(".parent"); // بوصل للاب الكبير عشان اول للابن الي هو الصح
        let checkDev = parent.querySelector(".check");
        checkDev.classList.add("bg-primary");
        // تحديث ال progress
        updateProgress();
    }

})

// تاني زيارة نرجع حالة الـ check والـ progress من الـ localStorage
links.forEach((link, index) => {
    if (localStorage.getItem(`${courseName}-link-${index}`) === "true") {
        let parent = link.closest(".parent");
        let checkDiv = parent.querySelector(".check");
        checkDiv.classList.add("bg-primary");
    }
});
// بعد ريفريش
updateProgress();

// end course page