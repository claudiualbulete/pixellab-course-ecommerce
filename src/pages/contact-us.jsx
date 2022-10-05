import Head from 'next/head'
import { useState } from "react";
import { DefaultLayout } from "../layouts";
import { FilterControls, FiltersUsed, GridControls } from "../components/catalog";
import { CartControls } from "../components/cart";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');

    const handleSetName = (event) => {
        setName(event.target.value);
    }

    const handleSetEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSetTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleSetComment = (event) => {
        setComment(event.target.value);
    }

    const handleSendMessage = () => {
        // This will call and API to send the message
        console.log({
            name,
            email,
            title,
            comment
        })
    }

    return (
        <>
            <Head>
                <title>Contact Us</title>
            </Head>

            <DefaultLayout>
                <section className="flex justify-end flex-wrap">
                    <CartControls/>
                </section>

                <div className="container my-16">
                    <div className="w-full h-96 bg-gray-200 mb-12"></div>

                    <div className="flex gap-6 flex-col lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <h1 className="uppercase bold mb-3">Contact info:</h1>

                            <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem
                                dolorum, et
                                fugiat inventore itaque magnam neque nisi, perspiciatis possimus provident, quam sequi
                                tempora vero voluptate! At nam nobis voluptatem.</p>
                            <p className="mb-6">
                                <b>Address</b>:
                                Dicta dolorem dolorum, et fugiat inventore
                            </p>

                            <p className="mb-6">
                                <b>Phone</b>:
                                <a href="tel:">+4xxx.xxx.xxx</a>
                            </p>

                            <p className="mb-6">
                                <b>Email</b>:
                                <a href="mailto:info@example.com">
                                    info@example.com
                                </a>
                            </p>

                            <p className="mb-6">
                                <b>Fax</b>:
                                <a href="tel:">
                                    +4xxx.xxx.xxx
                                </a>
                            </p>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="flex gap-4 mb-4">
                                <input className="border px-6 py-3 w-full" type="text" placeholder="Your Name"
                                       value={name}
                                       onChange={handleSetName}
                                />

                                <input className="border px-6 py-3 w-full" type="text" placeholder="Your Email"
                                       value={email}
                                       onChange={handleSetEmail}
                                />
                            </div>

                            <div className="flex gap-2 mb-4">
                                <input className="border px-6 py-3 w-full" type="text" placeholder="Your Title"
                                       value={title}
                                       onChange={handleSetTitle}
                                />
                            </div>

                            <div className="flex gap-2 mb-4">
                                <textarea className="border px-6 py-3 w-full" placeholder="Your Comment"
                                          value={comment}
                                          rows="6"
                                          onChange={handleSetComment}
                                />
                            </div>

                            <button className="bg-black text-white px-6 py-3 uppercase"
                                    onClick={handleSendMessage}
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default ContactUs;
