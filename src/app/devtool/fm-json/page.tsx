import DevToolPost from "@/components/devToolPost";
import JsonContent from "@/app/devtool/fm-json/(clients)/jsonContent";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Json Formatter";
const pageLink = "/fm-json";

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
        content={<JsonContent/>}
      />
    </>
  );
};

export default Page;
