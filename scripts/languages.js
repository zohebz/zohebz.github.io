class Language {
    constructor(language) {
        this.id = language.id;
        this.val = language.val;
        this.remark = language.remark;
        this.name = language.name;
        this.tip = language.tip;
    }

    div() {
        var div = document.createElement("DIV");
        div.setAttribute("class", "language");

        div.innerHTML = `
            <div class="language-name"> ${this.name} </div>
            <span>${this.remark}</span>
            <div class="language-progress">
                <div class="progress-bar tooltip" id="${this.id}">
                    <span class="tooltiptext">${this.tip}</span>
                </div>
            </div>
        `;

        return div;
    }
}

var lang = [
    {
        id: "c",
        name: "Programming",
        val: 80,
        remark: "C++, Javascript, Python, MATLAB, HTML, CSS, Typescript, JavaScript, NestJS, Angular JS, React",
        tip: 8 / 10,
    },
    {
        id: "flutter",
        name: "Design",
        val: 80,
        remark: "ANSYS, NX, SolidWorks, CATIA",
        tip: "8 / 10",
    },
    {
        id: "java",
        name: "Robotics",
        val: 85,
        remark: "ROS, GAZEBO, LEGO NXT",
        tip: "8.5 / 10",
    },
    {
        id: "js",
        name: "3D Animations",
        val: 85,
        remark: "Blender, Autodesk MAYA",
        tip: "8.5 / 10",
    },
    {
        id: "html_css",
        name: "Virtual Reality",
        val: 70,
        remark: "Unity & Blender",
        tip: "7 / 10",
    },
];

var style = document.createElement('style');

var setStyle = (lang) => {

    let anim = `
    @keyframes ${lang.id} {
        0% {
            width: 0%;
        }
        100% {
            width: ${lang.val}%;
        }
    }
    `;
    style.innerHTML += anim;
}

var languageContainer;

function skillOnLoad() {
    console.log("skill onload");

    languageContainer = document.getElementById('language-wrapper');

    lang.map((item) => {
        setStyle({
            id: item.id,
            val: item.val
        });

        var lang = new Language(item);
        languageContainer.appendChild(lang.div());
    });
    document.getElementsByTagName('head')[0].appendChild(style);

    if (isElementInViewport(document.getElementById('language-container')))
        languageProgressAnimation();

}

window.onscroll = function () {
    languageProgressAnimation();
}

function languageProgressAnimation() {
    lang.map((item) => {
        let div = document.getElementById(item.id);

        if (isElementInViewport(div)) {
            div.style.animation = `${item.id} 1s ease-in-out`;
            div.style.width = `${item.val}%`;
        } else {
            div.style.animation = "";
            div.style.width = `0%`;
        }
    });
    animAdded = false;
}
