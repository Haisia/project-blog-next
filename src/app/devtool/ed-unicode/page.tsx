import DevToolPost from "@/components/devToolPost";
import {UnicodeContent} from "@/app/devtool/ed-unicode/(clients)/unicodeContent";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Unicode Encoding & Decoding";
const pageLink = "/ed-unicode";

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
        content={<UnicodeContent/>}
      />
    </>
  );
};

export default Page;
