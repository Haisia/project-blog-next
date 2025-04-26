import MarkdownPost from "@/components/markdownPost";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Base64 Encoding & Decoding";
const pageLink = "/base64";

const Page = async () => {
  const breadcrumbItems = [
    { content: menuName, link: menuLink },
    { content: pageName, link: `${menuLink}${pageLink}` }
  ];

  return (
    <MarkdownPost
      breadcrumbItems={breadcrumbItems}
      item={{ title: pageName, content: '' }}
    />
  );
};

export default Page;
