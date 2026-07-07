import React, { useRef } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { TiTick } from "react-icons/ti";


// Template 1 — "With Image": employee photo + company logo
const signatureWithImage = (employee) => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="700"
  style="width:700px; max-width:700px; border-collapse:collapse; font-family:'Raleway',Arial,Helvetica,sans-serif;">

  <tr>
    <td background="https://racstartup.com/wp-content/uploads/2026/06/image-11-scaled.png" bgcolor="#0a0a0a" valign="top" width="700"
        style="background-color:#0a0a0a; background-image:url('https://racstartup.com/wp-content/uploads/2026/06/image-11-scaled.png'); background-position:center center; background-repeat:no-repeat; background-size:cover;">
      <div style="padding:20px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;">
          <tr>
            <td valign="top" width="50%" style="width:50%;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" height="118" style="height:118px;">
                <tr>
                  <td valign="top" style="padding:0;">
                    <img src="https://racstartup.com/wp-content/uploads/2026/06/RAC_New_Logo-1-1.png" width="58" alt="RAC" style="display:block; width:75px; height:auto; border:0;" />
                  </td>
                </tr>
                <tr>
                  <td valign="bottom" style="padding-top:24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; border-radius:6px;">
                          <a href="https://www.facebook.com/racverse" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/facebook-rounded-svgrepo-com-1.png" width="15" height="15" alt="Facebook" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                        <td width="8" style="width:8px; font-size:0; line-height:0;">&nbsp;</td>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; background-color:#ffffff; border-radius:6px;">
                          <a href="https://www.instagram.com/rac_global/" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/instagram-logo-facebook-svgrepo-com-1-3.png" width="16" height="16" alt="Instagram" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                        <td width="8" style="width:8px; font-size:0; line-height:0;">&nbsp;</td>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; border-radius:6px;">
                          <a href="https://www.linkedin.com/company/royalassetsgroupofcompanies/" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/linkedin-svgrepo-com-1.png" width="15" height="15" alt="LinkedIn" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                        <td width="8" style="width:8px; font-size:0; line-height:0;">&nbsp;</td>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; border-radius:6px;">
                          <a href="https://www.youtube.com/@racverse" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/youtube-rounded-svgrepo-com-1.png" width="15" height="15" alt="YouTube" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td valign="top" width="50%" align="right" style="width:50%;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" height="118" align="right" style="height:118px;">
                <tr>
                  <td valign="top" align="right" style="padding:0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" bgcolor="#ffffff" style="background-color:#ffffff; border-radius:9999px;">
                      <tr>
                        <td>
                          <a href="https://racstartup.com" target="_blank" style="display:inline-block; vertical-align:middle; font-family:Arial,Helvetica,sans-serif; font-size:12px; font-weight:bold; color:#000000; text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/Group-42-1.png" alt="RAC" style="width:100px; height:auto;" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom" align="right" style="padding-top:10px;">
                    <div style="font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:24px; line-height:30px; font-weight:300; color:#ffffff; text-align:right;">
                      We build.<br /> We operate.<br />We scale.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </td>
  </tr>

  <tr>
    <td style="padding:20px 20px; background:#ffffff; border-left:1px solid #dcdcdc; border-right:1px solid #dcdcdc; border-bottom:3px solid #cccccc; box-shadow:0 4px 8px -2px rgba(0,0,0,0.15);">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;">
        <tr>
          <td valign="middle" style="vertical-align:middle;">
            <div style="text-transform:uppercase; font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:23px; line-height:27px; color:#111111;">
              <span style="font-weight:300;"> </span> <span style="font-weight:300;">${employee.Firstname ?? ''} </span> <span style="font-weight:700;">${employee.Secondname ?? ''}</span>
            </div>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:15px;">
              <tr>
                <td style="background:#000000; border-radius:9999px; padding:7px 17px; font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:13px; line-height:13px; color:#ffffff; white-space:nowrap;">
                  ${employee.designation}
                </td>
              </tr>
            </table>
            <div style="margin-top:19px; font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:12px; line-height:18px; color:#111111;">
              <span style="font-weight:700;">Phone :</span>
              <a href="tel:${employee.phone}" style="color:#111111; text-decoration:none; font-family:Arial,Helvetica,sans-serif;">${employee.phone}</a>
              <span style="margin:0 2px; color:#9ca3af;">|</span>
              <span style="font-weight:700;">Mail :</span>
              <a href="mailto:${employee.email}" style="color:#111111; text-decoration:none;">${employee.email}</a>
            </div>
          </td>
          <td align="right" valign="middle" style="vertical-align:middle; font-size:0; line-height:0;">
            <img src="${employee.image}" width="180" alt="${employee.Firstname ?? ''} ${employee.Secondname ?? ''}" style="height:auto;" />
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
`

// Template 2 — "Without Image": logo-only design (uses employee.withoutimage, no personal photo)
const signatureWithoutImage = (employee) => `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="700"
  style="width:700px; max-width:700px; border-collapse:collapse; font-family:'Raleway',Arial,Helvetica,sans-serif;">

  <tr>
    <td background="https://racstartup.com/wp-content/uploads/2026/06/image-11-scaled.png" bgcolor="#0a0a0a" valign="top" width="700"
        style="background-color:#0a0a0a; background-image:url('https://racstartup.com/wp-content/uploads/2026/06/image-11-scaled.png'); background-position:center center; background-repeat:no-repeat; background-size:cover;">
      <div style="padding:20px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;">
          <tr>
            <td valign="top" width="50%" style="width:50%;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" height="118" style="height:118px;">
                <tr>
                  <td valign="top" style="padding:0;">
                    <img src="https://racstartup.com/wp-content/uploads/2026/06/RAC_New_Logo-1-1.png" width="58" alt="RAC" style="display:block; width:75px; height:auto; border:0;" />
                  </td>
                </tr>
                <tr>
                  <td valign="bottom" style="padding-top:24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; border-radius:6px;">
                          <a href="https://www.facebook.com/racverse" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/facebook-rounded-svgrepo-com-1.png" width="15" height="15" alt="Facebook" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                        <td width="8" style="width:8px; font-size:0; line-height:0;">&nbsp;</td>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; background-color:#ffffff; border-radius:6px;">
                          <a href="https://www.instagram.com/rac_global/" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/instagram-logo-facebook-svgrepo-com-1-3.png" width="16" height="16" alt="Instagram" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                        <td width="8" style="width:8px; font-size:0; line-height:0;">&nbsp;</td>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; border-radius:6px;">
                          <a href="https://www.linkedin.com/company/royalassetsgroupofcompanies/" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/linkedin-svgrepo-com-1.png" width="15" height="15" alt="LinkedIn" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                        <td width="8" style="width:8px; font-size:0; line-height:0;">&nbsp;</td>
                        <td width="28" height="28" align="center" valign="middle" bgcolor="#ffffff"
                            style="width:28px; height:28px; border-radius:6px;">
                          <a href="https://www.youtube.com/@racverse" target="_blank" style="text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/youtube-rounded-svgrepo-com-1.png" width="15" height="15" alt="YouTube" style="width:30px; height:30px; vertical-align:middle; border:0;" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td valign="top" width="50%" align="right" style="width:50%;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" height="118" align="right" style="height:118px;">
                <tr>
                  <td valign="top" align="right" style="padding:0;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="right" bgcolor="#ffffff" style="background-color:#ffffff; border-radius:9999px;">
                      <tr>
                        <td>
                          <a href="https://racstartup.com" target="_blank" style="display:inline-block; vertical-align:middle; font-family:Arial,Helvetica,sans-serif; font-size:12px; font-weight:bold; color:#000000; text-decoration:none;">
                            <img src="https://racstartup.com/wp-content/uploads/2026/06/Group-42-1.png" alt="RAC" style="width:100px; height:auto;" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td valign="bottom" align="right" style="padding-top:10px;">
                    <div style="font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:24px; line-height:30px; font-weight:300; color:#ffffff; text-align:right;">
                      We build.<br /> We operate.<br />We scale.
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </td>
  </tr>

  <tr>
    <td style="padding:20px 20px; background:#ffffff; border-left:1px solid #dcdcdc; border-right:1px solid #dcdcdc; border-bottom:3px solid #cccccc; box-shadow:0 4px 8px -2px rgba(0,0,0,0.15);">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;">
        <tr>
          <td valign="middle" style="vertical-align:middle;">
            <div style="text-transform:uppercase; font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:23px; line-height:27px; color:#111111;">
             <span style="font-weight:300;"> </span> <span style="font-weight:300;">${employee.Firstname ?? ''} </span> <span style="font-weight:700;">${employee.Secondname ?? ''}</span>
            </div>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:15px;">
              <tr>
                <td style="background:#000000; border-radius:9999px; padding:7px 17px; font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:13px; line-height:13px; color:#ffffff; white-space:nowrap;">
                  ${employee.designation}
                </td>
              </tr>
            </table>
            <div style="margin-top:19px; font-family:'Raleway',Arial,Helvetica,sans-serif; font-size:12px; line-height:18px; color:#111111;">
              <span style="font-weight:700;">Phone :</span>
              <a href="tel:${employee.phone}" style="color:#111111; text-decoration:none; font-family:Arial,Helvetica,sans-serif;">${employee.phone}</a>
              <span style="margin:0 2px; color:#9ca3af;">|</span>
              <span style="font-weight:700;">Mail :</span>
              <a href="mailto:${employee.email}" style="color:#111111; text-decoration:none;">${employee.email}</a>
            </div>
          </td>
          <td align="right" valign="middle" style="vertical-align:middle; font-size:0; line-height:0;">
            <img src="${employee.withoutimage}" width="110" alt="RAC" style="height:auto;" />
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
`

export default function Emaillist({ employee, showImage = true }) {
  const [copied, setCopied] = React.useState(false)
  const signatureRef = useRef(null)

  if (showImage && !employee.image) {
    return (
      <div className="flex justify-center items-center h-64 text-center">
        <p className="text-red-500 text-lg font-medium">
          No image available.
        </p>
      </div>
    )
  }

  const html = showImage
    ? signatureWithImage(employee)
    : signatureWithoutImage(employee)

  const copySignature = async () => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([html], { type: "text/plain" }),
        }),
      ])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <>
      <div
        ref={signatureRef}
        className=" flex justify-center items-center p-4 mt-30 "
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="flex justify-center mt-4">
        <button
          onClick={copySignature}
          title={copied ? 'Copied!' : 'Copy signature'}
          aria-label={copied ? 'Copied!' : 'Copy signature'}
          className={`flex items-center justify-center w-11 h-11 rounded-full text-white transition ${
            copied ? 'bg-green-600' : 'bg-black hover:bg-gray-700'
          }`}
        >
          {copied ? <TiTick className="text-xl" /> : <MdContentCopy className="text-xl" />}
        </button>
      </div>
    </>
  )
}
