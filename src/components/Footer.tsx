export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-10">
            <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-6 text-center">
                <p className="text-sm text-foreground/60">
                    Copyright © 2026 Zargham Haider. All rights reserved.
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/40">
                    Engineered in <span className="text-foreground/70">Pakistan</span>
                </p>
            </div>
        </footer>
    );
}
