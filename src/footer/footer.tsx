import './footer.css';

import { useForm, ValidationError } from '@formspree/react';

function Footer() {
    const [state, handleSubmit] = useForm("mwvvngwv");

    return (
        <footer>
            {state.succeeded ? (
                <p className="success-message">Thank you for your message! I'll get back to you soon.</p>
            ) :
                (
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="left-form">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input id="name" type="text" name="name" />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />

                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" name="email" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div className="right-form">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" name="message" />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />

                            <button type="submit" disabled={state.submitting}>Submit</button>
                        </div>
                    </form>
                )
            }
        </footer >
    )
}

export default Footer;