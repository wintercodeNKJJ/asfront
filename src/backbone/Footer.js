/**
 * ########################################################
 * the footer component
 * Content
 *  -Africa Systems logo information/description
 *  -Links to (About us, Industries, Services, Contact us) pages
 *  -Africa systems contact info.
 * 
 * this content is not yet editable from Sanity cms(to be done)
 */

import ASL from "../assets/ASL.png";
import DataAS from "../dbitems/dataAs";
import { AiFillPhone, AiFillClockCircle, AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { TiLocation } from 'react-icons/ti'

const footer = () => {

  const { Footer } = DataAS("footer")
  let show = true;
  let ASs;
  // let ASc;

  if (Footer.length <= 1) {
    show = false;
  } else {
    ASs = Footer.find(data => (data.slug.current === "africa-systems"))
    // ASc = Footer.find(data => (data.slug.current === "contact-info"))
  }

  return (
    <div>
      {show &&

        <div>
          <div
            class=" h-full bg-[url('/src/assets/logo/footer.png')] bg-cover grid grid-cols-1 md:grid-cols-4 px-10 py-5 gap-3 text-white">

            <div class="col-span-1 ml-5">
              <div class="w-52">
                <div class="flex items-center gap-1">
                  <img src={ASL} alt="As Logo" class="h-11" />
                  <p class="text-xl font-bold">Africa Systems</p>
                </div>
                <div>
                  <p>{ASs.body}</p>
                </div>
              </div>
            </div>

            <div class="col-span-2">
              <div class=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex gap-2 p-1">
                  <div class="rounded-full p-1"><TiLocation size={20} /></div>
                  <div class="flex">
                    <div class="flex flex-col items-start text-sm">
                      <p class="font-bold text-base my-1">Address</p>
                      <div class="flex">
                        <p>Douala,Cameroon</p>
                      </div>
                      <div class="flex">
                        <p>Rue Fokou Douche</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 p-1">
                  <div class="rounded-full p-1"><AiFillPhone size={20} /></div>
                  <div class="flex">
                    <div class="flex flex-col items-start text-sm">
                      <p class="font-bold text-base my-1">Contact</p>
                      <div class="flex">
                        <p class="font-bold">phone:</p>
                        <p>+239829883</p>
                      </div>
                      <div class="flex">
                        <p class="font-bold">Email:</p>
                        <p>contact@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 p-1">
                  <div class="rounded-full p-1"><AiFillClockCircle size={20} /></div>
                  <div class="flex">
                    <div class="flex flex-col items-start text-sm">
                      <p class="font-bold text-base my-1">Open Hours</p>
                      <div class="flex">
                        <p class="font-bold">Mon-Sat: 11AM</p>
                        <p>-23PM</p>
                      </div>
                      <div class="flex">
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="p-1">
              <div class="text-lg font-bold mb-4">Follow us</div>
              <div class="flex gap-2">
                <div class="rounded-full border p-3"><AiFillTwitterCircle size={25} /></div>
                <div class="rounded-full border p-3"><AiFillFacebook size={25} /></div>
                <div class="rounded-full border p-3"><AiFillLinkedin size={25} /></div>
                <div class="rounded-full border p-3"><AiFillInstagram size={25} /></div>
              </div>
            </div>

          </div>

          <div class="h-10 flex bg-[#4d4643] px-28 justify-between items-center text-white">
            <div>&copy;<span class="font-bold">AfricaSyetems 2023</span>.All rights reserved</div>
            <div class="flex items-center">
              <img src={ASL} alt="As logo" class="h-8" />
            </div>
          </div>
        </div>

      }
    </div>
  );
}

export default footer;