import logo from "@/assets/olive-logo.png";

const ComingSoon = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center px-6">
      <div dir="ltr" className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Olive Studios"
          className="w-40 md:w-56 h-auto mb-3 md:mb-4 select-none"
          draggable={false}
        />
        <p className="font-display text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-olive-cream mb-8 md:mb-10">
          OLIVE STUDIOS
        </p>
        <p className="font-display text-2xl md:text-3xl font-bold tracking-tight text-olive-cream">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
