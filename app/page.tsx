import Link from "next/link"

export default function Home() {
  return (
    <main className="">
      <section className="flex justify-between w-full">
      <div className="flex flex-col m-16 justify-center">
        <h1 className="text-light-2 head-text-1">
          Rahul Dey
        </h1>
        <div className="head-text-2 text-light-2 -mt-2">DevOps Engineer</div>
        <p className="text-[#b2b2b2] mt-10">
          Hello connections!! I'm Rahul Dey, a software developer enthusiast currently in my final year of 
          B.Tech. My field of intrest is in cloud computing and dev-ops. I am pursuing my engineering from NIT Durgapur
          in Electronics and Communication Engineering and currently working in AmDocs as SDE. To know more about me 
          click on the button below. 
        </p>

        <Link href="/about">
        <div className="btn-pink mt-4">
          <div className="font-bold">Know Me</div>
        </div>
        </Link>
      </div>

      <div className="flex m-16 rounded-lg w-[90%] border-4 border-[#7b7b7b]">
        <img src="/assets/RahulDey.png" alt="Image not found" className="rounded-sm"/>
      </div>   
      </section>

      <div className="container skills-container" id="skills">
            <div className="skill-container-left">
                <h2 className="skill-heading">
                    <span className="caps">M</span>e and
                    <br />
                    MyTech  Stack
                </h2>
                <div className="skill-subHeading">
                    <p>
                        Hi Everyone my name is Rahul Dey. I am a cloud developer.
                        I have been learning cloud computing from the last 1.5 years. Currently I am working in
                        the field of DevOps and making innovative projects.
                    </p>
                    <p>
                        As an enthusiast learner to the cutting edge lastest technologies, I
                        believe in symbiotic learning process. There is always a scope to enhance
                        your knowledge and personality to make you a better person.Interested in
                        the economic developments of the country and wish to leverage them while 
                        understanding customer needs.
                    </p>
                    <p>
                        Where can we find the courage to act in spite of fear? Trying to eliminate
                        that which we react to fearfully is a fool's errand because it locates the 
                        source of our fear outside ourselves, rather than within our own hearts.
                    </p>
                </div>
            </div>

            <div className="skill-container-right">

                <img src="/assets/stacks/HTML.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/CSS.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Javascript.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/React.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/K8s.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/NodeJs.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Next.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Redux.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Tailwind.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Bootstrap.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/MaterialUI.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Express.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Gitb.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Githubb.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Graphql.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/MongoDB.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Vercel.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/ChartJs.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Bash.png" alt="" className="skills-logo" />
                <img src="/assets/stacks/Docker.png" alt="" className="skills-logo" />
                
            </div>
      </div>

      <div className="flex justify-between w-full">
      <div className="flex flex-col gap-4 w-full ml-16 pb-16 justify-center">
        <h1 className="text-light-2 head-text-1">
          Work Experience
        </h1>
        <div className="head-text-2 text-light-2 -mt-6 flex gap-32">
          <p>AWS Cloud Intern</p>
          <p>Jun 2024 - Aug 2024</p>
        </div>
        <div>
          <ul className="project-sub-heading text-[#b2b2b2]">
            <li>• Developed and deployed scalable cloud infrastructure using AWS services.</li>
            <li>• Automated deployment processes and repetitive tasks using AWS Lambda and CloudFormation.</li>
            <li>• Implemented AWS automation with Python (Boto3) and managed infrastructure migration techniques.</li>
            <li>• Collaborated with development teams to integrate and maintain cloud solutions, ensuring system stability.</li>
            <li>The AWS cloud cerfitication can be viewed from the link below :-</li>
          </ul>

          <div className="btn-grp mt-4">
            <a href="https://drive.google.com/drive/u/2/folders/1qQ6gFUi_7b18Zr2ZNRgKPhjOhzEEcLwJ" target="_blank" 
            className="btn-pink btn-project">
              View Certificate
            </a>
          </div>
        </div>
      </div>

      <div className="flex m-16 rounded-lg w-[40%] border-4 border-[#7b7b7b]">
        <img src="/assets/f13.jpeg" alt="Image not found" className="rounded-sm w-full"/>
      </div>
      </div>
    </main>
  )
}
