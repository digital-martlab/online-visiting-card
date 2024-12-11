import { BiEnvelope, BiHome, BiMessage, BiPhoneCall, BiSend } from "react-icons/bi";
import { DisplayTestimonial, EnquiryTemplate, HomeContactUsLinkBottom, HomeContactUsLinks, HomeSocialIcons, NavigationMenuItem } from "../components";
import { CgProfile, CgYoutube } from "react-icons/cg";
import { BsBag, BsEye, BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { FaDownload, FaFacebook, FaStarHalfAlt } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";

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

export default function DigitalMartlab() {
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
        <main className="h-screen overflow-hidden bg-gradient-to-br from-violet-700 to-pink-700 text-viobg-violet-700 overflow-y-scroll flex flex-col gap-4 text-sm scroll-smooth">
            <section className="max-w-[450px] mx-auto bg-white relative w-full" id="home">
                <div className="p-8 relative">
                    <span className="text-xs absolute px-4 py-1 rounded-b-lg top-0 -translate-x-1/2 left-1/2 bg-gray-900 inline-flex items-center gap-2 text-white z-50">
                        <BsEye /> Views: 500
                    </span>
                    <div className="h-40 w-full object-cover overflow-hidden absolute top-0 left-0 bg-gradient-to-r from-violet-700 to-pink-700">
                        <img src="https://nfcmycard.com/assets/img/bg-pattern.jpg" alt="background" className="opacity-30" />
                    </div>
                    <div className="aspect-square w-44 h-auto border-4 border-white rounded-full mx-auto overflow-hidden z-50 relative mt-16">
                        <img
                            src="images/victor-singh-digitalmartlab.png"
                            className="w-full h-full object-cover"
                            alt="profile-image"
                        />
                    </div>
                    <title>Victor Singh - Digital Martlab</title>
                    <h1 className="text-center mt-2 text-2xl text-blue-600 font-semibold">
                        Victor Singh
                    </h1>
                    <h2 className="text-center font-semibold text-base">
                        Founder
                    </h2>
                    <h3 className="text-center font-semibold text-xs">
                        Digital Martlab
                    </h3>

                    <div className="flex gap-4 justify-center my-4">
                        <HomeSocialIcons
                            Icon={BiPhoneCall}
                            text={"Call"}
                            link={"tel:+918299207159"}
                        />
                        <HomeSocialIcons Icon={BsWhatsapp} text={"Whatsapp"} link={""} />
                        <HomeSocialIcons
                            Icon={IoLocationSharp}
                            text={"Direction"}
                            link={"https://api.whatsapp.com/send/?phone=918299207159&text=Got+reference+from+your+Virtual+Business+Card.+Want+to+know+more+about+your+products+and+services.&type=phone_number&app_absent=0"}
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
                        <span className="bg-gray-200 text-viobg-violet-700 flex justify-center items-center">+91</span>
                        <input type="number" className="outline-none pl-2" maxLength={10} />
                        <button className="bg-green-600 text-white flex justify-center items-center gap-2 py-2">
                            <BsWhatsapp /> Share on Whatsapp
                        </button>
                    </form>

                    <div className="my-4 grid grid-cols-1 gap-2">
                        <HomeContactUsLinks
                            Icon={IoLocationSharp}
                            text={
                                "905, B1, DLF My Pad, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010"
                            }
                            link={""}
                        />
                        <HomeContactUsLinks
                            Icon={BiEnvelope}
                            text={"info@digitalmartlab.com"}
                            link={"mailto:info@digitalmartlab.com"}
                        />
                        <HomeContactUsLinks
                            Icon={FaEarthAsia}
                            text={"https://digitalmartlab.com/"}
                            link={"https://digitalmartlab.com/"}
                        />
                        <HomeContactUsLinks
                            Icon={BiPhoneCall}
                            text={"+918299207159"}
                            link={"tel:+918299207159"}
                        />

                        <hr className="bg-white my-4 w-full" />

                        <div className="flex items-center gap-2 justify-center">
                            <HomeContactUsLinkBottom
                                Icon={FaFacebook}
                                link={"https://www.facebook.com/digitalmartlab.in"}
                            />
                            <HomeContactUsLinkBottom
                                Icon={BsLinkedin}
                                link={"https://www.linkedin.com/company/digitalmartlab/"}
                            />
                            <HomeContactUsLinkBottom
                                Icon={BsInstagram}
                                link={"https://www.instagram.com/digital_mart_lab/"}
                            />
                            <HomeContactUsLinkBottom
                                Icon={BsYoutube}
                                link={"https://www.youtube.com/@DigitalMartLab"}
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
                        <p>: Digital Mart Lab</p>
                    </div>
                    <div className="grid grid-cols-[40%_1fr]">
                        <p className="font-semibold">Year of Est.</p>
                        <p>: 2017</p>
                    </div>
                    <div className="grid grid-cols-[40%_1fr]">
                        <p className="font-semibold">Nature of Business</p>
                        <p>: Digital Marketing
                        </p>
                    </div>
                </div>

                <p>
                    Welcome to Digital Mart Lab
                    At Digital Mart Lab, we are dedicated to transforming your digital presence and driving your business forward with innovative and customized solutions. As a premier digital marketing agency, we offer a comprehensive range of services designed to meet all your information technology needs. Our team of experts is passionate about delivering high-quality results that align with your goals and exceed your expectations.
                </p>

                <div className="mt-4">
                    <p className="font-bold">Our Specialities :</p>
                    <p className="mt-1">Digital Marketing</p>
                </div>
            </section>

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="join-us">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    Join Us
                </h2>

                <EnquiryTemplate
                    heading={"Google Ads Campaign Manage"}
                    description={
                        "Maximize your return on investment with our expert Google Ads management services. Our certified professionals design, implement, and optimize ad campaigns that reach your ideal audience. By leveraging advanced targeting and strategic bidding, we drive high-quality traffic and boost conversions. Let us handle the complexities of Google Ads while you focus on your business growth."
                    }
                    image={"https://digitalmartlab.in/wp-content/uploads/2024/06/2.png"}
                    link={"https://www.digitalcorridors.com/gmvt.php"}
                />
                <EnquiryTemplate
                    heading={"Lead Generation"}
                    description={
                        "At Digital Mart Lab, we understand that generating high-quality leads is crucial for the growth and success of your business. Our lead generation services are designed to attract, engage, and convert potential customers, helping you build a robust sales pipeline and achieve your business objectives."
                    }
                    image={"https://digitalmartlab.in/wp-content/uploads/2024/06/3.png"}
                    link={"https://digitalmartlab.in/lead-generation/"}
                />
                <EnquiryTemplate
                    heading={"Social Media Marketing"}
                    description={
                        "Before you begin creating social media marketing campaigns, consider your business's goals."
                    }
                    image={"https://digitalmartlab.in/wp-content/uploads/2024/06/1-2.png"}
                    link={"https://digitalmartlab.in/social-media-marketing/"}
                />
                <EnquiryTemplate
                    heading={"Website Design & Development"}
                    description={
                        "More businesses are realizing that customers are becoming internet savvy and are using the internet to shop, make reservations, and other things."
                    }
                    image={"https://digitalmartlab.in/wp-content/uploads/2024/07/4-1.png"}
                    link={"https://digitalmartlab.in/website-design-development/"}
                />
            </section>

            {/* <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="gallery">
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
            </section> */}

            <section className="max-w-[450px] mx-auto bg-white relative w-full p-8" id="youtube">
                <h2 className="uppercase underline font-bold text-center text-gray-900 text-lg">
                    Youtube Videos
                </h2>
                <div className="grid grid-cols-1 gap-2 mt-4">
                    <iframe
                        src="https://www.youtube.com/embed/Wi2Fcp7gzAg?si=jUZrovgg9lErpUX9"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="aspect-video w-full rounded-md"
                    ></iframe>
                    <iframe
                        src="https://www.youtube.com/embed/OpExlPSSQFM?si=Khvm76SFz8NyAHlF"
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
                        className="bg-gray-900 rounded-sm text-white self-start p-2 text-xs disabled:bg-violet-700"
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
                        className="bg-gray-900 rounded-sm text-white self-start p-2 text-xs disabled:bg-violet-700"
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