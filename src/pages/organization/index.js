import React from 'react';
import { graphql, withPrefix, Link } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Helmet from 'react-helmet';
import Image from "gatsby-image";
import Advertisement from '../../components/advertisement';
import CurrentIssue from '../../components/CurrentIssue';

const Organization = (props) => {
  const data = props.data;
  return (
    <Layout bodyClass="page-home">
      <SEO title="Haven Spec Magazine's organization and budget breakdown" />
      <Helmet>
        <meta
          name="description"
          content=""
        />
      </Helmet>

      <div className="intro">
        <div className="container">
          <div className="row2">
            <div className="grid-container">
              <div className="one">
                <CurrentIssue />
                <Advertisement />
              </div>
              <div>
                <div className="col-12">
                  <h4>
                    Our Organization
                  </h4>
                  <hr />
                <div className="pt-2">
                  <Link to="/subscribe">
                      <Image className="advertLong"
                        fixed={data.advertLong.childImageSharp.fixed}      /*This pulls the image from the md file with featured: true (current cover)*/
                      />
                    </Link>
                  </div>                
                </div>


                  <p>
                    Haven Spec is run cooperatively! That means we make our major decisions democratically and that we share what profits we earn according to an agreed 
                    upon set of rules.
                  </p>

                  <p>
                    Currently, we've agreed that, through 2022, every penny we get, whether through sales, subscriptions, or Kickstarter, will go towards increasing author pay, 
                    up to SFWA-standard rates. After we reach SFWA rates, we've agreed that any money earned in excess will be put towards recouping expenses related to art and 
                    web hosting. After those expenses, we've agreed that any profits remaining will be split each issue at a share ratio of 1/2/4 for associate editors, 
                    assistant editors, and editors, respectively.
                  </p>

                  <p>
                    For example, if an issue has two associate editors and one editor, that would be six shares total for that issue (one for each associate editor and 
                    four for the editor). If there were then $60 in profit after increasing author pay and paying expenses, that would be split between the three editors at 
                    $10/$10/$40. 
                  </p>

                  <p>
                    Long-term shares of Haven Spec are also earned at a 1/2/4 ratio for associate editors, assistant editors, and editors, respectively. If Haven Spec were ever 
                    sold at a profit, each previous and current editor would be due a portion of the profits equal to the total number of shares they've earned in the issues 
                    they've worked on divided by the total number of shares earned by everyone across the life of the magazine.
                  </p>

                  <p>
                    For example, after six issues (one year), if each issue had two associate editors and one editor, that would mean six shares per issue, and 36 shares total. 
                    Each associate editor after six issues would have six shares, and the editor would have 24. A third associate editor added for the first issue of the 
                    next year, then, would increase the number of shares per issue to seven (1/1/1/4), the individual totals to 7/7/1/28, and the number of shares overall to 43.
                  </p>

                  <p>
                    The editors have also agreed to meet at least once a month, though the rules that govern profit and pay can only be changed in the first meeting of the year. 
                  </p>

            <hr className="mb-2" />

          </div>
      </div>
    </div>
  </div>
</div>
    </Layout>
  );
};

export const query = graphql`
  query OrganizationQuery {
    advertLong: file(relativePath: {eq: "longadvertisement01.jpg"}) {
      id
      childImageSharp {
        fixed(height:60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Organization;
