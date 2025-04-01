"use client";
import WindowContainer from "../Components/WindowContainer";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Loader from "../Components/Loader";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    let nameValue = form.current.user_fullname.value;
    let mailValue = form.current.user_mail.value;
    let subjectValue = form.current.mail_subject.value;
    let messageValue = form.current.message.value;
    let nameRegex = /^[a-zA-Z ,.'-]+[a-zA-Z ,.'-]+$/gm;
    let mailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;

    if (nameValue.value === "" || !nameRegex.test(nameValue)) {
      alert("Veuillez renseigner un nom et prénom valide");
      return;
    } else if (mailValue === "" || !mailRegex.test(mailValue)) {
      alert("Veuillez renseigner une adresse email valide");
      return;
    } else if (subjectValue === "") {
      alert("Veuillez renseigner un sujet");
      return;
    } else if (messageValue === "") {
      alert("Veuillez renseigner un message");
      return;
    } else {
      setIsLoading(true);
      try {
        await emailjs.sendForm(
          "service_pswb6kv",
          "template_uq8y8w9",
          form.current,
          {
            publicKey: "XpdC7LiHE8dHPBsjJ",
          }
        );
        setSent(true);
        console.log("SUCCESS!");
      } catch (error) {
        setSent(false);
        console.log("FAILED...", error.text);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    }
  };

  const beforeSubmit = () => {
    return (
      <>
        <div className="contactTitle-container  flex flex-col items-center text-blackColor text-center gap-2 pb-2">
          <h1 className=" text-3xl w-2/4 font-semibold  pb-6 ">Me contacter</h1>
          <p className="mx-3 pb-9 text-lg ">
            Vous souhaitez travailler avec moi ou vous avez des questions ?
            <br />
            Pas de souci, remplissez le formulaire ci-dessous et je vous
            répondrai dans les plus brefs délais.
            <br />
            Merci beaucoup !
          </p>
        </div>
        <form
          id="form"
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-full px-3 lg:px-0 "
        >
          <div className="nameMail-container flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center">
            <div className=" windowContainer w-full lg:w-2/3 h-14 ">
              <input
                type="text"
                id="user_fullname"
                name="user_fullname"
                placeholder="Nom Prénom"
                className=" w-full h-full box-border placeholder:text-blackColor placeholder:opacity-50  focus:outline-none px-5 text-blackColor"
              />
            </div>
            <div className=" windowContainer w-full lg:w-2/3 h-14">
              <input
                type="text"
                id="user_mail"
                name="user_mail"
                placeholder=" E-mail"
                className=" w-full h-full box-border placeholder:text-blackColor placeholder:opacity-50  focus:outline-none px-5 text-blackColor"
              />
            </div>
          </div>

          <div className="subjectMessage-container flex flex-col gap-5 items-center">
            <div className=" windowContainer  w-full h-14">
              <input
                type="text"
                id="mail_subject"
                name="mail_subject"
                placeholder="Sujet du message"
                className=" w-full h-full box-border placeholder:text-blackColor placeholder:opacity-50  focus:outline-none px-5 text-blackColor"
              />
            </div>
            <div className=" windowContainer w-full  h-52">
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Entrez votre message"
                className=" w-full h-full box-border placeholder:text-blackColor placeholder:opacity-50  focus:outline-none px-5 text-blackColor"
              />
            </div>
          </div>
          <div className="submit-container flex justify-center">
            <input
              type="submit"
              value="Envoyer"
              className="text-whiteColor bg-secondaryColor rounded-2xl w-24 h-9  hover:cursor-pointer hover:bg-primaryColor hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </form>
      </>
    );
  };

  const afterSubmit = () => {
    return (
      <>
        {sent ? (
          <div className="contactTitle-container  flex flex-col text-center text-blackColor justify-center items-center gap-6">
            <Image
              loading="lazy"
              width={200}
              height={200}
              src={"/icones/sent.webp"}
              alt={"Avion en papier, icone indiquant l'envoie"}
            ></Image>

            <h1 className=" text-3xl w-2/4 font-semibold  ">
              Merci pour votre message !
            </h1>
            <p className="text-lg ">
              Votre message a bien été reçu, je vous repondrez dans les plus
              bref délais.
            </p>
          </div>
        ) : (
          <Loader page="contact" />
        )}
      </>
    );
  };

  const PageContent = () => {
    return <>{isLoading ? afterSubmit() : beforeSubmit()}</>;
  };

  return (
    <>
      <WindowContainer content={PageContent} />
    </>
  );
}
