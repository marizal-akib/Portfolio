const Experience = () => {
  return (
    <div className="bg-[#1b1f22]">
      <div className="max-w-6xl gap-3 items-center mx-auto lg:flex py-4">
        <div className="pl-2">
          <h2
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="lg:text-7xl mb-2 text-6xl text-white font-bold"
          >
            Ex<span className="text-indigo-500">p</span>erience
          </h2>
          <h3 className="text-xl text-white font-bold">MERN Stack Developer</h3>
          <h3>Independent MERN Stack Developer | August 2023 - preset</h3>
          <p className=" text-white  max-w-2xl text-lg">
            As an independent MERN Stack Developer, I've meticulously crafted
            three fully functional websites that showcase my expertise in the
            MERN (MongoDB, Express.js, React.js, Node.js) stack. My proficiency
            extends to the seamless integration of Tailwind CSS with HTML and
            CSS, ensuring sleek and user-centric interfaces that prioritize
            exceptional user experiences.
            <br />
            Navigational ease is ensured through React Router, while robust
            backend operations powered by Node.js and Express.js, coupled with
            user authentication using Firebase Auth and JWT, guarantee secure
            and efficient applications.
            <br />
            Presently, I'm venturing into Next.js to bolster SEO and exploring
            Three.js to create immersive visual experiences, further enriching
            my skill set. Each project embodies a meticulous design and reflects
            my adeptness across MongoDB, Express.js, React.js, Node.js, and
            Tailwind CSS, all aimed at delivering impactful user-centric
            solutions.
            <br />
          </p>
        </div>
        <div>
          <img
            src="https://camo.githubusercontent.com/93a438565e31dd396c21194436b0f7920889e1d552741112e1513dd2fe1a993a/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f38312f31372f38622f38313137386234376138353938663063383163343739396632636464343035372e676966"
            alt=""
            className="my-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
