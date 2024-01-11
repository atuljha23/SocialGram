import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const Profile = () => {
  const { data: currentUser } = useGetCurrentUser();
  return (
    <div className="flex flex-col flex-1 item-start mt-32 ml-12 w-full">
      <div className="flex-between items-start gap-6">
        <img
          className="md:h-20 md:w-20 rounded-full h-12 w-12"
          src={currentUser?.imageUrl || `/assets/images/profile.png`}
          alt="avatar"
          width={44}
          height={44}
        />
        <span className="flex-1">
          <h1 className="md:text-3xl text-xl mt-1">{currentUser?.name}</h1>
          <p className="md:text-xl text-lg text-gray-600">
            @{currentUser?.username}
          </p>
          <p className="max-w-sm">
            I am software engineer and I code in my free time.
          </p>
        </span>
        <div className="md:text-lg text-sm mr-6 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer flex-center gap-3">
          <p className="small-medium md:base-medium text-light-2">
            Edit Profile
          </p>
          <img src="/assets/icons/edit.svg" width={20} height={20} alt="edit" />
        </div>
      </div>
      <div className="flex ml-[102px]">
        <div className="flex-start gap-6">
          <div className="flex-center flex-row gap-2">
            <p className="md:text-base text-lg text-primary-500">
              {currentUser?.posts.length}
            </p>
            <p className="md:text-base text-sm ">Posts</p>
          </div>
          <div className="flex-center flex-row gap-1">
            <p className="md:text-base text-lg text-primary-500">0</p>
            <p className="md:text-base text-sm ">Followers</p>
          </div>
          <div className="flex-center flex-row gap-1">
            <p className="md:text-base text-lg text-primary-500">0</p>
            <p className="md:text-base text-sm">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
