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
import { useStateContext } from "../context/StateContext";
import DataAS from "../dbitems/dataAs";
import { AiFillPhone, AiFillClockCircle, AiFillTwitterCircle, AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { TiLocation } from 'react-icons/ti'

const Footer = () => {

  const { lang } = useStateContext();
  const { Footer } = DataAS("footer", lang)
  let show = true;
  let ASs;
  let AShours;
  let ASnumber;
  let ASlocation;
  let ASemail;

  if (Footer.length <= 1) {
    show = false;
  } else {
    ASs = Footer.find(data => (data.slug.current === "africa-systems"))
    AShours = Footer.find(data => (data.slug.current === "open-hours"))
    ASnumber = Footer.find(data => (data.slug.current === "number"))
    ASlocation = Footer.find(data => (data.slug.current === "location"))
    ASemail = Footer.find(data => (data.slug.current === "email"))
  }

  return (
    <div>
      {show &&

        <div>
          <div
            class=" h-full bg-[url('/src/assets/logo/footer.png')] bg-cover grid grid-cols-1 md:grid-cols-3 px-10 py-5 gap-3 text-white md:px-20 lg:px-40">

            <div class="col-span-1 mr-10">
              <div class="w-full">
                <div class="flex items-center gap-1">
                  <img src={ASL} alt="As Logo" class="h-11" />
                  <p class="text-xl font-bold">Africa Systems</p>
                </div>
                <div className="text-justify">
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
                      <p class="font-bold text-base my-1">{lang==='en'?'Address':'Addresse'}</p>
                      <div class="flex">
                        <p>{lang==='en'?'Current address':'Addresse Courente'}Current address</p>
                      </div>
                      <div class="flex">
                        <p>{ASlocation.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 p-1">
                  <div class="rounded-full p-1"><AiFillPhone size={20} /></div>
                  <div class="flex">
                    <div class="flex flex-col items-start text-sm">
                      <p class="font-bold text-base my-1">{lang==='en'?'Contact':'Contact'}</p>
                      <div class="flex">
                        <p class="font-bold">{lang==='en'?'phone:':'Tel'}</p>
                        <p>{ASnumber.body}</p>
                      </div>
                      <div class="flex">
                        <p class="font-bold">{lang==='en'?'Email:':'Email:'}</p>
                        <p>{ASemail.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex gap-2 p-1">
                  <div class="rounded-full p-1"><AiFillClockCircle size={20} /></div>
                  <div class="flex">
                    <div class="flex flex-col items-start text-sm">
                      <p class="font-bold text-base my-1">{lang==='en'?'Open Hours':'Heurs D\'ouverture'}</p>
                      <div class="flex">
                        <p class="font-bold">{AShours.body}</p>
                      </div>
                      <div class="flex">
                        <p>{lang==='en'?'Saturday & Sunday: Closed':'Samedi & Dimanche: Fermer'}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-1">
                  <div class="text-lg font-bold mb-2">Follow us</div>
                  <div class="flex gap-2">
                    <a href="https://www.facebook.com/LewooSarl/"> <div class="rounded-full border p-3"><AiFillTwitterCircle size={25} /></div> </a>
                    <a href="https://www.facebook.com/LewooSarl/"><div class="rounded-full border p-3"><AiFillFacebook size={25} /></div></a>
                    <div class="rounded-full border p-3"><AiFillLinkedin size={25} /></div>
                    <a href="https://www.instagram.com/africasystems/"><div class="rounded-full border p-3"><AiFillInstagram size={25} /></div></a>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div class="h-10 flex bg-[#4d4643] items-center justify-center text-white">
            <div>&copy;<span class="font-bold">AfricaSyetems 2023</span>. All rights reserved</div>
            <div class="flex items-center">
              <img src={ASL} alt="As logo" class="h-8" />
            </div>
          </div>
        </div>

      }
    </div>
  );
}

export default Footer;