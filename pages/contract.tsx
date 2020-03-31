import React from "react";
import fetch from "isomorphic-unfetch";
import { NextSeo } from 'next-seo';
import Contract from "../src/components/contract/Contract";

import {LibraryItem as LibraryItemType} from "../src/store/library/types";

const ContractPage = (data: LibraryItemType) => {
  return (
    <div>
      <NextSeo
        title={data.title}
        description={data.description}
      />
      <h1>Contract details</h1>
      <Contract data={data} />
     </div>
  );
};

ContractPage.getInitialProps = async ({ query }) => {
  const response = await fetch(`http://localhost:3000/api/contract?id=${query.id}`);
  const json = await response.json();
  return { ...json }
};


export default ContractPage;
