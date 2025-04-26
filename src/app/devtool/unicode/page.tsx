import DevToolPost from "@/components/devToolPost";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Unicode Encoding & Decoding";
const pageLink = "/unicode";

const breadcrumbItems = [
  { content: menuName, link: menuLink },
  { content: pageName, link: `${menuLink}${pageLink}` }
];

const Page = async () => {

  return (
    <>
      <DevToolPost
        breadcrumbItems={breadcrumbItems}
        title={pageName}
      >
        <div>test</div>
      </DevToolPost>
    </>
  );
};

export default Page;
