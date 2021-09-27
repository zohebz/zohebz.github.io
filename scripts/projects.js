class Project {
    constructor(project) {
        this.title = project.title;
        this.description = "&nbsp;&nbsp;&nbsp;&nbsp;"+project.desc;
        this.languagesUsed = project.langs; 
    }

    div() {
        let div = document.createElement("DIV");
        div.setAttribute("class", "project");
        div.setAttribute("data-aos", "fade-up");
        div.innerHTML = `
            <div class="project-title">
                ${this.title}
            </div>
            <div class="project-desc"> 
                ${this.description}
            </div>
            <div class="languages-used">
                <div class="lang-attr"> Languages : &nbsp;</div>
                <div class="lang-value"> ${this.languagesUsed} </div>
            </div>
        `;
    
        return div;
    }
}
const projects = [
    {
        title: "Animation",
        desc: '<iframe src="https://drive.google.com/file/d/1YtgUVy5__FdF-bvOEYnyDIUbDjouETEO/preview" allow="autoplay"></iframe>',
        langs: "Java, XML, Firebase", 
    },
    {
        title: "Game Development",
        desc: '<iframe src="https://drive.google.com/file/d/1KZta4dDIFb2nFG-t1F7hVTdyvcIyvFKg/preview" allow="autoplay"></iframe>',
        langs: "HTML, CSS, Javascript, PHP, MySQL",
    },
    {
        title: "Electric Scooter",
        desc: '<iframe src="https://drive.google.com/file/d/1XsQwEzFmROBpFrI0yZarkV4CQeItBv9h/preview" allow="autoplay"></iframe>',
        langs: "HTML, CSS, Javascript, PHP, MySQL",
    },
    {
        title: "Robotics",
        desc: '<iframe src="https://drive.google.com/file/d/1Y5riaIlv_-yvCOSclkv3LDHTQ47peZTR/preview" allow="autoplay"></iframe>',
        langs: "Dart, Node.js, Firebase",
    },
    {
        title: "Virtual Reality",
        desc: '<iframe src="https://drive.google.com/file/d/1yg-Qg9PFjuvU5TmOLCeflU4BwL9XbJWz/preview" allow="autoplay"></iframe>',
        langs: "Dart, Node.js, Fireabse",
    }
]


var projectContainer;

function projectOnLoad() {
    projectContainer = document.getElementById("project-container");
    projects.map(project => {
        var p = new Project(project);
        console.log(p.div());
        projectContainer.appendChild(p.div());
    });
}
