import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const CV_URL="http://localhost:5173/cv.zip"
const Banner = () => {

    const downloadFile =(url)=>{
        fetch(url).then(response=>response.blob()).then(blob=>{
            const blobURL = window.URL.createObjectURL(new Blob ([blob]))
            const fileName = url.split("/").pop();
            const aTag = document.createElement('a');
            aTag.href=blobURL;
            aTag.setAttribute('download',fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        })


    }
  return (
    <div className="hero min-h-screen bg-[#1b1f22] ">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl gap-48">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="https://i.ibb.co/kD97sQY/download-image-1702353178703-removebg-preview.png"
          className="max-w-[250px] mt-16 lg:mt-0  border-2 border-white"
        />
        <div className="space-y-6 lg:mt-12">
          <h2
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="text-7xl text-white font-bold"
          >
            Hi, I am
          </h2>
          <h2
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            className="text-6xl text-white font-bold"
          >
            Sayed Mariz Al Akib
          </h2>
          <h3 className="text-xl text-white font-bold">
            A Full Stack Developer
          </h3>
          <p className=" text-white max-w-xl text-lg">
            🚀 My journey in the tech world is a blend of creativity, innovation,
            and a relentless pursuit of mastering both the front-end and
            back-end realms.<br></br> 💡 With an insatiable curiosity for
            learning, I'm constantly exploring the latest trends and
            technologies, diving into projects that challenge and expand my
            skill set. <br /> 🖥️ Join me as I showcase my diverse portfolio,
            each project a testament to my dedication and craftsmanship in the
            ever-evolving landscape of web development.
          </p>
          <div className="flex lg:flex-row flex-col gap-5 lg:gap-56">
          <div className="flex flex-row gap-5 ">
            <Link
              to={"https://github.com/marizal-akib"}
              className=" text-4xl text-indigo-400"
            >
              <FaGithub />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/sayed-mariz-al-akib-426917234/"}
              className=" text-4xl text-indigo-500"
            >
              <FaLinkedin />
            </Link>
          </div>

          <div>
            <button onClick={() => {downloadFile(CV_URL)}} className="btn bg-amber-600 text-white flex flex-row gap-2"> <span className="text-xl"><FaFileDownload /></span> Download My Resume</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
