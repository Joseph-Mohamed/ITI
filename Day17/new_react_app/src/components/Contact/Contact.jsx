import { useState } from "react"

function Footer() {

    return (

        <>
            <h2 className="text-warning my-5">Hello From Contact Componetnt</h2>

            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light p-4 rounded-4 shadow-sm">
                        <h3 className="text-center mb-4 text-success fw-bold">Get in Touch</h3>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold text-secondary">
                                    Email Address
                                </label>
                                <input type="email"name="email"id="email"className="form-control"placeholder="name@example.com"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="send" className="form-label fw-semibold text-secondary">Your Question</label><textarea 
                                name="send"id="send"className="form-control"rows="4"placeholder="Enter Your Question..."></textarea>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn btn-success py-2 fw-bold">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer