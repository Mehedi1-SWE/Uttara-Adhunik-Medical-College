
import Image from "next/image";

export default function FindYourDepartment() {
    return (
        <section className="mx-auto flex w-[1600px] h-[656.849609375px] gap-[50px] px-[80px] py-[100px] opacity-100 bg-[linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,255,255,0)_100%)]">

            {/* Left Layout */}
            <div className="flex w-[769px] h-[456.849609375px] shrink-0 flex-col justify-between opacity-100">

                {/* Left Layout 1 */}
                <div>

                    {/* Heading */}
                    <h2 className="flex w-[423px] h-[48px] items-center font-[family:var(--font-bitter)] text-[40px] font-bold leading-[100%] tracking-[0%] text-[#018837] opacity-100">
                        Find Your Department
                    </h2>

                    {/* Description */}
                    <p className="w-[769px] h-[54px] font-[family:var(--font-inter)] text-[15px] font-normal leading-[100%] tracking-[0%] text-[#737477] opacity-100">
                        Use the search bar below to explore our comprehensive{" "}
                        <span className="font-bold">MBBS program</span>{" "}
                        and discover the perfect path to kickstart your medical career.
                        Join UAMC and embark on a journey of academic excellence,
                        hands-on clinical training, and cutting-edge medical research!
                    </p>

                </div>

                {/* Left Layout 2 */}
                <div className="w-[769px] h-[106px] opacity-100">

                    {/* Search Bar */}
                    <div className="flex w-[769px] h-[68px] items-center gap-[10px] bg-[#E8E8F4] px-[20px] py-[15px] opacity-100">

                        {/* Search Icon */}
                        <Image src="/search%20(1).png" alt="Search" width={24} height={24} className="w-[24px] h-[24px] shrink-0 opacity-100" />

                        {/* Search Input */}
                        <input type="text" placeholder='Find your program like "Department of Phycology"' aria-label="Find your program" className="w-[359px] h-[18px] bg-transparent p-0 font-[family:var(--font-inter)] text-[15px] font-medium leading-[100%] tracking-[0%] text-[#9191A6] placeholder:text-[#9191A6] outline-none" />

                    </div>

                    {/* Popular Search */}
                    <div className="flex w-[769px] h-[38px] items-center gap-[10px] py-[10px] opacity-100">

                        <span className="shrink-0 font-[family:var(--font-inter)] text-[15px] font-bold leading-[100%] tracking-[0%] text-[#018837]">
                            Popular Search:
                        </span>

                        <div className="flex items-center gap-[4px] whitespace-nowrap font-[family:var(--font-inter)] text-[15px] font-normal leading-[100%] tracking-[0%] text-[#737477]">

                            <span className="underline">
                                Department of Microbiology
                            </span>

                            <span className="underline">
                                Department of Community Medicine
                            </span>

                            <span className="underline">
                                Department of Pathology
                            </span>

                        </div>

                    </div>

                </div>

                {/* Left Layout 3 */}
                <div className="relative flex w-[769px] h-[120px] items-center justify-between bg-[#0188371A] p-[20px] opacity-100">

                    {/* Dashed Border */}
                    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 769 120" preserveAspectRatio="none" aria-hidden="true">
                        <rect x="0.5" y="0.5" width="768" height="119" fill="none" stroke="#018837" strokeWidth="1" strokeDasharray="5 5" />
                    </svg>

                    {/* Inner Left Layout */}
                    <div className="flex w-[374px] h-[80px] items-center gap-[10px] opacity-100">

                        {/* Program Image */}
                        <Image src="/Frame%2088.png" alt="Department Program" width={116} height={80} className="w-[116px] h-[80px] shrink-0 object-cover opacity-100" />

                        {/* Program Information */}
                        <div>

                            {/* Popular Program */}
                            <p className="w-[89px] h-[13px] whitespace-nowrap font-[family:var(--font-inter)] text-[11px] font-semibold leading-[100%] tracking-[0%] text-[#000000] opacity-100">
                                Popular Program
                            </p>

                            {/* Department Name */}
                            <h3 className="w-[248px] h-[22px] font-[family:var(--font-inter)] text-[18px] font-bold leading-[100%] tracking-[0%] text-[#018837] opacity-100">
                                Department of Microbiology
                            </h3>

                        </div>

                    </div>

                    {/* Inner Right Layout */}
                    <div className="flex w-[57px] h-[80px] items-center justify-center rounded-[2px] bg-[#018837] opacity-100">

                        {/* Yellow Arrow Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4 12H19M12 5L19 12L12 19" stroke="#FECD2F" strokeWidth="2" />
                        </svg>

                    </div>

                </div>

            </div>

            {/* Right Layout */}
            <div className="relative flex w-[621px] h-[456.849609375px] shrink-0 items-start gap-[21px] opacity-100">

                {/* Doctor Mask Image */}
                <Image src="/Doctor Mask.jpg" alt="Doctor and medical staff" width={252} height={234} className="w-[252px] h-[234.4359893798828px] shrink-0 object-cover opacity-100" />

                {/* Gloves Image */}
                <Image src="/gloves.jpg" alt="Medical professionals wearing gloves" width={348} height={457} className="w-[348px] h-[456.849609375px] shrink-0 object-cover opacity-100" />

                {/* Department Overlay */}
                <div className="absolute top-[292.54px] left-0 z-10 flex w-[337.6859436035156px] h-[116.99443817138672px] items-center gap-[18.08px] bg-[#01883780] px-[30px] py-[15px] backdrop-blur-[10px] opacity-100">

                    {/* Department Icon */}
                    <Image src="/Department%20Icon.png" alt="Department Icon" width={87} height={87} className="w-[86.77686309814453px] h-[86.77686309814453px] shrink-0 object-contain opacity-100" />

                    {/* Department Information Layout */}
                    <div className="flex w-[172.83058166503906px] h-[79px] shrink-0 flex-col opacity-100">

                        {/* Department Count */}
                        <h3 className="flex w-[172.83058166503906px] h-[43px] items-center font-[family:var(--font-bitter)] text-[36.16px] font-bold leading-[100%] tracking-[0%] text-[#FFFFFF] opacity-100">
                            28+
                        </h3>

                        {/* Department Description */}
                        <p className="flex w-[172.83058166503906px] h-[36px] flex-col justify-center font-[family:var(--font-inter)] text-[14.46px] font-normal leading-[100%] tracking-[0%] text-[#FFFFFF] opacity-100">
                            <span>Department Available For</span>
                            <span>Student</span>
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}
