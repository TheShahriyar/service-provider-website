import React from "react";

const Blog = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="container py-20">
          <div className="mb-16">
            <h2 className="text-3xl mb-4">
              1. Difference between Authentication and Authorization
            </h2>
            <p>
              Both Authentication and Authorization area units are utilized in
              respect of knowledge security that permits the safety of an
              automatic data system. Each area unit terribly crucial topics
              usually related to the online as key items of its service
              infrastructure. However, each of the terms area units is
              completely different with altogether different ideas. whereas
              indeed, they’re usually employed in an equivalent context with an
              equivalent tool, they’re utterly distinct from one another. In the
              authentication process, the identity of users is checked for
              providing the access to the system. While in the authorization
              process, a person’s or user’s authorities are checked for
              accessing the resources. Authentication is done before the
              authorization process, whereas the authorization process is done
              after the authentication process.
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl mb-4">
              2. Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p>We are using Firebase for authentication.</p>
            <p>
              We can use different tools for authentication. Like Auth0,
              MondoDB, JWT, Passport
            </p>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl mb-4">
              3. What other services does firebase provide other than
              authentication?
            </h2>
            <ol>
              <li>Realtime Database</li>
              <li>Remote Config</li>
              <li>Firebase Extension</li>
              <li>App Check</li>
              <li>Could Function</li>
              <li>Could Messaging</li>
              <li>Hosting</li>
              <li>Could Storage</li>
              <li>Firebase ML</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
