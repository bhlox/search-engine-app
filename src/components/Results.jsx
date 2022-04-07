import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/results-context";

function Results() {
  const { getResults, isLoading, results, searchTerm } = useResultContext();
  const location = useLocation();

  console.log(location.pathname);

  useEffect(() => {
    getResults(`${location.pathname}/q=${searchTerm}`);
  }, [location.pathname, searchTerm]);

  if (isLoading) return <div>Loading...</div>;

  //   if (location.pathname !== "/" && !results?.results?.length) {
  //     return <div>Couldn't search anything from that</div>;
  //   }

  if (location.pathname === "/search") {
    return (
      <div className="flex flex-wrap justify-between space-y-6">
        {results?.results?.map(({ link, title, description }) => (
          <div key={Math.random() * 123} className="w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <p>
                {link.length > 30 ? link.substring(0, 30).concat("...") : link}
              </p>
              <p>{title}</p>
            </a>
          </div>
        ))}
      </div>
    );
  }

  if (location.pathname === "/image") {
    return (
      <div className="flex flex-wrap justify-center items-center">
        {results?.image_results?.map(({ image, link: { href, title } }) => (
          <a
            key={Math.random() * 234}
            target="_blank"
            rel="noreferrer"
            href={href}
          >
            <img src={image?.src} alt={title} loading="lazy" />
            <p>{title}</p>
          </a>
        ))}
      </div>
    );
  }

  if (location.pathname === "/news") {
    return (
      <div className="flex flex-wrap justify-between space-y-6">
        {results?.entries?.map(({ link, title, id }) => (
          <div key={id} className="w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <p>
                {link.length > 30 ? link.substring(0, 30).concat("...") : link}
              </p>
              <p>{title}</p>
            </a>
          </div>
        ))}
      </div>
    );
  }

  if (location.pathname === "/video") {
    return (
      <div className="flex flex-wrap justify-between space-y-6">
        {results?.results?.map(({ link, title, additional_links }) => (
          <div key={Math.random() * 123} className="w-full">
            <a href={link} target="_blank" rel="noreferrer">
              <p>
                {link.length > 30 ? link.substring(0, 30).concat("...") : link}
              </p>
              <p>{title}</p>
            </a>
          </div>
        ))}
      </div>
    );
  }

  //   return <div className="min-h-screen">Results</div>;
}

export default Results;
