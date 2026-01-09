export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
            <span className="font-display text-primary text-sm font-semibold">A</span>
          </div>
          <span className="font-display text-lg tracking-widest text-foreground">
            AZUR<span className="text-primary">.</span>
          </span>
        </div>

        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Azur Dance Studio. Toate drepturile rezervate.
        </p>

        <a
          href="tel:+40737560839"
          className="text-primary text-sm tracking-wider hover:underline"
        >
          +40 737 560 839
        </a>
      </div>
    </footer>
  );
};
