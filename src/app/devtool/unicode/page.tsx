import MarkdownPost from "@/components/markdownPost";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Unicode Encoding & Decoding";
const pageLink = "/unicode";

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
