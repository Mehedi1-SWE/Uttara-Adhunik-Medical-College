import Image from "next/image";

export default function Hero() {
    return (
        <section className="box-border flex h-[500px] w-[1600px] gap-[10px] p-[80px] rotate-0 opacity-100">
            <div className="relative h-full w-full">
                <Image src="/Hero Banner.png" alt="Uttara Adhunik Medical College Hero Banner" fill priority />
            </div>
        </section>
    );
}