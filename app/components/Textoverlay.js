import ScrollRevealText from "./ScrollReveal";

export default function MyPage() {
  return (
    
    <div className=" relative z-2 bg-[#efeded]">
    <div className="h-[80vh] pt-[20vh]"> {/* Adding height just so you can scroll to it */}
      <div className="max-w-[55vw] ml-[3rem]">
        <ScrollRevealText text="The grid of tomorrow isn't built on yesterday's blueprints. We are a collective of driven minds, pushing the absolute limits of circuitry, sustainable energy, and complex systems. We don't just adapt to the resistance—we use it to propel ourselves forward. Transforming raw potential into kinetic impact" 
        customClasses="leading-[2rem] gap-[0.3rem]  text-[2rem]"/>
      </div>
    </div>
    <div className="h-[100vh] pt-[40vh]"> {/* Adding height just so you can scroll to it */}
      <div className="max-w-[55vw] ml-[calc(45vw-3rem)]">
        <ScrollRevealText text="The grid of tomorrow isn't built on yesterday's blueprints. We are a collective of driven minds, pushing the absolute limits of circuitry, sustainable energy, and complex systems. We don't just adapt to the resistance—we use it to propel ourselves forward. Transforming raw potential into kinetic impact" 
        customClasses="leading-[2rem] gap-[0.3rem]  text-[2rem]"/>
      </div>
    </div>
    </div>
    
  );
}