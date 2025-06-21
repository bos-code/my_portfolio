import { useState, useEffect } from "react";

function GridDisplay({ list }) {
  // Track loading state for each image
  const [loadingStates, setLoadingStates] = useState([]);

  useEffect(() => {
    setLoadingStates(Array(list.length).fill(true));
  }, [list]);

  const handleImageLoad = (index) => {
    setLoadingStates((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  return (
    <div className="">
      <ul className="grid grid-cols-2 grid-rows-3   h-[100vh] gap-5">
        {list.map((item, index) => (
          <li
            key={index}
            className={`shotlist shadow-xl w-full p-3 bg-[#111111a9] works span-${
              index + 1
            }`}
          >
            <figure className="screenshot-figure">
              {loadingStates[index] && (
                <div className="skeleton w-full  h-full"></div>
              )}
              <img
                src={item}
                alt={`Screenshot ${index + 1}`}
                style={loadingStates[index] ? { display: "none" } : {}}
                className={loadingStates[index] ? "skeleton" : ""}
                onLoad={() => handleImageLoad(index)}
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
export const ScreenshotViewer = () => {
  // Use a static array of URLs
  const [screenshotUrls, setScreenshotUrls] = useState([]);
  useEffect(() => {
    const accessKey = "tvzo6IHJRVu_Hw"; // reusable key
    const urls = [
      "https://podcast-template-psi.vercel.app/",
      "https://banquee-eta.vercel.app/",
      "https://stream-vibe-movies.vercel.app",
      "https://johndera-portfolio.vercel.app/",
    ];

    const generatedUrls = urls.map((url) => {
      const encodedUrl = encodeURIComponent(url);
      return `https://api.screenshotone.com/take?access_key=${accessKey}&url=${encodedUrl}`;
    });
    setScreenshotUrls(generatedUrls);

    // Cleanup function
    return () => {
      setScreenshotUrls([]);
    };
  }, []); // Empty dependency array, runs once after initial render

  return <GridDisplay list={screenshotUrls} />;
};
