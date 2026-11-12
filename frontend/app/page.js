import Hero from "@/components/home/Hero/page";
import NoticeAndPublication from "@/components/home/NoticeAndPublication/page";
import AboutSection from "@/components/home/About/AboutSection";
import TeamYoungDoctor from "@/components/home/TeamYoungDoctor/TeamYoungDoctor";
import FindYourDepartment from "@/components/home/FindYourDepartment/FindYourDepartment";
import AdmissionSection from "@/components/home/Admission/AdmissionSection";
import HostelFacilities from "@/components/home/HostelFacilities/HostelFacilities";
export default function Home() {
  return (
    <main>
      <Hero />
      <NoticeAndPublication />
      <AboutSection />
      <TeamYoungDoctor />
      <FindYourDepartment />
      <AdmissionSection />
      <HostelFacilities />
    </main>
  );
}