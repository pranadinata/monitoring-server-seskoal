import React, { ReactElement } from "react";
import Layout from "@layout/index";
import BreadcrumbItem from "@common/BreadcrumbItem";
import PhoneBook from "@views/form-input/phone-book"

const PhoneContact = () => {
  return (
    <React.Fragment>
      <BreadcrumbItem mainTitle="Setting" subTitle="Setting Apps" />
      <PhoneBook></PhoneBook>
    </React.Fragment>
  );
};

PhoneContact.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default PhoneContact;
