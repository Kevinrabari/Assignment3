import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
//Api
const api = "z8i7LWv7RVXCr0DtibE6NSObFlAb3B6Y";

function Feeds() {
  const [articles, setarticles] = useState([]);
  const [term, setterm] = useState("everything");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
            term +
            "&api-key=" +
            api
        );
        const articles = await res.json();
        //console.log(articles.response.docs)
        setarticles(articles.response.docs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);

  //console.log(api_link)

  return (
    <>
      <div>
        <SearchForm />
      </div>
      <div>
        <section>
          {articles.map((article) => {
            const {
              abstract,
              headline: { main },
              byline: { original },
              lead_paragraph,
              news_desk,
              section_name,
              web_url,
              _id,
              word_count,
            } = article;
            return (
              <article key={_id} className="bg-white py-10 px-5 rounded-lg">
                <h2 className="font-bold text-2xl mb-5">{main}</h2>
                <p>{abstract}</p>
                {/* <a href={web_url} target="_blank">Web Resource</a> */}
                <p>{lead_paragraph}</p>

                <ul className="my-4">
                  <li>{original}</li>
                  <li>
                    <span className="font-bold">News Desk:</span>
                    {""}
                    {news_desk}
                  </li>
                  <li>
                    <span className="font-bold">Section Name:</span>
                    {""}
                    {section_name}
                  </li>
                  <li>
                    <span className="font-bold">Word Count:</span>
                    {""}
                    {word_count}
                  </li>
                </ul>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Feeds;
