const About = () => {
    return (
        <>
            <div className="bg-dark p-5 text-white position-relative">
                <h1 className="text-center">About Me</h1>
                <span className="position-absolute bg-danger" style={{width: '5px', height:'1000px', left:'48%', top:'11%'}}></span>
                <div className="d-flex row mt-5">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <p className="border border-1 rounded-3 p-3">I am a dedicated Frontend Developer with a specialized focus on React.js, committed to engineering web applications that are both highly interactive and performance-optimized. My expertise lies in crafting seamless user experiences by leveraging a modern tech stack that includes JavaScript (ES6+), HTML5, CSS3, and Bootstrap 5. I take pride in my ability to bridge the gap between aesthetic design and functional backends through efficient state management and the integration of RESTful APIs.</p>
                    </div>
                </div>
                <div className="d-flex row">
                    <div className="col-lg-5">
                        <p className="border border-1 rounded-3 p-3">A core aspect of my development philosophy is enhancing visual engagement through advanced UI effects. I specialize in creating smooth transitions and sophisticated animations using GSAP (GreenSock), as demonstrated in my work on high-performance landing pages featuring intricate scroll animations and interactive elements. This focus on "Interactivity" ensures that the interfaces I build are not just functional, but also visually captivating and user-centric.</p>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
                <div className="d-flex row">
                    <div className="col-lg-6"></div>
                    <div className="col-lg-6">
                        <p className="border border-1 rounded-3 p-3">Beyond the frontend, I possess a strong foundation in PHP and Laravel, which provides me with a deep understanding of full-stack architecture and robust database management. During my tenure as a Software Development Intern at Codeberg IT Solutions, I have actively collaborated on building scalable web applications and optimizing MySQL databases for high-performance data handling. I am well-versed in implementing MVC architecture principles to ensure that code remains modular, clean, and maintainable over the long term</p>
                    </div>
                </div>
                <div className="d-flex row">
                    <div className="col-lg-5">
                        <p className="border border-1 rounded-3 p-3">I hold a Bachelor of Computer Applications (BCA) from VMV Engineering College, which provided the academic groundwork for my technical journey. My portfolio includes complex projects like a Cosmetic Inventory Management System, which integrated a React frontend with a PHP/MySQL backend to handle real-time stock alerts and multi-modal payment processing. I am a quick learner and a persistent problem solver, always looking for new ways to write reusable components and solve technical challenges efficiently.</p>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>


            
        </>
    );
}
export default About;