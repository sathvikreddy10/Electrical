import ScrollRevealText from "./ScrollReveal"

export default function Faculty() {
  return (
    <>
    <div className="min-h-[100vh] pl-[2.6rem] pt-[15rem] flex flex-col gap-[6rem] relative z-2 bg-[#ffffff]">

        <div className="max-w-[55vw] ">
            <ScrollRevealText text="The grid of tomorrow isn't built on yesterday's blueprints. We are a collective of driven minds, pushing the absolute limits of circuitry, sustainable energy, and complex systems. We don't just adapt to the resistance—we use it to propel ourselves forward. Transforming raw potential into kinetic impact" 
            customClasses="leading-[2rem] gap-[0.3rem]  text-[2rem]"/>
          </div>

        <div className="team flex-1 flex flex-col gap-[3rem]">
           <div className="small_head  text-[1.2rem] font-syne text-[#999]"> Our Team </div>
           <div className="data flex justify-between ">
            <div className="photo w-[32rem] h-[40rem] bg-[#444]"></div>
            <div className="data flex flex-col justify-baseline mt-[70vh] mr-[22vw]">
                <div className="small_head  text-[1.6rem] font-syne text-[#999]"> K Madharchod </div>
                <div className="small_head  text-[1.6rem] font-syne text-[#999]"> 7032401686 </div>
                <div className="small_head  text-[1.6rem] font-syne text-[#999]"> Devara </div>
                <div className="small_head  text-[1.6rem] font-syne text-[#999]"> Devara </div>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}
