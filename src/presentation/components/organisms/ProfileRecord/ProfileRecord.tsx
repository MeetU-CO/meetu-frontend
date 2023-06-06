import "./ProfileRecord.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OfferCard from "../OfferCard/OfferCard";
import { IOffer } from "../OfferCard/IOffer";

interface IProfileRecord {
  currentJobs: IOffer[];
  pastJobs: IOffer[];
}

const ProfileRecord = ({ currentJobs, pastJobs }: IProfileRecord) => {
  return (
    <Tabs selectedTabClassName="selectedTab" className="profileRecord">
      <div className="profileRecord__tabList-container">
        <TabList className="profileRecord__tabList-container__tabList">
          <div className="profileRecord__tabList-container__tabList__frame">
            <Tab className="profileRecord__tabList-container__tabList__frame__tab">
              Trabajos actuales
            </Tab>
            <Tab className="profileRecord__tabList-container__tabList__frame__tab">
              Trabajos pasados
            </Tab>
          </div>
        </TabList>
      </div>

      <TabPanel
        selectedClassName="selectedTabPanel"
        className="profileRecord__post-container"
      >
        {currentJobs.map((i) => (
          <OfferCard
            imgSrc={i.imgSrc}
            userName={i.userName}
            type={i.type}
            categoryName={i.categoryName}
            title={i.title}
            text={i.text}
            payment={i.payment}
          />
        ))}
      </TabPanel>
      <TabPanel
        selectedClassName="selectedTabPanel"
        className="profileRecord__post-container"
      >
        {pastJobs.map((i) => (
          <OfferCard
            imgSrc={i.imgSrc}
            userName={i.userName}
            type={i.type}
            categoryName={i.categoryName}
            title={i.title}
            text={i.text}
            payment={i.payment}
          />
        ))}
      </TabPanel>
    </Tabs>
  );
};

export default ProfileRecord;
