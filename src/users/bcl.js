import { useEffect, useState } from "react";
import { BiEnvelope, BiHome, BiMessage, BiPhoneCall, BiSend } from "react-icons/bi";
import {
    BsBag,
    BsEye,
    BsInstagram,
    BsWhatsapp,
    BsYoutube
} from "react-icons/bs";
import { CgProfile, CgYoutube } from "react-icons/cg";
import { FaDownload, FaFacebook, FaStarHalfAlt } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { DisplayTestimonial, EnquiryTemplate, HomeContactUsLinkBottom, HomeContactUsLinks, HomeSocialIcons, NavigationMenuItem } from "../components";

const galleryImages = [
    "https://nfcmycard.com//docs/gallery/6673b7bbc5dd4.jpeg",
    "https://nfcmycard.com//docs/gallery/6673b8c743d11.jpeg",
    "https://nfcmycard.com//docs/gallery/6673b897abb70.jpeg",
    "https://nfcmycard.com//docs/gallery/6673b8a6dce5f.jpeg",
];

const intialFormState = {
    rating: 0,
    fullname: "",
    feedback: "",
};

const initialEnquiryState = {
    fullname: "",
    phone: "",
    email: "",
    message: "",
};

export default function Bcl() {
    const [activeLink, setActiveLink] = useState("");
    const [feedbacks, setFeedback] = useState([]);
    const [form, setForm] = useState(intialFormState);
    const [enquiry, setEnquiry] = useState(initialEnquiryState);
    const hash = useLocation().hash;

    const handelFormChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedback((prev) => [
            ...prev,
            {
                id: feedbacks.length + 1,
                date: new Date().toLocaleDateString(),
                ...form,
            },
        ]);
        setForm(intialFormState);
    };

    const handleEnquiryFormChange = (e) => {
        const { name, value } = e.target;

        setEnquiry((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEnquirySubmit = (e) => {
        e.preventDefault();

        console.log(enquiry);
    }

    useEffect(() => {
        if (hash) setActiveLink(hash);
        else setActiveLink("#home")
    }, [hash])

    return (
        <main className="h-screen overflow-hidden bg-gray-700 text-gray-700 overflow-y-scroll flex flex-col gap-4 text-sm scroll-smooth">
            <section className="max-w-[450px] mx-auto bg-white relative w-full" id="home">
                <div className="p-8">
                    <span className="text-xs absolute px-4 py-1 rounded-b-lg top-0 -translate-x-1/2 left-1/2 bg-gray-900 inline-flex items-center gap-2 text-white">
                        <BsEye /> Views: 421
                    </span>
                    <title>Business Connect Lucknow ( BCL )</title>
                    <p className="text-sm text-center my-4 uppercase text-gray-600 font-semibold">
                        Business Connect Lucknow ( BCL )
                    </p>
                    <div className="aspect-square w-28 h-auto border-2 rounded-full mx-auto overflow-hidden">
                        <img
                            src="https://nfcmycard.com//docs/profile/6673e31a7621e.jpeg"
                            className="w-full h-full object-cover"
                            alt="profile-image"
                        />
                    </div>
                    <h1 className="text-center mt-4 text-2xl text-blue-600 font-semibold">
                        Business Connect Lucknow
                    </h1>
                    <p className="text-center font-semibold text-xs">
                        Founder & Director
                    </p>

                    <div className="flex gap-4 justify-center my-4">
                        <HomeSocialIcons
                            Icon={BiPhoneCall}
                            text={"Call"}
                            link={"tel:+919793666661"}
                        />
                        <HomeSocialIcons Icon={BsWhatsapp} text={"Whatsapp"} link={""} />
                        <HomeSocialIcons
                            Icon={IoLocationSharp}
                            text={"Direction"}
                            link={"https://api.whatsapp.com/send/?phone=919793666661&text=Got+reference+from+your+Virtual+Business+Card.+Want+to+know+more+about+your+products+and+services.&type=phone_number&app_absent=0"}
                        />
                        <HomeSocialIcons
                            Icon={BiEnvelope}
                            text={"Mail"}
                            link={"mailto:info@digitalmartlab.com"}
                        />
                        <HomeSocialIcons Icon={BiSend} text={"Send"} link={"/"} />
                    </div>
                </div>

                <div className="bg-gray-900 w-full p-8">
                    <a
                        href="/"
                        className="bg-white text-gray-900 rounded-sm uppercase text-xs px-8 py-2 flex justify-center gap-2 "
                    >
                        <FaDownload /> Add to phone book
                    </a>
                    <form className="bg-white text-gray-900 text-sm mt-2 grid grid-cols-[40px_40%_1fr] rounded-sm overflow-hidden">
                        <span className="bg-gray-200 text-gray-700 flex justify-center items-center">+91</span>
                        <input type="number" className="outline-none pl-2" maxLength={10} />
                        <button className="bg-green-600 text-white flex justify-center items-center gap-2 py-2">
                            <BsWhatsapp /> Share on Whatsapp
                        </button>
                    </form>

                    <div className="my-4 grid grid-cols-1 gap-2">
                        <HomeContactUsLinks
                            Icon={IoLocationSharp}
                            text={
                                "FF-06, River View Arcade Mall, Sec - 4 Gomti Nagar Extension Lucknow -226010, Lucknow, Uttar Pradesh"
                            }
                            link={""}
                        />
                        <HomeContactUsLinks
                            Icon={BiEnvelope}
                            text={"businessconnect.lucknow@gmail.com"}
                            link={"mailto:businessconnect.lucknow@gmail.com"}
                        />
                        <HomeContactUsLinks
                            Icon={FaEarthAsia}
                            text={"https://nfcmycard.com"}
                            link={"https://nfcmycard.com"}
                        />
                        <HomeContactUsLinks
                            Icon={BiPhoneCall}
                            text={"+919793666661"}
                            link={"tel:+919793666661"}
                        />

                        <hr className="bg-white my-4 w-full" />

                        <div className="flex items-center gap-2 justify-center">
                            <HomeContactUsLinkBottom
                                Icon={FaFacebook}
                                link={"https://www.facebook.com/digitalmartlab.in"}
                            />
                            <HomeContactUsLinkBottom
                                Icon={BsYoutube}
                                link={"https://www.youtube.com/@DigitalMartLab"}
                            />
                            <HomeContactUsLinkBottom
                                Icon={BsInstagram}
                                link={"https://www.instagram.com/digital_mart_lab/"}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="about-us">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    About Us
                </h2>

                <div className="my-4 flex flex-col gap-2">
                    <div className="grid grid-cols-[40%_1fr]">
                        <p className="font-semibold">Company Name</p>
                        <p>: Business Connect Lucknow ( BCL )</p>
                    </div>
                    <div className="grid grid-cols-[40%_1fr]">
                        <p className="font-semibold">Year of Est.</p>
                        <p>: 2022</p>
                    </div>
                    <div className="grid grid-cols-[40%_1fr]">
                        <p className="font-semibold">Nature of Business</p>
                        <p>: Business development & Entrepreneur
                        </p>
                    </div>
                </div>

                <p>
                    BCL क्या?, क्यों?, कैसे? Business Connect Lucknow क्या?, कोई व्यापारी BCL से क्यों जुड़े? ग्राहकों को BCL के व्यापारियों से सेवाएं लेने से क्या फ़ायदा है? BCL व्यापारियों के व्यापार को बढ़ाने में न सिर्फ मदद करता है बल्कि उन्हें व्यापार के क्षेत्र में आने वाली नई प्रतिभाओं को ट्रैनिंग देकर आत्मनिर्भर बनाता है। BCL व्यापारियों और ग्राहकों के लिए तैयार किया गया एक ऐसा प्लेटफार्म, जहा पारदर्शिता के साथ जरूरत के सभी सामान और सेवाएं, उचित दरों पर गुणवत्ता के साथ उपलब्ध है।
                </p>

                <div className="mt-4">
                    <p className="font-bold">Our Specialities :</p>
                    <p className="mt-1">Encourage Entrepreneurship</p>
                </div>
            </section>

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="join-us">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    Join Us
                </h2>

                <EnquiryTemplate
                    heading={"How to Join BCL"}
                    description={
                        "BCL is an organization of businessmen in which all the good qualities of not only Lucknow but also national and international level business organizations have been included so that you can be given such a platform and your business can be expanded."
                    }
                    image={"https://nfcmycard.com//docs/product/6673ba9ee0ec8.jpeg"}
                />
            </section>

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="gallery">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    Gallery
                </h2>
                <div className="grid grid-cols-2 gap-2 mt-4">
                    {galleryImages.map((img, index) => (
                        <img
                            key={index}
                            className="aspect-[4/3] object-cover rounded-lg"
                            src={img}
                            alt={`image-${index}`}
                        />
                    ))}
                </div>
            </section>

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="youtube">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    Youtube Videos
                </h2>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <iframe
                        src="https://www.youtube.com/embed/KkPbyTMTv18?si=PvrWQcExN5yFfEYQ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="aspect-video w-full rounded-md"
                    ></iframe>
                    <iframe
                        src="https://www.youtube.com/embed/hokRO-_t7Ck?si=g4zZqQ08yDtCjlBn"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="aspect-video w-full rounded-md"
                    ></iframe>
                </div>
            </section>

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="feedback">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    Feedbacks
                </h2>
                {feedbacks.length > 0 && (
                    <div>
                        {feedbacks.map((item) => (
                            <DisplayTestimonial data={item} key={item?.id} />
                        ))}
                    </div>
                )}

                <form
                    className="mt-4 bg-gray-200 p-4 flex flex-col gap-2"
                    onSubmit={handleSubmit}
                >
                    <p className="text-base">Give Feedback</p>
                    <select
                        name="rating"
                        className="border-2 p-2 w-full rounded-sm"
                        value={form.rating}
                        onChange={handelFormChange}
                    >
                        <option value="5">Excellent</option>
                        <option value="4">Very Good</option>
                        <option value="3">Average</option>
                        <option value="2">Poor</option>
                        <option value="1">Terrible</option>
                    </select>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Enter Full Name"
                        className="p-2"
                        value={form.fullname}
                        onChange={handelFormChange}
                    />
                    <textarea
                        type="text"
                        name="feedback"
                        placeholder="Enter Your Feedback"
                        className="p-2"
                        value={form.feedback}
                        onChange={handelFormChange}
                    />

                    <button
                        disabled={!form.feedback || !form.fullname || !form.rating}
                        type="submit"
                        className="bg-gray-900 rounded-sm text-white self-start p-2 text-xs disabled:bg-gray-700"
                    >
                        Give Feedback
                    </button>
                </form>
            </section>

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="equiry">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    Enquiry
                </h2>

                <form className="mt-4 p-4 flex flex-col gap-2" onSubmit={handleEnquirySubmit}>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Enter Full Name"
                        className="p-2 bg-gray-100 border border-gray-400 rounded-sm"
                        value={enquiry.fullname}
                        onChange={handleEnquiryFormChange}
                    />

                    <div className="grid grid-cols-2 gap-2">
                        <input
                            type="number"
                            name="phone"
                            placeholder="Enter Phone Number"
                            className="p-2 bg-gray-100 border border-gray-400 rounded-sm"
                            value={enquiry.phone}
                            onChange={handleEnquiryFormChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            className="p-2 bg-gray-100 border border-gray-400 rounded-sm"
                            value={enquiry.email}
                            onChange={handleEnquiryFormChange}
                        />
                    </div>
                    <textarea
                        type="text"
                        name="message"
                        placeholder="Enter your message..."
                        className="p-2 border border-gray-400 rounded-sm"
                        value={enquiry.message}
                        onChange={handleEnquiryFormChange}
                    />

                    <button
                        disabled={!enquiry.message || !enquiry.fullname || !enquiry.email || !enquiry.phone}
                        type="submit"
                        className="bg-gray-900 rounded-sm text-white self-start p-2 text-xs disabled:bg-gray-700"
                    >
                        Send
                    </button>
                </form>
            </section>

            {/* <section className="max-w-[450px] mx-auto bg-white relative w-full p-2 text-center mb-2">
                <a href="https://digitalmartlab.com" target="_blank" className="font-semibold text-xs" rel="noreferrer">
                    © 2024 www.digitalmartlab.com
                </a>
            </section> */}

            <section className="bg-gray-900 w-full text-white p-2 py-4 md:py-2 sticky bottom-0 flex items-center justify-evenly">
                <NavigationMenuItem Icon={BiHome} text={"Home"} link={"#home"} active={activeLink} />
                <NavigationMenuItem Icon={CgProfile} text={"About Us"} link={"#about-us"} active={activeLink} />
                <NavigationMenuItem Icon={BsBag} text={"Join Us"} link={"#join-us"} active={activeLink} />
                <NavigationMenuItem Icon={GrGallery} text={"Gallery"} link={"#gallery"} active={activeLink} />
                <NavigationMenuItem Icon={CgYoutube} text={"Youtube"} link={"#youtube"} active={activeLink} />
                <NavigationMenuItem Icon={FaStarHalfAlt} text={"Feedback"} link={"#feedback"} active={activeLink} />
                <NavigationMenuItem Icon={BiMessage} text={"Enquiry"} link={"#enquiry"} active={activeLink} />
            </section>
        </main >
    );
}