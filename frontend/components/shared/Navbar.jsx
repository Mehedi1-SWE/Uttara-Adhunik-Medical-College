import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="relative mx-auto h-[164.22515869140625px] w-[1600px] shrink-0 rotate-0 opacity-100">
            {/* Upper layout */}
            <div className="box-border flex h-[58px] w-[1600px] items-center gap-[10px] bg-[#FCFBFB] px-[80px] rotate-0 opacity-100">
                <div className="flex h-[38px] w-[1440px] shrink-0 items-center justify-between rotate-0 opacity-100">
                    {/* Upper left layout */}
                    <div className="flex h-[30px] w-[720px] shrink-0 items-center gap-[20px] rotate-0 opacity-100">
                        {/* Address */}
                        <div className="flex h-[30px] w-[285px] shrink-0 items-center gap-[10px] rotate-0 opacity-100">
                            <span className="relative block h-[20px] w-[20px] shrink-0">
                                <Image src="/map-pin.png" alt="" width={20} height={20} className="h-[20px] w-[20px] object-contain" />
                            </span>
                            <span className="flex h-[30px] w-[235px] shrink-0 flex-col justify-center font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#00000080]">
                                <span className="whitespace-nowrap">House - 34, Road - 4, Sector - 9,</span>
                                <span className="whitespace-nowrap">Sonargaon Janapath, Uttara Model Town</span>
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex h-[20px] w-[133px] shrink-0 items-center gap-[10px] rotate-0 opacity-100">
                            <span className="relative block h-[20px] w-[20px] shrink-0">
                                <Image src="/mail.png" alt="" width={20} height={20} className="h-[20px] w-[20px] object-contain" />
                            </span>
                            <a href="mailto:info@uamc.com" className="flex h-[15px] w-[93px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#00000080]">info@uamc.com</a>
                        </div>

                        {/* Phone */}
                        <div className="flex h-[20px] w-[163px] shrink-0 items-center gap-[10px] rotate-0 opacity-100">
                            <span className="relative block h-[20px] w-[20px] shrink-0">
                                <Image src="/phone.png" alt="" width={20} height={20} className="h-[20px] w-[20px] object-contain" />
                            </span>
                            <a href="tel:+8801700220000" className="flex h-[15px] w-[113px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#00000080]">+880 1700-220000</a>
                        </div>
                    </div>

                    {/* Upper right layout */}
                    <div className="flex h-[38px] w-[720px] shrink-0 gap-[10px] rotate-0 opacity-100">
                        {/* Student Portal */}
                        <Link href="/student-portal" className="box-border flex h-[38px] w-[134px] shrink-0 cursor-pointer items-center gap-[10px] rounded-[5px] px-[15px] py-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#444444]">
                            <span className="flex h-[18px] w-[104px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[15px] leading-[100%] font-medium tracking-[0px] text-[#444444]">Student Portal</span>
                        </Link>

                        {/* Teachers Portal */}
                        <Link href="/teachers-portal" className="box-border flex h-[38px] w-[143px] shrink-0 cursor-pointer items-center gap-[10px] rounded-[5px] px-[15px] py-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#444444]">
                            <span className="flex h-[18px] w-[113px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[15px] leading-[100%] font-medium tracking-[0px] text-[#444444]">Teachers Portal</span>
                        </Link>

                        {/* Alumni */}
                        <Link href="/alumni" className="box-border flex h-[38px] w-[80px] shrink-0 cursor-pointer items-center gap-[10px] rounded-[5px] px-[15px] py-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#444444]">
                            <span className="flex h-[18px] w-[50px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[15px] leading-[100%] font-medium tracking-[0px] text-[#444444]">Alumni</span>
                        </Link>

                        {/* Events */}
                        <Link href="/events" className="box-border flex h-[38px] w-[79px] shrink-0 cursor-pointer items-center gap-[10px] rounded-[5px] px-[15px] py-[10px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#444444]">
                            <span className="flex h-[18px] w-[49px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[15px] leading-[100%] font-medium tracking-[0px] text-[#444444]">Events</span>
                        </Link>

                        {/* Divider after Events */}
                        <div aria-hidden="true" className="h-[20px] w-0 shrink-0 self-center border-l border-solid border-[#444444] opacity-100" />

                        {/* Contact Us */}
                        <Link href="/contact" className="box-border flex h-[38px] w-[111px] shrink-0 cursor-pointer items-center gap-[10px] rounded-[5px] px-[15px] py-[10px] transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#444444]">
                            <span className="flex h-[18px] w-[81px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[15px] leading-[100%] font-medium tracking-[0px] text-[#444444]">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Lower layout */}
            <div className="box-border flex h-[106.22516632080078px] w-[1600px] shrink-0 items-center gap-[30px] px-[80px] py-[20px] rotate-0 opacity-100">
                {/* First layout */}
                <div className="flex h-[66.22516632080078px] w-[534px] shrink-0 items-center gap-[30px] rotate-0 opacity-100">
                    {/* Logo and college name */}
                    <div className="flex h-[66.22516632080078px] w-[249.50331115722656px] shrink-0 items-center gap-[8.28px] rotate-0 opacity-100">
                        <Image src="/UAMC Icon.png" alt="Uttara Adhunik Medical College logo" width={66.22516632080078} height={66.22516632080078} className="h-[66.22516632080078px] w-[66.22516632080078px] shrink-0 object-contain rotate-0 opacity-100" />
                        <div className="flex h-[42px] w-[175px] shrink-0 flex-col justify-center text-black rotate-0 opacity-100">
                            <span className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[20.7px] leading-[100%] font-bold tracking-[0px]">Uttara Adhunik</span>
                            <span className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[14.9px] leading-[100%] font-medium tracking-[0px]">Medical College (UAMC)</span>
                        </div>
                    </div>

                    {/* Divider between logo and social icons */}
                    <div aria-hidden="true" className="h-0 w-[20px] shrink-0 -rotate-90 border-t border-solid border-[#444444] opacity-100" />

                    {/* Social icons */}
                    <div className="box-border flex h-[19.354839324951172px] w-[100px] shrink-0 items-center gap-[16.13px] py-[3.23px] rotate-0 opacity-100">
                        <Image src="/facebook-logo_svgrepo.com.png" alt="Facebook" width={12.903225898742676} height={12.903225898742676} className="h-[12.903225898742676px] w-[12.903225898742676px] shrink-0 object-contain rotate-0 opacity-100" />
                        <Image src="/youtube-168_svgrepo.com.png" alt="YouTube" width={12.903225898742676} height={12.903225898742676} className="h-[12.903225898742676px] w-[12.903225898742676px] shrink-0 object-contain rotate-0 opacity-100" />
                        <Image src="/linkedin-logo_svgrepo.com.png" alt="LinkedIn" width={12.903225898742676} height={12.903225898742676} className="h-[12.903225898742676px] w-[12.903225898742676px] shrink-0 object-contain rotate-0 opacity-100" />
                        <Image src="/instagram-logo-facebook-2_svgrepo.com.png" alt="Instagram" width={12.903225898742676} height={12.903225898742676} className="h-[12.903225898742676px] w-[12.903225898742676px] shrink-0 object-contain rotate-0 opacity-100" />
                    </div>
                </div>

                {/* Second layout */}
                <div className="flex h-[44px] w-[748px] shrink-0 items-center gap-[5px] rotate-0 opacity-100">
                    {/* Home */}
                    <Link href="/" className="box-border flex h-[38px] w-[67px] shrink-0 cursor-pointer gap-[10px] border-b border-solid border-[#018837] p-[10px] rotate-0 opacity-100">
                        <span className="flex h-[18px] w-[47px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-bitter)] text-[15px] leading-[100%] font-normal tracking-[0.02em] text-[#018837] uppercase">Home</span>
                    </Link>

                    {/* About UAMC */}
                    <button type="button" aria-haspopup="dialog" className="box-border flex h-[44px] w-[154px] shrink-0 cursor-pointer items-center gap-[10px] p-[10px] rotate-0 opacity-100">
                        <span className="flex h-[18px] w-[100px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-bitter)] text-[15px] leading-[100%] font-normal tracking-[0.02em] text-black uppercase">About UAMC</span>
                        <span aria-hidden="true" className="block h-[24px] w-[24px] shrink-0 rotate-0 opacity-100">{/* Chevron-down icon */}</span>
                    </button>

                    {/* Facilities */}
                    <button type="button" aria-haspopup="dialog" className="box-border flex h-[44px] w-[135px] shrink-0 cursor-pointer items-center gap-[10px] p-[10px] rotate-0 opacity-100">
                        <span className="flex h-[18px] w-[81px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-bitter)] text-[15px] leading-[100%] font-normal tracking-[0.02em] text-black uppercase">FACILITIES</span>
                        <span aria-hidden="true" className="block h-[24px] w-[24px] shrink-0 rotate-0 opacity-100">{/* Chevron-down icon */}</span>
                    </button>

                    {/* Admission */}
                    <div className="flex items-center">
                        <span className="flex h-[18px] w-[88px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-bitter)] text-[15px] leading-[100%] font-normal tracking-[0.02em] text-black uppercase">ADMISSION</span>
                        <span aria-hidden="true" className="block h-[24px] w-[24px] shrink-0 rotate-0 opacity-100">{/* Chevron-down icon */}</span>
                    </div>

                    {/* Notice & Media */}
                    <Link href="/notice-and-media" className="box-border flex h-[38px] w-[145px] shrink-0 cursor-pointer items-center gap-[10px] p-[10px] rotate-0 opacity-100">
                        <span className="flex h-[18px] w-[125px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-bitter)] text-[15px] leading-[100%] font-normal tracking-[0.02em] text-black uppercase">NOTICE &amp; Media</span>
                    </Link>

                    {/* Career */}
                    <div className="box-border flex h-[38px] w-[80px] shrink-0 items-center gap-[10px] p-[10px] rotate-0 opacity-100">
                        <span className="flex h-[18px] w-[60px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-bitter)] text-[15px] leading-[100%] font-normal tracking-[0.02em] text-black uppercase">CAREER</span>
                    </div>
                </div>

                {/* Third layout: Vertical divider */}
                <div aria-hidden="true" className="h-0 w-[20px] shrink-0 -rotate-90 border-t border-solid border-[#444444] opacity-100" />

                {/* Fourth layout: Search and menu icons */}
                <div className="flex h-[24px] w-[68px] shrink-0 gap-[20px] rotate-0 opacity-100">
                    <Image src="/search.png" alt="Search" width={24} height={24} className="h-[24px] w-[24px] shrink-0 object-contain rotate-0 opacity-100" />
                    <Image src="/align-right.png" alt="Menu" width={24} height={24} className="h-[24px] w-[24px] shrink-0 object-contain rotate-0 opacity-100" />
                </div>
            </div>

        </header>
    );
}