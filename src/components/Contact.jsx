import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// Get your key from .env (do not commit .env)
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Honeypot (bots will fill this; humans won't)
  const [botcheck, setBotcheck] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler using Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      alert(
        "Contact form is not configured yet. Please set VITE_WEB3FORMS_ACCESS_KEY in your .env file."
      );
      return;
    }
    // stop obvious bots
    if (botcheck) return;

    setLoading(true);
    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: "New message from portfolio contact form",
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        // optional meta
        botcheck,
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data?.success) {
        alert("Thank you! I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        alert("Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          noValidate
        >
          {/* Honeypot field (hidden) */}
          <input
            type="text"
            name="botcheck"
            autoComplete="off"
            value={botcheck}
            onChange={(e) => setBotcheck(e.target.value)}
            className="hidden"
            tabIndex={-1}
          />

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Canvas on which the earth will be displayed */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
