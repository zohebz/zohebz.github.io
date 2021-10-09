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
                <div class="lang-attr"> Description:&nbsp;</div>
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
        langs: "Created numerous animation using blender and AutoDesk Maya for designing, visualization and animation purposes. Programming for the animations where done using Python.", 
    },
    {
        title: "Game Development",
        desc: '<iframe src="https://drive.google.com/file/d/1KZta4dDIFb2nFG-t1F7hVTdyvcIyvFKg/preview" allow="autoplay"></iframe>',
        langs: "Develeped a game in Unity Engine, programmed in c#, cutom game assets made in Blender.",
    },
    {
        title: "Electric Scooter",
        desc: '<iframe src="https://drive.google.com/file/d/1XsQwEzFmROBpFrI0yZarkV4CQeItBv9h/preview" allow="autoplay"></iframe>',
        langs: "Undertook and completed comprehensive mechanical Design in UG, Structural and Aerodynamic Analysis using NX11 for an Electric Scooter for SAE ETWDC (Electric Two wheeler design competition). The scooter is a plug-in type which uses a lithium phosphate battery and is powered by a brushless DC motor. The project is also incorporated with real time vehicle health monitoring system using AI, inbuilt navigation, 6-axis motion sensors, and battery swapping technology.",
    },
    {
        title: "Robotics",
        desc: '<iframe src="https://drive.google.com/file/d/1Y5riaIlv_-yvCOSclkv3LDHTQ47peZTR/preview" allow="autoplay"></iframe>',
        langs: "Designed and made a 4-wheeled fighting robot for Robo War competition at NIT, Calicut. The robot consists of 4 dc motors, 1 for each wheel and a flipper power by two high torque dc motors. Also have Practical knowledge in designing Robots and programing them using software like ROS (Robot Operating Sytem), GAZEBO Simulator, LEGO NXT and Arduino and Delivered a talk as a resource person on building and programing a robot using LEGO NXT at an IEEE student workshop at TKMCE.",
    },
    {
        title: "Virtual Reality",
        desc: '<iframe src="https://drive.google.com/file/d/1yg-Qg9PFjuvU5TmOLCeflU4BwL9XbJWz/preview" allow="autoplay"></iframe>',
        langs: "Have develped VR mobile app wich allows person to see and move around in a virtual world. App made using Unity Engine and Blender.",
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
