import CustomTimeline from '@/components/Timeline'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className=''>
      <section className="flex justify-between w-full items-center">
      <div className="flex flex-col m-16 justify-center">
        <h1 className="text-light-2 head-text-1">
          Rahul Dey
        </h1>
        <div className="head-text-2 text-light-2 -mt-2">DevOps Engineer</div>
        <p className="text-[#b2b2b2] mt-10">
        Hello! I’m Rahul Dey, a passionate 4th-year Electronics and Communication Engineering student at NIT Durgapur
        with a keen interest in AWS Cloud Computing, Machine Learning, and DevOps.
        </p>

        <p className='text-[#b2b2b2] mt-2'>
        Currently, I’m working as a DevOps Intern, focusing on orchestration and containerization platforms, while
        continuously honing my skills in automation and cloud-native solutions. My journey has also led me to explore
        Node.js, Express.js, and MongoDB as part of my backend development learning path.
        </p>

        <p className='text-[#b2b2b2] mt-2'>
        Outside the technical world, I am passionate about music and sports, too. I'm ever ready to take a middle
        road between passion and profession. Reach out to me at {" "}
        <a href="mailto: rahul.2002.dey@gmail.com" className='text-blue-300'>rahul.2002.dey@gmail.com</a> {" "}
        on AWS Cloud Services, best DevOps practices, or about your favorite band or sports team! ????
        </p>

        <Link href="/contact">
        <div className="btn-pink mt-4">
          <div className="font-bold">Contact Me</div>
        </div>
        </Link>
      </div>

      <div className="flex m-16 rounded-lg w-[90%] border-4 border-[#7b7b7b]">
        <img src="/assets/RahulDeyAbout.png" alt="Image not found" className="rounded-sm"/>
      </div>   
    </section>

    <section>
      <h1 className="text-light-2 head-text-1 ml-16">
          Education Timeline
      </h1>
      <div className='pb-10'>
        <CustomTimeline />
      </div>
    </section>
    </main>
  )
}

export default page
