import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
/**
 * Used to share Africa Systems webpage to every social network
 * @returns A shar bar containing links to tweeter and other social networks
 */
const ShareBare = () => {
  return (
    <div>
      {/* <!-- Share begin --> */}

      <div className="px-4 md:px-40 my-10 md:my-20">
        <div className="flex justify-center items-center bg-green-600 h-16 mb-4">
          <h1 className="text-white">Learn More</h1>
        </div>

        <div className="flex justify-between px-4 items-center bg-green-300 h-16 border border-green-600">
          <div className=" text-lg font-medium">Share</div>
          <div className="flex justify-around gap-4 text-green-300">
            <div className="bg-green-600"><AiOutlineFacebook size={40} /></div>
            <div className="bg-green-600"><AiOutlineTwitter size={40} /></div>
            <div className="bg-green-600"><AiOutlineInstagram size={40} /></div>
            <div className="bg-green-600"><AiOutlineLinkedin size={40} /></div>
          </div>
        </div>
      </div>
      {/* <!-- Share end --> */}
    </div>
  );
}

export default ShareBare;