import { CalendarIcon, FileTextIcon, GlobeIcon, MobileIcon, ReaderIcon, ViewGridIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { OrbitingCirclesDemo } from "./OrbitCircle";
import { MdPhoneIphone, MdSmartphone } from 'react-icons/md';
import { FaAndroid, FaApple, FaReact } from 'react-icons/fa';


const files = [
    {
        name: "wireframes.sketch",
        body: "Low-fidelity wireframes to structure your product’s layout and flow before high-fidelity design begins.",
    },
    {
        name: "style-guide.pdf",
        body: "Comprehensive brand and design guidelines including color palettes, typography, iconography, and spacing rules.",
    },
    {
        name: "prototype.fig",
        body: "Interactive high-fidelity prototypes created using Figma to simulate user journeys and interactions.",
    },
    {
        name: "design-system.json",
        body: "A reusable set of components, design tokens, and UI patterns to ensure consistency across your product.",
    },
    {
        name: "user-personas.txt",
        body: "Detailed profiles representing key user segments to guide design decisions with empathy and clarity.",
    },
];

const features = [
    {
        Icon: ViewGridIcon,
        name: "UI/UX Design",
        description: "Get structured design deliverables",
        className: "col-span-3 lg:col-span-1 whitespace-pre-wrap break-words",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">{f.body}</blockquote>
                    </figure>
                ))}
            </Marquee>
        ),
    },
    {
        Icon: GlobeIcon,
        name: "Full Stack Web Developement",
        description: "Get notified when something happens.",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
        ),
    },
    {
        Icon: Share2Icon,
        name: "AI Integration",
        description: "Seamless AI integration for both web and mobile applications.",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: MobileIcon, // You can change this to any icon you prefer
        name: "App Development",
        description: "Build high-performance apps for Android and iOS.",
        className: "col-span-3 lg:col-span-1",
        background: (<div className="flex h-[100px] flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles radius={160} speed={2}>
                <MdPhoneIphone color="" size={32} />
                <FaAndroid size={32} />
                <MdSmartphone size={32} />
                <FaApple size={32} />
                <FaReact size={32} />
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={80} reverse>
                <FaReact size={28} />
                <MdSmartphone size={28} />
                <FaApple size={28} />
                <FaAndroid size={28} />
                <MdPhoneIphone size={28} />
            </OrbitingCircles>
        </div>),
    }
];



export function Services() {
    return (
        <div className="flex justify-around flex-col">

            <div className="flex flex-col justify-center items-center">
                <div className="mt-6">
                    <h5 className="border rounded-2xl px-4 py-1">What I bring to the Table</h5>
                </div>
                <div className="mt-1">
                    <h2 className="text-2xl md:text-4xl">How I Can Contribute</h2>
                </div>
            </div>
            <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </BentoGrid>
        </div>
    );
}
