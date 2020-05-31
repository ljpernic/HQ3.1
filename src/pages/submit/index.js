import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';
import Call from '../../components/Call';

const Submit = props => (
  <Layout bodyClass="page-submit">
    <SEO title="Submit" />
    <div className="intro intro-small">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Submit</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Call button={false} />
        </div>
        <div className="col-8">
          <h4 className="mt-4">Guidelines</h4>
          <table className="table table-sm opening-hours-table">
            <tbody>
              <tr>
                <td className="day font-weight-bold">Fiction</td>
                <td className="opens">element 1</td>
                <td>-</td>
                <td className="closes">element 2</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Non-fiction</td>
                <td className="opens">element 1</td>
                <td>-</td>
                <td className="closes">element 2</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">How to send a letter from the future</td>
                <td className="opens">element 1</td>
                <td>-</td>
                <td className="closes">element 2</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Art submissions</td>
                <td className="opens">element 1</td>
                <td>-</td>
                <td className="closes">element 2</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">Others</td>
                <td className="opens">element 1</td>
                <td>-</td>
                <td className="closes">element 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);

export default Submit;
