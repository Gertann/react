import Posts from "./Posts/Posts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div >
        <img className={s.photo} src="https://i.playground.ru/p/B3kEVdsuYdcI2A8w4dz6tA.png"></img>
      </div>
      <div>
        https://cdn.fishki.net/upload/post/201506/08/1559171/kr0npr1nz-art-baryshnja-krasivye-kartinki-2163974.jpg+
        desckript
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
