import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative mx-auto box-border flex h-[750px] w-[1600px] gap-[10px] px-[80px] py-[50px] rotate-0 opacity-100">

            {/* Hero Background */}
            <Image src="/Hero.jpg" alt="Uttara Adhunik Medical College Hero" fill priority className="object-cover" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(1,136,55,0.7)_100%)]" />

            {/* Main Layout */}
            <div className="relative z-20 flex h-[650px] w-[1440px] shrink-0 flex-col justify-between rotate-0 opacity-100">

                {/* 1st Layout - Centered */}
                <div className="flex h-[28px] w-[896px] shrink-0 items-center gap-[100px] self-center rotate-0 opacity-100">

                    {/* Prev */}
                    <div className="flex h-[13px] w-[34px] shrink-0 items-center rotate-0 opacity-100">
                        <span className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[13px] leading-[13px] font-bold tracking-[0px] text-[#FFFFFF] uppercase">
                            Prev
                        </span>
                    </div>

                    {/* Centre Layout */}
                    <div className="flex h-[28px] w-[627px] shrink-0 items-center gap-[37px] rotate-0 opacity-100">

                        {/* Left Horizontal Divider */}
                        <div className="h-[1px] w-[125px] shrink-0 bg-[#FFFFFF4D] rotate-0 opacity-100" />

                        {/* Centre Number Layout */}
                        <div className="flex h-[28px] w-[303px] shrink-0 items-center justify-center gap-[18px] rotate-0 opacity-100">

                            {/* Layout 1 */}
                            <div className="flex h-[18px] w-[20px] shrink-0 items-center justify-center rotate-0 opacity-100">
                                <span className="font-[family-name:var(--font-bitter)] text-[18px] leading-[18px] font-bold tracking-[0px] text-center text-[#FECD2F]">
                                    01
                                </span>
                            </div>

                            {/* Layout 2 */}
                            <div className="relative h-[22px] w-0 shrink-0 opacity-100">
                                <div className="absolute left-1/2 top-1/2 h-0 w-[22px] -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] border-t-[0.7px] border-solid border-transparent opacity-100 [border-image:linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)_1]" />
                            </div>

                            {/* Layout 3 */}
                            <div className="flex h-[18px] w-[22px] shrink-0 items-center justify-center rotate-0 opacity-100">
                                <span className="font-[family-name:var(--font-bitter)] text-[18px] leading-[18px] font-bold tracking-[0px] text-center text-[#FFFFFF]">
                                    02
                                </span>
                            </div>

                            {/* Layout 4 */}
                            <div className="relative h-[22px] w-0 shrink-0 opacity-100">
                                <div className="absolute left-1/2 top-1/2 h-0 w-[22px] -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] border-t-[0.7px] border-solid border-transparent opacity-100 [border-image:linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)_1]" />
                            </div>

                            {/* Layout 5 */}
                            <div className="flex h-[18px] w-[22px] shrink-0 items-center justify-center rotate-0 opacity-100">
                                <span className="font-[family-name:var(--font-bitter)] text-[18px] leading-[18px] font-bold tracking-[0px] text-center text-[#FFFFFF]">
                                    03
                                </span>
                            </div>

                            {/* Layout 6 */}
                            <div className="relative h-[22px] w-0 shrink-0 opacity-100">
                                <div className="absolute left-1/2 top-1/2 h-0 w-[22px] -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] border-t-[0.7px] border-solid border-transparent opacity-100 [border-image:linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)_1]" />
                            </div>

                            {/* Layout 7 */}
                            <div className="flex h-[18px] w-[23px] shrink-0 items-center justify-center rotate-0 opacity-100">
                                <span className="font-[family-name:var(--font-bitter)] text-[18px] leading-[18px] font-bold tracking-[0px] text-center text-[#FFFFFF]">
                                    04
                                </span>
                            </div>

                            {/* Layout 8 */}
                            <div className="relative h-[22px] w-0 shrink-0 opacity-100">
                                <div className="absolute left-1/2 top-1/2 h-0 w-[22px] -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] border-t-[0.7px] border-solid border-transparent opacity-100 [border-image:linear-gradient(270deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)_1]" />
                            </div>

                            {/* Layout 9 */}
                            <div className="flex h-[18px] w-[22px] shrink-0 items-center justify-center rotate-0 opacity-100">
                                <span className="font-[family-name:var(--font-bitter)] text-[18px] leading-[18px] font-bold tracking-[0px] text-center text-[#FFFFFF]">
                                    05
                                </span>
                            </div>

                        </div>

                        {/* Right Horizontal Divider */}
                        <div className="h-[1px] w-[125px] shrink-0 bg-[#FFFFFF4D] rotate-0 opacity-100" />

                    </div>

                    {/* Next */}
                    <div className="flex h-[13px] w-[35px] shrink-0 items-center rotate-0 opacity-100">
                        <span className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[13px] leading-[13px] font-bold tracking-[0px] text-[#FFFFFF] uppercase">
                            Next
                        </span>
                    </div>

                </div>

                {/* 2nd Layout */}
                <div className="box-border flex h-[399.4736633300781px] w-[1440px] shrink-0 items-end justify-between bg-[#0000001A] p-[20px] backdrop-blur-[5px] rotate-0 opacity-100">

                    {/* Left Layout */}
                    <div className="flex h-[359.4736633300781px] w-[600px] shrink-0 flex-col gap-[28.07px] rotate-0 opacity-100">

                        {/* Tagline */}
                        <div className="flex h-[40.543861389160156px] w-[423.4912109375px] shrink-0 items-center gap-[0.88px] rotate-0 opacity-100">

                            {/* Left Icon */}
                            <div className="box-border flex h-[37.71929931640625px] w-[28.070175170898438px] shrink-0 items-center justify-center py-[8.77px] rotate-0 opacity-100">
                                <div className="relative h-[20.17929931640625px] w-[28.070175170898438px] shrink-0">
                                    <Image src="/Frame 34.png" alt="" fill className="object-contain" />
                                </div>
                            </div>

                            {/* Tagline Text */}
                            <p className="flex h-[23px] w-[377px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[14.04px] leading-[22.81px] font-normal tracking-[0px] text-[#FFFFFF] rotate-0 opacity-100">
                                Shaping the Future of Healthcare, One Student at a Time
                            </p>

                        </div>

                        {/* Heading */}
                        <div className="h-[225px] w-[670px] shrink-0 rotate-0 opacity-100">
                            <h1 className="h-[225px] w-[670px] tracking-[0px]">

                                {/* Line 1 */}
                                <span className="block h-[75px] whitespace-nowrap leading-[75px]">
                                    <span className="font-[family-name:var(--font-bitter)] text-[60px] font-bold text-[#FFFFFF]">
                                        Excellence
                                    </span>

                                    <span className="font-[family-name:var(--font-bitter)] text-[60px] font-normal text-[#FFFFFF]">
                                        {" "}in Medical
                                    </span>
                                </span>

                                {/* Line 2 */}
                                <span className="block h-[75px] whitespace-nowrap leading-[75px]">
                                    <span className="font-[family-name:var(--font-rancho)] text-[87.72px] font-normal text-[#FECD2F]">
                                        Education
                                    </span>

                                    <span className="font-[family-name:var(--font-bitter)] text-[60px] font-normal text-[#FFFFFF]">
                                        , Innovation in
                                    </span>
                                </span>

                                {/* Line 3 */}
                                <span className="block h-[75px] whitespace-nowrap font-[family-name:var(--font-bitter)] text-[60px] leading-[75px] font-normal tracking-[0px] text-[#FFFFFF]">
                                    Healthcare
                                </span>

                            </h1>
                        </div>

                        {/* CTA */}
                        <button type="button" className="box-border flex h-[48.31578826904297px] w-[201.75437927246094px] shrink-0 items-center gap-[8.771929740905762px] bg-[#FFFFFF] px-[26.32px] py-[13.16px] rotate-0 opacity-100">

                            {/* Button Text */}
                            <span className="flex h-[22px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[16px] leading-[25px] font-medium tracking-[0px] text-[#018837]">
                                View Our Program
                            </span>

                            {/* Arrow Wrapper */}
                            <span aria-hidden="true" className="relative block h-[21.929824829101562px] w-[12.298245429992676px] shrink-0 rotate-0 opacity-100">

                                {/* Vector */}
                                <svg width="12.298245429992676" height="10.534585952758789" viewBox="0 0 12.298245429992676 10.534585952758789" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-[5.7px] h-[10.534585952758789px] w-[12.298245429992676px] rotate-0 opacity-100">
                                    <path d="M0 5.26729H10.8M7.2 1.2L11.1 5.26729L7.2 9.33458" stroke="#018837" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </span>

                        </button>

                    </div>

                    {/* Right Layout */}
                    <div className="flex h-[241px] w-[272px] shrink-0 flex-col gap-[10px] rotate-0 opacity-100">

                        {/* MBBS Degrees */}
                        <div className="box-border flex h-[54px] w-[204px] shrink-0 py-[10px] rotate-0 opacity-100">
                            <div className="h-[34px] w-[204px] shrink-0 rotate-0 opacity-100">
                                <span className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[30px] leading-[34px] font-bold tracking-[0px] text-[#FECD2F]">
                                    MBBS Degrees
                                </span>
                            </div>
                        </div>

                        {/* Degree Details */}
                        <div className="flex h-[177px] w-[272px] shrink-0 flex-col gap-[10px] rotate-0 opacity-100">

                            {/* Bachelor of Medicine */}
                            <div className="box-border h-[91px] w-[272px] shrink-0 border-b border-solid border-[#FFFFFF80] pb-[10px] rotate-0 opacity-100">

                                <div className="flex h-[81px] w-[272px] shrink-0 flex-col gap-[10px] rotate-0 opacity-100">

                                    {/* Medicine Header */}
                                    <div className="flex h-[26px] w-[272px] shrink-0 items-center justify-between rotate-0 opacity-100">

                                        {/* Left Text */}
                                        <div className="flex h-[26px] w-[156px] shrink-0 items-center rotate-0 opacity-100">
                                            <span className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[16px] leading-[26px] font-normal tracking-[0px] text-[#FFFFFF]">
                                                Bachelor of Medicine
                                            </span>
                                        </div>

                                        {/* Right Arrow */}
                                        <div className="relative h-[24px] w-[24px] shrink-0 rotate-0 opacity-100">
                                            <Image src="/arrow-right.png" alt="" fill className="object-contain" />
                                        </div>

                                    </div>

                                    {/* Medicine Description */}
                                    <div className="flex h-[45px] w-[272px] shrink-0 items-center rotate-0 opacity-100">
                                        <p className="h-[45px] w-[272px] text-justify font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-normal tracking-[0px] text-[#FFFFFF80]">
                                            A degree focusing on the study of human biology, anatomy, and pathology to build a strong medical foundation.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* Bachelor of Surgery */}
                            <div className="box-border h-[76px] w-[272px] shrink-0 border-b border-solid border-[#FFFFFF80] pb-[10px] rotate-0 opacity-100">

                                <div className="flex h-[66px] w-[272px] shrink-0 flex-col gap-[10px] rotate-0 opacity-100">

                                    {/* Surgery Header */}
                                    <div className="flex h-[26px] w-[272px] shrink-0 items-center justify-between rotate-0 opacity-100">

                                        {/* Left Text */}
                                        <div className="flex h-[26px] w-[147px] shrink-0 items-center rotate-0 opacity-100">
                                            <span className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[16px] leading-[26px] font-normal tracking-[0px] text-[#FFFFFF]">
                                                Bachelor of Surgery
                                            </span>
                                        </div>

                                        {/* Right Arrow */}
                                        <div className="relative h-[24px] w-[24px] shrink-0 rotate-0 opacity-100">
                                            <Image src="/arrow-right.png" alt="" fill className="object-contain" />
                                        </div>

                                    </div>

                                    {/* Surgery Description */}
                                    <div className="h-[30px] w-[272px] shrink-0 rotate-0 opacity-100">
                                        <p className="h-[30px] w-[272px] text-justify font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-normal tracking-[0px] text-[#FFFFFF80]">
                                            A degree emphasizing clinical and surgical skills for diagnosing and treating patients effectively.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}