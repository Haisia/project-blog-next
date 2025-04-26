import DevToolPost from "@/components/devToolPost";
import {HtmlEntitiesContent} from "@/app/devtool/ed-htmlentities/(clients)/htmlEntitiesContent";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "HTML Entities";
const pageLink = "/ed-htmlentities";

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
        content={<HtmlEntitiesContent/>}
      />
    </>
  );
};

export default Page;
