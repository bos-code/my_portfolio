import { useState, useEffect } from "react";

function GridDisplay({ list }) {
  return (
    <div className="">
      <ul className="grid grid-cols-2 grid-rows-3   h-[100vh] gap-5">
        {list.map((item, index) => (
          <li
            key={index}
            className={` shotlist shadow-xl w-full p-3 bg-[#111111a9]   works  span-${
              index + 1
            }`}
          >
            <figure className="screenshot-figure">
              <img src={item} alt={`Screenshot ${index + 1}`} />
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
    const urls = [
      "https://www.example.com",
      "https://www.wikipedia.org",
      "https://www.github.com",
      "https://johndera-portfolio.vercel.app/",
    ];

    const generatedUrls = urls.map((url) => {
      const encodedUrl = encodeURIComponent(url);
      return `https://api.screenshotone.com/take?access_key=DO2afWp9D4JOjQ&url=${encodedUrl}`;
    });
    setScreenshotUrls(generatedUrls);
  }, []); // Empty dependency array, runs once after initial render

  return <GridDisplay list={screenshotUrls} />;
};
