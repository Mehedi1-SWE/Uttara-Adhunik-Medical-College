import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative box-border flex h-[500px] w-[1600px] gap-[10px] overflow-hidden p-[80px] rotate-0 opacity-100">
        <Image src="/Hero Banner.png" alt="Uttara Adhunik Medical College Hero Banner" fill priority className="object-cover object-top" />

        {/* Green Banner Layout */}
        <div className="relative z-10 flex h-[327.28692626953125px] w-[1440px] shrink-0 items-end justify-between bg-[#0188374D] px-[50px] py-[20px] rotate-0 opacity-100">
          {/* Left Layout */}
          <div className="flex h-[118.66646575927734px] w-[1090px] shrink-0 flex-col gap-[10px] rotate-0 opacity-100">
            {/* Inner Layout 1 */}
            <div className="flex h-[24px] w-[381px] shrink-0 items-center rotate-0 opacity-100">
              <p className="whitespace-nowrap font-[family-name:var(--font-inter)] text-[20px] leading-[100%] font-medium tracking-[0px] text-[#000000]">
                HOME &gt; FACILITIES &gt;&gt; <span className="text-[#018837]">Hospital Service</span>
              </p>
            </div>

            {/* Inner Layout 2 */}
            <div className="flex h-[63px] w-[555px] shrink-0 items-center rotate-0 opacity-100">
              <h1 className="whitespace-nowrap font-[family-name:var(--font-bitter)] text-[70px] leading-[62.4px] font-light tracking-[0px] text-[#000000]">
                FACILITES <span className="font-bold text-[#018837]">UAMC</span>
              </h1>
            </div>
          </div>

          {/* Right Image Icon */}
          <Image src="/UAMC Icon.png" alt="UAMC Icon" width={250} height={287.28692626953125} className="h-[287.28692626953125px] w-[250px] shrink-0 object-contain rotate-0 opacity-100" />
        </div>
      </section>

      {/* Facilities Navigation Layout */}
      <section className="box-border flex h-[220px] w-[1601px] justify-between bg-[#FBFBFB] px-[80px] py-[50px] rotate-0 opacity-100">
        {/* Main Inner Layout */}
        <div className="flex h-[120px] w-[1441px] shrink-0 flex-col justify-between bg-[#FBFBFB] rotate-0 opacity-100">
          {/* First Row */}
          <div className="flex h-[45px] w-[1441px] shrink-0 items-center justify-between rotate-0 opacity-100">
            {/* Hospital Service */}
            <Link href="/facilities/hospital-service" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-2 border-dashed border-[#018837] bg-[#018837] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[94px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Hospital Service</span>
            </Link>

            {/* Departments */}
            <Link href="/facilities/departments" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[76px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Departments</span>
            </Link>

            {/* Library */}
            <Link href="/facilities/library" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[41px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Library</span>
            </Link>

            {/* Medical Education Unit */}
            <Link href="/facilities/medical-education-unit" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[133px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Medical Education Unit</span>
            </Link>

            {/* Training */}
            <Link href="/facilities/training" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[47px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Training</span>
            </Link>

            {/* Publications */}
            <Link href="/facilities/publications" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[71px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Publications</span>
            </Link>
          </div>

          {/* Second Row */}
          <div className="flex h-[45px] w-[890px] shrink-0 items-center gap-[30px] self-center rotate-0 opacity-100">
            {/* Seminar */}
            <Link href="/facilities/seminar" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[47px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Seminar</span>
            </Link>

            {/* Hostel */}
            <Link href="/facilities/hostel" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[37px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Hostel</span>
            </Link>

            {/* Laboratory */}
            <Link href="/facilities/laboratory" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[63px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Laboratory</span>
            </Link>

            {/* Cafeteria */}
            <Link href="/facilities/cafeteria" className="box-border flex h-[45px] w-[200px] shrink-0 items-center justify-between rounded-[5px] border-b border-solid border-[#737477] bg-[#737477] px-[30px] py-[15px] backdrop-blur-[50px] rotate-0 opacity-100">
              <span className="flex h-[15px] w-[53px] shrink-0 items-center whitespace-nowrap font-[family-name:var(--font-inter)] text-[12px] leading-[100%] font-medium tracking-[0px] text-[#FFFFFF]">Cafeteria</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}