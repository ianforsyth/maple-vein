import React, { TextareaHTMLAttributes, useState } from 'react'
import Layout from '../components/Layout'
import { A } from '../components/UI'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

const SectionHead = ({ children }: { children: string }) => (
  <div className="text-4xl text-center underline font-bold uppercase font-lato mb-6 mt-12">
    {children}
  </div>
)

const SectionBody = ({ children }: { children: string }) => (
  <div className="mb-6">
    {children}
  </div>
)

const Example = ({ head, body, img }: { head: string, body: string, img: React.ReactNode }) => (
  <div>
    <h3 className="font-lato text-xl">{head}</h3>
    <p>{body}</p>
    <div className="rounded-md overflow-hidden filter drop-shadow-md">{img}</div>
  </div>
)

const Input = ({ label, name, type }: { label: string, name: string, type?: string }) => (
  <label className="text-left w-full block mb-2">
    <div>{label}</div>
    <Field type={type || "text"} name={name} className="border border-gray py-1 px-2 rounded-sm w-full outline-none focu:ring focus:border-base" />
  </label>
)

const TextArea = ({ name, label, rows }: React.HTMLProps<HTMLTextAreaElement>) => (
  <label className="text-left w-full block mb-2">
    <div>{label}</div>
    <Field as='textarea' rows={rows} name={name} className="border border-gray py-1 px-2 rounded-sm w-full outline-none focu:ring focus:border-base" />
  </label>
)

const Button = ({ children, className, onClick, type }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button onClick={onClick} type={type} className={`${className ? `${className} ` : ''}bg-base text-white px-4 py-2 rounded-md font-lato`}>{children}</button>
)

const IndexPage = () => {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = ({ name, email, phone, message }) => {
    axios.post("https://formspree.io/f/meqnjool", {
      name, email, phone, message
    })
    setFormSubmitted(true);
  }

  return (
    <Layout>
      <div className="py-2 px-5 flex justify-between items-center bg-gradient-to-b from-white to-transparent fixed w-full">
        <img
          className="w-20"
          src="/logo.svg"
          alt="Maple Vein Woodworking"
        />
        <div className="space-x-8">
          <A href="#contact">About</A>
          <A href="#contact">Contact</A>
        </div>
      </div>
      <div>
        <img
          className="w-full"
          src="/hero.png"
          alt="Maple Vein Woodworking"
        />
      </div>
      <div className="flex flex-col items-center text-center max-w-3xl w-full m-auto px-4">
        <SectionHead>About</SectionHead>
        <SectionBody>
          This is Maple Vein Woodworking - a Boulder, CO based shop focused on
          building stylish functional pieces our customers love.
          All our work is custom and handcrafted locally in-house.
        </SectionBody>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Example
            head="Decorative Pieces"
            body="Shelving, charcuterie boards, knife strips"
          />
          <Example
            head="Custom Cabinetry"
            body="Closets, kitchen design, hideaway storage"
          />
          <Example
            head="Furniture"
            body="Dining tables, chair sets, desks, nightstands"
          />
          <Example
            head="Cargo Built-Ins"
            body="Camp kitchens, bulk storage, sleeping platforms"
            img={<img src="/cargo-built-ins.jpeg" alt="Cargo Built-Ins" />}
          />
        </div>
        <SectionHead>Contact Us</SectionHead>
        <SectionBody>
          We partner closely with our customers to determine a project's exact requirements
          and design an ideal solution for the space. If you're interested in our work, we'd
          love to hear from you.
        </SectionBody>

        <Formik onSubmit={handleSubmit} initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}>
          <Form className="max-w-lg w-full relative" >
            <Input name="name" label="Name" />
            <Input type="email" name="email" label="Email" />
            <Input type="phone" name="phone" label="Phone" />
            <TextArea name="message" label="Message" rows={5} />
            <Button type="submit" className="float-right">Send</Button>
            {formSubmitted && (
              <div className="bg-gray rounded-md p-5 absolute w-full h-full top-0 left-0 flex items-center animate-fade">
                Thanks for reaching out! We'll do our best to get back to you within a 2-3 days.
              </div>
            )}
          </Form>
        </Formik>
        <div>
        </div>
      </div>
    </Layout >
  );
}

export default IndexPage
