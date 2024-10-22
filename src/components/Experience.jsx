import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import oracle from "../../public/oracle.png"
import spring from "../../public/spring.png"
import springBoot from "../../public/springBoot.jpg"

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "html",
        },
        {
            id: 2,
            logo: css,
            name: "css",
        },
        {
            id: 3,
            logo: java,
            name: "java",
        },
        {
            id: 4,
            logo: javascript,
            name: "javascript",
        },
        {
            id: 5,
            logo: spring,
            name: "Spring",
        },
        {
            id: 6,
            logo: springBoot,
            name: "springBoot",
        },
        {
          id:7,
          logo:oracle,
          name:"oracle",
        }
    ]

    return (
        <div 
        name="Experience"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <p className=''>I have more than 2 years of experience in below technologies.</p>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                    {
                        cardItem.map(({ id, logo, name }) => (
                            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                                <img src={logo} className='w-[150px] rounded-full' alt={name} />
                                <div>
                                    <div className=''>{name}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
