import HeroSection from "../components/ubucon/HeroSection";

const Ubucon = () => {
  return (
    <div
      className="font-ubuntu min-h-screen bg-grid-pattern flex flex-col"
      style={{
        backgroundColor: "#fff",
        backgroundImage: "url('/grid-pattern.svg')",
        color: "#222",
      }}
    >
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  );
};

export default Ubucon;
