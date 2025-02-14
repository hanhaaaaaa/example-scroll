import { motion, useScroll, useTransform } from "framer-motion";

const largeImages = [
  "https://www.hkt.co.jp/images/index/index_feature_bg1.jpg",
  "https://www.hkt.co.jp/images/index/index_feature_bg2.jpg",
  "https://www.hkt.co.jp/images/index/index_feature_bg3.jpg",
  "https://www.hkt.co.jp/images/index/index_feature_bg4.jpg",
];

const smallImages = [
  "https://www.hkt.co.jp/images/index/index_feature_img4.jpg",
  "https://www.hkt.co.jp/images/index/index_feature_img3.jpg",
  "https://www.hkt.co.jp/images/index/index_feature_img2.jpg",
  "https://www.hkt.co.jp/images/index/index_feature_img1.jpg"

];

const ScrollGallery = () => {
  const { scrollYProgress } = useScroll();
  const yLarge = useTransform(scrollYProgress, [0, 1], ["100vh", "-470%"]);
  const ySmall = useTransform(scrollYProgress, [1, 0], ["0%", "-310px"]);

  return (
    <div className="relative w-full min-h-[400vh] my-[calc((50%_-_326px)]">
      <motion.div className="fixed inset-0 z-[-1]" style={{ y: yLarge }}>
        {largeImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center h-screen w-full"
            style={{ backgroundImage: `url(${src})`, top: `${i * 100}vh` }}
          />
        ))}
      </motion.div>
      <div className="sticky left-[10%] top-[calc((100vh_-_326px)_/_2)] w-[326px] h-[326px] overflow-hidden shadow-lg">
        <motion.div className="relative w-full h-full" style={{ y: ySmall }}>
          {smallImages.map((src, i) => (
            <div
              key={i}
              className="absolute inset-x-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})`, top: `calc(${i * 100}% + ${i * 10}px)` }}
            />
          ))}
        </motion.div>
      </div>

    </div>
  );
}

export default ScrollGallery;