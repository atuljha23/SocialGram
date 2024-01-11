import GridPostList from "@/components/shared/GridPostList";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const Profile = () => {
  const { data: currentUser, isPending: isLoading } = useGetCurrentUser();
  return (
    (isLoading && (
      <div className="flex-center flex-1">
        <img src="/assets/icons/loader.svg" alt="loader" />
      </div>
    )) || (
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
            <p className="md:max-w-sm max-w-xs">
              I am software engineer and I code in my free time.
            </p>
          </span>
          <div className="md:text-lg text-sm mr-6 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer flex-center gap-3">
            <p className="hidden md:block small-medium md:base-medium text-light-2">
              Edit Profile
            </p>
            <img
              src="/assets/icons/edit.svg"
              width={20}
              height={20}
              alt="edit"
            />
          </div>
        </div>
        <div className="flex md:ml-[102px] ml-16">
          <div className="flex-start md:gap-6 gap-2">
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
        <div className="flex flex-row mt-12">
          <div className="md:text-lg text-sm mr-6 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer flex-center gap-3">
            <p className="hidden md:block small-medium md:base-medium text-light-2">
              Posts
            </p>
            <img
              src="/assets/icons/posts.svg"
              width={20}
              height={20}
              alt="edit"
            />
          </div>
          <div className="md:text-lg text-sm mr-6 bg-dark-3 rounded-xl px-4 py-2 cursor-pointer flex-center gap-3">
            <p className="hidden md:block small-medium md:base-medium text-light-2">
              Liked Posts
            </p>
            <img
              src="/assets/icons/like.svg"
              width={20}
              height={20}
              alt="edit"
            />
          </div>
        </div>
        <div className="mt-12">
          {currentUser?.posts.length > 0 && (
            <GridPostList posts={currentUser?.posts} showUser={false} />
          )}
        </div>
      </div>
    )
  );
};

export default Profile;
