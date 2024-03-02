
// Contact.js
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://github.com/">
                   Git hub:
                    <span className="font-bold">
                    @github
                    </span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://www.linkedin.com/login">
                    LinkedIn:
                    <span className="font-bold">
                        @LinkedIn
                    </span>
                </a>
            </div>
        </section>
    );
}