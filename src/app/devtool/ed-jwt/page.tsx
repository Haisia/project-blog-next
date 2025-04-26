import DevToolPost from "@/components/devToolPost";
import JwtContent from "@/app/devtool/ed-jwt/(clients)/jwtContent";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "JWT Decoding";
const pageLink = "/ed-jwt";

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
        content={<JwtContent/>}
      />
    </>
  );
};

export default Page;
