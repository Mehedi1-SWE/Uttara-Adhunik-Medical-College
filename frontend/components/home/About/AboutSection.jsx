
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-[1600px] px-5 py-[100px] xl:h-[817.5609px] xl:px-[80px]">
      <div className="flex w-full flex-col gap-[40px] xl:h-[617.5609px] xl:flex-row">

        {/* Left Layout */}
        <div className="relative h-[617.5609px] w-[700px] shrink-0 max-xl:mx-auto max-md:h-[400px] max-md:w-full">

          {/* Left Image */}
          <div className="absolute left-0 top-[44.83px] h-[572.7273px] w-[360.2058px] max-md:top-[30px] max-md:h-[370px] max-md:w-[52%]">
            <Image src="/left about image.jpg" alt="Uttara Adhunik Medical College Building" fill unoptimized sizes="(max-width: 768px) 52vw, 360px" className="object-cover" />
          </div>

          {/* Right Image */}
          <div className="absolute left-[397.43px] top-0 h-[572.7273px] w-[302.5729px] opacity-100 shadow-[0px_3.33px_3.33px_0px_#00000040] max-md:left-auto max-md:right-0 max-md:h-[370px] max-md:w-[43%]">
            <Image src="/right about image.jpg" alt="Uttara Adhunik Medical College Hospital Entrance" fill unoptimized sizes="(max-width: 768px) 43vw, 303px" className="object-cover" />
          </div>

          {/* UAMC Logo Overlay */}
          <div className="absolute left-[200px] top-[161.77px] z-10 h-[293.1086px] w-[300.1715px] overflow-hidden rounded-[176.57px] pt-[2.86px] pr-[3.53px] pb-[0.67px] pl-[3.53px] max-md:left-1/2 max-md:top-[100px] max-md:h-[190px] max-md:w-[190px] max-md:-translate-x-1/2">
            <div className="relative h-full w-full">
              <Image src="/Logo.png" alt="Uttara Adhunik Medical College Logo" fill unoptimized sizes="(max-width: 768px) 190px, 294px" className="object-contain" />
            </div>
          </div>

        </div>

        {/* Right Layout */}
        <div className="flex min-w-0 w-full flex-col gap-[38px] xl:h-[617.5609px] xl:w-[700px] xl:shrink-0">

          {/* Inner Layout 1: Heading and Description */}
          <div className="flex w-full flex-col gap-[21.67px] xl:h-[340.4977px] xl:w-[661.8879px]">

            {/* Child Layout 1: Heading */}
            <div className="flex h-[134.6662px] w-full flex-col gap-[4.33px] xl:w-[383px]">

              {/* Knowledge Meets Innovation */}
              <div className="flex h-[45.6665px] w-full items-center gap-[8px] text-[#018837] xl:w-[321.1662px]">
                <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m2 10 10-5 10 5-10 5-10-5Z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  <path d="M22 10v7" />
                </svg>
                <span className="font-[family-name:var(--font-inter)] text-[16px] font-medium">
                  knowledge meets innovation
                </span>
              </div>

              {/* About UAMC Heading */}
              <div className="flex h-[63px] w-[383px] items-center">
                <h2 className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[65px] leading-[62.4px] tracking-[0px]">
                  <span className="font-[300] text-[#262626]">About</span>
                  <span className="font-[400] text-[#262626]">{" "}</span>
                  <span className="font-[700] text-[#FECD2F]">UAMC</span>
                </h2>
              </div>

            </div>

            {/* Child Layout 2: Description */}
            <div className="flex w-full flex-col gap-[27.08px] xl:h-[184.165px] xl:w-[661.8879px]">

              {/* Paragraph 1 */}
              <div className="w-full xl:min-h-[62.8328px]">
                <p className="font-[family-name:var(--font-inter)] text-[17.33px] font-normal leading-[31.2px] tracking-normal text-[#737477]">
                  <span className="font-bold">Uttara Adhunik Medical College (UAMC)</span>{" "}
                  is a prestigious medical institution located in Uttara Model Town, Dhaka, Bangladesh. Established in 2003.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="w-full">
                <p className="font-[family-name:var(--font-inter)] text-[17.33px] font-normal leading-[31.2px] tracking-normal text-[#737477]">
                  UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS) program, designed to equip students with the knowledge, skills, and hands-on clinical training needed to excel in the medical profession.
                </p>
              </div>

            </div>

          </div>

          {/* Inner Layout 2: Mission and Vision */}
          <div className="flex w-full flex-col gap-[21.67px] sm:flex-row xl:h-[97.0549px] xl:w-[700px]">

            {/* Mission */}
            <div className="flex h-[97.0549px] min-w-0 flex-1 items-center gap-[20px] border-[1.08px] border-dashed border-[#018837] px-[24px] xl:w-[339.1669px] xl:shrink-0 xl:flex-none">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#018837" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                <path d="M5 12 24 4l19 8-19 8L5 12Z" />
                <path d="M12 17v7c7 6 17 6 24 0v-7" />
                <path d="M43 12v12" />
                <path d="M10 42V32l-4-5M38 42V32l4-5" />
                <path d="m10 34 8-5 6 6 6-6 8 5" />
                <path d="M24 35v8" />
              </svg>
              <span className="font-[family-name:var(--font-inter)] text-[14px] leading-[24px] text-[#018837]">
                College Mission<br />Statement
              </span>
            </div>

            {/* Vision */}
            <div className="flex h-[97.0549px] min-w-0 flex-1 items-center gap-[20px] border border-dashed border-[#018837] px-[24px] xl:w-[339.1669px] xl:shrink-0 xl:flex-none">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#018837" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                <path d="M5 43h38" />
                <path d="M9 43V20l15-10 15 10v23" />
                <path d="M18 43V31h12v12" />
                <path d="M16 23h5v5h-5zM27 23h5v5h-5z" />
                <path d="M24 10V3M20 3h8" />
                <path d="M5 43V29l4-4M43 43V29l-4-4" />
              </svg>
              <span className="font-[family-name:var(--font-inter)] text-[14px] leading-[24px] text-[#018837]">
                College Vision<br />Achievement
              </span>
            </div>

          </div>

          {/* Inner Layout 3: View Our Program Button */}
          <button type="button" className="flex h-[60.4997px] w-[249.1644px] shrink-0 items-center justify-center gap-[10px] bg-[#018837] px-[32.5px] py-[16.25px]">

            {/* Button Text */}
            <span className="flex h-[28px] w-[151px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[25px] tracking-normal text-[#FFFFFF]">
              View Our Program
            </span>

            {/* Arrow Icon */}
            <span className="flex h-[27.0831px] w-[15.1882px] shrink-0 items-center justify-center text-white" aria-hidden="true">
              <svg width="15.1882" height="27.0831" viewBox="0 0 16 28" fill="none">
                <path d="M2 14H14M9 9L14 14L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

          </button>

        </div>
      </div>
    </section>
  );
}
