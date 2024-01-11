import ProfilePerfectionCard from '../card/sidebar/ProfilePerfectionCard';
import ContactTimeCard from '../card/sidebar/ContactTimeCard';
import MenuListCard from '../card/sidebar/MenuListCard';
import MyProfileCard from '../card/sidebar/MyProfileCard';
import MySnsCard from '../card/sidebar/MySnsCard';

const SideBarSection = () => {
  return (
    <div className="w-[280px]">
      <MyProfileCard />
      <ProfilePerfectionCard />
      <ContactTimeCard />
      <MenuListCard />
      <MySnsCard />
    </div>
  );
};

export default SideBarSection;
