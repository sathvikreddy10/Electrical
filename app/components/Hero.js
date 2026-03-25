import Image from "next/image"
import Transformer from "../Assets/Tranformer.png"

export default function Hero() {
  return (

   <div className='Hero w-full flex flex-col pt-[0.9rem] h-[calc(100vh-4rem)]'>
    <div className="image-text flex w-full justify-between h-[70vh]">
        <div className="image w-[clamp(45rem,54vw,54rem)] shrink-0">
        <Image
        src={Transformer}
        className="block w-full h-full object-cover object-top"
        alt="transformer"
        loading="eager"/>
        </div>
        <div className="text font-medium font-outfit text-[1.8rem] max-w-[34.6vw] mr-[2.8rem] leading-[2.4rem] pt-[4rem]">
            We are the definitive proving ground for next-generation engineering talent. By merging rigorous academic theory with high-stakes, real-world execution, we cultivate the elite minds that industry leaders actively seek. We don't just follow the standard; we engineer the benchmark
        </div>
        </div>
        <div className="bottombar bg-[#fff] w-full flex-[1] pl-[4.5rem] pt-[1.2rem] flex flex-col gap-[0.25rem] -mt-[0.2rem]">
            <div className="Nitandhra font-syne text-[1.8rem] text-[#333] leading-none whitespace-pre">
                NIT    Andhra pradesh
            </div>
            <div className="EEA font-outfit font-medium text-[3.4rem] leading-none">
                Electrical Association
            </div>
        </div>
   </div>

  )
}
