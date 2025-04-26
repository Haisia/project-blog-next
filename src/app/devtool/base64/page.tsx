import DevToolPost from "@/components/mdx/devToolPost";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Base64 Encoding & Decoding";
const pageLink = "/base64";

const breadcrumbItems = [
  {content: menuName, link: menuLink},
  {content: pageName, link: `${menuLink}${pageLink}`}
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
