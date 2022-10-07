import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";
import "./Contents.css";
import { RichText } from "@graphcms/rich-text-react-renderer";


export const client = new ApolloClient({
  // uri: "https://api-ap-south-1.hygraph.com/v2/cl8x83h8p16rd01uq6ze81juf/master",
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const QUERY = gql`
	query Posts {
		posts {
			category
			id
			publishedDate
			title
			content {
				raw
				references {
					... on Asset {
						id
						mimeType
						url
					}
				}
			}
		}	 
	}
`;

const Contents = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  console.log(process.env.REACT_APP_GRAPHQL_ENDPOINT)

  return (
    <div className="contents bg-gray-900">
      {/* <div className="introduction mb-4">
        <p>
          <span className="bg-yellow-300 italic">
            What does it take to become a software developer?{" "}
          </span>
          An ongoing journey of becoming a developer is presented below in the
          form of articles.{" "}
        </p>
      </div> */}

      {data.posts.map(({ publishedDate, title, content, category, id }) => (
        <div className="posts" key={id}>

          <div className="post-card py-4">
            <div className="published-date mb-2">
              <span className="date">{publishedDate}</span>
            </div>

            <div className="article-title">
              <h1 className="article-heading text-2xl leading-7 sm:leading-8 md:text-3xl font-bold">
                { title }
              </h1>
            </div>

          <div className="article-content mt-6">
             <RichText
              content={content.raw.children}
              references={content.references}
            /> 
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Contents;
