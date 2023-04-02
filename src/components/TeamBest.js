import TeamMemers from "../dbitems/dataTeam";
import urlFor from "../utility/imageUrl";
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import ASL from '../assets/ASL.png'

/**
 * This component shows the best 3 team members of africa systems
 * the information should be recorded insanity
 * @returns the best team members of Africa Systems
 */
const TeamBest = () => {

  const { TeamMembers } = TeamMemers("team");
  const { Title } = TeamMemers("title");
  let show = true;
  let showtitle = true;

  if (TeamMembers.length <= 0) {
    show = false
  }

  if (Title.length <= 0) {
    showtitle = false
  }
  return (
    <div>

      {show &&
        <div>
          {showtitle &&
            <div className="lg:mx-44 mx-10 my-8 flex justify-center">
              <div className="w-3/6 flex flex-col items-center">
                <h1 className="font-bold text-3xl font-serif text-center">{Title[0].title}</h1>
                <p className="text-center">{Title[0].body}</p>
              </div>
            </div>
          }

          {/* <!-- items begin--> */}
          <div class=" h-full flex flex-wrap gap-4 justify-around my-16 mx-4 md:mx-10 items-center lg:pl-0">
            {/* <!-- coligue 1 --> */}

            {TeamMembers.map(item => (

              <div
                class="flex mx-auto text-white hover:text-black hover:bg-gradient-to-br hover:from-white hover:to-[#347423] duration-500 flex-col justify-end items-center p-4 rounded-md bg-gradient-to-br from-[#4d4643] to-[#347423] shadow-lg w-72">

                <div class="">
                  <img src={item.mainImage ? urlFor(item.mainImage) : ASL} alt="" class="h-32 shadow rounded-full bg-white" />
                </div>

                <div class="w-48 py-6 flex flex-col items-center gap-4 justify-center font-serif">
                  <h1 class="text-2xl font-bold font-serif">{item.title}</h1>
                  <p class="text-center">{item.post}</p>
                </div>
                <div class="flex justify-center gap-2 p-2 w-full items-center">
                  <div class="w-full h-[1px] bg-white rounded-full overflow-hidden">
                  </div>
                  <div class="rounded-full p-1 border"><a href="https://www.twitter.com"><AiFillTwitterCircle /></a></div>
                  <div class="rounded-full p-1 border"><AiFillLinkedin href="https://www.linkedin.com" /></div>
                  <div class="rounded-full p-1 border"><AiFillFacebook href="https://www.facebook.com" /></div>
                  <div class="w-full h-[1px] bg-white rounded-full overflow-hidden">
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      }
    </div>
  );
}

export default TeamBest;