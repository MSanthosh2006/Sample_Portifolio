import React from "react";
import { motion } from "framer-motion";
import {
FaAws,
FaDocker,
FaReact,
FaGithub,
FaLinkedin,
FaJava
} from "react-icons/fa";

import { SiKubernetes, SiArduino } from "react-icons/si";

export default function App(){

const projects=[
{
title:"Anime Mobile Application",
desc:"Mobile application for anime browsing with interactive UI."
},
{
title:"Cloud Hosted PHP Application",
desc:"PHP application deployed on AWS cloud infrastructure."
},
{
title:"Fetus Health Monitoring System",
desc:"ESP32 based IoT system to monitor fetal health parameters."
}
]

const skills=[
"AWS",
"Docker",
"Kubernetes",
"Java",
"ESP32",
"IoT",
"Machine Learning"
]

const floatingIcons=[
<FaAws size={40}/>,
<FaDocker size={40}/>,
<SiKubernetes size={40}/>,
<FaReact size={40}/>,
<FaJava size={40}/>,
<SiArduino size={40}/>
]

return(

<div style={styles.container}>

{/* Animated neon background */}

<div style={styles.background}></div>

{/* Floating icons */}

{floatingIcons.map((icon,i)=>(
<motion.div
key={i}
animate={{
y:[0,-40,0],
x:[0,20,-20,0]
}}
transition={{
duration:6,
repeat:Infinity,
delay:i
}}
style={{
position:"absolute",
top:120+i*120,
left:i%2===0?"8%":"88%",
opacity:0.25
}}
>
{icon}
</motion.div>
))}


{/* NAVBAR */}

<nav style={styles.navbar}>

<h2 style={styles.logo}>Santhosh</h2>

<div style={styles.navLinks}>

<motion.a href="#about" style={styles.link}
whileHover={{scale:1.2}}
>
About
</motion.a>

<motion.a href="#projects" style={styles.link}
whileHover={{scale:1.2}}
>
Projects
</motion.a>

<motion.a href="#skills" style={styles.link}
whileHover={{scale:1.2}}
>
Skills
</motion.a>

<motion.a href="#contact" style={styles.link}
whileHover={{scale:1.2}}
>
Contact
</motion.a>

</div>

</nav>


{/* HERO */}

<section style={styles.hero}>

<motion.div
initial={{opacity:0,y:100}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 style={styles.title}>
Hi I'm <span style={{color:"#00ffff"}}>Santhosh</span>
</h1>

<p style={styles.subtitle}>
AI • Cloud • Software Developer
</p>

</motion.div>

</section>


{/* ABOUT */}

<motion.section
id="about"
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
style={styles.section}
>

<h2 style={styles.heading}>About Me</h2>

<p style={styles.text}>
Computer Science student passionate about cloud computing,
DevOps infrastructure, machine learning and embedded IoT systems.
I enjoy building scalable applications and deploying them using
modern technologies.
</p>

</motion.section>


{/* PROJECTS */}

<section id="projects" style={styles.section}>

<h2 style={styles.heading}>Projects</h2>

<div style={styles.projectGrid}>

{projects.map((p,i)=>(

<motion.div
key={i}
whileHover={{
scale:1.07,
rotateX:5,
rotateY:-5
}}
transition={{type:"spring"}}
style={styles.projectCard}
>

<h3>{p.title}</h3>
<p>{p.desc}</p>

</motion.div>

))}

</div>

</section>


{/* SKILLS */}

<motion.section
id="skills"
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
style={styles.section}
>

<h2 style={styles.heading}>Skills</h2>

<div style={styles.skills}>

{skills.map((skill,i)=>(

<motion.div
key={i}
whileHover={{
scale:1.2,
boxShadow:"0 0 20px #00ffff"
}}
style={styles.skill}
>
{skill}
</motion.div>

))}

</div>

</motion.section>


{/* CONTACT */}

<section id="contact" style={styles.section}>

<h2 style={styles.heading}>Contact</h2>

<p>Email: 24cb053@kpriet.ac.in</p>
<p>Phone: +91 6380078843</p>

<div style={styles.contactIcons}>

<motion.div whileHover={{scale:1.3}}>
<FaLinkedin size={30}/>
</motion.div>

<motion.div whileHover={{scale:1.3}}>
<FaGithub size={30}/>
</motion.div>

</div>

</section>

<footer style={styles.footer}>
© 2026 Santhosh Portfolio
</footer>

</div>
)
}



const styles={

container:{
minHeight:"100vh",
background:"#020617",
color:"white",
fontFamily:"Arial",
position:"relative",
overflow:"hidden"
},

background:{
position:"fixed",
width:"100%",
height:"100%",
background:
"radial-gradient(circle at 30% 30%, #06b6d4 0%, transparent 40%), radial-gradient(circle at 70% 70%, #9333ea 0%, transparent 40%)",
filter:"blur(120px)",
zIndex:-1
},

navbar:{
display:"flex",
justifyContent:"space-between",
padding:"20px 60px",
position:"fixed",
width:"100%",
background:"rgba(0,0,0,0.4)",
backdropFilter:"blur(10px)",
zIndex:10
},

logo:{
color:"#00ffff",
textShadow:"0 0 10px #00ffff"
},

navLinks:{
display:"flex",
gap:"30px"
},

link:{
color:"#00ffff",
textDecoration:"none",
fontSize:"18px",
fontWeight:"500",
textShadow:"0 0 8px #00ffff",
transition:"0.3s"
},

hero:{
height:"100vh",
display:"flex",
alignItems:"center",
justifyContent:"center",
textAlign:"center"
},

title:{
fontSize:"70px",
textShadow:"0 0 20px #00ffff"
},

subtitle:{
fontSize:"22px",
opacity:0.8
},

section:{
padding:"120px 80px",
textAlign:"center"
},

heading:{
fontSize:"40px",
marginBottom:"40px",
color:"#00ffff",
textShadow:"0 0 15px #00ffff"
},

text:{
maxWidth:"700px",
margin:"auto",
lineHeight:1.6
},

projectGrid:{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
gap:"40px"
},

projectCard:{
padding:"35px",
background:"rgba(255,255,255,0.05)",
border:"1px solid rgba(0,255,255,0.3)",
borderRadius:"15px",
backdropFilter:"blur(10px)",
cursor:"pointer",
boxShadow:"0 0 20px rgba(0,255,255,0.2)"
},

skills:{
display:"flex",
flexWrap:"wrap",
justifyContent:"center",
gap:"15px"
},

skill:{
padding:"10px 22px",
background:"#00ffff22",
border:"1px solid #00ffff",
borderRadius:"20px"
},

contactIcons:{
display:"flex",
justifyContent:"center",
gap:"25px",
marginTop:"20px"
},

footer:{
textAlign:"center",
padding:"40px",
opacity:0.5
}

}