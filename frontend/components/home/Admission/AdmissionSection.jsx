
import Image from "next/image";

export default function AdmissionSection() {
    return (
        <section className="relative mx-auto w-[1600px] h-[443px] overflow-hidden px-[80px] py-[50px] gap-[10px] bg-[#01883766] opacity-100">

            {/* Admission Background Image */}
            <Image src="/Admission.jpg" alt="Uttara Adhunik Medical College Admission" fill sizes="1600px" className="z-0 object-cover" />

            {/* Green Transparent Overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-[#01883766] opacity-100"></div>

            {/* Inner Overlay Layout */}
            <div className="relative z-20 flex w-[1440px] h-[343px] flex-col items-center gap-[30px] bg-[#0000001A] py-[50px] backdrop-blur-[20px] opacity-100">

                {/* Overlay Layout 1 */}
                <div className="flex flex-col items-center gap-[20px]">

                    {/* Heading Layout */}
                    <div className="flex w-[525px] h-[72px] shrink-0 items-center justify-center opacity-100">

                        {/* Heading */}
                        <h2 className="whitespace-nowrap text-center font-[family:var(--font-bitter)] text-[60px] leading-[100%] tracking-[0.05em] opacity-100">
                            <span className="font-bold text-[#FECD2F]">UAMC</span>{" "}
                            <span className="font-normal text-[#FFFFFF]">Admission</span>
                        </h2>

                    </div>

                    {/* Description Layout */}
                    <div className="flex w-[1280px] h-[66px] shrink-0 items-center justify-center opacity-100">

                        {/* Description */}
                        <p className="font-[family:var(--font-inter)] text-[18px] font-normal leading-[100%] tracking-[0%] text-center text-[#FFFFFF] opacity-100">
                            Uttara Adhunik Medical College (UAMC) was established in 2003 with a vision to provide quality medical education and healthcare services. Founded through the dedicated efforts of medical professionals and social leaders, UAMC is committed to training future doctors while ensuring affordable healthcare for the community.
                        </p>

                    </div>

                </div>

                {/* Overlay Layout 2 - Learn More Button */}
                <button type="button" className="flex w-[230px] h-[55px] shrink-0 items-center justify-center gap-[10px] bg-[#018837] px-[30px] py-[15px] opacity-100">

                    {/* Button Text */}
                    <span className="flex w-[87px] h-[25px] items-center font-[family:var(--font-inter)] text-[16px] font-medium leading-[25px] tracking-[0%] text-[#FFFFFF] opacity-100">
                        Learn More
                    </span>

                    {/* Arrow Icon */}
                    <span className="relative block w-[14.02px] h-[25px] shrink-0">
                        <svg className="absolute top-[6.5px] left-0" width="14.02" height="12.009428" viewBox="0 0 14.02 12.009428" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M0.5 6.0047H12.5M7.5 1.0047L12.5 6.0047L7.5 11.0047" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>

                </button>

            </div>

        </section>
    );
}
