import ScrollGallery from "./ScrollGallery";

const App = () => {

  return (
    <>
      <div className="w-full h-[200vh] bg-[#CACACA] text-center text-2xl pt-20">
        Phần bên trên
      </div>
      <ScrollGallery />
      <div className="w-full h-[200vh] bg-[#CACACA] text-center text-2xl pt-20">
        Phần bên dưới
      </div>
    </>
  );
}

export default App;