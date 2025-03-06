export const CardProfile = ({ name, image, role }) => {
  return (
    <div className="w-[240px] h-[320px] relative shadow-md rounded-xl overflow-hidden group">
      <img src={image} alt={name} />
      {/* Overlay */}
      <div className="absolute w-full h-full transition-all duration-500 -bottom-36 bg-gradient-to-b from-white/0 to-black/90 group-hover:bottom-0"></div>
      <p className="absolute w-full text-2xl font-semibold text-center text-white transition-all duration-500 bottom-2 group-hover:bottom-36">
        {name}
      </p>
      <p className="absolute w-full text-lg text-center text-gray-300 transition-all duration-500 -bottom-10 group-hover:bottom-28">
        {role}
      </p>
    </div>
  );
};
