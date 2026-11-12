
import Image from "next/image";

export default function TeamYoungDoctor() {
    return (
        <section className="relative mx-auto h-[311px] w-full max-w-[1600px] overflow-hidden">

            {/* Background Image */}
            <Image src="/Team Young Doctor.jpg" alt="Young doctors at a medical institution" fill priority sizes="(max-width: 1600px) 100vw, 1600px" className="object-cover" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#00000066]" />

            {/* Centered Glass Panel */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">

                <div className="flex h-[211px] w-[1233px] shrink-0 items-center justify-between bg-[#01883780] px-[100px] py-[50px] backdrop-blur-[10px]">

                    {/* Layout 1 */}
                    <div className="flex h-[111px] w-[144px] shrink-0 flex-col items-center gap-[19px]">
                        <div className="flex h-[48px] w-[144px] shrink-0 items-center justify-center font-[family-name:var(--font-bitter)] text-[48px] font-normal leading-[48px] text-center text-white">
                            90%
                        </div>
                        <div className="flex h-[44px] w-[144px] shrink-0 items-center justify-center font-[family-name:var(--font-bitter)] text-[18px] font-bold leading-[21.6px] text-center text-[#FECD2F]">
                            <span>Post-Graduation<br />Success Rate</span>
                        </div>
                    </div>

                    {/* Layout 2 - Divider */}
                    <div className="h-[94px] w-px shrink-0 bg-[#FFFFFF80]" />

                    {/* Layout 3 */}
                    <div className="flex h-[111px] w-[142px] shrink-0 flex-col items-center gap-[19px]">
                        <div className="flex h-[48px] w-[142px] shrink-0 items-center justify-center font-[family-name:var(--font-bitter)] text-[48px] font-normal leading-[48px] text-center text-white">
                            Top 10
                        </div>
                        <div className="flex h-[44px] w-[126px] shrink-0 items-center justify-center font-[family-name:var(--font-bitter)] text-[18px] font-bold leading-[21.6px] text-center text-[#FECD2F]">
                            <span>Colleges That<br />Create Futures</span>
                        </div>
                    </div>

                    {/* Layout 4 - Divider */}
                    <div className="h-[94px] w-px shrink-0 bg-[#FFFFFF80]" />

                    {/* Layout 5 */}
                    <div className="flex h-[111px] w-[147px] shrink-0 flex-col items-center gap-[19px]">
                        <div className="flex h-[48px] w-[104px] shrink-0 items-center justify-center font-[family-name:var(--font-bitter)] text-[48px] font-normal leading-[48px] text-center text-white">
                            No. 1
                        </div>
                        <div className="flex h-[44px] w-[147px] shrink-0 items-center justify-center font-[family-name:var(--font-bitter)] text-[18px] font-bold leading-[21.6px] text-center text-[#FECD2F]">
                            <span>In The Nation For<br />Materials R&amp;D</span>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}
