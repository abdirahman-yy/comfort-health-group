"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create form data object
    const formData = new FormData(e.currentTarget)
    
    // Submit the form using fetch API
    fetch("https://formsubmit.co/info.chgllc@gmail.com", {
      method: "POST",
      body: formData,
    })
    .then(response => {
      setIsSubmitting(false)
      if (response.ok) {
        // Reset form
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: ""
        })
        // Show success state
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        alert("There was an error submitting your form. Please try again.")
      }
    })
    .catch(error => {
      setIsSubmitting(false)
      alert("There was an error submitting your form. Please try again.")
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-deep-blue mb-6 text-center">Connect With Us</h2>
      
      {isSubmitted ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-bold text-caring-green mb-3">Thank You!</h3>
          <p className="text-deep-blue/80">Your message has been sent successfully. We'll get back to you soon.</p>
        </div>
      ) : (
        <form
          method="POST"
          onSubmit={handleSubmit}
        >
          {/* FormSubmit configuration - hidden but still included for API compatibility */}
          <input type="hidden" name="_cc" value="abdirahman63811@gmail.com,abdurahmansaed@gmail.com" />
          <input type="hidden" name="_subject" value="New Contact Form Submission - Comfort Health Group" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/thank-you" />
          <input type="hidden" name="_autoresponse" value="Thank you for contacting us. We will respond to your inquiry within 24-48 hours." />
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-deep-blue mb-2 font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-deep-blue mb-2 font-medium">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-deep-blue mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formState.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-deep-blue mb-2 font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
                required
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full btn-primary py-3 px-4 text-white font-medium rounded-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
} 