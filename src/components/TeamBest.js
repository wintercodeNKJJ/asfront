import TeamMemers from "../dbitems/dataTeam";
import urlFor from "../utility/imageUrl";

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
            <div className="lg:mx-44 mx-10 my-8">
              <div className="w-3/6">
                <h1 className="font-bold text-3xl font-serif">{Title[0].title}</h1>
                <p>{Title[0].body}</p>
              </div>
            </div>
          }

          {/* <!-- items begin--> */}
          <div className=" h-full grid grid-cols-1 md:grid-cols-2 m-10">
            {/* <!-- coligue 1 --> */}

            {TeamMembers.map(item => (
              <div className="relative mt-14 ml-24 flex justify-end bg-[#347423] h-44 w-72">
                {/* <!-- image --> */}
                <div className="absolute -top-8 -left-24">
                  <img src={urlFor(item.mainImage)} alt="" className="h-44 bg-[#4d4643] rounded-full" />
                </div>
                {/* <!-- Name and Position --> */}
                <div className="w-48 px-2 py-2 flex flex-col gap-4 justify-center text-black">
                  <h1 className="text-2xl font-bold font-serif">{item.title}</h1>
                  <p>{item.post}</p>
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