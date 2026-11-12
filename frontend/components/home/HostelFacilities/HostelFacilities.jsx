
import Image from "next/image";

export default function HostelSection() {
    return (
        <section className="mx-auto flex w-[1600px] h-[1169.0166015625px] flex-col pt-[50px] pb-[50px] opacity-100">

            {/* Layout 1 - Facilities Heading */}
            <div className="flex w-[1600px] h-[207.66647338867188px] shrink-0 flex-col items-center gap-[10px] bg-[#FAF6F6] pt-[40px] pb-[40px] opacity-100">

                {/* Icon and Subtitle Layout */}
                <div className="flex h-[24px] items-center">

                    {/* Graduation Icon */}
                    <svg width="32.49970245361328" height="23.359159469604492" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 opacity-100" aria-hidden="true">
                        <path d="M1.5 7L16.5 1L31.5 7L16.5 13L1.5 7Z" stroke="#018837" strokeWidth="1.4" strokeLinejoin="round" />
                        <path d="M6.5 9.5V16.5C12.5 20.5 20.5 20.5 26.5 16.5V9.5" stroke="#018837" strokeWidth="1.4" strokeLinejoin="round" />
                        <path d="M31.5 7V17" stroke="#018837" strokeWidth="1.4" strokeLinecap="round" />
                        <path d="M29.5 21L31.5 17L33 21" stroke="#018837" strokeWidth="1.2" strokeLinejoin="round" />
                        <path d="M10 22H23" stroke="#018837" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>

                    {/* Subtitle */}
                    <p className="flex w-[267px] h-[24px] items-center font-[family:var(--font-inter)] text-[19.5px] font-medium leading-[23.4px] tracking-[0%] text-[#018837] opacity-100">
                        knowledge meets innovation
                    </p>

                </div>

                {/* Facilities Heading */}
                <h2 className="flex w-[1600px] h-[72px] shrink-0 items-center justify-center text-center font-[family:var(--font-bitter)] text-[60px] font-bold leading-[100%] tracking-[0.03em] text-[#000000] opacity-100">
                    Our Facilities
                </h2>

            </div>

            {/* Layout 2 - Hostel */}
            <div className="w-[1600px] h-[861.35009765625px] shrink-0 bg-[#FAF6F6] pt-[40px] pr-[80px] pb-[80px] pl-[80px] opacity-100">

                {/* Three Layout Container */}
                <div className="flex w-[1440px] h-[741.35009765625px] items-start justify-between">

                    {/* Left Layout */}
                    <div className="flex w-[600px] h-[741.35009765625px] shrink-0 flex-col gap-[20px] opacity-100">

                        {/* Left Layout 1 - Hostel */}
                        <div className="flex w-[58px] h-[23px] shrink-0 items-center opacity-100">
                            <h3 className="font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#018837]">
                                Hostel
                            </h3>
                        </div>

                        {/* Left Layout 2 - Laboratory */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Laboratory Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[99px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Laboratory
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                        {/* Left Layout 3 - Hospital Service */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Hospital Service Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[149px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Hospital Service
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                        {/* Left Layout 4 - Cafeteria */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Cafeteria Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[82px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Cafeteria
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                        {/* Left Layout 5 - Training */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Training Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[77px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Training
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                        {/* Left Layout 6 - Medical Education Unit */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Medical Education Unit Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[209px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Medical Education Unit
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                        {/* Left Layout 7 - Departments */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Departments Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[122px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Departments
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                        {/* Left Layout 8 - Publications */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Publications Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[112px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Publications
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                        {/* Left Layout 9 - Seminar */}
                        <div className="flex w-[440.9012145996094px] min-w-[440.9px] h-[64.59445190429688px] shrink-0 items-center justify-between rounded-[5.2px] bg-[#FFFFFF] p-[10.4px] opacity-100">

                            {/* Seminar Text Layout */}
                            <div className="flex w-[383.7088317871094px] h-[43.79722595214844px] items-center gap-[10.4px] p-[10.4px] opacity-100">
                                <span className="flex w-[77px] h-[23px] items-center whitespace-nowrap font-[family:var(--font-bitter)] text-[18.72px] font-bold leading-[22.46px] tracking-[0%] text-[#000000] opacity-100">
                                    Seminar
                                </span>
                            </div>

                            {/* Right Arrow */}
                            <div className="relative w-[36.395145416259766px] h-[36.395145416259766px] shrink-0 rounded-[2.08px] bg-[#0188371A] opacity-100">
                                <svg className="absolute top-[6.24px] left-[5.2px]" width="24.95667266845703" height="24.95667266845703" viewBox="0 0 24.9567 24.9567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.2 12.48H19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                    <path d="M12.48 5.2L19.759 12.479L12.48 19.758" stroke="#FECD2F" strokeWidth="2.08" />
                                </svg>
                            </div>

                        </div>

                    </div>

                    {/* Middle Layout - Hostel Image */}
                    <div className="w-[404px] h-[741px] shrink-0 opacity-100">
                        <Image src="/Hostel.jpg" alt="UAMC Hostel Facilities" width={404} height={741} className="w-[404px] h-[741px] object-cover opacity-100" />
                    </div>

                    {/* Right Layout */}
                    <div className="flex w-[418px] h-[741px] shrink-0 flex-col justify-center gap-[54.5px] px-[10px] opacity-100">

                        {/* Right Layout 1 */}
                        <div className="flex w-[398px] h-[266.13861083984375px] shrink-0 flex-col gap-[38.38px] p-[7.68px] opacity-100">

                            {/* Hostel Facilities Content */}
                            <div className="flex w-[382.648193359375px] h-[199.40725708007812px] shrink-0 flex-col items-start bg-[#FFFFFF] opacity-100">

                                {/* Hostel Facilities Heading */}
                                <h2 className="flex w-[382.648193359375px] h-[46px] shrink-0 items-center font-[family-name:var(--font-bitter)] text-[38.38px] font-bold leading-[100%] tracking-[0px] text-[#018837]">
                                    Hostel Facilities
                                </h2>

                                {/* Ladies Hostel */}
                                <div className="flex w-[382.648193359375px] h-[23px] shrink-0 items-center gap-[7.68px]">
                                    <h3 className="font-[family-name:var(--font-bitter)] text-[19.19px] font-medium leading-[100%] tracking-[0px] text-[#4A4A4A]">
                                        Ladies hostel:
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="flex w-[382.648193359375px] h-[69px] shrink-0 items-center gap-[7.68px]">
                                    <p className="font-[family-name:var(--font-inter)] text-[19.19px] font-normal leading-[100%] tracking-[0px] text-[#4A4A4A]">
                                        Hostel accommodations for female students are available with limited number of seats.
                                    </p>
                                </div>

                                {/* View Details */}
                                <div className="flex w-[100.462158203125px] h-[13px] shrink-0 items-center justify-between border-b-[0.44px] border-[#0094D3]">

                                    <span className="flex w-[67px] h-[13px] shrink-0 items-center font-[family-name:var(--font-inter)] text-[11.01px] font-semibold leading-[100%] tracking-[0px] text-[#0094D3]">
                                        View Details
                                    </span>

                                    {/* Right Arrow */}
                                    <svg width="10.567" height="10.567" viewBox="0 0 10.567 10.567" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M5.28 2.2L8.36 5.28L5.28 8.36" stroke="#0094D3" strokeWidth="0.88" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </div>

                            </div>

                        </div>

                        {/* Right Layout 2 - View Our Program */}
                        <button type="button" className="flex w-[230px] h-[55px] shrink-0 items-center justify-center gap-[10px] bg-[#018837] px-[30px] py-[15px] opacity-100">

                            {/* Button Text */}
                            <span className="flex w-[140px] h-[25px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[16px] font-medium leading-[25px] tracking-[0%] text-[#FFFFFF]">
                                View Our Program
                            </span>

                            {/* Arrow Icon */}
                            <span className="relative block w-[14.020000457763672px] h-[25px] shrink-0">
                                <svg className="absolute top-[6.5px] left-0" width="14.02" height="12.009428" viewBox="0 0 14.02 12.009428" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M0.5 6.0047H12.5M7.5 1.0047L12.5 6.0047L7.5 11.0047" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

