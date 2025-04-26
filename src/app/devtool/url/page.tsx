import DevToolPost from "@/components/devToolPost";
import {UrlContent} from "@/app/devtool/url/(clients)/urlContent";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "URL Encoding & Decoding";
const pageLink = "/url";

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
        content={<UrlContent/>}
      />
    </>
  );
};

export default Page;
