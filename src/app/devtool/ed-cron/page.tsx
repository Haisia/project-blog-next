import DevToolPost from "@/components/devToolPost";
import CronContent from "@/app/devtool/ed-cron/(clients)/cronContent";

const menuName = "Dev Tool";
const menuLink = "/devtool";
const pageName = "Cron Expression";
const pageLink = "/ed-cron";

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
        content={<CronContent/>}
      />
    </>
  );
};

export default Page;
