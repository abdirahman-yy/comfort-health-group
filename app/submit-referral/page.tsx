"use client"

import type React from "react"
import { useState } from "react"
import { Upload } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SubmitReferral() {
  const router = useRouter()
  const [referralType, setReferralType] = useState("self")
  const [hasCoordinator, setHasCoordinator] = useState("no")
  const [waiverProgram, setWaiverProgram] = useState("none")
  const [medicalAssistance, setMedicalAssistance] = useState("")
  const [fileName, setFileName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    clientName: "",
    clientDOB: "",
    clientPhone: "",
    clientEmail: "",
    housingStatus: "",
    preferredLocation: "",
    coordinatorInfo: "",
    cmName: "",
    cmEmail: "",
    cmPhone: ""
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Show processing state
    setIsSubmitting(true)
    
    // No need to prevent default - let the form submit naturally
    // This ensures FormSubmit processes the form correctly
    
    // Show success message briefly before form submits
    setTimeout(() => {
      alert("Your referral has been submitted successfully! We will contact you within 24-48 hours.")
    }, 100)
    
    return true
  }

  return (
    <div className="container mx-auto px-4 py-12 pt-20">
      <h1 className="text-4xl font-bold text-deep-blue mb-8 text-center">Submit Referral</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto leading-relaxed">
        If you or someone you know is facing housing challenges, we're here to help. Fill out the form below, and our
        dedicated referral team will review your submission and contact you within 24 to 48 hours.
      </p>

      <form
        method="POST"
        action="https://formsubmit.co/info.chgllc@gmail.com"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        {/* FormSubmit configuration */}
        <input type="hidden" name="_cc" value="abdirahman63811@gmail.com,abdirahman@fundlory.com" />
        <input type="hidden" name="_subject" value="New Referral Submission - Comfort Health Group" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="/thank-you" />
        <input type="hidden" name="_autoresponse" value="Thank you for your submission. We will contact you within 24-48 hours." />
        <input type="hidden" name="_replyto" value="" id="hiddenReplyTo" />
        
        <div className="mb-8">
          <label htmlFor="referralType" className="block text-deep-blue mb-2">
            Referral Type <span className="text-red-500">*</span>
          </label>
          <select
            id="referralType"
            name="referralType"
            value={referralType}
            onChange={(e) => setReferralType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
            required
          >
            <option value="self">I am referring myself</option>
            <option value="client">I am referring a client</option>
            <option value="other">Other</option>
          </select>
        </div>

        <h2 className="text-2xl font-semibold text-deep-blue mb-6">Client Section</h2>
        <p className="text-gray-600 mb-6">
          If you are submitting your own referral as a future client or on behalf of a future client, please complete
          this section:
        </p>

        <div className="grid gap-6">
          <div>
            <label htmlFor="clientName" className="block text-deep-blue mb-2">
              Client: Full Legal Name (First, Last) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              value={formState.clientName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
              required
            />
          </div>

          <div>
            <label htmlFor="clientDOB" className="block text-deep-blue mb-2">
              Client: Date of Birth (MM/DD/YYYY) <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="clientDOB"
              name="clientDOB"
              value={formState.clientDOB}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
              required
            />
          </div>

          <div>
            <label className="block text-deep-blue mb-2">I am currently on an active waiver-program:</label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="waiverProgram"
                  value="CADI Waiver"
                  checked={waiverProgram === "cadi"}
                  onChange={() => setWaiverProgram("cadi")}
                  className="text-caring-green"
                />
                <span>CADI Waiver</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="waiverProgram"
                  value="EW - Elderly Waiver"
                  checked={waiverProgram === "ew"}
                  onChange={() => setWaiverProgram("ew")}
                  className="text-caring-green"
                />
                <span>EW - Elderly Waiver</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="waiverProgram"
                  value="DD - Developmental Disabilities Waiver"
                  checked={waiverProgram === "dd"}
                  onChange={() => setWaiverProgram("dd")}
                  className="text-caring-green"
                />
                <span>DD - Developmental Disabilities Waiver</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="waiverProgram"
                  value="none"
                  checked={waiverProgram === "none"}
                  onChange={() => setWaiverProgram("none")}
                  className="text-caring-green"
                />
                <span>None</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-deep-blue mb-2">
              Do you a care coordinator, case manager, social work or therapist you regularly work with?{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hasCoordinator"
                  value="yes"
                  checked={hasCoordinator === "yes"}
                  onChange={() => setHasCoordinator("yes")}
                  className="text-caring-green"
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="hasCoordinator"
                  value="no"
                  checked={hasCoordinator === "no"}
                  onChange={() => setHasCoordinator("no")}
                  className="text-caring-green"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {hasCoordinator === "yes" && (
            <div>
              <label htmlFor="coordinatorInfo" className="block text-deep-blue mb-2">
                If YES, please provide their full name and contact information (phone number or email):
              </label>
              <textarea
                id="coordinatorInfo"
                name="coordinatorInfo"
                value={formState.coordinatorInfo}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
              ></textarea>
            </div>
          )}

          <div>
            <label htmlFor="housingStatus" className="block text-deep-blue mb-2">
              Please describe your current housing status or primary housing concern:{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="housingStatus"
              name="housingStatus"
              value={formState.housingStatus}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="clientPhone" className="block text-deep-blue mb-2">
              Client: Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="clientPhone"
              name="clientPhone"
              value={formState.clientPhone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
              required
            />
          </div>

          <div>
            <label className="block text-deep-blue mb-2">
              I am 18 years or older AND currently active on medical assistance <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="medicalAssistance" 
                  value="Yes" 
                  checked={medicalAssistance === "yes"}
                  onChange={() => setMedicalAssistance("yes")}
                  className="text-caring-green" 
                  required 
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="medicalAssistance" 
                  value="No" 
                  checked={medicalAssistance === "no"}
                  onChange={() => setMedicalAssistance("no")}
                  className="text-caring-green" 
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="clientEmail" className="block text-deep-blue mb-2">
              Client: Email Address
            </label>
            <input
              type="email"
              id="clientEmail"
              name="clientEmail"
              value={formState.clientEmail}
              onChange={(e) => {
                handleInputChange(e);
                // Also update the hidden _replyto field
                const replyToField = document.getElementById('hiddenReplyTo') as HTMLInputElement;
                if (replyToField) {
                  replyToField.value = e.target.value;
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
            />
          </div>

          <div>
            <label htmlFor="preferredLocation" className="block text-deep-blue mb-2">
              Client: If moving, preferred city or county of relocation:
            </label>
            <input
              type="text"
              id="preferredLocation"
              name="preferredLocation"
              value={formState.preferredLocation}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-deep-blue mt-12 mb-6">Case Manager Section (If Applicable)</h2>
        <p className="text-gray-600 mb-6">
          If you have an assigned case manager, case worker, care coordinator or social worker, please complete this
          required section.
        </p>

        <div className="grid gap-6">
          <div>
            <label htmlFor="cmName" className="block text-deep-blue mb-2">
              Case Manager: Full Name
            </label>
            <input
              type="text"
              id="cmName"
              name="cmName"
              value={formState.cmName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
            />
          </div>

          <div>
            <label htmlFor="cmEmail" className="block text-deep-blue mb-2">
              Case Manager: Email Address
            </label>
            <input
              type="email"
              id="cmEmail"
              name="cmEmail"
              value={formState.cmEmail}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="cmEmailConfirm" className="block text-deep-blue mb-2">
              Confirm Email
            </label>
            <input
              type="email"
              id="cmEmailConfirm"
              name="cmEmailConfirm"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
            />
          </div>

          <div>
            <label htmlFor="cmPhone" className="block text-deep-blue mb-2">
              Case Manager: Contact Number
            </label>
            <input
              type="tel"
              id="cmPhone"
              name="cmPhone"
              value={formState.cmPhone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-caring-green"
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-deep-blue mb-4">[Optional] File Upload</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <label htmlFor="fileUpload" className="cursor-pointer flex flex-col items-center justify-center">
              <Upload className="w-8 h-8 text-caring-green mb-2" />
              <span className="text-deep-blue">{fileName || "No file chosen"}</span>
              <input type="file" id="fileUpload" name="fileUpload" className="hidden" onChange={handleFileChange} />
            </label>
            <p className="text-sm text-gray-500 mt-4">
              / For Waivers Clients: Please upload an updated and complete CSSP or CCP listing Integrus LLC as the
              housing stabilization services provider. Include active start and end dates. / Non-Waiver Clients: Please
              upload a current Professional Statement of Need (PSN) and Housing Focused Person-Centered Plan (HFPCP). If
              your client does NOT have a HFPCP and needs a housing consultation, you do only need to upload the PSN. /
              Integrus NPI: 1063295582 /
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button 
            type="submit" 
            className="w-full btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  )
}

