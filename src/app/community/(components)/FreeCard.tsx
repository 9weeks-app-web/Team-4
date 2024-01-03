import Image from 'next/image';
import CommunityDummys from '../api/community/(dummys)';

const FreeCard = () => {
  console.log(CommunityDummys);
  return (
    <div className="my-11">
      {CommunityDummys.map(post => (
        <div key={post.id}>
          <div className="flex">
            <div className="flex justify-center items-center mr-2 w-12 h-12 border rounded-full"></div>
            <div>
              <div className="flex">
                <div className="mr-2">{post.nickname}</div>
                <div>{post.major}</div>
              </div>
              <div className="flex text-neutral-40">
                <div suppressHydrationWarning={true}>
                  {post.createdAt.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-0 border border-neutral-30 rounded-2xl p-8 my-4">
            <div className="flex justify-evenly mb-5">
              {post.thumbnail.map((imageUrl, index) => (
                <div
                  key={index}
                  className="border rounded-2xl border-neutral-30 w-[297px] h-[222.75px] mr-5"
                >
                  <Image
                    src={imageUrl}
                    alt={`Thumbnail ${index}`}
                    width={297}
                    height={222.75}
                  />
                </div>
              ))}
            </div>
            <div className="font-bold text-[26px] mb-[14px]">{post.title}</div>
            <div className="line-clamp-5 mb-[21.25px] text-lg">
              {post.content}
            </div>
            <div className="flex justify-around border rounded-xl border-neutral-30 p-[10px] h-[68px]">
              <div className="flex items-center text-neutral-60 h-12 justify-evenly w-full">
                <div className="flex items-center">
                  <Image
                    src="/images/like.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.likes}</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/chat.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.commentCounts}</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/eye.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.hits}</div>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/images/bookmark.png"
                    alt="Star Image"
                    width={24}
                    height={24}
                    className="mr-[6px]"
                  />
                  <div>{post.bookmarks}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreeCard;
