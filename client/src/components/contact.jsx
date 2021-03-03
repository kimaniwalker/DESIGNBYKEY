import React from 'react'
import '../stylesheets/contact.scss'

export default function Contact(props) {

    const [first, setFirst] = React.useState('')
    const [last, setLast] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [subject, setSubject] = React.useState('Web Design Inquiry')
    const [message, setMessage] = React.useState('')
    const [data, setData] = React.useState('')

    const handleSubmit = async (e) => {
        

        try {
            let res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({ first, last, email, phone, message, subject }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let contactResponse = await res.json();
            console.log(contactResponse);
            setData(contactResponse);






        } catch (e) {
            console.log(e)
        }


    }


    return (
        <>
            <div className="container py-2">
                <div className="row py-4 text-center text-sm-center text-md-center text-lg-start text-xl-start">
                    <h2 id="title" className="">Let's Connect</h2>
                    <h6 className="subtitle">Let us know how to get back to you.</h6>
                </div>
                <form onSubmit={(e) => handleSubmit()}>
                <div class="row g-3">
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <label for="formFile" class="form-label">First Name</label>
                        <input value={first} onChange={(e) => setFirst(e.target.value)} type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <label for="formFile" class="form-label">Last Name</label>
                        <input value={last} onChange={(e) => setLast(e.target.value)} type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <label for="formFile" class="form-label">Phone</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" class="form-control" placeholder="Phone" aria-label="First name" />
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12">
                        <label for="formFile" class="form-label">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" placeholder="Email" aria-label="Last name" />
                    </div>
                    <div class="col-12">
                        <label for="formFile" class="form-label">Subject</label>
                        <select value={subject} onChange={(e) => setSubject(e.target.value)} class="form-select" aria-label="Default select example">
                            <option defaultValue>Web Design Inquiry</option>
                            <option value="Graphic Design Inquiry">Graphic Design Inquiry</option>
                            <option value="Videography Inquiry">Videography Inquiry</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="formFile test" class="form-label">Message</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" rows="10" class="form-control" placeholder="Leave A Message" aria-label="message" />
                    </div>
                    <button id="contactBtn" type="submit" class="btn" >Submit</button>
                </div>
                </form>
            </div>
        </>
    )
}
