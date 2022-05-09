import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";

const ContactForm = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return <section className={classes.contactForm}>ContactForm</section>;
};

export default ContactForm;
