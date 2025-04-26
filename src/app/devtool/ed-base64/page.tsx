import DevToolPost from "@/components/devToolPost";
import {Base64content} from "@/app/devtool/ed-base64/(clients)/base64content";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Base64 Encoding & Decoding";
const pageLink = "/ed-base64";

const breadcrumbItems = [
  { content: menuName, link: menuLink },
  { content: pageName, link: `${menuLink}${pageLink}` },
];

const Page = () => {
  return (
    <>
      <DevToolPost
        breadcrumbItems={breadcrumbItems}
        title={pageName}
        content={<Base64content/>}
      />
    </>
  );
};

export default Page;
