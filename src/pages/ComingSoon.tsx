import logo from "@/assets/olive-logo.png";

const ComingSoon = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center px-6">
      <div dir="ltr" className="flex flex-col items-center text-center">
        <img
          src={logo}
          alt="Olive Studios"
          className="w-40 md:w-56 h-auto mb-8 md:mb-10 select-none"
          draggable={false}
        />
        <p className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase text-foreground">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
