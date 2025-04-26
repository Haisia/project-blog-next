import DevToolPost from "@/components/devToolPost";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Unicode Encoding & Decoding";
const pageLink = "/unicode";

const breadcrumbItems = [
  { content: menuName, link: menuLink },
  { content: pageName, link: `${menuLink}${pageLink}` }
];

const Page = () => {

  return (
    <>
      <DevToolPost
        breadcrumbItems={breadcrumbItems}
        title={pageName}
        content={<div>test</div>}
      />
    </>
  );
};

export default Page;
