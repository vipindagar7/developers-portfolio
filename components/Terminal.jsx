import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/magicui/terminal";

export function ContactTerminal() {
    return (
        <Terminal>
            {/* Technical-looking loading lines */}
            <TypingAnimation delay={200}>&gt; Initializing secure terminal...</TypingAnimation>
            <TypingAnimation delay={700}>&gt; Establishing encrypted connection 🔐</TypingAnimation>
            <TypingAnimation delay={1200}>&gt; Running whoami...</TypingAnimation>
            <TypingAnimation delay={1700}>&gt; Fetching contact-info.txt</TypingAnimation>

            {/* Actual contact info starts displaying */}
            <TypingAnimation delay={2200}>&gt; cat contact-info.txt</TypingAnimation>

            <AnimatedSpan delay={2700} className="text-green-400">
                Name: <span className="font-semibold">Vipin Dagar</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3200} className="text-green-400">
                Email: <span className="font-semibold">vipindagar.code@gmail.com</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3700} className="text-green-400">
                Phone: <span className="font-semibold">+91 7988402117</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4200} className="text-green-400">
                GitHub:{" "}
                <a
                    href="https://github.com/vipindagar7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-500"
                >
                    github.com/vipindagar7
                </a>
            </AnimatedSpan>

            <AnimatedSpan delay={4700} className="text-green-400">
                LinkedIn:{" "}
                <a
                    href="https://linkedin.com/in/vipindagar07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-400 hover:text-blue-500"
                >
                    linkedin.com/in/vipindagar07
                </a>
            </AnimatedSpan>
        </Terminal>


    );
}
