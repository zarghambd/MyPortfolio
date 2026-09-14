export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-background py-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-2xl font-semibold tracking-[-0.06em] text-foreground">Zargham Haider</p>
                        <p className="mt-2 text-sm text-foreground/60">Lahore, Pakistan • Local time</p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-foreground/60">
                        <a href="mailto:zarghamh96@gmail.com" className="hover:text-foreground">
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zargham-haider-189492161/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Aliwaris512"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground"
                        >
                            GitHub
                        </a>
                        <a href="/Zargham_BDM.pdf" download="Zargham_Haider_CV.pdf" className="hover:text-foreground">
                            Resume
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-stone-200 pt-6 text-center md:flex md:items-center md:justify-between md:text-left">
                    <p className="text-sm text-foreground/60">
                        Copyright © 2026 Zargham Haider. All rights reserved.
                    </p>
                    <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-foreground/40 md:mt-0">
                        Engineered in <span className="text-foreground/70">Pakistan</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
